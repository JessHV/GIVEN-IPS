import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { SuscripcionComponent } from './suscripcion/suscripcion.component';
import { SharedModule } from "../shared/shared.module";
import { SwiperModule } from "swiper/angular";
import { BannerComponent } from './banner/banner.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    InicioComponent,
    SuscripcionComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InicioRoutingModule,
    SharedModule,
    SwiperModule,
    TranslateModule
  ]
})
export class InicioModule { }
