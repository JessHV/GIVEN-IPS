import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusquedaRoutingModule } from './busqueda-routing.module';
import { FiltrosComponent } from './filtros/filtros.component';
import { InformacionComponent } from './informacion/informacion.component';


@NgModule({
  declarations: [
    FiltrosComponent,
    InformacionComponent
  ],
  imports: [
    CommonModule,
    BusquedaRoutingModule
  ]
})
export class BusquedaModule { }
