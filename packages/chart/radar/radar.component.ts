import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewEncapsulation,
  booleanAttribute,
  numberAttribute
} from '@angular/core';

import type { Chart, Event } from '@antv/g2';

import { G2BaseComponent } from '@delon/chart/core';
import { NzStringTemplateOutletDirective } from 'ng-zorro-antd/core/outlet';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzColDirective, NzRowDirective } from 'ng-zorro-antd/grid';
import { NzSkeletonComponent } from 'ng-zorro-antd/skeleton';

export interface G2RadarData {
  name: string;
  label: string;
  value: number;
  [key: string]: NzSafeAny;
}

export interface G2RadarClickItem {
  item: G2RadarData;
  ev: Event;
}

@Component({
  selector: 'g2-radar',
  exportAs: 'g2Radar',
  templateUrl: './radar.component.html',
  host: {
    '[style.height.px]': 'height',
    '[class.g2-radar]': 'true'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [NzSkeletonComponent, NzStringTemplateOutletDirective, NzRowDirective, NzColDirective]
})
export class G2RadarComponent extends G2BaseComponent {
  legendData: NzSafeAny[] = [];

  // #region fields

  @Input() title?: string | TemplateRef<void> | null;
  @Input({ transform: numberAttribute }) height = 0;
  @Input() padding: number | number[] | 'auto' = [44, 30, 16, 30];
  @Input({ transform: booleanAttribute }) hasLegend = true;
  @Input({ transform: numberAttribute }) tickCount = 4;
  @Input() data: G2RadarData[] = [];
  @Input() colors = ['#1890FF', '#FACC14', '#2FC25B', '#8543E0', '#F04864', '#13C2C2', '#fa8c16', '#a0d911'];
  @Output() readonly clickItem = new EventEmitter<G2RadarClickItem>();

  // #endregion

  private getHeight(): number {
    return this.height - (this.hasLegend ? 80 : 22);
  }

  install(): void {
    const { node, padding, theme, tickCount } = this;

    const chart: Chart = (this._chart = new this.winG2.Chart({
      container: node.nativeElement,
      autoFit: true,
      height: this.getHeight(),
      padding,
      theme
    }));

    chart.coordinate('polar');
    chart.legend(false);
    chart.axis('label', {
      line: null,
      label: {
        offset: 8
      },
      grid: {
        line: {
          style: {
            stroke: '#e9e9e9',
            lineWidth: 1,
            lineDash: [0, 0]
          }
        }
      }
    });
    chart.axis('value', {
      grid: {
        line: {
          type: 'polygon',
          style: {
            stroke: '#e9e9e9',
            lineWidth: 1,
            lineDash: [0, 0]
          }
        }
      }
    });
    chart.scale({
      value: {
        min: 0,
        tickCount
      }
    });
    chart.filter('name', (name: string) => {
      const legendItem = this.legendData.find(w => w.name === name);
      return legendItem ? legendItem.checked !== false : true;
    });

    chart.line().position('label*value').color('name', this.colors);
    chart.point().position('label*value').shape('circle').size(3);

    chart.on(`point:click`, (ev: Event) => {
      this.ngZone.run(() => this.clickItem.emit({ item: ev.data?.data, ev }));
    });

    this.ready.next(chart);

    this.changeData();

    chart.render();
  }

  changeData(): void {
    const { _chart, data } = this;
    if (!_chart || !Array.isArray(data) || data.length <= 0) return;
    _chart.changeData(data);

    this.ngZone.run(() => this.genLegend());
  }

  private genLegend(): void {
    const { hasLegend, cdr, _chart } = this;
    if (!hasLegend) return;

    this.legendData = _chart.geometries[0].dataArray.map(item => {
      const origin = item[0]._origin;
      const result = {
        name: origin.name,
        color: item[0].color,
        checked: true,
        value: item.reduce((p, n) => p + n._origin.value, 0)
      };

      return result;
    });

    cdr.detectChanges();
  }

  _click(i: number): void {
    const { legendData, _chart } = this;
    legendData[i].checked = !legendData[i].checked;
    _chart.render(true);
  }

  onChanges(): void {
    this.legendData.forEach(i => (i.checked = true));
  }
}
