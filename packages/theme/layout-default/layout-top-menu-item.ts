import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation, booleanAttribute } from '@angular/core';

@Component({
  selector: 'layout-default-top-menu-item',
  template: `<ng-content />`,
  host: {
    '[class.alain-default__nav-item]': `true`,
    '[class.alain-default__top-menu-item]': `true`,
    '[class.alain-default__top-menu-item-selected]': `selected`,
    '[class.alain-default__top-menu-item-disabled]': `disabled`
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
export class LayoutDefaultTopMenuItemComponent {
  @Input({ transform: booleanAttribute }) selected = false;
  @Input({ transform: booleanAttribute }) disabled = false;
}
