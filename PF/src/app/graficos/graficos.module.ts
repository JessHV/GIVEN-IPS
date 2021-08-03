import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraficosRoutingModule } from './graficos-routing.module';
import { GraficosComponent } from './graficos/graficos.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    GraficosComponent
  ],
  imports: [
    CommonModule,
    GraficosRoutingModule,
    TranslateModule
  ]
})
export class GraficosModule { }
