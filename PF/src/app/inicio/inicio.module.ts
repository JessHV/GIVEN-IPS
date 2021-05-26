import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { SuscripcionComponent } from './suscripcion/suscripcion.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    InicioComponent,
    SuscripcionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
