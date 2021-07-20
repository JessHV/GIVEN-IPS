import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

/* places */
import { RegionI, ProvinciaI, DistritoI } from 'src/app/models/model.interface';


@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {

  constructor(private service:SharedService) { }

  AnticoncepcionList: any=[];
  AnticoncepcionListWithoutFilter:any=[];
  AntiNameFilter:string="";

  // ==== WITHOUT API ====
  public localAnticoncepcion:any = [
    {
      "AntiId": 1,
      "AntiMes": 1,
      "AntiDepartamento": "Ancash",
      "AntiProvincia": "Recuay",
      "AntiDistrito": "Catac",
      "AntiInicio": 18,
      "AntiFin": 29,
      "AntiMetodo": "Yuzpe",
    },
    {
      "AntiId": 2,
      "AntiMes": 1,
      "AntiDepartamento": "Ancash",
      "AntiProvincia": "Santa",
      "AntiDistrito": "Chimbote",
      "AntiInicio": 12,
      "AntiFin": 17,
      "AntiMetodo": "Yuzpe",
    },
    {
      "AntiId": 3,
      "AntiMes": 1,
      "AntiDepartamento": "Ancash",
      "AntiProvincia": "Santa",
      "AntiDistrito": "Nuevo Chimbote",
      "AntiInicio": 18,
      "AntiFin": 29,
      "AntiMetodo": "Yuzpe",
    },
    {
      "AntiId": 4,
      "AntiMes": 1,
      "AntiDepartamento": "Apurimac",
      "AntiProvincia": "Abancay",
      "AntiDistrito": "Abancay",
      "AntiInicio": 18,
      "AntiFin": 29,
      "AntiMetodo": "Progéstageno",
    },
    {
      "AntiId": 5,
      "AntiMes": 1,
      "AntiDepartamento": "Arequipa",
      "AntiProvincia": "Arequipa",
      "AntiDistrito": "Vitor",
      "AntiInicio": 30,
      "AntiFin": 59,
      "AntiMetodo": "Yuzpe",
    },
  ];

  refreshAntiList() {
    // ==== WITHOUT API ====
    this.AnticoncepcionList=this.localAnticoncepcion;
    this.AnticoncepcionListWithoutFilter=this.localAnticoncepcion; 
  }

  filterAnticoncepcion() {
    var AntiNameFilter = this.AntiNameFilter;

    this.AnticoncepcionList = this.AnticoncepcionListWithoutFilter.filter(function(el:any) {
      return el.AntiDepartamento.toString().toLowerCase().includes(AntiNameFilter.toString().trim().toLowerCase());
    });
  }

  ngOnInit(): void {
    this.refreshAntiList();
    this.regiones = this.service.getRegiones();
  }

  /* PLACES */

    /* PLACES */
    public selectedRegion: RegionI = {id: 0, name: ""};
    public selectedProvincia: ProvinciaI = {id: 0, regionId: 0, name: ""};
    public selectedDistrito: DistritoI = {id: 0, provinciaId: 0, name: ""};
    public regiones: RegionI[] = [];
    public provincias: ProvinciaI[] = [];
    public distritos: DistritoI[] = [];

  onSelectRegion(event:any) :void {
    this.provincias = this.service.getProvincias().filter(item => item.regionId == event.target.value);
  }

  onSelectProvincia(event: any): void {
    this.distritos = this.service.getDistritos().filter(item => item.provinciaId == event.target.value);
  }

}
