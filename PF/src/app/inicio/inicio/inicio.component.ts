import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
//Internacionalizacion
import { TranslateConfigService } from '../../services/translate-config.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller, private translateConfigService: TranslateConfigService) { }

  ngOnInit(): void {
  }

  public onClick(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
  }

}