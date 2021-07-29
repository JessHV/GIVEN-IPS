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

  public page:number = 0;
  public search:string = "";

  refreshAntiList() {
    // ==== Sin API ====
    this.AnticoncepcionList=this.localAnticoncepcion;
    this.AnticoncepcionListWithoutFilter=this.localAnticoncepcion; 
  }

  filterAnticoncepcion() {
    var AntiNameFilter = this.AntiNameFilter;

    this.AnticoncepcionList = this.AnticoncepcionListWithoutFilter.filter(function(el:any) {
      return el.Departamento.toString().toLowerCase().includes(AntiNameFilter.toString().trim().toLowerCase());
    });
  }

  // Search input
  onSearchAnticoncepcion( search:string ) {
    this.page = 0;
    this.search = search;
  }

  ngOnInit(): void {
    this.refreshAntiList();
    // this.regiones = this.service.getRegiones();
  }

  nextPage():void {
    this.page += 10;
  }

  prevPage():void {
    if(this.page > 0)
      this.page -= 10;
  }

  // ==== Sin API ====
  public localAnticoncepcion:any = [
    {
      "Id": 1,
      "Mes": 1,
      "Departamento": "ANCASH",
      "Provincia": "RECUAY",
      "Distrito": "CATAC",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 2,
      "Mes": 1,
      "Departamento": "ANCASH",
      "Provincia": "SANTA",
      "Distrito": "CHIMBOTE",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 3,
      "Mes": 1,
      "Departamento": "ANCASH",
      "Provincia": "SANTA",
      "Distrito": "NUEVO CHIMBOTE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 4,
      "Mes": 1,
      "Departamento": "ANCASH",
      "Provincia": "SANTA",
      "Distrito": "NUEVO CHIMBOTE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 5,
      "Mes": 1,
      "Departamento": "APURIMAC",
      "Provincia": "ABANCAY",
      "Distrito": "ABANCAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 6,
      "Mes": 1,
      "Departamento": "APURIMAC",
      "Provincia": "ABANCAY",
      "Distrito": "ABANCAY",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 7,
      "Mes": 1,
      "Departamento": "APURIMAC",
      "Provincia": "ABANCAY",
      "Distrito": "CURAHUASI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 8,
      "Mes": 1,
      "Departamento": "APURIMAC",
      "Provincia": "ABANCAY",
      "Distrito": "TAMBURCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 9,
      "Mes": 1,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "ANDAHUAYLAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 10,
      "Mes": 1,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "ANDAHUAYLAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 11,
      "Mes": 1,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "ANDARAPA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 12,
      "Mes": 1,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "HUANCARAMA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 13,
      "Mes": 1,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "KISHUARA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 14,
      "Mes": 1,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "PACOBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 15,
      "Mes": 1,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "PACOBAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 16,
      "Mes": 1,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "TUMAY HUARACA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 17,
      "Mes": 1,
      "Departamento": "APURIMAC",
      "Provincia": "ANTABAMBA",
      "Distrito": "ANTABAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 18,
      "Mes": 1,
      "Departamento": "APURIMAC",
      "Provincia": "ANTABAMBA",
      "Distrito": "SABAINO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 19,
      "Mes": 1,
      "Departamento": "APURIMAC",
      "Provincia": "AYMARAES",
      "Distrito": "TAPAIRIHUA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 20,
      "Mes": 1,
      "Departamento": "APURIMAC",
      "Provincia": "AYMARAES",
      "Distrito": "TAPAIRIHUA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 21,
      "Mes": 1,
      "Departamento": "APURIMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "COTABAMBAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 22,
      "Mes": 1,
      "Departamento": "APURIMAC",
      "Provincia": "GRAU",
      "Distrito": "CURPAHUASI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 23,
      "Mes": 1,
      "Departamento": "APURIMAC",
      "Provincia": "GRAU",
      "Distrito": "PROGRESO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 24,
      "Mes": 1,
      "Departamento": "AREQUIPA",
      "Provincia": "AREQUIPA",
      "Distrito": "VITOR",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 25,
      "Mes": 1,
      "Departamento": "AREQUIPA",
      "Provincia": "CAYLLOMA",
      "Distrito": "CHIVAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 26,
      "Mes": 1,
      "Departamento": "AREQUIPA",
      "Provincia": "CAYLLOMA",
      "Distrito": "CHIVAY",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 27,
      "Mes": 1,
      "Departamento": "AREQUIPA",
      "Provincia": "CAYLLOMA",
      "Distrito": "MAJES",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 28,
      "Mes": 1,
      "Departamento": "AREQUIPA",
      "Provincia": "CONDESUYOS",
      "Distrito": "CHUQUIBAMBA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 29,
      "Mes": 1,
      "Departamento": "AYACUCHO",
      "Provincia": "PAUCAR DEL SARA SARA",
      "Distrito": "OYOLO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 30,
      "Mes": 1,
      "Departamento": "CAJAMARCA",
      "Provincia": "CAJAMARCA",
      "Distrito": "CAJAMARCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 31,
      "Mes": 1,
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CALLAO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 32,
      "Mes": 1,
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CALLAO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 33,
      "Mes": 1,
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CALLAO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 34,
      "Mes": 1,
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "BELLAVISTA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 35,
      "Mes": 1,
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "BELLAVISTA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 36,
      "Mes": 1,
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "BELLAVISTA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 37,
      "Mes": 1,
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "VENTANILLA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 38,
      "Mes": 1,
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "VENTANILLA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 39,
      "Mes": 1,
      "Departamento": "CUSCO",
      "Provincia": "CALCA",
      "Distrito": "LAMAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 40,
      "Mes": 1,
      "Departamento": "CUSCO",
      "Provincia": "CALCA",
      "Distrito": "LAMAY",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 41,
      "Mes": 1,
      "Departamento": "CUSCO",
      "Provincia": "CHUMBIVILCAS",
      "Distrito": "LLUSCO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 42,
      "Mes": 1,
      "Departamento": "CUSCO",
      "Provincia": "LA CONVENCION",
      "Distrito": "QUELLOUNO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 43,
      "Mes": 1,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ACOBAMBA",
      "Distrito": "PAUCARA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 44,
      "Mes": 1,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "ANCHONGA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 45,
      "Mes": 1,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "CCOCHACCASA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 46,
      "Mes": 1,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "CCOCHACCASA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 47,
      "Mes": 1,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "CHINCHO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 48,
      "Mes": 1,
      "Departamento": "HUANCAVELICA",
      "Provincia": "CASTROVIRREYNA",
      "Distrito": "CASTROVIRREYNA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 49,
      "Mes": 1,
      "Departamento": "HUANCAVELICA",
      "Provincia": "CASTROVIRREYNA",
      "Distrito": "CASTROVIRREYNA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 50,
      "Mes": 1,
      "Departamento": "HUANCAVELICA",
      "Provincia": "CASTROVIRREYNA",
      "Distrito": "CASTROVIRREYNA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 51,
      "Mes": 1,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUAYTARA",
      "Distrito": "HUAYTARA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 52,
      "Mes": 1,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "PAMPAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 53,
      "Mes": 1,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "ACRAQUIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 54,
      "Mes": 1,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "ACRAQUIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 55,
      "Mes": 1,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "AHUAYCHA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 56,
      "Mes": 1,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "COLCABAMBA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 57,
      "Mes": 1,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "DANIEL HERNANDEZ",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 58,
      "Mes": 1,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "HUACHOCOLPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 59,
      "Mes": 1,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "SURCUBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 60,
      "Mes": 1,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "TINTAY PUNCU",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 61,
      "Mes": 1,
      "Departamento": "HUANUCO",
      "Provincia": "HUANUCO",
      "Distrito": "HUANUCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 62,
      "Mes": 1,
      "Departamento": "HUANUCO",
      "Provincia": "HUANUCO",
      "Distrito": "HUANUCO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 63,
      "Mes": 1,
      "Departamento": "HUANUCO",
      "Provincia": "HUANUCO",
      "Distrito": "CHINCHAO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 64,
      "Mes": 1,
      "Departamento": "HUANUCO",
      "Provincia": "AMBO",
      "Distrito": "SAN RAFAEL",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 65,
      "Mes": 1,
      "Departamento": "HUANUCO",
      "Provincia": "DOS DE MAYO",
      "Distrito": "LA UNION",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 66,
      "Mes": 1,
      "Departamento": "HUANUCO",
      "Provincia": "DOS DE MAYO",
      "Distrito": "MARIAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 67,
      "Mes": 1,
      "Departamento": "HUANUCO",
      "Provincia": "DOS DE MAYO",
      "Distrito": "PACHAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 68,
      "Mes": 1,
      "Departamento": "HUANUCO",
      "Provincia": "DOS DE MAYO",
      "Distrito": "PACHAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 69,
      "Mes": 1,
      "Departamento": "HUANUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "RUPA-RUPA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 70,
      "Mes": 1,
      "Departamento": "HUANUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "DANIEL ALOMIA ROBLES",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 71,
      "Mes": 1,
      "Departamento": "HUANUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "DANIEL ALOMIA ROBLES",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 72,
      "Mes": 1,
      "Departamento": "HUANUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "JOSE CRESPO Y CASTILLO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 73,
      "Mes": 1,
      "Departamento": "HUANUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "LUYANDO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 74,
      "Mes": 1,
      "Departamento": "HUANUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "MARIANO DAMASO BERAUN",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 75,
      "Mes": 1,
      "Departamento": "HUANUCO",
      "Provincia": "MARAÑON",
      "Distrito": "CHOLON",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 76,
      "Mes": 1,
      "Departamento": "HUANUCO",
      "Provincia": "PACHITEA",
      "Distrito": "PANAO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 77,
      "Mes": 1,
      "Departamento": "HUANUCO",
      "Provincia": "PUERTO INCA",
      "Distrito": "HONORIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 78,
      "Mes": 1,
      "Departamento": "HUANUCO",
      "Provincia": "PUERTO INCA",
      "Distrito": "HONORIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 79,
      "Mes": 1,
      "Departamento": "HUANUCO",
      "Provincia": "LAURICOCHA",
      "Distrito": "BAÑOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 80,
      "Mes": 1,
      "Departamento": "HUANUCO",
      "Provincia": "LAURICOCHA",
      "Distrito": "RONDOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 81,
      "Mes": 1,
      "Departamento": "HUANUCO",
      "Provincia": "LAURICOCHA",
      "Distrito": "SAN MIGUEL DE CAURI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 82,
      "Mes": 1,
      "Departamento": "HUANUCO",
      "Provincia": "LAURICOCHA",
      "Distrito": "SAN MIGUEL DE CAURI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 83,
      "Mes": 1,
      "Departamento": "HUANUCO",
      "Provincia": "YAROWILCA",
      "Distrito": "APARICIO POMARES",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 84,
      "Mes": 1,
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "ICA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 85,
      "Mes": 1,
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "OCUCAJE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 86,
      "Mes": 1,
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "PUEBLO NUEVO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 87,
      "Mes": 1,
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "SAN JOSE DE LOS MOLINOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 88,
      "Mes": 1,
      "Departamento": "ICA",
      "Provincia": "CHINCHA",
      "Distrito": "ALTO LARAN",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 89,
      "Mes": 1,
      "Departamento": "ICA",
      "Provincia": "CHINCHA",
      "Distrito": "PUEBLO NUEVO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 90,
      "Mes": 1,
      "Departamento": "ICA",
      "Provincia": "PALPA",
      "Distrito": "TIBILLO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 91,
      "Mes": 1,
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "PISCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 92,
      "Mes": 1,
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "PISCO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 93,
      "Mes": 1,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "HUANCAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 94,
      "Mes": 1,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "HUANCAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 95,
      "Mes": 1,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "CHILCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 96,
      "Mes": 1,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "CHONGOS ALTO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 97,
      "Mes": 1,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "EL TAMBO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 98,
      "Mes": 1,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "EL TAMBO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 99,
      "Mes": 1,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "HUANCAN",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 100,
      "Mes": 1,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "HUANCAN",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 101,
      "Mes": 1,
      "Departamento": "JUNIN",
      "Provincia": "CONCEPCION",
      "Distrito": "CONCEPCION",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 102,
      "Mes": 1,
      "Departamento": "JUNIN",
      "Provincia": "CONCEPCION",
      "Distrito": "SAN JOSE DE QUERO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 103,
      "Mes": 1,
      "Departamento": "JUNIN",
      "Provincia": "CONCEPCION",
      "Distrito": "SANTA ROSA DE OCOPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 104,
      "Mes": 1,
      "Departamento": "JUNIN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PERENE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 105,
      "Mes": 1,
      "Departamento": "JUNIN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PERENE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 106,
      "Mes": 1,
      "Departamento": "JUNIN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PICHANAKI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 107,
      "Mes": 1,
      "Departamento": "JUNIN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "SAN RAMON",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 108,
      "Mes": 1,
      "Departamento": "JUNIN",
      "Provincia": "JAUJA",
      "Distrito": "ACOLLA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 109,
      "Mes": 1,
      "Departamento": "JUNIN",
      "Provincia": "JAUJA",
      "Distrito": "SINCOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 110,
      "Mes": 1,
      "Departamento": "JUNIN",
      "Provincia": "JUNIN",
      "Distrito": "CARHUAMAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 111,
      "Mes": 1,
      "Departamento": "JUNIN",
      "Provincia": "SATIPO",
      "Distrito": "SATIPO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 112,
      "Mes": 1,
      "Departamento": "JUNIN",
      "Provincia": "SATIPO",
      "Distrito": "LLAYLLA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 113,
      "Mes": 1,
      "Departamento": "JUNIN",
      "Provincia": "SATIPO",
      "Distrito": "MAZAMARI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 114,
      "Mes": 1,
      "Departamento": "JUNIN",
      "Provincia": "SATIPO",
      "Distrito": "PANGOA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 115,
      "Mes": 1,
      "Departamento": "JUNIN",
      "Provincia": "SATIPO",
      "Distrito": "PANGOA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 116,
      "Mes": 1,
      "Departamento": "JUNIN",
      "Provincia": "SATIPO",
      "Distrito": "RIO TAMBO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 117,
      "Mes": 1,
      "Departamento": "JUNIN",
      "Provincia": "SATIPO",
      "Distrito": "RIO TAMBO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 118,
      "Mes": 1,
      "Departamento": "JUNIN",
      "Provincia": "TARMA",
      "Distrito": "TARMA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 119,
      "Mes": 1,
      "Departamento": "JUNIN",
      "Provincia": "TARMA",
      "Distrito": "ACOBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 120,
      "Mes": 1,
      "Departamento": "JUNIN",
      "Provincia": "TARMA",
      "Distrito": "PALCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 121,
      "Mes": 1,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "CHICLAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 122,
      "Mes": 1,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "CHICLAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 123,
      "Mes": 1,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "CHICLAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 124,
      "Mes": 1,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "LA VICTORIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 125,
      "Mes": 1,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "LA VICTORIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 126,
      "Mes": 1,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "FERREÑAFE",
      "Distrito": "PUEBLO NUEVO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 127,
      "Mes": 1,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LIMA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 128,
      "Mes": 1,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "PACHACAMAC",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 129,
      "Mes": 1,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "PACHACAMAC",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 130,
      "Mes": 1,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "PACHACAMAC",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 131,
      "Mes": 1,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "SAN BARTOLO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 132,
      "Mes": 1,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "VILLA EL SALVADOR",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 133,
      "Mes": 1,
      "Departamento": "LIMA",
      "Provincia": "CAÑETE",
      "Distrito": "SAN LUIS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 134,
      "Mes": 1,
      "Departamento": "LIMA",
      "Provincia": "HUARAL",
      "Distrito": "AUCALLAMA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 135,
      "Mes": 1,
      "Departamento": "LIMA",
      "Provincia": "YAUYOS",
      "Distrito": "YAUYOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 136,
      "Mes": 1,
      "Departamento": "LIMA",
      "Provincia": "YAUYOS",
      "Distrito": "QUINCHES",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 137,
      "Mes": 1,
      "Departamento": "MOQUEGUA",
      "Provincia": "MARISCAL NIETO",
      "Distrito": "MOQUEGUA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 138,
      "Mes": 1,
      "Departamento": "MOQUEGUA",
      "Provincia": "MARISCAL NIETO",
      "Distrito": "MOQUEGUA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 139,
      "Mes": 1,
      "Departamento": "MOQUEGUA",
      "Provincia": "MARISCAL NIETO",
      "Distrito": "MOQUEGUA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 140,
      "Mes": 1,
      "Departamento": "MOQUEGUA",
      "Provincia": "MARISCAL NIETO",
      "Distrito": "MOQUEGUA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 141,
      "Mes": 1,
      "Departamento": "MOQUEGUA",
      "Provincia": "ILO",
      "Distrito": "ILO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 142,
      "Mes": 1,
      "Departamento": "MOQUEGUA",
      "Provincia": "ILO",
      "Distrito": "ILO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 143,
      "Mes": 1,
      "Departamento": "PIURA",
      "Provincia": "PIURA",
      "Distrito": "LA UNION",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 144,
      "Mes": 1,
      "Departamento": "PIURA",
      "Provincia": "PIURA",
      "Distrito": "LA UNION",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 145,
      "Mes": 1,
      "Departamento": "PIURA",
      "Provincia": "AYABACA",
      "Distrito": "AYABACA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 146,
      "Mes": 1,
      "Departamento": "PIURA",
      "Provincia": "HUANCABAMBA",
      "Distrito": "CANCHAQUE",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 147,
      "Mes": 1,
      "Departamento": "SAN MARTIN",
      "Provincia": "MOYOBAMBA",
      "Distrito": "CALZADA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 148,
      "Mes": 1,
      "Departamento": "SAN MARTIN",
      "Provincia": "BELLAVISTA",
      "Distrito": "BAJO BIAVO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 149,
      "Mes": 1,
      "Departamento": "SAN MARTIN",
      "Provincia": "SAN MARTIN",
      "Distrito": "EL PORVENIR",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 150,
      "Mes": 1,
      "Departamento": "SAN MARTIN",
      "Provincia": "SAN MARTIN",
      "Distrito": "SAUCE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 151,
      "Mes": 1,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "TACNA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 152,
      "Mes": 1,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CIUDAD NUEVA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 153,
      "Mes": 1,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CORONEL GREGORIO ALBARRACIN LANCHIPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 154,
      "Mes": 1,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CORONEL GREGORIO ALBARRACIN LANCHIPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 155,
      "Mes": 1,
      "Departamento": "UCAYALI",
      "Provincia": "CORONEL PORTILLO",
      "Distrito": "IPARIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 156,
      "Mes": 2,
      "Departamento": "ANCASH",
      "Provincia": "HUARAZ",
      "Distrito": "HUARAZ",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 157,
      "Mes": 2,
      "Departamento": "ANCASH",
      "Provincia": "HUARMEY",
      "Distrito": "HUARMEY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 158,
      "Mes": 2,
      "Departamento": "ANCASH",
      "Provincia": "HUAYLAS",
      "Distrito": "PAMPAROMAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 159,
      "Mes": 2,
      "Departamento": "ANCASH",
      "Provincia": "SANTA",
      "Distrito": "NUEVO CHIMBOTE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 160,
      "Mes": 2,
      "Departamento": "APURIMAC",
      "Provincia": "ABANCAY",
      "Distrito": "ABANCAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 161,
      "Mes": 2,
      "Departamento": "APURIMAC",
      "Provincia": "ABANCAY",
      "Distrito": "ABANCAY",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 162,
      "Mes": 2,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "ANDAHUAYLAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 163,
      "Mes": 2,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "ANDAHUAYLAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 164,
      "Mes": 2,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "HUANCARAY",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 165,
      "Mes": 2,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "KISHUARA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 166,
      "Mes": 2,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "PACUCHA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 167,
      "Mes": 2,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "PAMPACHIRI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 168,
      "Mes": 2,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "SAN JERONIMO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 169,
      "Mes": 2,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "TALAVERA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 170,
      "Mes": 2,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "JOSÉ MARÍA ARGUEDAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 171,
      "Mes": 2,
      "Departamento": "APURIMAC",
      "Provincia": "ANTABAMBA",
      "Distrito": "PACHACONAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 172,
      "Mes": 2,
      "Departamento": "APURIMAC",
      "Provincia": "ANTABAMBA",
      "Distrito": "PACHACONAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 173,
      "Mes": 2,
      "Departamento": "APURIMAC",
      "Provincia": "AYMARAES",
      "Distrito": "SAÑAYCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 174,
      "Mes": 2,
      "Departamento": "APURIMAC",
      "Provincia": "CHINCHEROS",
      "Distrito": "OCOBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 175,
      "Mes": 2,
      "Departamento": "APURIMAC",
      "Provincia": "CHINCHEROS",
      "Distrito": "OCOBAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 176,
      "Mes": 2,
      "Departamento": "APURIMAC",
      "Provincia": "GRAU",
      "Distrito": "CHUQUIBAMBILLA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 177,
      "Mes": 2,
      "Departamento": "AREQUIPA",
      "Provincia": "AREQUIPA",
      "Distrito": "CAYMA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 178,
      "Mes": 2,
      "Departamento": "AREQUIPA",
      "Provincia": "AREQUIPA",
      "Distrito": "CERRO COLORADO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 179,
      "Mes": 2,
      "Departamento": "AREQUIPA",
      "Provincia": "ISLAY",
      "Distrito": "MOLLENDO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 180,
      "Mes": 2,
      "Departamento": "AREQUIPA",
      "Provincia": "ISLAY",
      "Distrito": "PUNTA DE BOMBON",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 181,
      "Mes": 2,
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "ACOCRO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 182,
      "Mes": 2,
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "QUINUA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 183,
      "Mes": 2,
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "SAN JUAN BAUTISTA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 184,
      "Mes": 2,
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "SAN JUAN BAUTISTA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 185,
      "Mes": 2,
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "VINCHOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 186,
      "Mes": 2,
      "Departamento": "AYACUCHO",
      "Provincia": "LA MAR",
      "Distrito": "SAN MIGUEL",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 187,
      "Mes": 2,
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CALLAO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 188,
      "Mes": 2,
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CALLAO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 189,
      "Mes": 2,
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CALLAO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 190,
      "Mes": 2,
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CALLAO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 191,
      "Mes": 2,
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "BELLAVISTA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 192,
      "Mes": 2,
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "VENTANILLA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 193,
      "Mes": 2,
      "Departamento": "CUSCO",
      "Provincia": "CANCHIS",
      "Distrito": "SICUANI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 194,
      "Mes": 2,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "HUANCAVELICA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 195,
      "Mes": 2,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "HUANCAVELICA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 196,
      "Mes": 2,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "PILCHACA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 197,
      "Mes": 2,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "VILCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 198,
      "Mes": 2,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "YAULI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 199,
      "Mes": 2,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ACOBAMBA",
      "Distrito": "PAUCARA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 200,
      "Mes": 2,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "ANCHONGA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 201,
      "Mes": 2,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "HUAYLLAY GRANDE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 202,
      "Mes": 2,
      "Departamento": "HUANCAVELICA",
      "Provincia": "CASTROVIRREYNA",
      "Distrito": "CASTROVIRREYNA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 203,
      "Mes": 2,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "ACRAQUIA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 204,
      "Mes": 2,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "DANIEL HERNANDEZ",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 205,
      "Mes": 2,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "HUACHOCOLPA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 206,
      "Mes": 2,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "SURCUBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 207,
      "Mes": 2,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "TINTAY PUNCU",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 208,
      "Mes": 2,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "QUICHUAS",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 209,
      "Mes": 2,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "QUICHUAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 210,
      "Mes": 2,
      "Departamento": "HUANUCO",
      "Provincia": "HUANUCO",
      "Distrito": "HUANUCO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 211,
      "Mes": 2,
      "Departamento": "HUANUCO",
      "Provincia": "HUANUCO",
      "Distrito": "HUANUCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 212,
      "Mes": 2,
      "Departamento": "HUANUCO",
      "Provincia": "HUANUCO",
      "Distrito": "HUANUCO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 213,
      "Mes": 2,
      "Departamento": "HUANUCO",
      "Provincia": "HUANUCO",
      "Distrito": "AMARILIS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 214,
      "Mes": 2,
      "Departamento": "HUANUCO",
      "Provincia": "HUANUCO",
      "Distrito": "AMARILIS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 215,
      "Mes": 2,
      "Departamento": "HUANUCO",
      "Provincia": "DOS DE MAYO",
      "Distrito": "LA UNION",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 216,
      "Mes": 2,
      "Departamento": "HUANUCO",
      "Provincia": "HUACAYBAMBA",
      "Distrito": "HUACAYBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 217,
      "Mes": 2,
      "Departamento": "HUANUCO",
      "Provincia": "HUACAYBAMBA",
      "Distrito": "HUACAYBAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 218,
      "Mes": 2,
      "Departamento": "HUANUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "CHAVIN DE PARIARCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 219,
      "Mes": 2,
      "Departamento": "HUANUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "MONZON",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 220,
      "Mes": 2,
      "Departamento": "HUANUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "MONZON",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 221,
      "Mes": 2,
      "Departamento": "HUANUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "PUNCHAO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 222,
      "Mes": 2,
      "Departamento": "HUANUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "PUÑOS",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 223,
      "Mes": 2,
      "Departamento": "HUANUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "PUÑOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 224,
      "Mes": 2,
      "Departamento": "HUANUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "RUPA-RUPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 225,
      "Mes": 2,
      "Departamento": "HUANUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "JOSE CRESPO Y CASTILLO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 226,
      "Mes": 2,
      "Departamento": "HUANUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "LUYANDO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 227,
      "Mes": 2,
      "Departamento": "HUANUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "MARIANO DAMASO BERAUN",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 228,
      "Mes": 2,
      "Departamento": "HUANUCO",
      "Provincia": "PACHITEA",
      "Distrito": "MOLINO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 229,
      "Mes": 2,
      "Departamento": "HUANUCO",
      "Provincia": "PUERTO INCA",
      "Distrito": "PUERTO INCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 230,
      "Mes": 2,
      "Departamento": "HUANUCO",
      "Provincia": "PUERTO INCA",
      "Distrito": "HONORIA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 231,
      "Mes": 2,
      "Departamento": "HUANUCO",
      "Provincia": "PUERTO INCA",
      "Distrito": "TOURNAVISTA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 232,
      "Mes": 2,
      "Departamento": "HUANUCO",
      "Provincia": "YAROWILCA",
      "Distrito": "CHAVINILLO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 233,
      "Mes": 2,
      "Departamento": "HUANUCO",
      "Provincia": "YAROWILCA",
      "Distrito": "CAHUAC",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 234,
      "Mes": 2,
      "Departamento": "HUANUCO",
      "Provincia": "YAROWILCA",
      "Distrito": "OBAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 235,
      "Mes": 2,
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "ICA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 236,
      "Mes": 2,
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "ICA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 237,
      "Mes": 2,
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "PARCONA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 238,
      "Mes": 2,
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "SUBTANJALLA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 239,
      "Mes": 2,
      "Departamento": "ICA",
      "Provincia": "NAZCA",
      "Distrito": "NAZCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 240,
      "Mes": 2,
      "Departamento": "ICA",
      "Provincia": "NAZCA",
      "Distrito": "NAZCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 241,
      "Mes": 2,
      "Departamento": "ICA",
      "Provincia": "NAZCA",
      "Distrito": "VISTA ALEGRE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 242,
      "Mes": 2,
      "Departamento": "ICA",
      "Provincia": "PALPA",
      "Distrito": "RIO GRANDE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 243,
      "Mes": 2,
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "TUPAC AMARU INCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 244,
      "Mes": 2,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "CHILCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 245,
      "Mes": 2,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "CHONGOS ALTO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 246,
      "Mes": 2,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "EL TAMBO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 247,
      "Mes": 2,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "HUANCAN",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 248,
      "Mes": 2,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "PILCOMAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 249,
      "Mes": 2,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "SICAYA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 250,
      "Mes": 2,
      "Departamento": "JUNIN",
      "Provincia": "CONCEPCION",
      "Distrito": "MITO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 251,
      "Mes": 2,
      "Departamento": "JUNIN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PERENE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 252,
      "Mes": 2,
      "Departamento": "JUNIN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PICHANAKI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 253,
      "Mes": 2,
      "Departamento": "JUNIN",
      "Provincia": "JAUJA",
      "Distrito": "JAUJA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 254,
      "Mes": 2,
      "Departamento": "JUNIN",
      "Provincia": "JAUJA",
      "Distrito": "LLOCLLAPAMPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 255,
      "Mes": 2,
      "Departamento": "JUNIN",
      "Provincia": "JAUJA",
      "Distrito": "MASMA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 256,
      "Mes": 2,
      "Departamento": "JUNIN",
      "Provincia": "JAUJA",
      "Distrito": "MOLINOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 257,
      "Mes": 2,
      "Departamento": "JUNIN",
      "Provincia": "JAUJA",
      "Distrito": "SAN LORENZO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 258,
      "Mes": 2,
      "Departamento": "JUNIN",
      "Provincia": "JAUJA",
      "Distrito": "SAN LORENZO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 259,
      "Mes": 2,
      "Departamento": "JUNIN",
      "Provincia": "JAUJA",
      "Distrito": "YAUYOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 260,
      "Mes": 2,
      "Departamento": "JUNIN",
      "Provincia": "JAUJA",
      "Distrito": "YAUYOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 261,
      "Mes": 2,
      "Departamento": "JUNIN",
      "Provincia": "JUNIN",
      "Distrito": "CARHUAMAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 262,
      "Mes": 2,
      "Departamento": "JUNIN",
      "Provincia": "SATIPO",
      "Distrito": "SATIPO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 263,
      "Mes": 2,
      "Departamento": "JUNIN",
      "Provincia": "SATIPO",
      "Distrito": "PANGOA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 264,
      "Mes": 2,
      "Departamento": "JUNIN",
      "Provincia": "SATIPO",
      "Distrito": "PANGOA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 265,
      "Mes": 2,
      "Departamento": "JUNIN",
      "Provincia": "TARMA",
      "Distrito": "TARMA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 266,
      "Mes": 2,
      "Departamento": "JUNIN",
      "Provincia": "TARMA",
      "Distrito": "PALCA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 267,
      "Mes": 2,
      "Departamento": "JUNIN",
      "Provincia": "TARMA",
      "Distrito": "TAPO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 268,
      "Mes": 2,
      "Departamento": "LA LIBERTAD",
      "Provincia": "CHEPEN",
      "Distrito": "PUEBLO NUEVO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 269,
      "Mes": 2,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "CHICLAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 270,
      "Mes": 2,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "JOSE LEONARDO ORTIZ",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 271,
      "Mes": 2,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "JOSE LEONARDO ORTIZ",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 272,
      "Mes": 2,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "JOSE LEONARDO ORTIZ",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 273,
      "Mes": 2,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "LA VICTORIA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 274,
      "Mes": 2,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "LA VICTORIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 275,
      "Mes": 2,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "LA VICTORIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 276,
      "Mes": 2,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "FERREÑAFE",
      "Distrito": "PITIPO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 277,
      "Mes": 2,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LIMA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 278,
      "Mes": 2,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LURIGANCHO (CHOSICA)",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 279,
      "Mes": 2,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LURIN",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 280,
      "Mes": 2,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LURIN",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 281,
      "Mes": 2,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "PACHACAMAC",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 282,
      "Mes": 2,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "PUNTA HERMOSA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 283,
      "Mes": 2,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "PUNTA NEGRA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 284,
      "Mes": 2,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "VILLA EL SALVADOR",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 285,
      "Mes": 2,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "VILLA EL SALVADOR",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 286,
      "Mes": 2,
      "Departamento": "LIMA",
      "Provincia": "HUAURA",
      "Distrito": "SANTA MARIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 287,
      "Mes": 2,
      "Departamento": "LORETO",
      "Provincia": "MAYNAS",
      "Distrito": "PUNCHANA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 288,
      "Mes": 2,
      "Departamento": "MADRE DE DIOS",
      "Provincia": "TAMBOPATA",
      "Distrito": "LABERINTO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 289,
      "Mes": 2,
      "Departamento": "MOQUEGUA",
      "Provincia": "MARISCAL NIETO",
      "Distrito": "MOQUEGUA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 290,
      "Mes": 2,
      "Departamento": "MOQUEGUA",
      "Provincia": "MARISCAL NIETO",
      "Distrito": "MOQUEGUA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 291,
      "Mes": 2,
      "Departamento": "MOQUEGUA",
      "Provincia": "ILO",
      "Distrito": "ILO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 292,
      "Mes": 2,
      "Departamento": "MOQUEGUA",
      "Provincia": "ILO",
      "Distrito": "ILO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 293,
      "Mes": 2,
      "Departamento": "PIURA",
      "Provincia": "PIURA",
      "Distrito": "CATACAOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 294,
      "Mes": 2,
      "Departamento": "PIURA",
      "Provincia": "PIURA",
      "Distrito": "LA ARENA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 295,
      "Mes": 2,
      "Departamento": "PIURA",
      "Provincia": "PIURA",
      "Distrito": "LA UNION",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 296,
      "Mes": 2,
      "Departamento": "PIURA",
      "Provincia": "PIURA",
      "Distrito": "LA UNION",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 297,
      "Mes": 2,
      "Departamento": "PIURA",
      "Provincia": "AYABACA",
      "Distrito": "PAIMAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 298,
      "Mes": 2,
      "Departamento": "PIURA",
      "Provincia": "MORROPON",
      "Distrito": "SAN JUAN DE BIGOTE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 299,
      "Mes": 2,
      "Departamento": "PIURA",
      "Provincia": "PAITA",
      "Distrito": "VICHAYAL",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 300,
      "Mes": 2,
      "Departamento": "SAN MARTIN",
      "Provincia": "BELLAVISTA",
      "Distrito": "BAJO BIAVO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 301,
      "Mes": 2,
      "Departamento": "SAN MARTIN",
      "Provincia": "LAMAS",
      "Distrito": "CAYNARACHI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 302,
      "Mes": 2,
      "Departamento": "SAN MARTIN",
      "Provincia": "MARISCAL CACERES",
      "Distrito": "JUANJUI",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 303,
      "Mes": 2,
      "Departamento": "SAN MARTIN",
      "Provincia": "RIOJA",
      "Distrito": "SAN FERNANDO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 304,
      "Mes": 2,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "TACNA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 305,
      "Mes": 2,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "ALTO DE LA ALIANZA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 306,
      "Mes": 2,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "ALTO DE LA ALIANZA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 307,
      "Mes": 2,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CIUDAD NUEVA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 308,
      "Mes": 2,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CIUDAD NUEVA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 309,
      "Mes": 2,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "POCOLLAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 310,
      "Mes": 2,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CORONEL GREGORIO ALBARRACIN LANCHIPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 311,
      "Mes": 2,
      "Departamento": "TACNA",
      "Provincia": "CANDARAVE",
      "Distrito": "CANDARAVE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 312,
      "Mes": 2,
      "Departamento": "UCAYALI",
      "Provincia": "CORONEL PORTILLO",
      "Distrito": "IPARIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 313,
      "Mes": 3,
      "Departamento": "ANCASH",
      "Provincia": "BOLOGNESI",
      "Distrito": "CAJACAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 314,
      "Mes": 3,
      "Departamento": "ANCASH",
      "Provincia": "CARHUAZ",
      "Distrito": "CARHUAZ",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 315,
      "Mes": 3,
      "Departamento": "ANCASH",
      "Provincia": "CARHUAZ",
      "Distrito": "YUNGAR",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 316,
      "Mes": 3,
      "Departamento": "ANCASH",
      "Provincia": "HUARMEY",
      "Distrito": "COCHAPETI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 317,
      "Mes": 3,
      "Departamento": "ANCASH",
      "Provincia": "HUAYLAS",
      "Distrito": "MATO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 318,
      "Mes": 3,
      "Departamento": "ANCASH",
      "Provincia": "RECUAY",
      "Distrito": "CATAC",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 319,
      "Mes": 3,
      "Departamento": "ANCASH",
      "Provincia": "SANTA",
      "Distrito": "SAMANCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 320,
      "Mes": 3,
      "Departamento": "ANCASH",
      "Provincia": "SANTA",
      "Distrito": "NUEVO CHIMBOTE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 321,
      "Mes": 3,
      "Departamento": "ANCASH",
      "Provincia": "SANTA",
      "Distrito": "NUEVO CHIMBOTE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 322,
      "Mes": 3,
      "Departamento": "ANCASH",
      "Provincia": "SANTA",
      "Distrito": "NUEVO CHIMBOTE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 323,
      "Mes": 3,
      "Departamento": "ANCASH",
      "Provincia": "YUNGAY",
      "Distrito": "MANCOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 324,
      "Mes": 3,
      "Departamento": "APURIMAC",
      "Provincia": "ABANCAY",
      "Distrito": "ABANCAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 325,
      "Mes": 3,
      "Departamento": "APURIMAC",
      "Provincia": "ABANCAY",
      "Distrito": "ABANCAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 326,
      "Mes": 3,
      "Departamento": "APURIMAC",
      "Provincia": "ABANCAY",
      "Distrito": "ABANCAY",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 327,
      "Mes": 3,
      "Departamento": "APURIMAC",
      "Provincia": "ABANCAY",
      "Distrito": "HUANIPACA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 328,
      "Mes": 3,
      "Departamento": "APURIMAC",
      "Provincia": "ABANCAY",
      "Distrito": "LAMBRAMA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 329,
      "Mes": 3,
      "Departamento": "APURIMAC",
      "Provincia": "ABANCAY",
      "Distrito": "SAN PEDRO DE CACHORA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 330,
      "Mes": 3,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "ANDAHUAYLAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 331,
      "Mes": 3,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "ANDAHUAYLAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 332,
      "Mes": 3,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "CHIARA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 333,
      "Mes": 3,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "HUANCARAMA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 334,
      "Mes": 3,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "KISHUARA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 335,
      "Mes": 3,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "KISHUARA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 336,
      "Mes": 3,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "PACUCHA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 337,
      "Mes": 3,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "PACUCHA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 338,
      "Mes": 3,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "PACUCHA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 339,
      "Mes": 3,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "PACUCHA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 340,
      "Mes": 3,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "PAMPACHIRI",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 341,
      "Mes": 3,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "PAMPACHIRI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 342,
      "Mes": 3,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "SAN ANTONIO DE CACHI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 343,
      "Mes": 3,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "SAN JERONIMO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 344,
      "Mes": 3,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "KAQUIABAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 345,
      "Mes": 3,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "KAQUIABAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 346,
      "Mes": 3,
      "Departamento": "APURIMAC",
      "Provincia": "ANTABAMBA",
      "Distrito": "HUAQUIRCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 347,
      "Mes": 3,
      "Departamento": "APURIMAC",
      "Provincia": "AYMARAES",
      "Distrito": "SAN JUAN DE CHACÑA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 348,
      "Mes": 3,
      "Departamento": "APURIMAC",
      "Provincia": "AYMARAES",
      "Distrito": "SAÑAYCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 349,
      "Mes": 3,
      "Departamento": "APURIMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "COTABAMBAS",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 350,
      "Mes": 3,
      "Departamento": "APURIMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "COTABAMBAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 351,
      "Mes": 3,
      "Departamento": "APURIMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "COTABAMBAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 352,
      "Mes": 3,
      "Departamento": "APURIMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "COYLLURQUI",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 353,
      "Mes": 3,
      "Departamento": "APURIMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "COYLLURQUI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 354,
      "Mes": 3,
      "Departamento": "APURIMAC",
      "Provincia": "CHINCHEROS",
      "Distrito": "CHINCHEROS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 355,
      "Mes": 3,
      "Departamento": "APURIMAC",
      "Provincia": "CHINCHEROS",
      "Distrito": "HUACCANA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 356,
      "Mes": 3,
      "Departamento": "APURIMAC",
      "Provincia": "CHINCHEROS",
      "Distrito": "ONGOY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 357,
      "Mes": 3,
      "Departamento": "APURIMAC",
      "Provincia": "GRAU",
      "Distrito": "GAMARRA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 358,
      "Mes": 3,
      "Departamento": "APURIMAC",
      "Provincia": "GRAU",
      "Distrito": "HUAYLLATI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 359,
      "Mes": 3,
      "Departamento": "APURIMAC",
      "Provincia": "GRAU",
      "Distrito": "PROGRESO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 360,
      "Mes": 3,
      "Departamento": "AREQUIPA",
      "Provincia": "AREQUIPA",
      "Distrito": "CHARACATO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 361,
      "Mes": 3,
      "Departamento": "AREQUIPA",
      "Provincia": "AREQUIPA",
      "Distrito": "MARIANO MELGAR",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 362,
      "Mes": 3,
      "Departamento": "AREQUIPA",
      "Provincia": "AREQUIPA",
      "Distrito": "MARIANO MELGAR",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 363,
      "Mes": 3,
      "Departamento": "AREQUIPA",
      "Provincia": "CAYLLOMA",
      "Distrito": "MAJES",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 364,
      "Mes": 3,
      "Departamento": "AREQUIPA",
      "Provincia": "ISLAY",
      "Distrito": "COCACHACRA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 365,
      "Mes": 3,
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "AYACUCHO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 366,
      "Mes": 3,
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "AYACUCHO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 367,
      "Mes": 3,
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "PACAYCASA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 368,
      "Mes": 3,
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "VINCHOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 369,
      "Mes": 3,
      "Departamento": "AYACUCHO",
      "Provincia": "LA MAR",
      "Distrito": "SAN MIGUEL",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 370,
      "Mes": 3,
      "Departamento": "AYACUCHO",
      "Provincia": "VICTOR FAJARDO",
      "Distrito": "HUANCARAYLLA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 371,
      "Mes": 3,
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CALLAO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 372,
      "Mes": 3,
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CALLAO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 373,
      "Mes": 3,
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CALLAO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 374,
      "Mes": 3,
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CARMEN DE LA LEGUA REYNOSO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 375,
      "Mes": 3,
      "Departamento": "CUSCO",
      "Provincia": "URUBAMBA",
      "Distrito": "MACHUPICCHU",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 376,
      "Mes": 3,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "HUANCAVELICA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 377,
      "Mes": 3,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "HUANCAVELICA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 378,
      "Mes": 3,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "HUANCAVELICA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 379,
      "Mes": 3,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "ACORIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 380,
      "Mes": 3,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "LARIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 381,
      "Mes": 3,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "YAULI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 382,
      "Mes": 3,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "HUANDO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 383,
      "Mes": 3,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ACOBAMBA",
      "Distrito": "ACOBAMBA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 384,
      "Mes": 3,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ACOBAMBA",
      "Distrito": "ACOBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 385,
      "Mes": 3,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ACOBAMBA",
      "Distrito": "MARCAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 386,
      "Mes": 3,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ACOBAMBA",
      "Distrito": "PAUCARA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 387,
      "Mes": 3,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "LIRCAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 388,
      "Mes": 3,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "CONGALLA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 389,
      "Mes": 3,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "SECCLLA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 390,
      "Mes": 3,
      "Departamento": "HUANCAVELICA",
      "Provincia": "CASTROVIRREYNA",
      "Distrito": "SAN JUAN",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 391,
      "Mes": 3,
      "Departamento": "HUANCAVELICA",
      "Provincia": "CASTROVIRREYNA",
      "Distrito": "TICRAPO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 392,
      "Mes": 3,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUAYTARA",
      "Distrito": "SANTIAGO DE CHOCORVOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 393,
      "Mes": 3,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "PAMPAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 394,
      "Mes": 3,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "PAMPAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 395,
      "Mes": 3,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "AHUAYCHA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 396,
      "Mes": 3,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "COLCABAMBA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 397,
      "Mes": 3,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "COLCABAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 398,
      "Mes": 3,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "DANIEL HERNANDEZ",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 399,
      "Mes": 3,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "QUISHUAR",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 400,
      "Mes": 3,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "SALCABAMBA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 401,
      "Mes": 3,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "SALCABAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 402,
      "Mes": 3,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "SURCUBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 403,
      "Mes": 3,
      "Departamento": "HUANUCO",
      "Provincia": "HUANUCO",
      "Distrito": "CHURUBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 404,
      "Mes": 3,
      "Departamento": "HUANUCO",
      "Provincia": "HUANUCO",
      "Distrito": "SAN PEDRO DE CHAULAN",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 405,
      "Mes": 3,
      "Departamento": "HUANUCO",
      "Provincia": "DOS DE MAYO",
      "Distrito": "LA UNION",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 406,
      "Mes": 3,
      "Departamento": "HUANUCO",
      "Provincia": "DOS DE MAYO",
      "Distrito": "LA UNION",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 407,
      "Mes": 3,
      "Departamento": "HUANUCO",
      "Provincia": "DOS DE MAYO",
      "Distrito": "QUIVILLA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 408,
      "Mes": 3,
      "Departamento": "HUANUCO",
      "Provincia": "HUACAYBAMBA",
      "Distrito": "PINRA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 409,
      "Mes": 3,
      "Departamento": "HUANUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "JACAS GRANDE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 410,
      "Mes": 3,
      "Departamento": "HUANUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "RUPA-RUPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 411,
      "Mes": 3,
      "Departamento": "HUANUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "HERMILIO VALDIZAN",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 412,
      "Mes": 3,
      "Departamento": "HUANUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "LUYANDO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 413,
      "Mes": 3,
      "Departamento": "HUANUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "LUYANDO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 414,
      "Mes": 3,
      "Departamento": "HUANUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "MARIANO DAMASO BERAUN",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 415,
      "Mes": 3,
      "Departamento": "HUANUCO",
      "Provincia": "PACHITEA",
      "Distrito": "MOLINO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 416,
      "Mes": 3,
      "Departamento": "HUANUCO",
      "Provincia": "PUERTO INCA",
      "Distrito": "HONORIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 417,
      "Mes": 3,
      "Departamento": "HUANUCO",
      "Provincia": "PUERTO INCA",
      "Distrito": "YUYAPICHIS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 418,
      "Mes": 3,
      "Departamento": "HUANUCO",
      "Provincia": "LAURICOCHA",
      "Distrito": "SAN MIGUEL DE CAURI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 419,
      "Mes": 3,
      "Departamento": "HUANUCO",
      "Provincia": "YAROWILCA",
      "Distrito": "CHAVINILLO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 420,
      "Mes": 3,
      "Departamento": "HUANUCO",
      "Provincia": "YAROWILCA",
      "Distrito": "CAHUAC",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 421,
      "Mes": 3,
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "ICA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 422,
      "Mes": 3,
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "ICA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 423,
      "Mes": 3,
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "LA TINGUIÑA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 424,
      "Mes": 3,
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "OCUCAJE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 425,
      "Mes": 3,
      "Departamento": "ICA",
      "Provincia": "NAZCA",
      "Distrito": "NAZCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 426,
      "Mes": 3,
      "Departamento": "ICA",
      "Provincia": "NAZCA",
      "Distrito": "CHANGUILLO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 427,
      "Mes": 3,
      "Departamento": "ICA",
      "Provincia": "NAZCA",
      "Distrito": "EL INGENIO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 428,
      "Mes": 3,
      "Departamento": "ICA",
      "Provincia": "NAZCA",
      "Distrito": "EL INGENIO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 429,
      "Mes": 3,
      "Departamento": "ICA",
      "Provincia": "NAZCA",
      "Distrito": "MARCONA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 430,
      "Mes": 3,
      "Departamento": "ICA",
      "Provincia": "PALPA",
      "Distrito": "LLIPATA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 431,
      "Mes": 3,
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "PISCO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 432,
      "Mes": 3,
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "PISCO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 433,
      "Mes": 3,
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "PISCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 434,
      "Mes": 3,
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "PISCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 435,
      "Mes": 3,
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "HUMAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 436,
      "Mes": 3,
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "INDEPENDENCIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 437,
      "Mes": 3,
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "SAN ANDRES",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 438,
      "Mes": 3,
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "TUPAC AMARU INCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 439,
      "Mes": 3,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "HUANCAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 440,
      "Mes": 3,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "HUANCAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 441,
      "Mes": 3,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "CHILCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 442,
      "Mes": 3,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "CHILCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 443,
      "Mes": 3,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "CHILCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 444,
      "Mes": 3,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "EL TAMBO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 445,
      "Mes": 3,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "EL TAMBO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 446,
      "Mes": 3,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "HUALHUAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 447,
      "Mes": 3,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "HUANCAN",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 448,
      "Mes": 3,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "INGENIO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 449,
      "Mes": 3,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "PARIAHUANCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 450,
      "Mes": 3,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "PARIAHUANCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 451,
      "Mes": 3,
      "Departamento": "JUNIN",
      "Provincia": "CONCEPCION",
      "Distrito": "COCHAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 452,
      "Mes": 3,
      "Departamento": "JUNIN",
      "Provincia": "CONCEPCION",
      "Distrito": "ORCOTUNA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 453,
      "Mes": 3,
      "Departamento": "JUNIN",
      "Provincia": "CONCEPCION",
      "Distrito": "SANTA ROSA DE OCOPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 454,
      "Mes": 3,
      "Departamento": "JUNIN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "CHANCHAMAYO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 455,
      "Mes": 3,
      "Departamento": "JUNIN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "CHANCHAMAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 456,
      "Mes": 3,
      "Departamento": "JUNIN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "CHANCHAMAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 457,
      "Mes": 3,
      "Departamento": "JUNIN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PERENE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 458,
      "Mes": 3,
      "Departamento": "JUNIN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PICHANAKI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 459,
      "Mes": 3,
      "Departamento": "JUNIN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PICHANAKI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 460,
      "Mes": 3,
      "Departamento": "JUNIN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "SAN LUIS DE SHUARO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 461,
      "Mes": 3,
      "Departamento": "JUNIN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "SAN RAMON",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 462,
      "Mes": 3,
      "Departamento": "JUNIN",
      "Provincia": "JAUJA",
      "Distrito": "JAUJA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 463,
      "Mes": 3,
      "Departamento": "JUNIN",
      "Provincia": "JAUJA",
      "Distrito": "LEONOR ORDOÑEZ",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 464,
      "Mes": 3,
      "Departamento": "JUNIN",
      "Provincia": "SATIPO",
      "Distrito": "SATIPO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 465,
      "Mes": 3,
      "Departamento": "JUNIN",
      "Provincia": "SATIPO",
      "Distrito": "PAMPA HERMOSA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 466,
      "Mes": 3,
      "Departamento": "JUNIN",
      "Provincia": "SATIPO",
      "Distrito": "PANGOA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 467,
      "Mes": 3,
      "Departamento": "JUNIN",
      "Provincia": "SATIPO",
      "Distrito": "PANGOA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 468,
      "Mes": 3,
      "Departamento": "JUNIN",
      "Provincia": "TARMA",
      "Distrito": "TARMA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 469,
      "Mes": 3,
      "Departamento": "JUNIN",
      "Provincia": "TARMA",
      "Distrito": "TARMA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 470,
      "Mes": 3,
      "Departamento": "JUNIN",
      "Provincia": "CHUPACA",
      "Distrito": "CHUPACA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 471,
      "Mes": 3,
      "Departamento": "JUNIN",
      "Provincia": "CHUPACA",
      "Distrito": "AHUAC",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 472,
      "Mes": 3,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "CHICLAYO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 473,
      "Mes": 3,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "CHICLAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 474,
      "Mes": 3,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "CHICLAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 475,
      "Mes": 3,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "CHICLAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 476,
      "Mes": 3,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "LA VICTORIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 477,
      "Mes": 3,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "FERREÑAFE",
      "Distrito": "FERREÑAFE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 478,
      "Mes": 3,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "FERREÑAFE",
      "Distrito": "INCAHUASI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 479,
      "Mes": 3,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "LAMBAYEQUE",
      "Distrito": "OLMOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 480,
      "Mes": 3,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "LAMBAYEQUE",
      "Distrito": "OLMOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 481,
      "Mes": 3,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LURIGANCHO (CHOSICA)",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 482,
      "Mes": 3,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LURIGANCHO (CHOSICA)",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 483,
      "Mes": 3,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "PACHACAMAC",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 484,
      "Mes": 3,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "PACHACAMAC",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 485,
      "Mes": 3,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "SAN BARTOLO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 486,
      "Mes": 3,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "VILLA EL SALVADOR",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 487,
      "Mes": 3,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "VILLA EL SALVADOR",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 488,
      "Mes": 3,
      "Departamento": "LIMA",
      "Provincia": "CAÑETE",
      "Distrito": "SAN LUIS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 489,
      "Mes": 3,
      "Departamento": "LIMA",
      "Provincia": "CAÑETE",
      "Distrito": "SAN LUIS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 490,
      "Mes": 3,
      "Departamento": "LIMA",
      "Provincia": "HUAROCHIRI",
      "Distrito": "SAN MATEO DE OTAO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 491,
      "Mes": 3,
      "Departamento": "LIMA",
      "Provincia": "YAUYOS",
      "Distrito": "QUINCHES",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 492,
      "Mes": 3,
      "Departamento": "LORETO",
      "Provincia": "MAYNAS",
      "Distrito": "PUNCHANA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 493,
      "Mes": 3,
      "Departamento": "LORETO",
      "Provincia": "MAYNAS",
      "Distrito": "PUNCHANA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 494,
      "Mes": 3,
      "Departamento": "LORETO",
      "Provincia": "MAYNAS",
      "Distrito": "PUNCHANA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 495,
      "Mes": 3,
      "Departamento": "MADRE DE DIOS",
      "Provincia": "TAMBOPATA",
      "Distrito": "TAMBOPATA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 496,
      "Mes": 3,
      "Departamento": "MADRE DE DIOS",
      "Provincia": "TAMBOPATA",
      "Distrito": "TAMBOPATA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 497,
      "Mes": 3,
      "Departamento": "PASCO",
      "Provincia": "OXAPAMPA",
      "Distrito": "PALCAZU",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 498,
      "Mes": 3,
      "Departamento": "PIURA",
      "Provincia": "AYABACA",
      "Distrito": "AYABACA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 499,
      "Mes": 3,
      "Departamento": "PIURA",
      "Provincia": "AYABACA",
      "Distrito": "PAIMAS",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 500,
      "Mes": 3,
      "Departamento": "PIURA",
      "Provincia": "HUANCABAMBA",
      "Distrito": "CANCHAQUE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 501,
      "Mes": 3,
      "Departamento": "SAN MARTIN",
      "Provincia": "MOYOBAMBA",
      "Distrito": "MOYOBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 502,
      "Mes": 3,
      "Departamento": "SAN MARTIN",
      "Provincia": "BELLAVISTA",
      "Distrito": "BELLAVISTA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 503,
      "Mes": 3,
      "Departamento": "SAN MARTIN",
      "Provincia": "BELLAVISTA",
      "Distrito": "BAJO BIAVO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 504,
      "Mes": 3,
      "Departamento": "SAN MARTIN",
      "Provincia": "BELLAVISTA",
      "Distrito": "BAJO BIAVO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 505,
      "Mes": 3,
      "Departamento": "SAN MARTIN",
      "Provincia": "BELLAVISTA",
      "Distrito": "BAJO BIAVO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 506,
      "Mes": 3,
      "Departamento": "SAN MARTIN",
      "Provincia": "RIOJA",
      "Distrito": "SAN FERNANDO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 507,
      "Mes": 3,
      "Departamento": "SAN MARTIN",
      "Provincia": "SAN MARTIN",
      "Distrito": "CHIPURANA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 508,
      "Mes": 3,
      "Departamento": "SAN MARTIN",
      "Provincia": "SAN MARTIN",
      "Distrito": "HUIMBAYOC",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 509,
      "Mes": 3,
      "Departamento": "SAN MARTIN",
      "Provincia": "SAN MARTIN",
      "Distrito": "SHAPAJA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 510,
      "Mes": 3,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "TACNA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 511,
      "Mes": 3,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "TACNA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 512,
      "Mes": 3,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "TACNA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 513,
      "Mes": 3,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "ALTO DE LA ALIANZA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 514,
      "Mes": 3,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "ALTO DE LA ALIANZA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 515,
      "Mes": 3,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CIUDAD NUEVA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 516,
      "Mes": 3,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "PALCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 517,
      "Mes": 3,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "SAMA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 518,
      "Mes": 3,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CORONEL GREGORIO ALBARRACIN LANCHIPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 519,
      "Mes": 3,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CORONEL GREGORIO ALBARRACIN LANCHIPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 520,
      "Mes": 3,
      "Departamento": "TACNA",
      "Provincia": "CANDARAVE",
      "Distrito": "CANDARAVE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 521,
      "Mes": 3,
      "Departamento": "TACNA",
      "Provincia": "JORGE BASADRE",
      "Distrito": "LOCUMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 522,
      "Mes": 3,
      "Departamento": "TACNA",
      "Provincia": "JORGE BASADRE",
      "Distrito": "ILABAYA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 523,
      "Mes": 3,
      "Departamento": "TACNA",
      "Provincia": "JORGE BASADRE",
      "Distrito": "ILABAYA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 524,
      "Mes": 3,
      "Departamento": "TACNA",
      "Provincia": "TARATA",
      "Distrito": "TARATA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 525,
      "Mes": 3,
      "Departamento": "TACNA",
      "Provincia": "TARATA",
      "Distrito": "HEROES ALBARRACIN",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 526,
      "Mes": 3,
      "Departamento": "TACNA",
      "Provincia": "TARATA",
      "Distrito": "TARUCACHI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 527,
      "Mes": 3,
      "Departamento": "TACNA",
      "Provincia": "TARATA",
      "Distrito": "TARUCACHI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 528,
      "Mes": 4,
      "Departamento": "ANCASH",
      "Provincia": "HUARAZ",
      "Distrito": "INDEPENDENCIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 529,
      "Mes": 4,
      "Departamento": "ANCASH",
      "Provincia": "HUAYLAS",
      "Distrito": "MATO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 530,
      "Mes": 4,
      "Departamento": "ANCASH",
      "Provincia": "SANTA",
      "Distrito": "SAMANCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 531,
      "Mes": 4,
      "Departamento": "APURIMAC",
      "Provincia": "ABANCAY",
      "Distrito": "ABANCAY",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 532,
      "Mes": 4,
      "Departamento": "APURIMAC",
      "Provincia": "ABANCAY",
      "Distrito": "ABANCAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 533,
      "Mes": 4,
      "Departamento": "APURIMAC",
      "Provincia": "ABANCAY",
      "Distrito": "ABANCAY",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 534,
      "Mes": 4,
      "Departamento": "APURIMAC",
      "Provincia": "ABANCAY",
      "Distrito": "CHACOCHE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 535,
      "Mes": 4,
      "Departamento": "APURIMAC",
      "Provincia": "ABANCAY",
      "Distrito": "CURAHUASI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 536,
      "Mes": 4,
      "Departamento": "APURIMAC",
      "Provincia": "ABANCAY",
      "Distrito": "SAN PEDRO DE CACHORA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 537,
      "Mes": 4,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "ANDAHUAYLAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 538,
      "Mes": 4,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "ANDARAPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 539,
      "Mes": 4,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "HUANCARAMA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 540,
      "Mes": 4,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "HUAYANA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 541,
      "Mes": 4,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "KISHUARA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 542,
      "Mes": 4,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "PAMPACHIRI",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 543,
      "Mes": 4,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "SAN JERONIMO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 544,
      "Mes": 4,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "SAN MIGUEL DE CHACCRAMPA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 545,
      "Mes": 4,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "JOSÉ MARÍA ARGUEDAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 546,
      "Mes": 4,
      "Departamento": "APURIMAC",
      "Provincia": "AYMARAES",
      "Distrito": "SAN JUAN DE CHACÑA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 547,
      "Mes": 4,
      "Departamento": "APURIMAC",
      "Provincia": "AYMARAES",
      "Distrito": "TORAYA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 548,
      "Mes": 4,
      "Departamento": "APURIMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "TAMBOBAMBA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 549,
      "Mes": 4,
      "Departamento": "APURIMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "COTABAMBAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 550,
      "Mes": 4,
      "Departamento": "APURIMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "COYLLURQUI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 551,
      "Mes": 4,
      "Departamento": "APURIMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "HAQUIRA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 552,
      "Mes": 4,
      "Departamento": "APURIMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "HAQUIRA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 553,
      "Mes": 4,
      "Departamento": "APURIMAC",
      "Provincia": "GRAU",
      "Distrito": "SAN ANTONIO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 554,
      "Mes": 4,
      "Departamento": "AREQUIPA",
      "Provincia": "AREQUIPA",
      "Distrito": "YANAHUARA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 555,
      "Mes": 4,
      "Departamento": "AREQUIPA",
      "Provincia": "CARAVELI",
      "Distrito": "ACARI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 556,
      "Mes": 4,
      "Departamento": "AREQUIPA",
      "Provincia": "CARAVELI",
      "Distrito": "ACARI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 557,
      "Mes": 4,
      "Departamento": "AREQUIPA",
      "Provincia": "CASTILLA",
      "Distrito": "VIRACO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 558,
      "Mes": 4,
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "CARMEN ALTO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 559,
      "Mes": 4,
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "OCROS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 560,
      "Mes": 4,
      "Departamento": "AYACUCHO",
      "Provincia": "LA MAR",
      "Distrito": "SAN MIGUEL",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 561,
      "Mes": 4,
      "Departamento": "AYACUCHO",
      "Provincia": "LA MAR",
      "Distrito": "ANCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 562,
      "Mes": 4,
      "Departamento": "CAJAMARCA",
      "Provincia": "CAJAMARCA",
      "Distrito": "CAJAMARCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 563,
      "Mes": 4,
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CALLAO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 564,
      "Mes": 4,
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CALLAO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 565,
      "Mes": 4,
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "BELLAVISTA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 566,
      "Mes": 4,
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "BELLAVISTA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 567,
      "Mes": 4,
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "LA PERLA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 568,
      "Mes": 4,
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "LA PUNTA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 569,
      "Mes": 4,
      "Departamento": "CUSCO",
      "Provincia": "LA CONVENCION",
      "Distrito": "SANTA ANA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 570,
      "Mes": 4,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "HUANCAVELICA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 571,
      "Mes": 4,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "CUENCA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 572,
      "Mes": 4,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "LARIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 573,
      "Mes": 4,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "PALCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 574,
      "Mes": 4,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "VILCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 575,
      "Mes": 4,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "YAULI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 576,
      "Mes": 4,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "HUANDO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 577,
      "Mes": 4,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ACOBAMBA",
      "Distrito": "MARCAS",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 578,
      "Mes": 4,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ACOBAMBA",
      "Distrito": "MARCAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 579,
      "Mes": 4,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ACOBAMBA",
      "Distrito": "ROSARIO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 580,
      "Mes": 4,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "LIRCAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 581,
      "Mes": 4,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "ANCHONGA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 582,
      "Mes": 4,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "ANCHONGA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 583,
      "Mes": 4,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "CCOCHACCASA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 584,
      "Mes": 4,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "SANTO TOMAS DE PATA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 585,
      "Mes": 4,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "SECCLLA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 586,
      "Mes": 4,
      "Departamento": "HUANCAVELICA",
      "Provincia": "CASTROVIRREYNA",
      "Distrito": "CASTROVIRREYNA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 587,
      "Mes": 4,
      "Departamento": "HUANCAVELICA",
      "Provincia": "CASTROVIRREYNA",
      "Distrito": "ARMA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 588,
      "Mes": 4,
      "Departamento": "HUANCAVELICA",
      "Provincia": "CASTROVIRREYNA",
      "Distrito": "MOLLEPAMPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 589,
      "Mes": 4,
      "Departamento": "HUANCAVELICA",
      "Provincia": "CHURCAMPA",
      "Distrito": "CHURCAMPA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 590,
      "Mes": 4,
      "Departamento": "HUANCAVELICA",
      "Provincia": "CHURCAMPA",
      "Distrito": "CHURCAMPA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 591,
      "Mes": 4,
      "Departamento": "HUANCAVELICA",
      "Provincia": "CHURCAMPA",
      "Distrito": "SAN PEDRO DE CORIS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 592,
      "Mes": 4,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "PAMPAS",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 593,
      "Mes": 4,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "PAMPAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 594,
      "Mes": 4,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "PAMPAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 595,
      "Mes": 4,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "ACRAQUIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 596,
      "Mes": 4,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "ACRAQUIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 597,
      "Mes": 4,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "AHUAYCHA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 598,
      "Mes": 4,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "COLCABAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 599,
      "Mes": 4,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "COLCABAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 600,
      "Mes": 4,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "HUACHOCOLPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 601,
      "Mes": 4,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "HUACHOCOLPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 602,
      "Mes": 4,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "PAZOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 603,
      "Mes": 4,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "SALCAHUASI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 604,
      "Mes": 4,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "SURCUBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 605,
      "Mes": 4,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "SURCUBAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 606,
      "Mes": 4,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "TINTAY PUNCU",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 607,
      "Mes": 4,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "QUICHUAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 608,
      "Mes": 4,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "QUICHUAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 609,
      "Mes": 4,
      "Departamento": "HUANUCO",
      "Provincia": "HUANUCO",
      "Distrito": "HUANUCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 610,
      "Mes": 4,
      "Departamento": "HUANUCO",
      "Provincia": "HUANUCO",
      "Distrito": "HUANUCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 611,
      "Mes": 4,
      "Departamento": "HUANUCO",
      "Provincia": "HUANUCO",
      "Distrito": "HUANUCO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 612,
      "Mes": 4,
      "Departamento": "HUANUCO",
      "Provincia": "HUANUCO",
      "Distrito": "SANTA MARIA DEL VALLE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 613,
      "Mes": 4,
      "Departamento": "HUANUCO",
      "Provincia": "AMBO",
      "Distrito": "AMBO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 614,
      "Mes": 4,
      "Departamento": "HUANUCO",
      "Provincia": "HUACAYBAMBA",
      "Distrito": "HUACAYBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 615,
      "Mes": 4,
      "Departamento": "HUANUCO",
      "Provincia": "HUACAYBAMBA",
      "Distrito": "PINRA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 616,
      "Mes": 4,
      "Departamento": "HUANUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "LLATA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 617,
      "Mes": 4,
      "Departamento": "HUANUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "LLATA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 618,
      "Mes": 4,
      "Departamento": "HUANUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "JIRCAN",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 619,
      "Mes": 4,
      "Departamento": "HUANUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "MIRAFLORES",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 620,
      "Mes": 4,
      "Departamento": "HUANUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "MONZON",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 621,
      "Mes": 4,
      "Departamento": "HUANUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "MONZON",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 622,
      "Mes": 4,
      "Departamento": "HUANUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "PUNCHAO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 623,
      "Mes": 4,
      "Departamento": "HUANUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "PUÑOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 624,
      "Mes": 4,
      "Departamento": "HUANUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "SINGA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 625,
      "Mes": 4,
      "Departamento": "HUANUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "TANTAMAYO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 626,
      "Mes": 4,
      "Departamento": "HUANUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "JOSE CRESPO Y CASTILLO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 627,
      "Mes": 4,
      "Departamento": "HUANUCO",
      "Provincia": "PUERTO INCA",
      "Distrito": "YUYAPICHIS",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 628,
      "Mes": 4,
      "Departamento": "HUANUCO",
      "Provincia": "LAURICOCHA",
      "Distrito": "BAÑOS",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 629,
      "Mes": 4,
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "ICA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 630,
      "Mes": 4,
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "ICA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 631,
      "Mes": 4,
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "PARCONA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 632,
      "Mes": 4,
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "SANTIAGO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 633,
      "Mes": 4,
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "TATE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 634,
      "Mes": 4,
      "Departamento": "ICA",
      "Provincia": "CHINCHA",
      "Distrito": "ALTO LARAN",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 635,
      "Mes": 4,
      "Departamento": "ICA",
      "Provincia": "NAZCA",
      "Distrito": "NAZCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 636,
      "Mes": 4,
      "Departamento": "ICA",
      "Provincia": "NAZCA",
      "Distrito": "VISTA ALEGRE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 637,
      "Mes": 4,
      "Departamento": "ICA",
      "Provincia": "PALPA",
      "Distrito": "PALPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 638,
      "Mes": 4,
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "PISCO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 639,
      "Mes": 4,
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "INDEPENDENCIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 640,
      "Mes": 4,
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "INDEPENDENCIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 641,
      "Mes": 4,
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "SAN ANDRES",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 642,
      "Mes": 4,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "HUANCAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 643,
      "Mes": 4,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "CHILCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 644,
      "Mes": 4,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "CHILCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 645,
      "Mes": 4,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "EL TAMBO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 646,
      "Mes": 4,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "EL TAMBO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 647,
      "Mes": 4,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "HUAYUCACHI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 648,
      "Mes": 4,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "INGENIO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 649,
      "Mes": 4,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "PILCOMAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 650,
      "Mes": 4,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "SAPALLANGA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 651,
      "Mes": 4,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "SICAYA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 652,
      "Mes": 4,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "SANTO DOMINGO DE ACOBAMBA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 653,
      "Mes": 4,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "SANTO DOMINGO DE ACOBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 654,
      "Mes": 4,
      "Departamento": "JUNIN",
      "Provincia": "CONCEPCION",
      "Distrito": "HEROINAS TOLEDO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 655,
      "Mes": 4,
      "Departamento": "JUNIN",
      "Provincia": "CONCEPCION",
      "Distrito": "SANTA ROSA DE OCOPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 656,
      "Mes": 4,
      "Departamento": "JUNIN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "CHANCHAMAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 657,
      "Mes": 4,
      "Departamento": "JUNIN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PERENE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 658,
      "Mes": 4,
      "Departamento": "JUNIN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "SAN RAMON",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 659,
      "Mes": 4,
      "Departamento": "JUNIN",
      "Provincia": "JAUJA",
      "Distrito": "JAUJA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 660,
      "Mes": 4,
      "Departamento": "JUNIN",
      "Provincia": "JAUJA",
      "Distrito": "MONOBAMBA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 661,
      "Mes": 4,
      "Departamento": "JUNIN",
      "Provincia": "JAUJA",
      "Distrito": "MUQUI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 662,
      "Mes": 4,
      "Departamento": "JUNIN",
      "Provincia": "JUNIN",
      "Distrito": "JUNIN",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 663,
      "Mes": 4,
      "Departamento": "JUNIN",
      "Provincia": "JUNIN",
      "Distrito": "ULCUMAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 664,
      "Mes": 4,
      "Departamento": "JUNIN",
      "Provincia": "SATIPO",
      "Distrito": "SATIPO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 665,
      "Mes": 4,
      "Departamento": "JUNIN",
      "Provincia": "SATIPO",
      "Distrito": "PAMPA HERMOSA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 666,
      "Mes": 4,
      "Departamento": "JUNIN",
      "Provincia": "SATIPO",
      "Distrito": "PANGOA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 667,
      "Mes": 4,
      "Departamento": "JUNIN",
      "Provincia": "SATIPO",
      "Distrito": "RIO NEGRO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 668,
      "Mes": 4,
      "Departamento": "JUNIN",
      "Provincia": "SATIPO",
      "Distrito": "RIO TAMBO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 669,
      "Mes": 4,
      "Departamento": "JUNIN",
      "Provincia": "SATIPO",
      "Distrito": "RIO TAMBO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 670,
      "Mes": 4,
      "Departamento": "JUNIN",
      "Provincia": "TARMA",
      "Distrito": "TARMA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 671,
      "Mes": 4,
      "Departamento": "JUNIN",
      "Provincia": "TARMA",
      "Distrito": "ACOBAMBA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 672,
      "Mes": 4,
      "Departamento": "JUNIN",
      "Provincia": "TARMA",
      "Distrito": "ACOBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 673,
      "Mes": 4,
      "Departamento": "JUNIN",
      "Provincia": "TARMA",
      "Distrito": "ACOBAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 674,
      "Mes": 4,
      "Departamento": "JUNIN",
      "Provincia": "TARMA",
      "Distrito": "LA UNION",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 675,
      "Mes": 4,
      "Departamento": "JUNIN",
      "Provincia": "TARMA",
      "Distrito": "LA UNION",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 676,
      "Mes": 4,
      "Departamento": "JUNIN",
      "Provincia": "TARMA",
      "Distrito": "PALCAMAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 677,
      "Mes": 4,
      "Departamento": "JUNIN",
      "Provincia": "YAULI",
      "Distrito": "MARCAPOMACOCHA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 678,
      "Mes": 4,
      "Departamento": "LA LIBERTAD",
      "Provincia": "TRUJILLO",
      "Distrito": "POROTO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 679,
      "Mes": 4,
      "Departamento": "LA LIBERTAD",
      "Provincia": "CHEPEN",
      "Distrito": "PACANGA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 680,
      "Mes": 4,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "CHICLAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 681,
      "Mes": 4,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "ETEN",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 682,
      "Mes": 4,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "ETEN PUERTO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 683,
      "Mes": 4,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "JOSE LEONARDO ORTIZ",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 684,
      "Mes": 4,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "FERREÑAFE",
      "Distrito": "CAÑARIS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 685,
      "Mes": 4,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "FERREÑAFE",
      "Distrito": "INCAHUASI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 686,
      "Mes": 4,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "FERREÑAFE",
      "Distrito": "PITIPO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 687,
      "Mes": 4,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "FERREÑAFE",
      "Distrito": "PUEBLO NUEVO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 688,
      "Mes": 4,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "FERREÑAFE",
      "Distrito": "PUEBLO NUEVO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 689,
      "Mes": 4,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "LAMBAYEQUE",
      "Distrito": "LAMBAYEQUE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 690,
      "Mes": 4,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "LAMBAYEQUE",
      "Distrito": "SAN JOSE",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 691,
      "Mes": 4,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "ATE",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 692,
      "Mes": 4,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "ATE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 693,
      "Mes": 4,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "ATE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 694,
      "Mes": 4,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "CHACLACAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 695,
      "Mes": 4,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "CHACLACAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 696,
      "Mes": 4,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "CHORRILLOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 697,
      "Mes": 4,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "CHORRILLOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 698,
      "Mes": 4,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "CHORRILLOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 699,
      "Mes": 4,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "CHORRILLOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 700,
      "Mes": 4,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LURIGANCHO (CHOSICA)",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 701,
      "Mes": 4,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LURIGANCHO (CHOSICA)",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 702,
      "Mes": 4,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LURIN",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 703,
      "Mes": 4,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "PACHACAMAC",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 704,
      "Mes": 4,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "PUCUSANA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 705,
      "Mes": 4,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "PUNTA HERMOSA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 706,
      "Mes": 4,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "PUNTA NEGRA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 707,
      "Mes": 4,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "SANTIAGO DE SURCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 708,
      "Mes": 4,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "SANTIAGO DE SURCO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 709,
      "Mes": 4,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "VILLA EL SALVADOR",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 710,
      "Mes": 4,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "VILLA EL SALVADOR",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 711,
      "Mes": 4,
      "Departamento": "LIMA",
      "Provincia": "CAJATAMBO",
      "Distrito": "CAJATAMBO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 712,
      "Mes": 4,
      "Departamento": "LIMA",
      "Provincia": "CAÑETE",
      "Distrito": "SAN LUIS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 713,
      "Mes": 4,
      "Departamento": "LIMA",
      "Provincia": "YAUYOS",
      "Distrito": "YAUYOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 714,
      "Mes": 4,
      "Departamento": "MADRE DE DIOS",
      "Provincia": "TAMBOPATA",
      "Distrito": "LAS PIEDRAS",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 715,
      "Mes": 4,
      "Departamento": "MOQUEGUA",
      "Provincia": "GENERAL SANCHEZ CERRO",
      "Distrito": "UBINAS",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 716,
      "Mes": 4,
      "Departamento": "MOQUEGUA",
      "Provincia": "GENERAL SANCHEZ CERRO",
      "Distrito": "UBINAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 717,
      "Mes": 4,
      "Departamento": "MOQUEGUA",
      "Provincia": "ILO",
      "Distrito": "ILO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 718,
      "Mes": 4,
      "Departamento": "PIURA",
      "Provincia": "AYABACA",
      "Distrito": "AYABACA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 719,
      "Mes": 4,
      "Departamento": "PIURA",
      "Provincia": "AYABACA",
      "Distrito": "PAIMAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 720,
      "Mes": 4,
      "Departamento": "PUNO",
      "Provincia": "PUNO",
      "Distrito": "PUNO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 721,
      "Mes": 4,
      "Departamento": "SAN MARTIN",
      "Provincia": "MOYOBAMBA",
      "Distrito": "MOYOBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 722,
      "Mes": 4,
      "Departamento": "SAN MARTIN",
      "Provincia": "BELLAVISTA",
      "Distrito": "BAJO BIAVO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 723,
      "Mes": 4,
      "Departamento": "SAN MARTIN",
      "Provincia": "BELLAVISTA",
      "Distrito": "BAJO BIAVO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 724,
      "Mes": 4,
      "Departamento": "SAN MARTIN",
      "Provincia": "BELLAVISTA",
      "Distrito": "BAJO BIAVO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 725,
      "Mes": 4,
      "Departamento": "SAN MARTIN",
      "Provincia": "EL DORADO",
      "Distrito": "AGUA BLANCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 726,
      "Mes": 4,
      "Departamento": "SAN MARTIN",
      "Provincia": "LAMAS",
      "Distrito": "CAYNARACHI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 727,
      "Mes": 4,
      "Departamento": "SAN MARTIN",
      "Provincia": "SAN MARTIN",
      "Distrito": "HUIMBAYOC",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 728,
      "Mes": 4,
      "Departamento": "SAN MARTIN",
      "Provincia": "SAN MARTIN",
      "Distrito": "LA BANDA DE SHILCAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 729,
      "Mes": 4,
      "Departamento": "SAN MARTIN",
      "Provincia": "SAN MARTIN",
      "Distrito": "PAPAPLAYA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 730,
      "Mes": 4,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "TACNA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 731,
      "Mes": 4,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "TACNA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 732,
      "Mes": 4,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "TACNA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 733,
      "Mes": 4,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "TACNA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 734,
      "Mes": 4,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "ALTO DE LA ALIANZA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 735,
      "Mes": 4,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "ALTO DE LA ALIANZA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 736,
      "Mes": 4,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CIUDAD NUEVA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 737,
      "Mes": 4,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "PACHIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 738,
      "Mes": 4,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "PALCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 739,
      "Mes": 4,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CORONEL GREGORIO ALBARRACIN LANCHIPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 740,
      "Mes": 4,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CORONEL GREGORIO ALBARRACIN LANCHIPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 741,
      "Mes": 4,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CORONEL GREGORIO ALBARRACIN LANCHIPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 742,
      "Mes": 4,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CORONEL GREGORIO ALBARRACIN LANCHIPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 743,
      "Mes": 4,
      "Departamento": "TACNA",
      "Provincia": "CANDARAVE",
      "Distrito": "CANDARAVE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 744,
      "Mes": 4,
      "Departamento": "TACNA",
      "Provincia": "JORGE BASADRE",
      "Distrito": "ILABAYA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 745,
      "Mes": 4,
      "Departamento": "TACNA",
      "Provincia": "TARATA",
      "Distrito": "TARUCACHI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 746,
      "Mes": 5,
      "Departamento": "ANCASH",
      "Provincia": "HUARAZ",
      "Distrito": "INDEPENDENCIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 747,
      "Mes": 5,
      "Departamento": "ANCASH",
      "Provincia": "HUAYLAS",
      "Distrito": "MATO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 748,
      "Mes": 5,
      "Departamento": "ANCASH",
      "Provincia": "SANTA",
      "Distrito": "CHIMBOTE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 749,
      "Mes": 5,
      "Departamento": "APURIMAC",
      "Provincia": "ABANCAY",
      "Distrito": "ABANCAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 750,
      "Mes": 5,
      "Departamento": "APURIMAC",
      "Provincia": "ABANCAY",
      "Distrito": "CURAHUASI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 751,
      "Mes": 5,
      "Departamento": "APURIMAC",
      "Provincia": "ABANCAY",
      "Distrito": "HUANIPACA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 752,
      "Mes": 5,
      "Departamento": "APURIMAC",
      "Provincia": "ABANCAY",
      "Distrito": "LAMBRAMA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 753,
      "Mes": 5,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "ANDAHUAYLAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 754,
      "Mes": 5,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "ANDAHUAYLAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 755,
      "Mes": 5,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "ANDARAPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 756,
      "Mes": 5,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "HUANCARAMA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 757,
      "Mes": 5,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "KISHUARA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 758,
      "Mes": 5,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "PAMPACHIRI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 759,
      "Mes": 5,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "SAN MIGUEL DE CHACCRAMPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 760,
      "Mes": 5,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "KAQUIABAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 761,
      "Mes": 5,
      "Departamento": "APURIMAC",
      "Provincia": "AYMARAES",
      "Distrito": "COTARUSE",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 762,
      "Mes": 5,
      "Departamento": "APURIMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "TAMBOBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 763,
      "Mes": 5,
      "Departamento": "APURIMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "COYLLURQUI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 764,
      "Mes": 5,
      "Departamento": "APURIMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "COYLLURQUI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 765,
      "Mes": 5,
      "Departamento": "APURIMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "HAQUIRA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 766,
      "Mes": 5,
      "Departamento": "APURIMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "HAQUIRA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 767,
      "Mes": 5,
      "Departamento": "APURIMAC",
      "Provincia": "CHINCHEROS",
      "Distrito": "CHINCHEROS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 768,
      "Mes": 5,
      "Departamento": "APURIMAC",
      "Provincia": "CHINCHEROS",
      "Distrito": "CHINCHEROS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 769,
      "Mes": 5,
      "Departamento": "APURIMAC",
      "Provincia": "GRAU",
      "Distrito": "VILCABAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 770,
      "Mes": 5,
      "Departamento": "APURIMAC",
      "Provincia": "GRAU",
      "Distrito": "VILCABAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 771,
      "Mes": 5,
      "Departamento": "APURIMAC",
      "Provincia": "GRAU",
      "Distrito": "CURASCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 772,
      "Mes": 5,
      "Departamento": "AREQUIPA",
      "Provincia": "AREQUIPA",
      "Distrito": "MIRAFLORES",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 773,
      "Mes": 5,
      "Departamento": "AREQUIPA",
      "Provincia": "AREQUIPA",
      "Distrito": "YANAHUARA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 774,
      "Mes": 5,
      "Departamento": "AREQUIPA",
      "Provincia": "CAMANA",
      "Distrito": "MARIANO NICOLAS VALCARCEL",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 775,
      "Mes": 5,
      "Departamento": "AREQUIPA",
      "Provincia": "CARAVELI",
      "Distrito": "ACARI",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 776,
      "Mes": 5,
      "Departamento": "AREQUIPA",
      "Provincia": "CARAVELI",
      "Distrito": "ATICO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 777,
      "Mes": 5,
      "Departamento": "AREQUIPA",
      "Provincia": "CASTILLA",
      "Distrito": "URACA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 778,
      "Mes": 5,
      "Departamento": "AREQUIPA",
      "Provincia": "CAYLLOMA",
      "Distrito": "TUTI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 779,
      "Mes": 5,
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "AYACUCHO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 780,
      "Mes": 5,
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "AYACUCHO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 781,
      "Mes": 5,
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "CARMEN ALTO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 782,
      "Mes": 5,
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "SAN JUAN BAUTISTA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 783,
      "Mes": 5,
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "JESUS NAZARENO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 784,
      "Mes": 5,
      "Departamento": "AYACUCHO",
      "Provincia": "HUANTA",
      "Distrito": "AYAHUANCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 785,
      "Mes": 5,
      "Departamento": "AYACUCHO",
      "Provincia": "LA MAR",
      "Distrito": "SAN MIGUEL",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 786,
      "Mes": 5,
      "Departamento": "AYACUCHO",
      "Provincia": "LA MAR",
      "Distrito": "SAN MIGUEL",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 787,
      "Mes": 5,
      "Departamento": "AYACUCHO",
      "Provincia": "LUCANAS",
      "Distrito": "CHIPAO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 788,
      "Mes": 5,
      "Departamento": "AYACUCHO",
      "Provincia": "LUCANAS",
      "Distrito": "SAN CRISTOBAL",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 789,
      "Mes": 5,
      "Departamento": "AYACUCHO",
      "Provincia": "PAUCAR DEL SARA SARA",
      "Distrito": "OYOLO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 790,
      "Mes": 5,
      "Departamento": "AYACUCHO",
      "Provincia": "VICTOR FAJARDO",
      "Distrito": "ALCAMENCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 791,
      "Mes": 5,
      "Departamento": "AYACUCHO",
      "Provincia": "VICTOR FAJARDO",
      "Distrito": "HUAMANQUIQUIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 792,
      "Mes": 5,
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CALLAO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 793,
      "Mes": 5,
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CALLAO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 794,
      "Mes": 5,
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "VENTANILLA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 795,
      "Mes": 5,
      "Departamento": "CUSCO",
      "Provincia": "CANCHIS",
      "Distrito": "MARANGANI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 796,
      "Mes": 5,
      "Departamento": "CUSCO",
      "Provincia": "CANCHIS",
      "Distrito": "TINTA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 797,
      "Mes": 5,
      "Departamento": "CUSCO",
      "Provincia": "LA CONVENCION",
      "Distrito": "SANTA ANA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 798,
      "Mes": 5,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "HUANCAVELICA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 799,
      "Mes": 5,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "ACORIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 800,
      "Mes": 5,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "LARIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 801,
      "Mes": 5,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "MOYA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 802,
      "Mes": 5,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "YAULI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 803,
      "Mes": 5,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "YAULI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 804,
      "Mes": 5,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "ASCENSION",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 805,
      "Mes": 5,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ACOBAMBA",
      "Distrito": "ACOBAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 806,
      "Mes": 5,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "LIRCAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 807,
      "Mes": 5,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "LIRCAY",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 808,
      "Mes": 5,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "LIRCAY",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 809,
      "Mes": 5,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "ANCHONGA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 810,
      "Mes": 5,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "ANCHONGA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 811,
      "Mes": 5,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "ANCHONGA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 812,
      "Mes": 5,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "JULCAMARCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 813,
      "Mes": 5,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "SAN ANTONIO DE ANTAPARCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 814,
      "Mes": 5,
      "Departamento": "HUANCAVELICA",
      "Provincia": "CASTROVIRREYNA",
      "Distrito": "CASTROVIRREYNA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 815,
      "Mes": 5,
      "Departamento": "HUANCAVELICA",
      "Provincia": "CASTROVIRREYNA",
      "Distrito": "TANTARA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 816,
      "Mes": 5,
      "Departamento": "HUANCAVELICA",
      "Provincia": "CASTROVIRREYNA",
      "Distrito": "TANTARA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 817,
      "Mes": 5,
      "Departamento": "HUANCAVELICA",
      "Provincia": "CASTROVIRREYNA",
      "Distrito": "TANTARA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 818,
      "Mes": 5,
      "Departamento": "HUANCAVELICA",
      "Provincia": "CASTROVIRREYNA",
      "Distrito": "TICRAPO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 819,
      "Mes": 5,
      "Departamento": "HUANCAVELICA",
      "Provincia": "CHURCAMPA",
      "Distrito": "ANCO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 820,
      "Mes": 5,
      "Departamento": "HUANCAVELICA",
      "Provincia": "CHURCAMPA",
      "Distrito": "EL CARMEN",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 821,
      "Mes": 5,
      "Departamento": "HUANCAVELICA",
      "Provincia": "CHURCAMPA",
      "Distrito": "PACHAMARCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 822,
      "Mes": 5,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "PAMPAS",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 823,
      "Mes": 5,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "COLCABAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 824,
      "Mes": 5,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "HUACHOCOLPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 825,
      "Mes": 5,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "HUARIBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 826,
      "Mes": 5,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "HUARIBAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 827,
      "Mes": 5,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "SALCAHUASI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 828,
      "Mes": 5,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "SAN MARCOS DE ROCCHAC",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 829,
      "Mes": 5,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "TINTAY PUNCU",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 830,
      "Mes": 5,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "QUICHUAS",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 831,
      "Mes": 5,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "QUICHUAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 832,
      "Mes": 5,
      "Departamento": "HUANUCO",
      "Provincia": "AMBO",
      "Distrito": "HUACAR",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 833,
      "Mes": 5,
      "Departamento": "HUANUCO",
      "Provincia": "DOS DE MAYO",
      "Distrito": "QUIVILLA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 834,
      "Mes": 5,
      "Departamento": "HUANUCO",
      "Provincia": "DOS DE MAYO",
      "Distrito": "QUIVILLA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 835,
      "Mes": 5,
      "Departamento": "HUANUCO",
      "Provincia": "HUACAYBAMBA",
      "Distrito": "HUACAYBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 836,
      "Mes": 5,
      "Departamento": "HUANUCO",
      "Provincia": "HUACAYBAMBA",
      "Distrito": "CANCHABAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 837,
      "Mes": 5,
      "Departamento": "HUANUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "LLATA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 838,
      "Mes": 5,
      "Departamento": "HUANUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "ARANCAY",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 839,
      "Mes": 5,
      "Departamento": "HUANUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "PUÑOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 840,
      "Mes": 5,
      "Departamento": "HUANUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "LUYANDO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 841,
      "Mes": 5,
      "Departamento": "HUANUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "MARIANO DAMASO BERAUN",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 842,
      "Mes": 5,
      "Departamento": "HUANUCO",
      "Provincia": "LAURICOCHA",
      "Distrito": "BAÑOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 843,
      "Mes": 5,
      "Departamento": "HUANUCO",
      "Provincia": "LAURICOCHA",
      "Distrito": "BAÑOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 844,
      "Mes": 5,
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "ICA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 845,
      "Mes": 5,
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "ICA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 846,
      "Mes": 5,
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "ICA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 847,
      "Mes": 5,
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "SANTIAGO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 848,
      "Mes": 5,
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "SUBTANJALLA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 849,
      "Mes": 5,
      "Departamento": "ICA",
      "Provincia": "CHINCHA",
      "Distrito": "CHINCHA ALTA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 850,
      "Mes": 5,
      "Departamento": "ICA",
      "Provincia": "NAZCA",
      "Distrito": "NAZCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 851,
      "Mes": 5,
      "Departamento": "ICA",
      "Provincia": "NAZCA",
      "Distrito": "EL INGENIO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 852,
      "Mes": 5,
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "PISCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 853,
      "Mes": 5,
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "PISCO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 854,
      "Mes": 5,
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "HUMAY",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 855,
      "Mes": 5,
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "TUPAC AMARU INCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 856,
      "Mes": 5,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "HUANCAYO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 857,
      "Mes": 5,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "HUANCAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 858,
      "Mes": 5,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "HUANCAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 859,
      "Mes": 5,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "CHILCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 860,
      "Mes": 5,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "HUAYUCACHI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 861,
      "Mes": 5,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "PARIAHUANCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 862,
      "Mes": 5,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "SANTO DOMINGO DE ACOBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 863,
      "Mes": 5,
      "Departamento": "JUNIN",
      "Provincia": "CONCEPCION",
      "Distrito": "ANDAMARCA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 864,
      "Mes": 5,
      "Departamento": "JUNIN",
      "Provincia": "CONCEPCION",
      "Distrito": "COMAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 865,
      "Mes": 5,
      "Departamento": "JUNIN",
      "Provincia": "CONCEPCION",
      "Distrito": "ORCOTUNA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 866,
      "Mes": 5,
      "Departamento": "JUNIN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "CHANCHAMAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 867,
      "Mes": 5,
      "Departamento": "JUNIN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "CHANCHAMAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 868,
      "Mes": 5,
      "Departamento": "JUNIN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PERENE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 869,
      "Mes": 5,
      "Departamento": "JUNIN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PERENE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 870,
      "Mes": 5,
      "Departamento": "JUNIN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PICHANAKI",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 871,
      "Mes": 5,
      "Departamento": "JUNIN",
      "Provincia": "JAUJA",
      "Distrito": "JAUJA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 872,
      "Mes": 5,
      "Departamento": "JUNIN",
      "Provincia": "JAUJA",
      "Distrito": "JAUJA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 873,
      "Mes": 5,
      "Departamento": "JUNIN",
      "Provincia": "JAUJA",
      "Distrito": "CURICACA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 874,
      "Mes": 5,
      "Departamento": "JUNIN",
      "Provincia": "JAUJA",
      "Distrito": "JULCAN",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 875,
      "Mes": 5,
      "Departamento": "JUNIN",
      "Provincia": "JAUJA",
      "Distrito": "MASMA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 876,
      "Mes": 5,
      "Departamento": "JUNIN",
      "Provincia": "JAUJA",
      "Distrito": "SINCOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 877,
      "Mes": 5,
      "Departamento": "JUNIN",
      "Provincia": "JAUJA",
      "Distrito": "SINCOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 878,
      "Mes": 5,
      "Departamento": "JUNIN",
      "Provincia": "JAUJA",
      "Distrito": "YAUYOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 879,
      "Mes": 5,
      "Departamento": "JUNIN",
      "Provincia": "SATIPO",
      "Distrito": "SATIPO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 880,
      "Mes": 5,
      "Departamento": "JUNIN",
      "Provincia": "SATIPO",
      "Distrito": "SATIPO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 881,
      "Mes": 5,
      "Departamento": "JUNIN",
      "Provincia": "SATIPO",
      "Distrito": "PANGOA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 882,
      "Mes": 5,
      "Departamento": "JUNIN",
      "Provincia": "SATIPO",
      "Distrito": "RIO TAMBO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 883,
      "Mes": 5,
      "Departamento": "JUNIN",
      "Provincia": "TARMA",
      "Distrito": "TARMA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 884,
      "Mes": 5,
      "Departamento": "JUNIN",
      "Provincia": "TARMA",
      "Distrito": "PALCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 885,
      "Mes": 5,
      "Departamento": "JUNIN",
      "Provincia": "YAULI",
      "Distrito": "MARCAPOMACOCHA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 886,
      "Mes": 5,
      "Departamento": "JUNIN",
      "Provincia": "CHUPACA",
      "Distrito": "CHUPACA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 887,
      "Mes": 5,
      "Departamento": "JUNIN",
      "Provincia": "CHUPACA",
      "Distrito": "AHUAC",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 888,
      "Mes": 5,
      "Departamento": "JUNIN",
      "Provincia": "CHUPACA",
      "Distrito": "CHONGOS BAJO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 889,
      "Mes": 5,
      "Departamento": "JUNIN",
      "Provincia": "CHUPACA",
      "Distrito": "SAN JUAN DE ISCOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 890,
      "Mes": 5,
      "Departamento": "JUNIN",
      "Provincia": "CHUPACA",
      "Distrito": "TRES DE DICIEMBRE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 891,
      "Mes": 5,
      "Departamento": "JUNIN",
      "Provincia": "CHUPACA",
      "Distrito": "TRES DE DICIEMBRE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 892,
      "Mes": 5,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "CHICLAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 893,
      "Mes": 5,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "CHICLAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 894,
      "Mes": 5,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "CHICLAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 895,
      "Mes": 5,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "CHICLAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 896,
      "Mes": 5,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "LAGUNAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 897,
      "Mes": 5,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "MONSEFU",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 898,
      "Mes": 5,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "REQUE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 899,
      "Mes": 5,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "REQUE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 900,
      "Mes": 5,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "REQUE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 901,
      "Mes": 5,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "FERREÑAFE",
      "Distrito": "PITIPO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 902,
      "Mes": 5,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "LAMBAYEQUE",
      "Distrito": "MOCHUMI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 903,
      "Mes": 5,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "LAMBAYEQUE",
      "Distrito": "OLMOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 904,
      "Mes": 5,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "LAMBAYEQUE",
      "Distrito": "SAN JOSE",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 905,
      "Mes": 5,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "ATE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 906,
      "Mes": 5,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "ATE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 907,
      "Mes": 5,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "CHACLACAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 908,
      "Mes": 5,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "CHACLACAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 909,
      "Mes": 5,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "CHORRILLOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 910,
      "Mes": 5,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "CHORRILLOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 911,
      "Mes": 5,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "CHORRILLOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 912,
      "Mes": 5,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "CIENEGUILLA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 913,
      "Mes": 5,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "EL AGUSTINO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 914,
      "Mes": 5,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "EL AGUSTINO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 915,
      "Mes": 5,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "EL AGUSTINO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 916,
      "Mes": 5,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "EL AGUSTINO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 917,
      "Mes": 5,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LA MOLINA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 918,
      "Mes": 5,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LURIGANCHO (CHOSICA)",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 919,
      "Mes": 5,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "PACHACAMAC",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 920,
      "Mes": 5,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "SAN BARTOLO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 921,
      "Mes": 5,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "VILLA EL SALVADOR",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 922,
      "Mes": 5,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "VILLA EL SALVADOR",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 923,
      "Mes": 5,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "VILLA EL SALVADOR",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 924,
      "Mes": 5,
      "Departamento": "LIMA",
      "Provincia": "CAÑETE",
      "Distrito": "SAN LUIS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 925,
      "Mes": 5,
      "Departamento": "LIMA",
      "Provincia": "HUARAL",
      "Distrito": "AUCALLAMA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 926,
      "Mes": 5,
      "Departamento": "LIMA",
      "Provincia": "HUAURA",
      "Distrito": "SANTA MARIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 927,
      "Mes": 5,
      "Departamento": "LIMA",
      "Provincia": "YAUYOS",
      "Distrito": "YAUYOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 928,
      "Mes": 5,
      "Departamento": "MADRE DE DIOS",
      "Provincia": "TAMBOPATA",
      "Distrito": "TAMBOPATA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 929,
      "Mes": 5,
      "Departamento": "MADRE DE DIOS",
      "Provincia": "TAMBOPATA",
      "Distrito": "TAMBOPATA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 930,
      "Mes": 5,
      "Departamento": "MADRE DE DIOS",
      "Provincia": "TAMBOPATA",
      "Distrito": "TAMBOPATA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 931,
      "Mes": 5,
      "Departamento": "MADRE DE DIOS",
      "Provincia": "TAMBOPATA",
      "Distrito": "LAS PIEDRAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 932,
      "Mes": 5,
      "Departamento": "MOQUEGUA",
      "Provincia": "MARISCAL NIETO",
      "Distrito": "MOQUEGUA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 933,
      "Mes": 5,
      "Departamento": "MOQUEGUA",
      "Provincia": "GENERAL SANCHEZ CERRO",
      "Distrito": "UBINAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 934,
      "Mes": 5,
      "Departamento": "MOQUEGUA",
      "Provincia": "GENERAL SANCHEZ CERRO",
      "Distrito": "UBINAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 935,
      "Mes": 5,
      "Departamento": "MOQUEGUA",
      "Provincia": "ILO",
      "Distrito": "ILO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 936,
      "Mes": 5,
      "Departamento": "MOQUEGUA",
      "Provincia": "ILO",
      "Distrito": "ILO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 937,
      "Mes": 5,
      "Departamento": "MOQUEGUA",
      "Provincia": "ILO",
      "Distrito": "ILO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 938,
      "Mes": 5,
      "Departamento": "MOQUEGUA",
      "Provincia": "ILO",
      "Distrito": "EL ALGARROBAL",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 939,
      "Mes": 5,
      "Departamento": "MOQUEGUA",
      "Provincia": "ILO",
      "Distrito": "PACOCHA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 940,
      "Mes": 5,
      "Departamento": "PIURA",
      "Provincia": "PIURA",
      "Distrito": "CATACAOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 941,
      "Mes": 5,
      "Departamento": "PIURA",
      "Provincia": "PIURA",
      "Distrito": "CATACAOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 942,
      "Mes": 5,
      "Departamento": "PIURA",
      "Provincia": "PIURA",
      "Distrito": "LA UNION",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 943,
      "Mes": 5,
      "Departamento": "PIURA",
      "Provincia": "AYABACA",
      "Distrito": "AYABACA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 944,
      "Mes": 5,
      "Departamento": "PIURA",
      "Provincia": "AYABACA",
      "Distrito": "AYABACA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 945,
      "Mes": 5,
      "Departamento": "PIURA",
      "Provincia": "AYABACA",
      "Distrito": "PAIMAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 946,
      "Mes": 5,
      "Departamento": "PUNO",
      "Provincia": "PUNO",
      "Distrito": "PUNO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 947,
      "Mes": 5,
      "Departamento": "SAN MARTIN",
      "Provincia": "MOYOBAMBA",
      "Distrito": "MOYOBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 948,
      "Mes": 5,
      "Departamento": "SAN MARTIN",
      "Provincia": "BELLAVISTA",
      "Distrito": "BELLAVISTA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 949,
      "Mes": 5,
      "Departamento": "SAN MARTIN",
      "Provincia": "BELLAVISTA",
      "Distrito": "SAN PABLO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 950,
      "Mes": 5,
      "Departamento": "SAN MARTIN",
      "Provincia": "MARISCAL CACERES",
      "Distrito": "PAJARILLO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 951,
      "Mes": 5,
      "Departamento": "SAN MARTIN",
      "Provincia": "RIOJA",
      "Distrito": "RIOJA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 952,
      "Mes": 5,
      "Departamento": "SAN MARTIN",
      "Provincia": "RIOJA",
      "Distrito": "RIOJA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 953,
      "Mes": 5,
      "Departamento": "SAN MARTIN",
      "Provincia": "SAN MARTIN",
      "Distrito": "TARAPOTO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 954,
      "Mes": 5,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "TACNA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 955,
      "Mes": 5,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "TACNA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 956,
      "Mes": 5,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "TACNA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 957,
      "Mes": 5,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "TACNA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 958,
      "Mes": 5,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "ALTO DE LA ALIANZA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 959,
      "Mes": 5,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "ALTO DE LA ALIANZA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 960,
      "Mes": 5,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CIUDAD NUEVA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 961,
      "Mes": 5,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "INCLAN",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 962,
      "Mes": 5,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "PALCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 963,
      "Mes": 5,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CORONEL GREGORIO ALBARRACIN LANCHIPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 964,
      "Mes": 5,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CORONEL GREGORIO ALBARRACIN LANCHIPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 965,
      "Mes": 5,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CORONEL GREGORIO ALBARRACIN LANCHIPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 966,
      "Mes": 5,
      "Departamento": "TACNA",
      "Provincia": "CANDARAVE",
      "Distrito": "HUANUARA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 967,
      "Mes": 5,
      "Departamento": "TACNA",
      "Provincia": "CANDARAVE",
      "Distrito": "QUILAHUANI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 968,
      "Mes": 5,
      "Departamento": "TACNA",
      "Provincia": "JORGE BASADRE",
      "Distrito": "ILABAYA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 969,
      "Mes": 6,
      "Departamento": "ANCASH",
      "Provincia": "HUARAZ",
      "Distrito": "HUARAZ",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 970,
      "Mes": 6,
      "Departamento": "ANCASH",
      "Provincia": "CARHUAZ",
      "Distrito": "CARHUAZ",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 971,
      "Mes": 6,
      "Departamento": "ANCASH",
      "Provincia": "CARHUAZ",
      "Distrito": "YUNGAR",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 972,
      "Mes": 6,
      "Departamento": "ANCASH",
      "Provincia": "HUAYLAS",
      "Distrito": "MATO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 973,
      "Mes": 6,
      "Departamento": "ANCASH",
      "Provincia": "HUAYLAS",
      "Distrito": "PAMPAROMAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 974,
      "Mes": 6,
      "Departamento": "ANCASH",
      "Provincia": "RECUAY",
      "Distrito": "RECUAY",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 975,
      "Mes": 6,
      "Departamento": "ANCASH",
      "Provincia": "SANTA",
      "Distrito": "CHIMBOTE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 976,
      "Mes": 6,
      "Departamento": "APURIMAC",
      "Provincia": "ABANCAY",
      "Distrito": "ABANCAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 977,
      "Mes": 6,
      "Departamento": "APURIMAC",
      "Provincia": "ABANCAY",
      "Distrito": "CIRCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 978,
      "Mes": 6,
      "Departamento": "APURIMAC",
      "Provincia": "ABANCAY",
      "Distrito": "LAMBRAMA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 979,
      "Mes": 6,
      "Departamento": "APURIMAC",
      "Provincia": "ABANCAY",
      "Distrito": "PICHIRHUA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 980,
      "Mes": 6,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "ANDAHUAYLAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 981,
      "Mes": 6,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "ANDAHUAYLAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 982,
      "Mes": 6,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "ANDARAPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 983,
      "Mes": 6,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "HUANCARAMA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 984,
      "Mes": 6,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "KISHUARA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 985,
      "Mes": 6,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "KISHUARA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 986,
      "Mes": 6,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "PACUCHA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 987,
      "Mes": 6,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "SAN ANTONIO DE CACHI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 988,
      "Mes": 6,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "SAN MIGUEL DE CHACCRAMPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 989,
      "Mes": 6,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "SANTA MARIA DE CHICMO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 990,
      "Mes": 6,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "TURPO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 991,
      "Mes": 6,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "KAQUIABAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 992,
      "Mes": 6,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "JOSÉ MARÍA ARGUEDAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 993,
      "Mes": 6,
      "Departamento": "APURIMAC",
      "Provincia": "AYMARAES",
      "Distrito": "SAN JUAN DE CHACÑA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 994,
      "Mes": 6,
      "Departamento": "APURIMAC",
      "Provincia": "AYMARAES",
      "Distrito": "SAÑAYCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 995,
      "Mes": 6,
      "Departamento": "APURIMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "TAMBOBAMBA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 996,
      "Mes": 6,
      "Departamento": "APURIMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "TAMBOBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 997,
      "Mes": 6,
      "Departamento": "APURIMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "COTABAMBAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 998,
      "Mes": 6,
      "Departamento": "APURIMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "COYLLURQUI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 999,
      "Mes": 6,
      "Departamento": "APURIMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "HAQUIRA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1000,
      "Mes": 6,
      "Departamento": "APURIMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "HAQUIRA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1001,
      "Mes": 6,
      "Departamento": "APURIMAC",
      "Provincia": "CHINCHEROS",
      "Distrito": "ANCO-HUALLO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1002,
      "Mes": 6,
      "Departamento": "APURIMAC",
      "Provincia": "CHINCHEROS",
      "Distrito": "COCHARCAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1003,
      "Mes": 6,
      "Departamento": "APURIMAC",
      "Provincia": "CHINCHEROS",
      "Distrito": "ONGOY",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1004,
      "Mes": 6,
      "Departamento": "APURIMAC",
      "Provincia": "GRAU",
      "Distrito": "CHUQUIBAMBILLA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1005,
      "Mes": 6,
      "Departamento": "APURIMAC",
      "Provincia": "GRAU",
      "Distrito": "VIRUNDO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1006,
      "Mes": 6,
      "Departamento": "AREQUIPA",
      "Provincia": "AREQUIPA",
      "Distrito": "MARIANO MELGAR",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1007,
      "Mes": 6,
      "Departamento": "AREQUIPA",
      "Provincia": "AREQUIPA",
      "Distrito": "MIRAFLORES",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1008,
      "Mes": 6,
      "Departamento": "AREQUIPA",
      "Provincia": "AREQUIPA",
      "Distrito": "YANAHUARA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1009,
      "Mes": 6,
      "Departamento": "AREQUIPA",
      "Provincia": "CARAVELI",
      "Distrito": "ATICO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1010,
      "Mes": 6,
      "Departamento": "AREQUIPA",
      "Provincia": "CARAVELI",
      "Distrito": "ATICO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1011,
      "Mes": 6,
      "Departamento": "AREQUIPA",
      "Provincia": "CASTILLA",
      "Distrito": "URACA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1012,
      "Mes": 6,
      "Departamento": "AREQUIPA",
      "Provincia": "CASTILLA",
      "Distrito": "URACA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1013,
      "Mes": 6,
      "Departamento": "AREQUIPA",
      "Provincia": "CASTILLA",
      "Distrito": "VIRACO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1014,
      "Mes": 6,
      "Departamento": "AREQUIPA",
      "Provincia": "CAYLLOMA",
      "Distrito": "CHIVAY",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1015,
      "Mes": 6,
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "AYACUCHO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1016,
      "Mes": 6,
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "AYACUCHO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1017,
      "Mes": 6,
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "ACOCRO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1018,
      "Mes": 6,
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "CARMEN ALTO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1019,
      "Mes": 6,
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "ANDRES AVELINO CACERES DORREGARAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1020,
      "Mes": 6,
      "Departamento": "AYACUCHO",
      "Provincia": "CANGALLO",
      "Distrito": "CHUSCHI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1021,
      "Mes": 6,
      "Departamento": "AYACUCHO",
      "Provincia": "CANGALLO",
      "Distrito": "MARIA PARADO DE BELLIDO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1022,
      "Mes": 6,
      "Departamento": "AYACUCHO",
      "Provincia": "HUANTA",
      "Distrito": "SANTILLANA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1023,
      "Mes": 6,
      "Departamento": "AYACUCHO",
      "Provincia": "LA MAR",
      "Distrito": "SAN MIGUEL",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1024,
      "Mes": 6,
      "Departamento": "AYACUCHO",
      "Provincia": "LA MAR",
      "Distrito": "ANCO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1025,
      "Mes": 6,
      "Departamento": "AYACUCHO",
      "Provincia": "LA MAR",
      "Distrito": "CHILCAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1026,
      "Mes": 6,
      "Departamento": "AYACUCHO",
      "Provincia": "LUCANAS",
      "Distrito": "SAN PEDRO DE PALCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1027,
      "Mes": 6,
      "Departamento": "AYACUCHO",
      "Provincia": "PAUCAR DEL SARA SARA",
      "Distrito": "PAUSA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1028,
      "Mes": 6,
      "Departamento": "AYACUCHO",
      "Provincia": "PAUCAR DEL SARA SARA",
      "Distrito": "OYOLO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1029,
      "Mes": 6,
      "Departamento": "AYACUCHO",
      "Provincia": "SUCRE",
      "Distrito": "QUEROBAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1030,
      "Mes": 6,
      "Departamento": "AYACUCHO",
      "Provincia": "VICTOR FAJARDO",
      "Distrito": "HUANCAPI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1031,
      "Mes": 6,
      "Departamento": "AYACUCHO",
      "Provincia": "VICTOR FAJARDO",
      "Distrito": "ALCAMENCA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1032,
      "Mes": 6,
      "Departamento": "AYACUCHO",
      "Provincia": "VICTOR FAJARDO",
      "Distrito": "HUAMANQUIQUIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1033,
      "Mes": 6,
      "Departamento": "AYACUCHO",
      "Provincia": "VILCAS HUAMAN",
      "Distrito": "ACCOMARCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1034,
      "Mes": 6,
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CALLAO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1035,
      "Mes": 6,
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CALLAO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1036,
      "Mes": 6,
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CALLAO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1037,
      "Mes": 6,
      "Departamento": "CUSCO",
      "Provincia": "CANCHIS",
      "Distrito": "SICUANI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1038,
      "Mes": 6,
      "Departamento": "CUSCO",
      "Provincia": "CANCHIS",
      "Distrito": "SICUANI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1039,
      "Mes": 6,
      "Departamento": "CUSCO",
      "Provincia": "CANCHIS",
      "Distrito": "COMBAPATA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1040,
      "Mes": 6,
      "Departamento": "CUSCO",
      "Provincia": "LA CONVENCION",
      "Distrito": "VILCABAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1041,
      "Mes": 6,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "HUANCAVELICA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1042,
      "Mes": 6,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "HUANCAVELICA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1043,
      "Mes": 6,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "HUANCAVELICA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1044,
      "Mes": 6,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "ACORIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1045,
      "Mes": 6,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "MOYA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1046,
      "Mes": 6,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "YAULI",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1047,
      "Mes": 6,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "YAULI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1048,
      "Mes": 6,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "ASCENSION",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1049,
      "Mes": 6,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "HUANDO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1050,
      "Mes": 6,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ACOBAMBA",
      "Distrito": "ANDABAMBA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1051,
      "Mes": 6,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ACOBAMBA",
      "Distrito": "CAJA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1052,
      "Mes": 6,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ACOBAMBA",
      "Distrito": "MARCAS",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1053,
      "Mes": 6,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "LIRCAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1054,
      "Mes": 6,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "CCOCHACCASA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1055,
      "Mes": 6,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "CHINCHO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1056,
      "Mes": 6,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "JULCAMARCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1057,
      "Mes": 6,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "SAN ANTONIO DE ANTAPARCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1058,
      "Mes": 6,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "SAN ANTONIO DE ANTAPARCO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1059,
      "Mes": 6,
      "Departamento": "HUANCAVELICA",
      "Provincia": "CASTROVIRREYNA",
      "Distrito": "CASTROVIRREYNA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1060,
      "Mes": 6,
      "Departamento": "HUANCAVELICA",
      "Provincia": "CASTROVIRREYNA",
      "Distrito": "CHUPAMARCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1061,
      "Mes": 6,
      "Departamento": "HUANCAVELICA",
      "Provincia": "CASTROVIRREYNA",
      "Distrito": "CHUPAMARCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1062,
      "Mes": 6,
      "Departamento": "HUANCAVELICA",
      "Provincia": "CASTROVIRREYNA",
      "Distrito": "MOLLEPAMPA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1063,
      "Mes": 6,
      "Departamento": "HUANCAVELICA",
      "Provincia": "CASTROVIRREYNA",
      "Distrito": "MOLLEPAMPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1064,
      "Mes": 6,
      "Departamento": "HUANCAVELICA",
      "Provincia": "CHURCAMPA",
      "Distrito": "CHURCAMPA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1065,
      "Mes": 6,
      "Departamento": "HUANCAVELICA",
      "Provincia": "CHURCAMPA",
      "Distrito": "CHURCAMPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1066,
      "Mes": 6,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "PAMPAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1067,
      "Mes": 6,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "ACRAQUIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1068,
      "Mes": 6,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "COLCABAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1069,
      "Mes": 6,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "COLCABAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1070,
      "Mes": 6,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "DANIEL HERNANDEZ",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1071,
      "Mes": 6,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "DANIEL HERNANDEZ",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1072,
      "Mes": 6,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "HUACHOCOLPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1073,
      "Mes": 6,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "HUARIBAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1074,
      "Mes": 6,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "PAZOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1075,
      "Mes": 6,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "SALCAHUASI",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1076,
      "Mes": 6,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "TINTAY PUNCU",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1077,
      "Mes": 6,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "TINTAY PUNCU",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1078,
      "Mes": 6,
      "Departamento": "HUANUCO",
      "Provincia": "HUANUCO",
      "Distrito": "HUANUCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1079,
      "Mes": 6,
      "Departamento": "HUANUCO",
      "Provincia": "HUANUCO",
      "Distrito": "CHINCHAO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1080,
      "Mes": 6,
      "Departamento": "HUANUCO",
      "Provincia": "HUANUCO",
      "Distrito": "SANTA MARIA DEL VALLE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1081,
      "Mes": 6,
      "Departamento": "HUANUCO",
      "Provincia": "HUANUCO",
      "Distrito": "YARUMAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1082,
      "Mes": 6,
      "Departamento": "HUANUCO",
      "Provincia": "AMBO",
      "Distrito": "HUACAR",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1083,
      "Mes": 6,
      "Departamento": "HUANUCO",
      "Provincia": "AMBO",
      "Distrito": "SAN RAFAEL",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1084,
      "Mes": 6,
      "Departamento": "HUANUCO",
      "Provincia": "DOS DE MAYO",
      "Distrito": "MARIAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1085,
      "Mes": 6,
      "Departamento": "HUANUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "LLATA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1086,
      "Mes": 6,
      "Departamento": "HUANUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "JACAS GRANDE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1087,
      "Mes": 6,
      "Departamento": "HUANUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "MONZON",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1088,
      "Mes": 6,
      "Departamento": "HUANUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "PUÑOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1089,
      "Mes": 6,
      "Departamento": "HUANUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "DANIEL ALOMIA ROBLES",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1090,
      "Mes": 6,
      "Departamento": "HUANUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "LUYANDO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1091,
      "Mes": 6,
      "Departamento": "HUANUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "LUYANDO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1092,
      "Mes": 6,
      "Departamento": "HUANUCO",
      "Provincia": "PACHITEA",
      "Distrito": "PANAO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1093,
      "Mes": 6,
      "Departamento": "HUANUCO",
      "Provincia": "PUERTO INCA",
      "Distrito": "HONORIA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1094,
      "Mes": 6,
      "Departamento": "HUANUCO",
      "Provincia": "LAURICOCHA",
      "Distrito": "JESUS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1095,
      "Mes": 6,
      "Departamento": "HUANUCO",
      "Provincia": "LAURICOCHA",
      "Distrito": "RONDOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1096,
      "Mes": 6,
      "Departamento": "HUANUCO",
      "Provincia": "YAROWILCA",
      "Distrito": "CHACABAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1097,
      "Mes": 6,
      "Departamento": "HUANUCO",
      "Provincia": "YAROWILCA",
      "Distrito": "OBAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1098,
      "Mes": 6,
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "ICA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1099,
      "Mes": 6,
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "ICA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1100,
      "Mes": 6,
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "SALAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1101,
      "Mes": 6,
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "SAN JUAN BAUTISTA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1102,
      "Mes": 6,
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "SANTIAGO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1103,
      "Mes": 6,
      "Departamento": "ICA",
      "Provincia": "PALPA",
      "Distrito": "PALPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1104,
      "Mes": 6,
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "PISCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1105,
      "Mes": 6,
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "INDEPENDENCIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1106,
      "Mes": 6,
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "TUPAC AMARU INCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1107,
      "Mes": 6,
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "TUPAC AMARU INCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1108,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "HUANCAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1109,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "CHACAPAMPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1110,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "CHACAPAMPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1111,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "CHILCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1112,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "CHILCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1113,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "CHONGOS ALTO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1114,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "EL TAMBO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1115,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "EL TAMBO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1116,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "HUANCAN",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1117,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "HUAYUCACHI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1118,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "HUAYUCACHI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1119,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "SAPALLANGA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1120,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "SAPALLANGA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1121,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "SANTO DOMINGO DE ACOBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1122,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "SANTO DOMINGO DE ACOBAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1123,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "CONCEPCION",
      "Distrito": "ANDAMARCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1124,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "CONCEPCION",
      "Distrito": "COMAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1125,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "CHANCHAMAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1126,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PERENE",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1127,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PICHANAKI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1128,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PICHANAKI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1129,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "SAN LUIS DE SHUARO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1130,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "SAN RAMON",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1131,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "JAUJA",
      "Distrito": "MASMA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1132,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "JAUJA",
      "Distrito": "MUQUIYAUYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1133,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "JAUJA",
      "Distrito": "PARCO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1134,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "JAUJA",
      "Distrito": "YAUYOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1135,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "JAUJA",
      "Distrito": "YAUYOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1136,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "JUNIN",
      "Distrito": "CARHUAMAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1137,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "JUNIN",
      "Distrito": "ULCUMAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1138,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "SATIPO",
      "Distrito": "SATIPO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1139,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "SATIPO",
      "Distrito": "COVIRIALI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1140,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "SATIPO",
      "Distrito": "LLAYLLA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1141,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "SATIPO",
      "Distrito": "MAZAMARI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1142,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "SATIPO",
      "Distrito": "PANGOA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1143,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "SATIPO",
      "Distrito": "PANGOA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1144,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "SATIPO",
      "Distrito": "PANGOA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1145,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "SATIPO",
      "Distrito": "RIO TAMBO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1146,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "SATIPO",
      "Distrito": "RIO TAMBO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1147,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "TARMA",
      "Distrito": "HUASAHUASI",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1148,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "YAULI",
      "Distrito": "LA OROYA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1149,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "YAULI",
      "Distrito": "SANTA ROSA DE SACCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1150,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "CHUPACA",
      "Distrito": "AHUAC",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1151,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "CHUPACA",
      "Distrito": "AHUAC",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1152,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "CHUPACA",
      "Distrito": "CHONGOS BAJO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1153,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "CHUPACA",
      "Distrito": "HUACHAC",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1154,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "CHUPACA",
      "Distrito": "HUAMANCACA CHICO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1155,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "CHUPACA",
      "Distrito": "TRES DE DICIEMBRE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1156,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "CHUPACA",
      "Distrito": "TRES DE DICIEMBRE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1157,
      "Mes": 6,
      "Departamento": "JUNIN",
      "Provincia": "CHUPACA",
      "Distrito": "YANACANCHA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1158,
      "Mes": 6,
      "Departamento": "LA LIBERTAD",
      "Provincia": "BOLIVAR",
      "Distrito": "UCUNCHA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1159,
      "Mes": 6,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "CHICLAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1160,
      "Mes": 6,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "ETEN",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1161,
      "Mes": 6,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "JOSE LEONARDO ORTIZ",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1162,
      "Mes": 6,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "LA VICTORIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1163,
      "Mes": 6,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "LA VICTORIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1164,
      "Mes": 6,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "LA VICTORIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1165,
      "Mes": 6,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "SANTA ROSA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1166,
      "Mes": 6,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "FERREÑAFE",
      "Distrito": "CAÑARIS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1167,
      "Mes": 6,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "LAMBAYEQUE",
      "Distrito": "SAN JOSE",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1168,
      "Mes": 6,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "ATE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1169,
      "Mes": 6,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "ATE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1170,
      "Mes": 6,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "ATE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1171,
      "Mes": 6,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "BREÑA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1172,
      "Mes": 6,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "CHACLACAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1173,
      "Mes": 6,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "CHORRILLOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1174,
      "Mes": 6,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "CHORRILLOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1175,
      "Mes": 6,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "CHORRILLOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1176,
      "Mes": 6,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "CIENEGUILLA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1177,
      "Mes": 6,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "EL AGUSTINO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1178,
      "Mes": 6,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LOS OLIVOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1179,
      "Mes": 6,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LURIGANCHO (CHOSICA)",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1180,
      "Mes": 6,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LURIGANCHO (CHOSICA)",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1181,
      "Mes": 6,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LURIN",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1182,
      "Mes": 6,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LURIN",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1183,
      "Mes": 6,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "MAGDALENA VIEJA (PUEBLO LIBRE)",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1184,
      "Mes": 6,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "MAGDALENA VIEJA (PUEBLO LIBRE)",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1185,
      "Mes": 6,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "PUCUSANA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1186,
      "Mes": 6,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "SAN MARTIN DE PORRES",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1187,
      "Mes": 6,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "SANTIAGO DE SURCO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1188,
      "Mes": 6,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "VILLA EL SALVADOR",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1189,
      "Mes": 6,
      "Departamento": "LIMA",
      "Provincia": "HUARAL",
      "Distrito": "AUCALLAMA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1190,
      "Mes": 6,
      "Departamento": "MADRE DE DIOS",
      "Provincia": "TAMBOPATA",
      "Distrito": "TAMBOPATA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1191,
      "Mes": 6,
      "Departamento": "MADRE DE DIOS",
      "Provincia": "TAMBOPATA",
      "Distrito": "TAMBOPATA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1192,
      "Mes": 6,
      "Departamento": "MOQUEGUA",
      "Provincia": "ILO",
      "Distrito": "ILO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1193,
      "Mes": 6,
      "Departamento": "PIURA",
      "Provincia": "PIURA",
      "Distrito": "CATACAOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1194,
      "Mes": 6,
      "Departamento": "PIURA",
      "Provincia": "PIURA",
      "Distrito": "CATACAOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1195,
      "Mes": 6,
      "Departamento": "PIURA",
      "Provincia": "PIURA",
      "Distrito": "LA ARENA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1196,
      "Mes": 6,
      "Departamento": "PIURA",
      "Provincia": "AYABACA",
      "Distrito": "PAIMAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1197,
      "Mes": 6,
      "Departamento": "PIURA",
      "Provincia": "HUANCABAMBA",
      "Distrito": "HUANCABAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1198,
      "Mes": 6,
      "Departamento": "PIURA",
      "Provincia": "MORROPON",
      "Distrito": "MORROPON",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1199,
      "Mes": 6,
      "Departamento": "PUNO",
      "Provincia": "PUNO",
      "Distrito": "PUNO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1200,
      "Mes": 6,
      "Departamento": "PUNO",
      "Provincia": "PUNO",
      "Distrito": "PUNO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1201,
      "Mes": 6,
      "Departamento": "SAN MARTIN",
      "Provincia": "BELLAVISTA",
      "Distrito": "ALTO BIAVO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1202,
      "Mes": 6,
      "Departamento": "SAN MARTIN",
      "Provincia": "BELLAVISTA",
      "Distrito": "SAN PABLO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1203,
      "Mes": 6,
      "Departamento": "SAN MARTIN",
      "Provincia": "RIOJA",
      "Distrito": "ELIAS SOPLIN VARGAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1204,
      "Mes": 6,
      "Departamento": "SAN MARTIN",
      "Provincia": "SAN MARTIN",
      "Distrito": "TARAPOTO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1205,
      "Mes": 6,
      "Departamento": "SAN MARTIN",
      "Provincia": "SAN MARTIN",
      "Distrito": "HUIMBAYOC",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1206,
      "Mes": 6,
      "Departamento": "SAN MARTIN",
      "Provincia": "SAN MARTIN",
      "Distrito": "LA BANDA DE SHILCAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1207,
      "Mes": 6,
      "Departamento": "SAN MARTIN",
      "Provincia": "SAN MARTIN",
      "Distrito": "LA BANDA DE SHILCAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1208,
      "Mes": 6,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "TACNA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1209,
      "Mes": 6,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "ALTO DE LA ALIANZA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1210,
      "Mes": 6,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "ALTO DE LA ALIANZA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1211,
      "Mes": 6,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "PALCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1212,
      "Mes": 6,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "POCOLLAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1213,
      "Mes": 6,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "POCOLLAY",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1214,
      "Mes": 6,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CORONEL GREGORIO ALBARRACIN LANCHIPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1215,
      "Mes": 6,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CORONEL GREGORIO ALBARRACIN LANCHIPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1216,
      "Mes": 6,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CORONEL GREGORIO ALBARRACIN LANCHIPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1217,
      "Mes": 6,
      "Departamento": "TACNA",
      "Provincia": "CANDARAVE",
      "Distrito": "CANDARAVE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1218,
      "Mes": 6,
      "Departamento": "TACNA",
      "Provincia": "JORGE BASADRE",
      "Distrito": "ILABAYA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1219,
      "Mes": 6,
      "Departamento": "TACNA",
      "Provincia": "JORGE BASADRE",
      "Distrito": "ITE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1220,
      "Mes": 6,
      "Departamento": "TACNA",
      "Provincia": "TARATA",
      "Distrito": "TICACO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1221,
      "Mes": 6,
      "Departamento": "TACNA",
      "Provincia": "TARATA",
      "Distrito": "TICACO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1222,
      "Mes": 7,
      "Departamento": "ANCASH",
      "Provincia": "CARHUAZ",
      "Distrito": "ACOPAMPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1223,
      "Mes": 7,
      "Departamento": "ANCASH",
      "Provincia": "HUAYLAS",
      "Distrito": "PAMPAROMAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1224,
      "Mes": 7,
      "Departamento": "ANCASH",
      "Provincia": "PALLASCA",
      "Distrito": "LACABAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1225,
      "Mes": 7,
      "Departamento": "ANCASH",
      "Provincia": "RECUAY",
      "Distrito": "COTAPARACO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1226,
      "Mes": 7,
      "Departamento": "ANCASH",
      "Provincia": "RECUAY",
      "Distrito": "TICAPAMPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1227,
      "Mes": 7,
      "Departamento": "ANCASH",
      "Provincia": "SANTA",
      "Distrito": "NUEVO CHIMBOTE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1228,
      "Mes": 7,
      "Departamento": "APURIMAC",
      "Provincia": "ABANCAY",
      "Distrito": "ABANCAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1229,
      "Mes": 7,
      "Departamento": "APURIMAC",
      "Provincia": "ABANCAY",
      "Distrito": "CURAHUASI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1230,
      "Mes": 7,
      "Departamento": "APURIMAC",
      "Provincia": "ABANCAY",
      "Distrito": "CURAHUASI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1231,
      "Mes": 7,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "ANDAHUAYLAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1232,
      "Mes": 7,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "ANDARAPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1233,
      "Mes": 7,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "CHIARA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1234,
      "Mes": 7,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "CHIARA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1235,
      "Mes": 7,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "PACOBAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1236,
      "Mes": 7,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "PAMPACHIRI",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1237,
      "Mes": 7,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "PAMPACHIRI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1238,
      "Mes": 7,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "PAMPACHIRI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1239,
      "Mes": 7,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "TALAVERA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1240,
      "Mes": 7,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "TALAVERA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1241,
      "Mes": 7,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "KAQUIABAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1242,
      "Mes": 7,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "KAQUIABAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1243,
      "Mes": 7,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "KAQUIABAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1244,
      "Mes": 7,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "JOSÉ MARÍA ARGUEDAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1245,
      "Mes": 7,
      "Departamento": "APURIMAC",
      "Provincia": "AYMARAES",
      "Distrito": "CHALHUANCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1246,
      "Mes": 7,
      "Departamento": "APURIMAC",
      "Provincia": "AYMARAES",
      "Distrito": "CHALHUANCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1247,
      "Mes": 7,
      "Departamento": "APURIMAC",
      "Provincia": "AYMARAES",
      "Distrito": "SAÑAYCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1248,
      "Mes": 7,
      "Departamento": "APURIMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "COTABAMBAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1249,
      "Mes": 7,
      "Departamento": "APURIMAC",
      "Provincia": "GRAU",
      "Distrito": "PROGRESO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1250,
      "Mes": 7,
      "Departamento": "AREQUIPA",
      "Provincia": "AREQUIPA",
      "Distrito": "CERRO COLORADO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1251,
      "Mes": 7,
      "Departamento": "AREQUIPA",
      "Provincia": "AREQUIPA",
      "Distrito": "MIRAFLORES",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1252,
      "Mes": 7,
      "Departamento": "AREQUIPA",
      "Provincia": "CAMANA",
      "Distrito": "MARISCAL CACERES",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1253,
      "Mes": 7,
      "Departamento": "AREQUIPA",
      "Provincia": "CAMANA",
      "Distrito": "NICOLAS DE PIEROLA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1254,
      "Mes": 7,
      "Departamento": "AREQUIPA",
      "Provincia": "CAYLLOMA",
      "Distrito": "CALLALLI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1255,
      "Mes": 7,
      "Departamento": "AREQUIPA",
      "Provincia": "CAYLLOMA",
      "Distrito": "CALLALLI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1256,
      "Mes": 7,
      "Departamento": "AREQUIPA",
      "Provincia": "CAYLLOMA",
      "Distrito": "TISCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1257,
      "Mes": 7,
      "Departamento": "AREQUIPA",
      "Provincia": "ISLAY",
      "Distrito": "MOLLENDO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1258,
      "Mes": 7,
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "AYACUCHO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1259,
      "Mes": 7,
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "TAMBILLO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1260,
      "Mes": 7,
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "ANDRES AVELINO CACERES DORREGARAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1261,
      "Mes": 7,
      "Departamento": "AYACUCHO",
      "Provincia": "CANGALLO",
      "Distrito": "PARAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1262,
      "Mes": 7,
      "Departamento": "AYACUCHO",
      "Provincia": "CANGALLO",
      "Distrito": "PARAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1263,
      "Mes": 7,
      "Departamento": "AYACUCHO",
      "Provincia": "CANGALLO",
      "Distrito": "TOTOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1264,
      "Mes": 7,
      "Departamento": "AYACUCHO",
      "Provincia": "HUANTA",
      "Distrito": "AYAHUANCO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1265,
      "Mes": 7,
      "Departamento": "AYACUCHO",
      "Provincia": "HUANTA",
      "Distrito": "SIVIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1266,
      "Mes": 7,
      "Departamento": "AYACUCHO",
      "Provincia": "LA MAR",
      "Distrito": "ANCO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1267,
      "Mes": 7,
      "Departamento": "AYACUCHO",
      "Provincia": "LA MAR",
      "Distrito": "ANCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1268,
      "Mes": 7,
      "Departamento": "AYACUCHO",
      "Provincia": "LA MAR",
      "Distrito": "AYNA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1269,
      "Mes": 7,
      "Departamento": "AYACUCHO",
      "Provincia": "LA MAR",
      "Distrito": "AYNA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1270,
      "Mes": 7,
      "Departamento": "AYACUCHO",
      "Provincia": "LUCANAS",
      "Distrito": "PUQUIO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1271,
      "Mes": 7,
      "Departamento": "AYACUCHO",
      "Provincia": "LUCANAS",
      "Distrito": "PUQUIO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1272,
      "Mes": 7,
      "Departamento": "AYACUCHO",
      "Provincia": "LUCANAS",
      "Distrito": "HUAC-HUAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1273,
      "Mes": 7,
      "Departamento": "AYACUCHO",
      "Provincia": "LUCANAS",
      "Distrito": "OCAÑA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1274,
      "Mes": 7,
      "Departamento": "AYACUCHO",
      "Provincia": "LUCANAS",
      "Distrito": "SAN PEDRO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1275,
      "Mes": 7,
      "Departamento": "AYACUCHO",
      "Provincia": "VICTOR FAJARDO",
      "Distrito": "HUAYA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1276,
      "Mes": 7,
      "Departamento": "AYACUCHO",
      "Provincia": "VILCAS HUAMAN",
      "Distrito": "VISCHONGO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1277,
      "Mes": 7,
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CALLAO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1278,
      "Mes": 7,
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CALLAO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1279,
      "Mes": 7,
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "LA PERLA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1280,
      "Mes": 7,
      "Departamento": "CUSCO",
      "Provincia": "CUSCO",
      "Distrito": "CCORCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1281,
      "Mes": 7,
      "Departamento": "CUSCO",
      "Provincia": "CUSCO",
      "Distrito": "SAN JERONIMO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1282,
      "Mes": 7,
      "Departamento": "CUSCO",
      "Provincia": "ANTA",
      "Distrito": "LIMATAMBO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1283,
      "Mes": 7,
      "Departamento": "CUSCO",
      "Provincia": "CANCHIS",
      "Distrito": "COMBAPATA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1284,
      "Mes": 7,
      "Departamento": "CUSCO",
      "Provincia": "CANCHIS",
      "Distrito": "SAN PABLO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1285,
      "Mes": 7,
      "Departamento": "CUSCO",
      "Provincia": "LA CONVENCION",
      "Distrito": "SANTA ANA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1286,
      "Mes": 7,
      "Departamento": "CUSCO",
      "Provincia": "LA CONVENCION",
      "Distrito": "KIMBIRI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1287,
      "Mes": 7,
      "Departamento": "CUSCO",
      "Provincia": "LA CONVENCION",
      "Distrito": "VILCABAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1288,
      "Mes": 7,
      "Departamento": "CUSCO",
      "Provincia": "LA CONVENCION",
      "Distrito": "PICHARI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1289,
      "Mes": 7,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "HUANCAVELICA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1290,
      "Mes": 7,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "HUANCAVELICA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1291,
      "Mes": 7,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "CONAYCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1292,
      "Mes": 7,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "HUACHOCOLPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1293,
      "Mes": 7,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "PALCA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1294,
      "Mes": 7,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "HUANDO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1295,
      "Mes": 7,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "LIRCAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1296,
      "Mes": 7,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "ANCHONGA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1297,
      "Mes": 7,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "ANCHONGA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1298,
      "Mes": 7,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "CHINCHO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1299,
      "Mes": 7,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "SANTO TOMAS DE PATA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1300,
      "Mes": 7,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "SECCLLA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1301,
      "Mes": 7,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "SECCLLA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1302,
      "Mes": 7,
      "Departamento": "HUANCAVELICA",
      "Provincia": "CASTROVIRREYNA",
      "Distrito": "CASTROVIRREYNA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1303,
      "Mes": 7,
      "Departamento": "HUANCAVELICA",
      "Provincia": "CASTROVIRREYNA",
      "Distrito": "CASTROVIRREYNA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1304,
      "Mes": 7,
      "Departamento": "HUANCAVELICA",
      "Provincia": "CASTROVIRREYNA",
      "Distrito": "MOLLEPAMPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1305,
      "Mes": 7,
      "Departamento": "HUANCAVELICA",
      "Provincia": "CHURCAMPA",
      "Distrito": "CHURCAMPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1306,
      "Mes": 7,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "ACOSTAMBO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1307,
      "Mes": 7,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "COLCABAMBA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1308,
      "Mes": 7,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "COLCABAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1309,
      "Mes": 7,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "COLCABAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1310,
      "Mes": 7,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "DANIEL HERNANDEZ",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1311,
      "Mes": 7,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "HUARIBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1312,
      "Mes": 7,
      "Departamento": "HUANUCO",
      "Provincia": "HUANUCO",
      "Distrito": "HUANUCO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1313,
      "Mes": 7,
      "Departamento": "HUANUCO",
      "Provincia": "HUANUCO",
      "Distrito": "YACUS",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1314,
      "Mes": 7,
      "Departamento": "HUANUCO",
      "Provincia": "DOS DE MAYO",
      "Distrito": "PACHAS",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1315,
      "Mes": 7,
      "Departamento": "HUANUCO",
      "Provincia": "HUACAYBAMBA",
      "Distrito": "HUACAYBAMBA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1316,
      "Mes": 7,
      "Departamento": "HUANUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "LLATA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1317,
      "Mes": 7,
      "Departamento": "HUANUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "ARANCAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1318,
      "Mes": 7,
      "Departamento": "HUANUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "PUÑOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1319,
      "Mes": 7,
      "Departamento": "HUANUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "JOSE CRESPO Y CASTILLO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1320,
      "Mes": 7,
      "Departamento": "HUANUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "JOSE CRESPO Y CASTILLO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1321,
      "Mes": 7,
      "Departamento": "HUANUCO",
      "Provincia": "MARAÑON",
      "Distrito": "CHOLON",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1322,
      "Mes": 7,
      "Departamento": "HUANUCO",
      "Provincia": "PUERTO INCA",
      "Distrito": "HONORIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1323,
      "Mes": 7,
      "Departamento": "HUANUCO",
      "Provincia": "PUERTO INCA",
      "Distrito": "TOURNAVISTA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1324,
      "Mes": 7,
      "Departamento": "HUANUCO",
      "Provincia": "PUERTO INCA",
      "Distrito": "TOURNAVISTA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1325,
      "Mes": 7,
      "Departamento": "HUANUCO",
      "Provincia": "PUERTO INCA",
      "Distrito": "TOURNAVISTA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1326,
      "Mes": 7,
      "Departamento": "HUANUCO",
      "Provincia": "LAURICOCHA",
      "Distrito": "BAÑOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1327,
      "Mes": 7,
      "Departamento": "HUANUCO",
      "Provincia": "YAROWILCA",
      "Distrito": "OBAS",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1328,
      "Mes": 7,
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "ICA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1329,
      "Mes": 7,
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "ICA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1330,
      "Mes": 7,
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "LA TINGUIÑA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1331,
      "Mes": 7,
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "PACHACUTEC",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1332,
      "Mes": 7,
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "PARCONA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1333,
      "Mes": 7,
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "SANTIAGO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1334,
      "Mes": 7,
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "YAUCA DEL ROSARIO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1335,
      "Mes": 7,
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "PISCO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1336,
      "Mes": 7,
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "INDEPENDENCIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1337,
      "Mes": 7,
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "INDEPENDENCIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1338,
      "Mes": 7,
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "PARACAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1339,
      "Mes": 7,
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "SAN ANDRES",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1340,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "HUANCAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1341,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "CHILCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1342,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "EL TAMBO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1343,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "EL TAMBO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1344,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "HUAYUCACHI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1345,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "SANTO DOMINGO DE ACOBAMBA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1346,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "SANTO DOMINGO DE ACOBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1347,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "SANTO DOMINGO DE ACOBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1348,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "CONCEPCION",
      "Distrito": "CONCEPCION",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1349,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "CONCEPCION",
      "Distrito": "SAN JOSE DE QUERO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1350,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "CONCEPCION",
      "Distrito": "SAN JOSE DE QUERO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1351,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "CONCEPCION",
      "Distrito": "SANTA ROSA DE OCOPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1352,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "CHANCHAMAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1353,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PERENE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1354,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PICHANAKI",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1355,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PICHANAKI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1356,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PICHANAKI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1357,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "SAN RAMON",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1358,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "SAN RAMON",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1359,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "JAUJA",
      "Distrito": "JAUJA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1360,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "JAUJA",
      "Distrito": "ACOLLA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1361,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "JAUJA",
      "Distrito": "CANCHAYLLO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1362,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "JAUJA",
      "Distrito": "LLOCLLAPAMPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1363,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "JAUJA",
      "Distrito": "MASMA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1364,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "JAUJA",
      "Distrito": "MASMA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1365,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "JAUJA",
      "Distrito": "SAN LORENZO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1366,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "JAUJA",
      "Distrito": "SAN LORENZO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1367,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "JUNIN",
      "Distrito": "ULCUMAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1368,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "JUNIN",
      "Distrito": "ULCUMAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1369,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "SATIPO",
      "Distrito": "SATIPO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1370,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "SATIPO",
      "Distrito": "PANGOA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1371,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "SATIPO",
      "Distrito": "PANGOA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1372,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "SATIPO",
      "Distrito": "PANGOA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1373,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "SATIPO",
      "Distrito": "RIO TAMBO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1374,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "SATIPO",
      "Distrito": "RIO TAMBO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1375,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "TARMA",
      "Distrito": "TARMA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1376,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "TARMA",
      "Distrito": "TARMA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1377,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "TARMA",
      "Distrito": "ACOBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1378,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "TARMA",
      "Distrito": "PALCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1379,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "TARMA",
      "Distrito": "PALCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1380,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "TARMA",
      "Distrito": "SAN PEDRO DE CAJAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1381,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "TARMA",
      "Distrito": "TAPO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1382,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "YAULI",
      "Distrito": "SANTA ROSA DE SACCO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1383,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "YAULI",
      "Distrito": "SUITUCANCHA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1384,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "CHUPACA",
      "Distrito": "CHUPACA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1385,
      "Mes": 7,
      "Departamento": "JUNIN",
      "Provincia": "CHUPACA",
      "Distrito": "CHUPACA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1386,
      "Mes": 7,
      "Departamento": "LA LIBERTAD",
      "Provincia": "PATAZ",
      "Distrito": "BULDIBUYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1387,
      "Mes": 7,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "ETEN PUERTO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1388,
      "Mes": 7,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "JOSE LEONARDO ORTIZ",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1389,
      "Mes": 7,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "LAGUNAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1390,
      "Mes": 7,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "LAGUNAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1391,
      "Mes": 7,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "MONSEFU",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1392,
      "Mes": 7,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "FERREÑAFE",
      "Distrito": "FERREÑAFE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1393,
      "Mes": 7,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "FERREÑAFE",
      "Distrito": "MANUEL ANTONIO MESONES MURO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1394,
      "Mes": 7,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "LAMBAYEQUE",
      "Distrito": "LAMBAYEQUE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1395,
      "Mes": 7,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "LAMBAYEQUE",
      "Distrito": "OLMOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1396,
      "Mes": 7,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "LAMBAYEQUE",
      "Distrito": "PACORA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1397,
      "Mes": 7,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "LAMBAYEQUE",
      "Distrito": "SALAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1398,
      "Mes": 7,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "LAMBAYEQUE",
      "Distrito": "SALAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1399,
      "Mes": 7,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "LAMBAYEQUE",
      "Distrito": "SAN JOSE",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1400,
      "Mes": 7,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LIMA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1401,
      "Mes": 7,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "ATE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1402,
      "Mes": 7,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "ATE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1403,
      "Mes": 7,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "BREÑA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1404,
      "Mes": 7,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "CHACLACAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1405,
      "Mes": 7,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "EL AGUSTINO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1406,
      "Mes": 7,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "EL AGUSTINO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1407,
      "Mes": 7,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LOS OLIVOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1408,
      "Mes": 7,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LURIGANCHO (CHOSICA)",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1409,
      "Mes": 7,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LURIGANCHO (CHOSICA)",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1410,
      "Mes": 7,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LURIGANCHO (CHOSICA)",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1411,
      "Mes": 7,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "PACHACAMAC",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1412,
      "Mes": 7,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "RIMAC",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1413,
      "Mes": 7,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "RIMAC",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1414,
      "Mes": 7,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "SAN BORJA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1415,
      "Mes": 7,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "SAN JUAN DE MIRAFLORES",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1416,
      "Mes": 7,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "SAN JUAN DE MIRAFLORES",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1417,
      "Mes": 7,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "SAN JUAN DE MIRAFLORES",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1418,
      "Mes": 7,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "SAN JUAN DE MIRAFLORES",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1419,
      "Mes": 7,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "SAN MARTIN DE PORRES",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1420,
      "Mes": 7,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "SAN MARTIN DE PORRES",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1421,
      "Mes": 7,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "VILLA EL SALVADOR",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1422,
      "Mes": 7,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "VILLA EL SALVADOR",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1423,
      "Mes": 7,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "VILLA EL SALVADOR",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1424,
      "Mes": 7,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "VILLA EL SALVADOR",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1425,
      "Mes": 7,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "VILLA MARIA DEL TRIUNFO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1426,
      "Mes": 7,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "VILLA MARIA DEL TRIUNFO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1427,
      "Mes": 7,
      "Departamento": "LIMA",
      "Provincia": "CANTA",
      "Distrito": "CANTA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1428,
      "Mes": 7,
      "Departamento": "LORETO",
      "Provincia": "MAYNAS",
      "Distrito": "IQUITOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1429,
      "Mes": 7,
      "Departamento": "LORETO",
      "Provincia": "MAYNAS",
      "Distrito": "IQUITOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1430,
      "Mes": 7,
      "Departamento": "LORETO",
      "Provincia": "MAYNAS",
      "Distrito": "BELEN",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1431,
      "Mes": 7,
      "Departamento": "LORETO",
      "Provincia": "MAYNAS",
      "Distrito": "BELEN",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1432,
      "Mes": 7,
      "Departamento": "LORETO",
      "Provincia": "MAYNAS",
      "Distrito": "SAN JUAN BAUTISTA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1433,
      "Mes": 7,
      "Departamento": "LORETO",
      "Provincia": "MAYNAS",
      "Distrito": "SAN JUAN BAUTISTA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1434,
      "Mes": 7,
      "Departamento": "LORETO",
      "Provincia": "MAYNAS",
      "Distrito": "SAN JUAN BAUTISTA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1435,
      "Mes": 7,
      "Departamento": "LORETO",
      "Provincia": "LORETO",
      "Distrito": "TROMPETEROS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1436,
      "Mes": 7,
      "Departamento": "MADRE DE DIOS",
      "Provincia": "TAMBOPATA",
      "Distrito": "TAMBOPATA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1437,
      "Mes": 7,
      "Departamento": "MADRE DE DIOS",
      "Provincia": "TAMBOPATA",
      "Distrito": "INAMBARI",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1438,
      "Mes": 7,
      "Departamento": "MOQUEGUA",
      "Provincia": "MARISCAL NIETO",
      "Distrito": "MOQUEGUA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1439,
      "Mes": 7,
      "Departamento": "MOQUEGUA",
      "Provincia": "GENERAL SANCHEZ CERRO",
      "Distrito": "UBINAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1440,
      "Mes": 7,
      "Departamento": "MOQUEGUA",
      "Provincia": "ILO",
      "Distrito": "ILO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1441,
      "Mes": 7,
      "Departamento": "PIURA",
      "Provincia": "PIURA",
      "Distrito": "LA ARENA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1442,
      "Mes": 7,
      "Departamento": "PIURA",
      "Provincia": "AYABACA",
      "Distrito": "AYABACA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1443,
      "Mes": 7,
      "Departamento": "PIURA",
      "Provincia": "AYABACA",
      "Distrito": "AYABACA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1444,
      "Mes": 7,
      "Departamento": "PIURA",
      "Provincia": "HUANCABAMBA",
      "Distrito": "HUANCABAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1445,
      "Mes": 7,
      "Departamento": "PIURA",
      "Provincia": "HUANCABAMBA",
      "Distrito": "HUANCABAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1446,
      "Mes": 7,
      "Departamento": "PUNO",
      "Provincia": "AZANGARO",
      "Distrito": "MUÑANI",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1447,
      "Mes": 7,
      "Departamento": "PUNO",
      "Provincia": "AZANGARO",
      "Distrito": "MUÑANI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1448,
      "Mes": 7,
      "Departamento": "PUNO",
      "Provincia": "SANDIA",
      "Distrito": "SANDIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1449,
      "Mes": 7,
      "Departamento": "PUNO",
      "Provincia": "SANDIA",
      "Distrito": "SANDIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1450,
      "Mes": 7,
      "Departamento": "PUNO",
      "Provincia": "YUNGUYO",
      "Distrito": "COPANI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1451,
      "Mes": 7,
      "Departamento": "PUNO",
      "Provincia": "YUNGUYO",
      "Distrito": "OLLARAYA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1452,
      "Mes": 7,
      "Departamento": "SAN MARTIN",
      "Provincia": "MOYOBAMBA",
      "Distrito": "CALZADA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1453,
      "Mes": 7,
      "Departamento": "SAN MARTIN",
      "Provincia": "BELLAVISTA",
      "Distrito": "BELLAVISTA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1454,
      "Mes": 7,
      "Departamento": "SAN MARTIN",
      "Provincia": "BELLAVISTA",
      "Distrito": "ALTO BIAVO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1455,
      "Mes": 7,
      "Departamento": "SAN MARTIN",
      "Provincia": "BELLAVISTA",
      "Distrito": "BAJO BIAVO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1456,
      "Mes": 7,
      "Departamento": "SAN MARTIN",
      "Provincia": "RIOJA",
      "Distrito": "RIOJA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1457,
      "Mes": 7,
      "Departamento": "SAN MARTIN",
      "Provincia": "RIOJA",
      "Distrito": "RIOJA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1458,
      "Mes": 7,
      "Departamento": "SAN MARTIN",
      "Provincia": "RIOJA",
      "Distrito": "SAN FERNANDO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1459,
      "Mes": 7,
      "Departamento": "SAN MARTIN",
      "Provincia": "SAN MARTIN",
      "Distrito": "TARAPOTO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1460,
      "Mes": 7,
      "Departamento": "SAN MARTIN",
      "Provincia": "SAN MARTIN",
      "Distrito": "CHIPURANA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1461,
      "Mes": 7,
      "Departamento": "SAN MARTIN",
      "Provincia": "SAN MARTIN",
      "Distrito": "CHIPURANA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1462,
      "Mes": 7,
      "Departamento": "SAN MARTIN",
      "Provincia": "SAN MARTIN",
      "Distrito": "LA BANDA DE SHILCAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1463,
      "Mes": 7,
      "Departamento": "SAN MARTIN",
      "Provincia": "SAN MARTIN",
      "Distrito": "LA BANDA DE SHILCAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1464,
      "Mes": 7,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "TACNA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1465,
      "Mes": 7,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "TACNA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1466,
      "Mes": 7,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "TACNA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1467,
      "Mes": 7,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "TACNA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1468,
      "Mes": 7,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "TACNA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1469,
      "Mes": 7,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "ALTO DE LA ALIANZA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1470,
      "Mes": 7,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "ALTO DE LA ALIANZA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1471,
      "Mes": 7,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CALANA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1472,
      "Mes": 7,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "INCLAN",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1473,
      "Mes": 7,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "PACHIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1474,
      "Mes": 7,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "PACHIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1475,
      "Mes": 7,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "PALCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1476,
      "Mes": 7,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "POCOLLAY",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1477,
      "Mes": 7,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CORONEL GREGORIO ALBARRACIN LANCHIPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1478,
      "Mes": 7,
      "Departamento": "TACNA",
      "Provincia": "CANDARAVE",
      "Distrito": "CAIRANI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1479,
      "Mes": 7,
      "Departamento": "TACNA",
      "Provincia": "JORGE BASADRE",
      "Distrito": "LOCUMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1480,
      "Mes": 7,
      "Departamento": "TACNA",
      "Provincia": "JORGE BASADRE",
      "Distrito": "LOCUMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1481,
      "Mes": 7,
      "Departamento": "TACNA",
      "Provincia": "JORGE BASADRE",
      "Distrito": "ILABAYA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1482,
      "Mes": 7,
      "Departamento": "TACNA",
      "Provincia": "JORGE BASADRE",
      "Distrito": "ILABAYA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1483,
      "Mes": 7,
      "Departamento": "TACNA",
      "Provincia": "TARATA",
      "Distrito": "TARATA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1484,
      "Mes": 7,
      "Departamento": "TACNA",
      "Provincia": "TARATA",
      "Distrito": "ESTIQUE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1485,
      "Mes": 8,
      "Departamento": "ANCASH",
      "Provincia": "BOLOGNESI",
      "Distrito": "COLQUIOC",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1486,
      "Mes": 8,
      "Departamento": "ANCASH",
      "Provincia": "CARHUAZ",
      "Distrito": "MARCARA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1487,
      "Mes": 8,
      "Departamento": "ANCASH",
      "Provincia": "HUARMEY",
      "Distrito": "HUARMEY",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1488,
      "Mes": 8,
      "Departamento": "ANCASH",
      "Provincia": "HUAYLAS",
      "Distrito": "MATO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1489,
      "Mes": 8,
      "Departamento": "ANCASH",
      "Provincia": "SANTA",
      "Distrito": "CHIMBOTE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1490,
      "Mes": 8,
      "Departamento": "ANCASH",
      "Provincia": "SANTA",
      "Distrito": "CHIMBOTE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1491,
      "Mes": 8,
      "Departamento": "APURIMAC",
      "Provincia": "ABANCAY",
      "Distrito": "CHACOCHE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1492,
      "Mes": 8,
      "Departamento": "APURIMAC",
      "Provincia": "ABANCAY",
      "Distrito": "CURAHUASI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1493,
      "Mes": 8,
      "Departamento": "APURIMAC",
      "Provincia": "ABANCAY",
      "Distrito": "PICHIRHUA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1494,
      "Mes": 8,
      "Departamento": "APURIMAC",
      "Provincia": "ABANCAY",
      "Distrito": "TAMBURCO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1495,
      "Mes": 8,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "ANDAHUAYLAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1496,
      "Mes": 8,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "ANDAHUAYLAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1497,
      "Mes": 8,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "ANDAHUAYLAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1498,
      "Mes": 8,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "ANDAHUAYLAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1499,
      "Mes": 8,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "HUANCARAMA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1500,
      "Mes": 8,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "HUANCARAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1501,
      "Mes": 8,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "HUANCARAY",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1502,
      "Mes": 8,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "HUAYANA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1503,
      "Mes": 8,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "HUAYANA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1504,
      "Mes": 8,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "HUAYANA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1505,
      "Mes": 8,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "KISHUARA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1506,
      "Mes": 8,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "PACOBAMBA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1507,
      "Mes": 8,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "PACUCHA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1508,
      "Mes": 8,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "PAMPACHIRI",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1509,
      "Mes": 8,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "PAMPACHIRI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1510,
      "Mes": 8,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "PAMPACHIRI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1511,
      "Mes": 8,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "POMACOCHA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1512,
      "Mes": 8,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "KAQUIABAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1513,
      "Mes": 8,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "KAQUIABAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1514,
      "Mes": 8,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "JOSÉ MARÍA ARGUEDAS",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1515,
      "Mes": 8,
      "Departamento": "APURIMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "JOSÉ MARÍA ARGUEDAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1516,
      "Mes": 8,
      "Departamento": "APURIMAC",
      "Provincia": "ANTABAMBA",
      "Distrito": "HUAQUIRCA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1517,
      "Mes": 8,
      "Departamento": "APURIMAC",
      "Provincia": "ANTABAMBA",
      "Distrito": "JUAN ESPINOZA MEDRANO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1518,
      "Mes": 8,
      "Departamento": "APURIMAC",
      "Provincia": "ANTABAMBA",
      "Distrito": "SABAINO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1519,
      "Mes": 8,
      "Departamento": "APURIMAC",
      "Provincia": "AYMARAES",
      "Distrito": "SAÑAYCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1520,
      "Mes": 8,
      "Departamento": "APURIMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "TAMBOBAMBA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1521,
      "Mes": 8,
      "Departamento": "APURIMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "COYLLURQUI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1522,
      "Mes": 8,
      "Departamento": "APURIMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "HAQUIRA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1523,
      "Mes": 8,
      "Departamento": "APURIMAC",
      "Provincia": "CHINCHEROS",
      "Distrito": "ANCO-HUALLO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1524,
      "Mes": 8,
      "Departamento": "APURIMAC",
      "Provincia": "CHINCHEROS",
      "Distrito": "COCHARCAS",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1525,
      "Mes": 8,
      "Departamento": "APURIMAC",
      "Provincia": "CHINCHEROS",
      "Distrito": "HUACCANA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1526,
      "Mes": 8,
      "Departamento": "APURIMAC",
      "Provincia": "CHINCHEROS",
      "Distrito": "RANRACANCHA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1527,
      "Mes": 8,
      "Departamento": "APURIMAC",
      "Provincia": "GRAU",
      "Distrito": "HUAYLLATI",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1528,
      "Mes": 8,
      "Departamento": "AREQUIPA",
      "Provincia": "AREQUIPA",
      "Distrito": "CERRO COLORADO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1529,
      "Mes": 8,
      "Departamento": "AREQUIPA",
      "Provincia": "AREQUIPA",
      "Distrito": "PAUCARPATA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1530,
      "Mes": 8,
      "Departamento": "AREQUIPA",
      "Provincia": "CAMANA",
      "Distrito": "SAMUEL PASTOR",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1531,
      "Mes": 8,
      "Departamento": "AREQUIPA",
      "Provincia": "CAYLLOMA",
      "Distrito": "CHIVAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1532,
      "Mes": 8,
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "ANDRES AVELINO CACERES DORREGARAY",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1533,
      "Mes": 8,
      "Departamento": "AYACUCHO",
      "Provincia": "CANGALLO",
      "Distrito": "CANGALLO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1534,
      "Mes": 8,
      "Departamento": "AYACUCHO",
      "Provincia": "HUANTA",
      "Distrito": "SIVIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1535,
      "Mes": 8,
      "Departamento": "AYACUCHO",
      "Provincia": "LA MAR",
      "Distrito": "SAN MIGUEL",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1536,
      "Mes": 8,
      "Departamento": "AYACUCHO",
      "Provincia": "LA MAR",
      "Distrito": "SAN MIGUEL",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1537,
      "Mes": 8,
      "Departamento": "AYACUCHO",
      "Provincia": "LA MAR",
      "Distrito": "AYNA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1538,
      "Mes": 8,
      "Departamento": "AYACUCHO",
      "Provincia": "LA MAR",
      "Distrito": "AYNA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1539,
      "Mes": 8,
      "Departamento": "AYACUCHO",
      "Provincia": "LA MAR",
      "Distrito": "TAMBO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1540,
      "Mes": 8,
      "Departamento": "AYACUCHO",
      "Provincia": "LUCANAS",
      "Distrito": "PUQUIO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1541,
      "Mes": 8,
      "Departamento": "AYACUCHO",
      "Provincia": "LUCANAS",
      "Distrito": "PUQUIO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1542,
      "Mes": 8,
      "Departamento": "AYACUCHO",
      "Provincia": "LUCANAS",
      "Distrito": "OCAÑA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1543,
      "Mes": 8,
      "Departamento": "AYACUCHO",
      "Provincia": "LUCANAS",
      "Distrito": "OCAÑA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1544,
      "Mes": 8,
      "Departamento": "AYACUCHO",
      "Provincia": "LUCANAS",
      "Distrito": "OCAÑA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1545,
      "Mes": 8,
      "Departamento": "AYACUCHO",
      "Provincia": "PAUCAR DEL SARA SARA",
      "Distrito": "OYOLO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1546,
      "Mes": 8,
      "Departamento": "AYACUCHO",
      "Provincia": "PAUCAR DEL SARA SARA",
      "Distrito": "OYOLO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1547,
      "Mes": 8,
      "Departamento": "AYACUCHO",
      "Provincia": "PAUCAR DEL SARA SARA",
      "Distrito": "SARA SARA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1548,
      "Mes": 8,
      "Departamento": "AYACUCHO",
      "Provincia": "VICTOR FAJARDO",
      "Distrito": "APONGO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1549,
      "Mes": 8,
      "Departamento": "AYACUCHO",
      "Provincia": "VILCAS HUAMAN",
      "Distrito": "VILCAS HUAMAN",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1550,
      "Mes": 8,
      "Departamento": "AYACUCHO",
      "Provincia": "VILCAS HUAMAN",
      "Distrito": "VISCHONGO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1551,
      "Mes": 8,
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CALLAO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1552,
      "Mes": 8,
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CALLAO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1553,
      "Mes": 8,
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CALLAO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1554,
      "Mes": 8,
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "LA PERLA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1555,
      "Mes": 8,
      "Departamento": "CUSCO",
      "Provincia": "CUSCO",
      "Distrito": "CUSCO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1556,
      "Mes": 8,
      "Departamento": "CUSCO",
      "Provincia": "CUSCO",
      "Distrito": "WANCHAQ",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1557,
      "Mes": 8,
      "Departamento": "CUSCO",
      "Provincia": "CANAS",
      "Distrito": "YANAOCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1558,
      "Mes": 8,
      "Departamento": "CUSCO",
      "Provincia": "CANAS",
      "Distrito": "LAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1559,
      "Mes": 8,
      "Departamento": "CUSCO",
      "Provincia": "CANAS",
      "Distrito": "LAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1560,
      "Mes": 8,
      "Departamento": "CUSCO",
      "Provincia": "CANAS",
      "Distrito": "TUPAC AMARU",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1561,
      "Mes": 8,
      "Departamento": "CUSCO",
      "Provincia": "CANCHIS",
      "Distrito": "SICUANI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1562,
      "Mes": 8,
      "Departamento": "CUSCO",
      "Provincia": "CANCHIS",
      "Distrito": "SICUANI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1563,
      "Mes": 8,
      "Departamento": "CUSCO",
      "Provincia": "CANCHIS",
      "Distrito": "TINTA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1564,
      "Mes": 8,
      "Departamento": "CUSCO",
      "Provincia": "CANCHIS",
      "Distrito": "TINTA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1565,
      "Mes": 8,
      "Departamento": "CUSCO",
      "Provincia": "LA CONVENCION",
      "Distrito": "VILCABAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1566,
      "Mes": 8,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "HUANCAVELICA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1567,
      "Mes": 8,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "HUANCAVELICA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1568,
      "Mes": 8,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "PALCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1569,
      "Mes": 8,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "ASCENSION",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1570,
      "Mes": 8,
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "HUANDO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1571,
      "Mes": 8,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "LIRCAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1572,
      "Mes": 8,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "LIRCAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1573,
      "Mes": 8,
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "CCOCHACCASA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1574,
      "Mes": 8,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "PAMPAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1575,
      "Mes": 8,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "ACRAQUIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1576,
      "Mes": 8,
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "AHUAYCHA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1577,
      "Mes": 8,
      "Departamento": "HUANUCO",
      "Provincia": "HUANUCO",
      "Distrito": "HUANUCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1578,
      "Mes": 8,
      "Departamento": "HUANUCO",
      "Provincia": "HUANUCO",
      "Distrito": "AMARILIS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1579,
      "Mes": 8,
      "Departamento": "HUANUCO",
      "Provincia": "HUANUCO",
      "Distrito": "CHURUBAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1580,
      "Mes": 8,
      "Departamento": "HUANUCO",
      "Provincia": "HUANUCO",
      "Distrito": "SANTA MARIA DEL VALLE",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1581,
      "Mes": 8,
      "Departamento": "HUANUCO",
      "Provincia": "HUANUCO",
      "Distrito": "YARUMAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1582,
      "Mes": 8,
      "Departamento": "HUANUCO",
      "Provincia": "HUANUCO",
      "Distrito": "YARUMAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1583,
      "Mes": 8,
      "Departamento": "HUANUCO",
      "Provincia": "HUANUCO",
      "Distrito": "PILLCO MARCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1584,
      "Mes": 8,
      "Departamento": "HUANUCO",
      "Provincia": "DOS DE MAYO",
      "Distrito": "MARIAS",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1585,
      "Mes": 8,
      "Departamento": "HUANUCO",
      "Provincia": "DOS DE MAYO",
      "Distrito": "PACHAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1586,
      "Mes": 8,
      "Departamento": "HUANUCO",
      "Provincia": "HUACAYBAMBA",
      "Distrito": "HUACAYBAMBA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1587,
      "Mes": 8,
      "Departamento": "HUANUCO",
      "Provincia": "HUACAYBAMBA",
      "Distrito": "COCHABAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1588,
      "Mes": 8,
      "Departamento": "HUANUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "JACAS GRANDE",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1589,
      "Mes": 8,
      "Departamento": "HUANUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "JACAS GRANDE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1590,
      "Mes": 8,
      "Departamento": "HUANUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "MONZON",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1591,
      "Mes": 8,
      "Departamento": "HUANUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "PUÑOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1592,
      "Mes": 8,
      "Departamento": "HUANUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "SINGA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1593,
      "Mes": 8,
      "Departamento": "HUANUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "LUYANDO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1594,
      "Mes": 8,
      "Departamento": "HUANUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "MARIANO DAMASO BERAUN",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1595,
      "Mes": 8,
      "Departamento": "HUANUCO",
      "Provincia": "MARAÑON",
      "Distrito": "HUACRACHUCO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1596,
      "Mes": 8,
      "Departamento": "HUANUCO",
      "Provincia": "MARAÑON",
      "Distrito": "HUACRACHUCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1597,
      "Mes": 8,
      "Departamento": "HUANUCO",
      "Provincia": "PACHITEA",
      "Distrito": "MOLINO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1598,
      "Mes": 8,
      "Departamento": "HUANUCO",
      "Provincia": "PACHITEA",
      "Distrito": "UMARI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1599,
      "Mes": 8,
      "Departamento": "HUANUCO",
      "Provincia": "PUERTO INCA",
      "Distrito": "PUERTO INCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1600,
      "Mes": 8,
      "Departamento": "HUANUCO",
      "Provincia": "PUERTO INCA",
      "Distrito": "HONORIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1601,
      "Mes": 8,
      "Departamento": "HUANUCO",
      "Provincia": "PUERTO INCA",
      "Distrito": "TOURNAVISTA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1602,
      "Mes": 8,
      "Departamento": "HUANUCO",
      "Provincia": "LAURICOCHA",
      "Distrito": "JIVIA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1603,
      "Mes": 8,
      "Departamento": "HUANUCO",
      "Provincia": "LAURICOCHA",
      "Distrito": "SAN MIGUEL DE CAURI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1604,
      "Mes": 8,
      "Departamento": "HUANUCO",
      "Provincia": "YAROWILCA",
      "Distrito": "OBAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1605,
      "Mes": 8,
      "Departamento": "HUANUCO",
      "Provincia": "YAROWILCA",
      "Distrito": "CHORAS",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1606,
      "Mes": 8,
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "ICA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1607,
      "Mes": 8,
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "ICA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1608,
      "Mes": 8,
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "ICA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1609,
      "Mes": 8,
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "PARCONA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1610,
      "Mes": 8,
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "PARCONA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1611,
      "Mes": 8,
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "SANTIAGO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1612,
      "Mes": 8,
      "Departamento": "ICA",
      "Provincia": "CHINCHA",
      "Distrito": "CHINCHA ALTA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1613,
      "Mes": 8,
      "Departamento": "ICA",
      "Provincia": "CHINCHA",
      "Distrito": "SUNAMPE",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1614,
      "Mes": 8,
      "Departamento": "ICA",
      "Provincia": "PALPA",
      "Distrito": "PALPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1615,
      "Mes": 8,
      "Departamento": "ICA",
      "Provincia": "PALPA",
      "Distrito": "SANTA CRUZ",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1616,
      "Mes": 8,
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "INDEPENDENCIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1617,
      "Mes": 8,
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "INDEPENDENCIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1618,
      "Mes": 8,
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "PARACAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1619,
      "Mes": 8,
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "SAN ANDRES",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1620,
      "Mes": 8,
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "SAN CLEMENTE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1621,
      "Mes": 8,
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "TUPAC AMARU INCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1622,
      "Mes": 8,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "HUANCAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1623,
      "Mes": 8,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "EL TAMBO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1624,
      "Mes": 8,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "PILCOMAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1625,
      "Mes": 8,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "SAN AGUSTIN",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1626,
      "Mes": 8,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "SAPALLANGA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1627,
      "Mes": 8,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "SANTO DOMINGO DE ACOBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1628,
      "Mes": 8,
      "Departamento": "JUNIN",
      "Provincia": "HUANCAYO",
      "Distrito": "SANTO DOMINGO DE ACOBAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1629,
      "Mes": 8,
      "Departamento": "JUNIN",
      "Provincia": "CONCEPCION",
      "Distrito": "CONCEPCION",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1630,
      "Mes": 8,
      "Departamento": "JUNIN",
      "Provincia": "CONCEPCION",
      "Distrito": "MANZANARES",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1631,
      "Mes": 8,
      "Departamento": "JUNIN",
      "Provincia": "CONCEPCION",
      "Distrito": "SAN JOSE DE QUERO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1632,
      "Mes": 8,
      "Departamento": "JUNIN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "CHANCHAMAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1633,
      "Mes": 8,
      "Departamento": "JUNIN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PERENE",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1634,
      "Mes": 8,
      "Departamento": "JUNIN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PERENE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1635,
      "Mes": 8,
      "Departamento": "JUNIN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PERENE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1636,
      "Mes": 8,
      "Departamento": "JUNIN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PERENE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1637,
      "Mes": 8,
      "Departamento": "JUNIN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PICHANAKI",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1638,
      "Mes": 8,
      "Departamento": "JUNIN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PICHANAKI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1639,
      "Mes": 8,
      "Departamento": "JUNIN",
      "Provincia": "JAUJA",
      "Distrito": "APATA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1640,
      "Mes": 8,
      "Departamento": "JUNIN",
      "Provincia": "JAUJA",
      "Distrito": "CURICACA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1641,
      "Mes": 8,
      "Departamento": "JUNIN",
      "Provincia": "JAUJA",
      "Distrito": "MOLINOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1642,
      "Mes": 8,
      "Departamento": "JUNIN",
      "Provincia": "JAUJA",
      "Distrito": "SINCOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1643,
      "Mes": 8,
      "Departamento": "JUNIN",
      "Provincia": "SATIPO",
      "Distrito": "SATIPO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1644,
      "Mes": 8,
      "Departamento": "JUNIN",
      "Provincia": "SATIPO",
      "Distrito": "PAMPA HERMOSA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1645,
      "Mes": 8,
      "Departamento": "JUNIN",
      "Provincia": "SATIPO",
      "Distrito": "PAMPA HERMOSA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1646,
      "Mes": 8,
      "Departamento": "JUNIN",
      "Provincia": "SATIPO",
      "Distrito": "PANGOA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1647,
      "Mes": 8,
      "Departamento": "JUNIN",
      "Provincia": "SATIPO",
      "Distrito": "PANGOA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1648,
      "Mes": 8,
      "Departamento": "JUNIN",
      "Provincia": "SATIPO",
      "Distrito": "RIO NEGRO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1649,
      "Mes": 8,
      "Departamento": "JUNIN",
      "Provincia": "YAULI",
      "Distrito": "SANTA ROSA DE SACCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1650,
      "Mes": 8,
      "Departamento": "JUNIN",
      "Provincia": "CHUPACA",
      "Distrito": "HUACHAC",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1651,
      "Mes": 8,
      "Departamento": "LA LIBERTAD",
      "Provincia": "ASCOPE",
      "Distrito": "SANTIAGO DE CAO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1652,
      "Mes": 8,
      "Departamento": "LA LIBERTAD",
      "Provincia": "CHEPEN",
      "Distrito": "CHEPEN",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1653,
      "Mes": 8,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "ETEN",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1654,
      "Mes": 8,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "JOSE LEONARDO ORTIZ",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1655,
      "Mes": 8,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "MONSEFU",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1656,
      "Mes": 8,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "MONSEFU",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1657,
      "Mes": 8,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "REQUE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1658,
      "Mes": 8,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "REQUE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1659,
      "Mes": 8,
      "Departamento": "LAMBAYEQUE",
      "Provincia": "FERREÑAFE",
      "Distrito": "PITIPO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1660,
      "Mes": 8,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LURIGANCHO (CHOSICA)",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1661,
      "Mes": 8,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "SAN JUAN DE MIRAFLORES",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1662,
      "Mes": 8,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "SANTA ANITA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1663,
      "Mes": 8,
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "VILLA EL SALVADOR",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1664,
      "Mes": 8,
      "Departamento": "LIMA",
      "Provincia": "HUAURA",
      "Distrito": "AMBAR",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1665,
      "Mes": 8,
      "Departamento": "LORETO",
      "Provincia": "MAYNAS",
      "Distrito": "SAN JUAN BAUTISTA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1666,
      "Mes": 8,
      "Departamento": "LORETO",
      "Provincia": "MAYNAS",
      "Distrito": "SAN JUAN BAUTISTA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1667,
      "Mes": 8,
      "Departamento": "LORETO",
      "Provincia": "LORETO",
      "Distrito": "TROMPETEROS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1668,
      "Mes": 8,
      "Departamento": "LORETO",
      "Provincia": "MARISCAL RAMON CASTILLA",
      "Distrito": "RAMON CASTILLA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1669,
      "Mes": 8,
      "Departamento": "MADRE DE DIOS",
      "Provincia": "TAMBOPATA",
      "Distrito": "LABERINTO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1670,
      "Mes": 8,
      "Departamento": "MOQUEGUA",
      "Provincia": "MARISCAL NIETO",
      "Distrito": "MOQUEGUA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1671,
      "Mes": 8,
      "Departamento": "MOQUEGUA",
      "Provincia": "ILO",
      "Distrito": "ILO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1672,
      "Mes": 8,
      "Departamento": "MOQUEGUA",
      "Provincia": "ILO",
      "Distrito": "ILO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1673,
      "Mes": 8,
      "Departamento": "PIURA",
      "Provincia": "PIURA",
      "Distrito": "LA ARENA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1674,
      "Mes": 8,
      "Departamento": "PIURA",
      "Provincia": "PIURA",
      "Distrito": "LA ARENA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1675,
      "Mes": 8,
      "Departamento": "PIURA",
      "Provincia": "PIURA",
      "Distrito": "LA ARENA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1676,
      "Mes": 8,
      "Departamento": "PIURA",
      "Provincia": "PIURA",
      "Distrito": "LA UNION",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1677,
      "Mes": 8,
      "Departamento": "PIURA",
      "Provincia": "AYABACA",
      "Distrito": "AYABACA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1678,
      "Mes": 8,
      "Departamento": "PIURA",
      "Provincia": "AYABACA",
      "Distrito": "PAIMAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1679,
      "Mes": 8,
      "Departamento": "PIURA",
      "Provincia": "HUANCABAMBA",
      "Distrito": "HUANCABAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1680,
      "Mes": 8,
      "Departamento": "PIURA",
      "Provincia": "HUANCABAMBA",
      "Distrito": "HUANCABAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1681,
      "Mes": 8,
      "Departamento": "PUNO",
      "Provincia": "PUNO",
      "Distrito": "PUNO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1682,
      "Mes": 8,
      "Departamento": "PUNO",
      "Provincia": "PUNO",
      "Distrito": "PUNO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1683,
      "Mes": 8,
      "Departamento": "PUNO",
      "Provincia": "AZANGARO",
      "Distrito": "ASILLO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1684,
      "Mes": 8,
      "Departamento": "PUNO",
      "Provincia": "AZANGARO",
      "Distrito": "SAMAN",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1685,
      "Mes": 8,
      "Departamento": "PUNO",
      "Provincia": "CARABAYA",
      "Distrito": "OLLACHEA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1686,
      "Mes": 8,
      "Departamento": "PUNO",
      "Provincia": "CARABAYA",
      "Distrito": "USICAYOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1687,
      "Mes": 8,
      "Departamento": "PUNO",
      "Provincia": "CHUCUITO",
      "Distrito": "POMATA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1688,
      "Mes": 8,
      "Departamento": "PUNO",
      "Provincia": "EL COLLAO",
      "Distrito": "ILAVE",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1689,
      "Mes": 8,
      "Departamento": "PUNO",
      "Provincia": "EL COLLAO",
      "Distrito": "ILAVE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1690,
      "Mes": 8,
      "Departamento": "PUNO",
      "Provincia": "EL COLLAO",
      "Distrito": "ILAVE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1691,
      "Mes": 8,
      "Departamento": "PUNO",
      "Provincia": "EL COLLAO",
      "Distrito": "ILAVE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1692,
      "Mes": 8,
      "Departamento": "PUNO",
      "Provincia": "EL COLLAO",
      "Distrito": "ILAVE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1693,
      "Mes": 8,
      "Departamento": "PUNO",
      "Provincia": "EL COLLAO",
      "Distrito": "PILCUYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1694,
      "Mes": 8,
      "Departamento": "PUNO",
      "Provincia": "LAMPA",
      "Distrito": "PALCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1695,
      "Mes": 8,
      "Departamento": "PUNO",
      "Provincia": "SAN ROMAN",
      "Distrito": "JULIACA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1696,
      "Mes": 8,
      "Departamento": "PUNO",
      "Provincia": "SAN ROMAN",
      "Distrito": "JULIACA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1697,
      "Mes": 8,
      "Departamento": "PUNO",
      "Provincia": "SAN ROMAN",
      "Distrito": "CABANILLAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1698,
      "Mes": 8,
      "Departamento": "PUNO",
      "Provincia": "SAN ROMAN",
      "Distrito": "CARACOTO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1699,
      "Mes": 8,
      "Departamento": "PUNO",
      "Provincia": "SANDIA",
      "Distrito": "ALTO INAMBARI",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1700,
      "Mes": 8,
      "Departamento": "SAN MARTIN",
      "Provincia": "MOYOBAMBA",
      "Distrito": "MOYOBAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1701,
      "Mes": 8,
      "Departamento": "SAN MARTIN",
      "Provincia": "MOYOBAMBA",
      "Distrito": "CALZADA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1702,
      "Mes": 8,
      "Departamento": "SAN MARTIN",
      "Provincia": "MOYOBAMBA",
      "Distrito": "CALZADA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1703,
      "Mes": 8,
      "Departamento": "SAN MARTIN",
      "Provincia": "MOYOBAMBA",
      "Distrito": "JEPELACIO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1704,
      "Mes": 8,
      "Departamento": "SAN MARTIN",
      "Provincia": "MOYOBAMBA",
      "Distrito": "JEPELACIO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1705,
      "Mes": 8,
      "Departamento": "SAN MARTIN",
      "Provincia": "MOYOBAMBA",
      "Distrito": "JEPELACIO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1706,
      "Mes": 8,
      "Departamento": "SAN MARTIN",
      "Provincia": "BELLAVISTA",
      "Distrito": "BELLAVISTA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1707,
      "Mes": 8,
      "Departamento": "SAN MARTIN",
      "Provincia": "LAMAS",
      "Distrito": "CAYNARACHI",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1708,
      "Mes": 8,
      "Departamento": "SAN MARTIN",
      "Provincia": "RIOJA",
      "Distrito": "NUEVA CAJAMARCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1709,
      "Mes": 8,
      "Departamento": "SAN MARTIN",
      "Provincia": "SAN MARTIN",
      "Distrito": "SAUCE",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1710,
      "Mes": 8,
      "Departamento": "SAN MARTIN",
      "Provincia": "TOCACHE",
      "Distrito": "NUEVO PROGRESO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1711,
      "Mes": 8,
      "Departamento": "SAN MARTIN",
      "Provincia": "TOCACHE",
      "Distrito": "POLVORA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1712,
      "Mes": 8,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "TACNA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1713,
      "Mes": 8,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "TACNA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1714,
      "Mes": 8,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "TACNA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1715,
      "Mes": 8,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "ALTO DE LA ALIANZA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1716,
      "Mes": 8,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "ALTO DE LA ALIANZA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1717,
      "Mes": 8,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "ALTO DE LA ALIANZA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1718,
      "Mes": 8,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "INCLAN",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1719,
      "Mes": 8,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "PACHIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1720,
      "Mes": 8,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "PACHIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1721,
      "Mes": 8,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "PALCA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1722,
      "Mes": 8,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CORONEL GREGORIO ALBARRACIN LANCHIPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1723,
      "Mes": 8,
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CORONEL GREGORIO ALBARRACIN LANCHIPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1724,
      "Mes": 8,
      "Departamento": "TACNA",
      "Provincia": "CANDARAVE",
      "Distrito": "CANDARAVE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1725,
      "Mes": 8,
      "Departamento": "TACNA",
      "Provincia": "CANDARAVE",
      "Distrito": "CANDARAVE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1726,
      "Mes": 8,
      "Departamento": "TACNA",
      "Provincia": "JORGE BASADRE",
      "Distrito": "ILABAYA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1727,
      "Mes": 8,
      "Departamento": "TACNA",
      "Provincia": "JORGE BASADRE",
      "Distrito": "ITE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1728,
      "Mes": 8,
      "Departamento": "TACNA",
      "Provincia": "TARATA",
      "Distrito": "TARATA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1729,
      "Mes": 8,
      "Departamento": "TACNA",
      "Provincia": "TARATA",
      "Distrito": "ESTIQUE-PAMPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    }
  ];

  /* PLACES */
  /* public selectedRegion: RegionI = {id: 0, name: ""};
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
  } */

}
