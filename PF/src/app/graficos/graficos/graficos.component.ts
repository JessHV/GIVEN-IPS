import { Component, OnInit } from '@angular/core';
//Internacionalizacion
import { TranslateConfigService } from '../../services/translate-config.service';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent implements OnInit {

  constructor(private translateConfigService: TranslateConfigService) { }

  ngOnInit(): void {
  }

}
