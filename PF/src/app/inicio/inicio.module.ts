import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { SuscripcionComponent } from './suscripcion/suscripcion.component';


@NgModule({
  declarations: [
    InicioComponent,
    SuscripcionComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
