---
order: 1
title:
  zh-CN: 基础
  en-US: Basic
---

## zh-CN

一行四列布局。

## en-US

1 rows & 4 columns layout.

```ts
import { Component } from '@angular/core';

import { SGModule } from '@delon/abc/sg';

@Component({
  selector: 'app-demo',
  template: ` <div sg-container="4">
    @for (i of ls; track $index) {
      <sg [col]="$index === 5 ? 2 : null">
        <div class="item">{{ $index + 1 }}</div>
      </sg>
    }
  </div>`,
  styles: [
    `
      :host .sg__item {
        padding: 5px 0;
        text-align: center;
        border-radius: 0;
        min-height: 30px;
        margin-top: 8px;
        margin-bottom: 8px;
        color: #fff;
      }
      :host .item {
        background: #00a0e9;
        height: 120px;
        line-height: 120px;
        font-size: 13px;
      }
    `
  ],
  imports: [SGModule]
})
export class DemoComponent {
  ls = Array(11).fill(0);
}
```
