import { Component, inject } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';

import { DrawerHelper } from './drawer.helper';

describe('theme: DrawerHelper', () => {
  let drawer: DrawerHelper;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideNoopAnimations(), NzDrawerService]
    });
    fixture = TestBed.createComponent(TestComponent);
    drawer = TestBed.inject<DrawerHelper>(DrawerHelper);
  });

  afterEach(() => {
    const a = document.querySelector('nz-drawer');
    if (a) a.remove();
  });

  it('should be subscribing return value', done => {
    drawer
      .create('', TestDrawerComponent, {
        ret: 'true'
      })
      .subscribe(() => {
        expect(true).toBeTruthy();
        done();
      });
    fixture.detectChanges();
  });

  it('should be only close', done => {
    drawer
      .create('', TestDrawerComponent, {
        ret: 'destroy'
      })
      .subscribe({
        next: () => {
          expect(false).toBeTruthy();
          done();
        },
        error: () => {},
        complete: () => {
          expect(true).toBeTruthy();
          done();
        }
      });
    fixture.detectChanges();
  });

  it('should be closeAll', fakeAsync(() => {
    expect(drawer.openDrawers.length).toBe(0);
    drawer.create('', TestComponent).subscribe();
    drawer.create('', TestComponent).subscribe();
    expect(drawer.openDrawers.length).toBe(2);
    drawer.closeAll();
    tick(1000);
    fixture.detectChanges();
    expect(drawer.openDrawers.length).toBe(0);
  }));

  it('#static', done => {
    drawer
      .static('', TestDrawerComponent, {
        ret: 'true'
      })
      .subscribe(() => {
        expect(true).toBeTruthy();
        done();
      });
    fixture.detectChanges();
  });

  describe('#size', () => {
    it('with sm', () => {
      drawer
        .static(
          '',
          TestDrawerComponent,
          {
            ret: 'true'
          },
          {
            size: 'sm',
            drawerOptions: {
              nzWrapClassName: 'aaa'
            }
          }
        )
        .subscribe();
      fixture.detectChanges();
      const els = document.getElementsByClassName('aaa');
      expect(els.length).toBe(1);
      expect((els[0] as HTMLElement).classList).toContain('drawer-sm');
    });
    describe('with number value', () => {
      it('muse be set width when nzPlacement is left', () => {
        drawer
          .static(
            '',
            TestDrawerComponent,
            {
              ret: 'true'
            },
            {
              size: 100,
              drawerOptions: {
                nzWrapClassName: 'bbb',
                nzPlacement: 'left'
              }
            }
          )
          .subscribe();
        fixture.detectChanges();
        const els = document.getElementsByClassName('bbb');
        expect(els.length).toBe(1);
        expect((els[0] as HTMLElement).style.width).toBe(`100px`);
      });
      it('muse be set height when nzPlacement is top', () => {
        drawer
          .static(
            '',
            TestDrawerComponent,
            {
              ret: 'true'
            },
            {
              size: 100,
              drawerOptions: {
                nzWrapClassName: 'cccc',
                nzPlacement: 'top'
              }
            }
          )
          .subscribe();
        fixture.detectChanges();
        const els = document.getElementsByClassName('cccc');
        expect(els.length).toBe(1);
        expect((els[0] as HTMLElement).style.height).toBe(`100px`);
      });
    });
    it('should be ingore drawer-sm when nzWidth has set', () => {
      drawer
        .static(
          '',
          TestDrawerComponent,
          {
            ret: 'true'
          },
          {
            size: 'sm',
            drawerOptions: {
              nzWidth: 100,
              nzWrapClassName: 'aaa'
            }
          }
        )
        .subscribe();
      fixture.detectChanges();
      const els = document.getElementsByClassName('aaa');
      expect(els.length).toBe(1);
      expect((els[0] as HTMLElement).classList).not.toContain('drawer-sm');
    });
  });

  describe('#footer', () => {
    it('with true', () => {
      const height = 300;
      const footerHeight = 55;
      drawer
        .static(
          '',
          TestDrawerComponent,
          {
            ret: 'true'
          },
          {
            size: 100,
            footer: true,
            footerHeight,
            drawerOptions: {
              nzHeight: height,
              nzWrapClassName: 'eee',
              nzPlacement: 'top'
            }
          }
        )
        .subscribe();
      fixture.detectChanges();
      const els = document.getElementsByClassName('eee');
      expect(els.length).toBe(1);
      const bodyEl = (els[0] as HTMLElement).querySelector('.ant-drawer-body') as HTMLElement;
      expect(bodyEl.style.paddingBottom).toBe(`${footerHeight + 24}px`);
    });
    it('with false', () => {
      drawer
        .static(
          '',
          TestDrawerComponent,
          {
            ret: 'true'
          },
          {
            size: 100,
            footer: false,
            drawerOptions: {
              nzWrapClassName: 'ddd'
            }
          }
        )
        .subscribe();
      fixture.detectChanges();
      const els = document.getElementsByClassName('ddd');
      expect(els.length).toBe(1);
      const bodyEl = (els[0] as HTMLElement).querySelector('.ant-drawer-body') as HTMLElement;
      expect(bodyEl.style.height).toBe(``);
    });
  });

  describe('#exact', () => {
    it('width true, should be only truth subscript', done => {
      drawer
        .create(
          '',
          TestDrawerComponent,
          {
            ret: undefined
          },
          {
            exact: true
          }
        )
        .subscribe({
          next: () => {
            expect(false).toBe(true);
          },
          error: () => {
            expect(false).toBe(true);
          },
          complete: () => {
            expect(true).toBe(true);
            done();
          }
        });
      fixture.detectChanges();
    });
    it('width false, should be always subscript', done => {
      drawer
        .create(
          '',
          TestDrawerComponent,
          {
            ret: undefined
          },
          {
            exact: false
          }
        )
        .subscribe({
          next: res => {
            expect(res).toBe(undefined);
            done();
          },
          error: () => {
            expect(false).toBe(true);
            done();
          }
        });
      fixture.detectChanges();
    });
  });
});

@Component({
  template: ` <div id="drawer{{ id }}">drawer{{ id }}</div> `
})
class TestDrawerComponent {
  private readonly modal = inject(NzDrawerRef);
  id: string = '';
  ret = 'true';

  constructor() {
    setTimeout(() => {
      if (this.ret === 'destroy') {
        this.modal.close();
      } else {
        this.modal.close(this.ret);
      }
    }, 10);
  }
}

@Component({
  template: ``
})
class TestComponent {}
