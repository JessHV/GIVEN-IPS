import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusquedaRoutingModule } from './busqueda-routing.module';
import { FiltrosComponent } from './filtros/filtros.component';
import { InformacionComponent } from './informacion/informacion.component';
import { FormsModule } from '@angular/forms';
import { FiltroPipe } from '../pipes/filtro.pipe';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    FiltrosComponent,
    InformacionComponent,
    FiltroPipe
  ],
  imports: [
    CommonModule,
    BusquedaRoutingModule,
    FormsModule,
    TranslateModule
  ]
})
export class BusquedaModule { }
