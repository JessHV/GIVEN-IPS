import { Component, ViewEncapsulation, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { EffectFade, Pagination } from 'swiper/core';
//Internacionalizacion
import { TranslateConfigService } from '../../services/translate-config.service';

SwiperCore.use([EffectFade, Pagination]);

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class BannerComponent implements OnInit, AfterViewInit {

  deslizate: Swiper | undefined;
  
  imagenes: string[] = [
    'assets/imagenes/Fondo1-embarazada.jpg',
    'assets/imagenes/Fondo2-Pareja.jpg'
  ];
  constructor(private translateConfigService: TranslateConfigService) { }

  ngOnInit(): void {
  }
  //necesita inicializar el componente de los banner
  ngAfterViewInit() {
    this.deslizate = new Swiper('.swiper-container', {
      effect:'fade',
      pagination: {
        dynamicBullets: true
      }
    });
  }
}
