---
order: 1
title: 主题
---

暗系。

```ts
import { Component } from '@angular/core';

import { NumberInfoModule } from '@delon/chart/number-info';

@Component({
  selector: 'app-demo',
  template: ` <number-info subTitle="本周访问" total="12,321" subTotal="17.1" status="down" theme="default" /> `,
  imports: [NumberInfoModule]
})
export class DemoComponent {}
```
