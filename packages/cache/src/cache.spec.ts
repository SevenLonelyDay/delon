import { HttpClient, provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom, Observable, of, filter } from 'rxjs';

import { AlainCacheConfig, provideAlainConfig } from '@delon/util/config';

import { CacheService } from './cache.service';
import { ICache } from './interface';

describe('cache: service', () => {
  let srv: CacheService;
  const KEY = 'a';

  function getHTC(): HttpTestingController {
    return TestBed.inject(HttpTestingController as Type<HttpTestingController>);
  }

  beforeEach(() => {
    let data: any = {};

    spyOn(localStorage, 'getItem').and.callFake((key: string): string => {
      return data[key] || null;
    });
    spyOn(localStorage, 'removeItem').and.callFake((key: string): void => {
      delete data[key];
    });
    spyOn(localStorage, 'setItem').and.callFake((key: string, value: string): string => {
      return (data[key] = value as string);
    });
    spyOn(localStorage, 'clear').and.callFake(() => {
      data = {};
    });
  });

  function genModule(options?: AlainCacheConfig): void {
    const providers: any[] = [provideHttpClient(), provideHttpClientTesting()];
    if (options) {
      providers.push(provideAlainConfig({ cache: options }));
    }
    TestBed.configureTestingModule({
      providers
    });

    srv = TestBed.inject<CacheService>(CacheService);
  }

  it('should be specify a global config', () => {
    genModule({ expire: 100, type: 'm' });
    const saveSpy = spyOn(srv as any, 'save');
    srv.set(KEY, 'a');
    const args = saveSpy.calls.first().args;
    expect(args[0]).toBe('m');
  });

  describe('[property]', () => {
    beforeEach(() => genModule());

    afterEach(() => srv.ngOnDestroy());

    describe('#set', () => {
      it('should be set number', () => {
        srv.set(KEY, 1);
        expect(srv.getNone(KEY)).toBe(1);
      });
      it('should be set array', () => {
        srv.set(KEY, [1, 2]);
        const ret = srv.getNone(KEY) as number[];
        expect(ret.length).toBe(2);
        expect(ret[0]).toBe(1);
        expect(ret[1]).toBe(2);
      });
      it('should be set Observable', (done: () => void) => {
        srv.set(KEY, of(10)).subscribe(res => {
          expect(res).toBe(10);
          expect(srv.getNone(KEY)).toBe(10);
          done();
        });
      });
      it('should be set string vis memory', () => {
        srv.set(KEY, 'a', { type: 'm' });
        expect(localStorage.setItem).not.toHaveBeenCalled();
      });
      it('should be set string vis storage', () => {
        srv.set(KEY, 'a', { type: 's' });
        expect(localStorage.setItem).toHaveBeenCalled();
        expect(srv.has(KEY)).toBe(true);
        const meta = JSON.parse(localStorage.getItem('__cache_meta')!) as ICache;
        expect(meta).not.toBeNaN();
        expect(meta.v.indexOf(KEY)).not.toBe(-1);
      });
      it('should be set string and expires vis memory', () => {
        srv.set(KEY, 'a', { type: 'm', expire: 60 * 60 });
        expect(srv.getNone(KEY)).toBe('a');
      });
      it('should be set string and expires vis storage', () => {
        srv.set(KEY, 'a', { type: 's', expire: 10 });
        expect(localStorage.setItem).toHaveBeenCalled();
        const org = JSON.parse(localStorage.getItem(KEY)!) as ICache;
        expect(org.e).toBeGreaterThan(1000);
      });
      it('should be overwirte key', () => {
        srv.set(KEY, 1);
        expect(srv.getNone(KEY)).toBe(1);
        srv.set(KEY, 2);
        expect(srv.getNone(KEY)).toBe(2);
      });
      it('should be can not notify when emitNotify is false', () => {
        let result = true;
        srv
          .notify(KEY)
          .pipe(filter(v => v != null))
          .subscribe(() => (result = false));
        srv.set(KEY, 1, { emitNotify: false });
        expect(result).toBe(true);
      });
      it('should be notify when emitNotify is true', () => {
        let result = true;
        srv
          .notify(KEY)
          .pipe(filter(v => v != null))
          .subscribe(() => (result = false));
        srv.set(KEY, 1, { emitNotify: true });
        expect(result).toBe(false);
      });
    });

    describe('#get', () => {
      it('should be return number', () => {
        srv.set(KEY, 1);
        expect(srv.getNone(KEY)).toBe(1);
      });
      it('should be return array', () => {
        srv.set(KEY, [1, 2]);
        const ret = srv.getNone(KEY) as number[];
        expect(ret.length).toBe(2);
        expect(ret[0]).toBe(1);
        expect(ret[1]).toBe(2);
      });
      it('should be return null if invalid KEY', () => {
        expect(srv.getNone('aaa')).toBeNull();
      });
      it('should be return null if expired', () => {
        localStorage.setItem(
          KEY,
          JSON.stringify({
            e: 1000,
            v: 1
          } as ICache)
        );
        expect(srv.getNone(KEY)).toBeNull();
      });
      it('should be return number via promise mode', (done: () => void) => {
        const k = '/data/1';
        srv.get(k).subscribe(res => {
          expect(res).toBe('ok!');
          expect(srv.getNone(k)).toBe('ok!');
          done();
        });
        getHTC().expectOne(k).flush('ok!');
      });
      it('should be specify sotre type via promise mode', (done: () => void) => {
        const k = '/data/1';
        const setSpy = spyOn(srv, 'set');
        srv.get(k, { mode: 'promise', type: 'm' }).subscribe(() => {
          const data = setSpy.calls.mostRecent().args[2];
          expect(data.type).toBe('m');
          done();
        });
        getHTC().expectOne(k).flush('ok!');
      });
      it('reproduce-issues-40', () => {
        const url = `/test`;
        const firstGet = srv.get(url);
        expect(firstGet instanceof Observable).toBe(true);
        firstGet.subscribe();
        getHTC().expectOne(url).flush('ok!');
        const secondGet = srv.get(url);
        expect(secondGet instanceof Observable).toBe(true);
      });
    });

    describe('#tryGet', () => {
      it('should be return number if not exists KEY', () => {
        const ret = srv.tryGet(KEY, 1);
        expect(ret).toBe(1);
      });
      it('should be return number via Observable if not exists KEY', (done: () => void) => {
        srv.tryGet(KEY, of(10)).subscribe(ret => {
          expect(ret).toBe(10);
          done();
        });
      });
      it('should be return Observable when valid key', (done: () => void) => {
        srv.set(KEY, 10);
        srv.tryGet(KEY, of(10)).subscribe(ret => {
          expect(ret).toBe(10);
          done();
        });
      });
      it('should be return value via memory', (done: () => void) => {
        srv.tryGet(KEY, of(10), { type: 'm' }).subscribe((ret: any) => {
          expect(ret).toBe(10);
          done();
        });
      });
      it('should be return value via http request', done => {
        const http = TestBed.inject(HttpClient);
        srv.tryGet(KEY, http.get('/')).subscribe((ret: any) => {
          expect(ret.a).toBe(1);
          done();
        });
        TestBed.inject(HttpTestingController as Type<HttpTestingController>)
          .expectOne(() => true)
          .flush({ a: 1 });
      });
    });

    describe('#has', () => {
      it('shoule be return true if key exists', () => {
        srv.set(KEY, 10);
        expect(srv.has(KEY)).toBe(true);
      });
      it('shoule be return true if key not exists', () => {
        expect(srv.has(KEY)).toBe(false);
      });
    });

    describe('#remove', () => {
      it('shoule be return null because has removed', () => {
        srv.set(KEY, 10);
        expect(srv.getNone(KEY)).toBe(10);
        srv.remove(KEY);
        expect(srv.getNone(KEY)).toBeNull();
      });
      it('shoule be return null because has removed in memory', () => {
        srv.set(KEY, 10, { type: 'm' });
        expect(srv.getNone(KEY)).toBe(10);
        srv.remove(KEY);
        expect(srv.getNone(KEY)).toBeNull();
      });
      it('should be remove invalid key', () => {
        const key = 'test';
        expect(srv.getNone(key)).toBeNull();
        srv.remove(key);
        expect(srv.getNone(key)).toBeNull();
      });
    });

    describe('#clear', () => {
      it('shoule be return null', () => {
        srv.set(KEY, 10, { type: 'm' });
        srv.set(`${KEY}1`, 100);
        expect(srv.getNone(KEY)).toBe(10);
        expect(srv.getNone(`${KEY}1`)).toBe(100);
        srv.clear();
        expect(srv.getNone(KEY)).toBeNull();
        expect(srv.getNone(`${KEY}1`)).toBeNull();
      });
      it('should be notify a remove event', (done: () => void) => {
        srv
          .notify(KEY)
          .pipe(filter(w => w !== null && w.type === 'remove'))
          .subscribe(res => {
            expect(res.type).toBe('remove');
            done();
          });
        srv.freq = 10;
        srv.set(KEY, 1, { expire: 1 });
        srv.clear();
      });
    });

    describe('#notify', () => {
      it('should notify set', (done: () => void) => {
        srv
          .notify(KEY)
          .pipe(filter(w => w !== null))
          .subscribe(res => {
            expect(res.type).toBe('set');
            expect(res.value).toBe(1);
            done();
          });
        srv.notify(KEY).subscribe();
        srv.set(KEY, 1);
      });
      it('should notify remove', (done: () => void) => {
        srv
          .notify(KEY)
          .pipe(filter(w => w !== null))
          .subscribe(res => {
            expect(res.type).toBe('remove');
            done();
          });
        srv.remove(KEY);
      });
      it('should notify expired', (done: () => void) => {
        srv
          .notify(KEY)
          .pipe(filter(w => w !== null && w.type === 'expire'))
          .subscribe(res => {
            expect(res.type).toBe('expire');
            done();
          });
        srv.freq = 10;
        srv.set(KEY, 1, { expire: 1 });
      });
      it('should be cancel notify', () => {
        expect(srv.hasNotify(KEY)).toBe(false);
        srv.notify(KEY).subscribe();
        expect(srv.hasNotify(KEY)).toBe(true);
        srv.cancelNotify(KEY);
        expect(srv.hasNotify(KEY)).toBe(false);
      });
      it('shoulb be call cancel notify when is invalid key', () => {
        expect(srv.hasNotify(KEY)).toBe(false);
        srv.cancelNotify(KEY);
        expect(srv.hasNotify(KEY)).toBe(false);
      });
      it('should be clear notify', () => {
        expect(srv.hasNotify(KEY)).toBe(false);
        srv.notify(KEY).subscribe();
        expect(srv.hasNotify(KEY)).toBe(true);
        srv.clearNotify();
        expect(srv.hasNotify(KEY)).toBe(false);
      });
    });
  });

  describe('[meta]', () => {
    const meta_key = '__cache_meta';
    beforeEach(() => {
      localStorage.setItem(
        meta_key,
        JSON.stringify({
          v: [KEY]
        })
      );
    });
    beforeEach(() => genModule());
    it('should be loaded history keys', () => {
      expect(srv.getMeta().has(KEY)).toBe(true);
    });
  });

  it('should be custom request', async () => {
    const returnValue = 11;
    const request = jasmine.createSpy('request').and.callFake(() => of(returnValue));
    genModule({ request });
    expect(request).not.toHaveBeenCalled();
    const res = await firstValueFrom(srv.get('/data/1', { mode: 'promise', type: 'm' }));
    expect(request).toHaveBeenCalled();
    expect(res).toBe(returnValue);
  });
});
