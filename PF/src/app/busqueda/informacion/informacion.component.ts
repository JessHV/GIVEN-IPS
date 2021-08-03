import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
//Internacionalizacion
import { TranslateConfigService } from '../../services/translate-config.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {

  constructor(private service:SharedService, private translateConfigService: TranslateConfigService) { }

  // Variables
  AnticoncepcionList:any=[];

  public page:number = 0;
  public search:string = "";
  public more:boolean=false;
  public option:number=0;

  public busqueda:string="";
  public metodo:string="";
  public edad:string="";
  public mes:string="";
  public departamento:string="";
  public provincia:string="";
  public distrito:string="";

  // Función para mostrar más filtros
  changeMore() {
    this.more = !this.more;
  }

  // Función para iniciar el componente
  ngOnInit(): void {
    this.AnticoncepcionList=this.localAnticoncepcion;
    this.refreshAntiList();
  }

  // Función para actualizar los registros
  refreshAntiList() {
    this.AnticoncepcionList=this.localAnticoncepcion;
  }

  // Función para filtrar registros
  onSearchAnticoncepcion( search:string ) {
    this.page = 0;
    this.search = search;
    this.option = 0;
    this.mes="";
    this.departamento="";
    this.provincia="";
    this.distrito="";
    this.edad="";
    this.metodo="";
  }

  // Función para filtrar por mes
  onSearchMes(search:string) {
    this.page = 0;
    this.search = search;
    this.option = 1;
    this.departamento="";
    this.provincia="";
    this.distrito="";
    this.edad="";
    this.metodo="";
    this.busqueda="";
  }

  // Función para filtrar por departamento
  onSearchDepartamento(search:string) {
    this.page = 0;
    this.search = search;
    this.option = 2;
    this.mes="";
    this.provincia="";
    this.distrito="";
    this.edad="";
    this.metodo="";
    this.busqueda="";
  }

  // Función para filtrar por provincia
  onSearchProvincia(search:string) {
    this.page = 0;
    this.search = search;
    this.option = 3;
    this.mes="";
    this.departamento="";
    this.distrito="";
    this.edad="";
    this.metodo="";
    this.busqueda="";
  }

  // Función para filtrar por distrito
  onSearchDistrito(search:string) {
    this.page = 0;
    this.search = search;
    this.option = 4;
    this.mes="";
    this.departamento="";
    this.provincia="";
    this.edad="";
    this.metodo="";
    this.busqueda="";
  }

  // Función para filtrar por edad
  onSearchEdad(search:string) {
    this.page = 0;
    this.search = search;
    this.option = 5;
    this.mes="";
    this.departamento="";
    this.provincia="";
    this.distrito="";
    this.metodo="";
    this.busqueda="";
  }

  // Función para filtrar por metodo
  onSearchMetodo(search:string) {
    this.page = 0;
    this.search = search;
    this.option = 6;
    this.mes="";
    this.departamento="";
    this.provincia="";
    this.distrito="";
    this.edad="";
    this.busqueda="";
  }

  // Función para mostrar hoja anterior
  nextPage():void {
    this.page += 15;
  }

  // Función para mostrar hoja siguiente
  prevPage():void {
    if(this.page > 0)
      this.page -= 15;
  }

  // Array anticoncepcion
  public localAnticoncepcion:any = [
    {
      "Id": 1,
      "Mes": "Enero",
      "Departamento": "ÁNCASH",
      "Provincia": "RECUAY",
      "Distrito": "CATAC",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 2,
      "Mes": "Enero",
      "Departamento": "ÁNCASH",
      "Provincia": "SANTA",
      "Distrito": "CHIMBOTE",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 3,
      "Mes": "Enero",
      "Departamento": "ÁNCASH",
      "Provincia": "SANTA",
      "Distrito": "NUEVO CHIMBOTE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 4,
      "Mes": "Enero",
      "Departamento": "ÁNCASH",
      "Provincia": "SANTA",
      "Distrito": "NUEVO CHIMBOTE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 5,
      "Mes": "Enero",
      "Departamento": "APURÍMAC",
      "Provincia": "ABANCAY",
      "Distrito": "ABANCAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 6,
      "Mes": "Enero",
      "Departamento": "APURÍMAC",
      "Provincia": "ABANCAY",
      "Distrito": "ABANCAY",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 7,
      "Mes": "Enero",
      "Departamento": "APURÍMAC",
      "Provincia": "ABANCAY",
      "Distrito": "CURAHUASI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 8,
      "Mes": "Enero",
      "Departamento": "APURÍMAC",
      "Provincia": "ABANCAY",
      "Distrito": "TAMBURCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 9,
      "Mes": "Enero",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "ANDAHUAYLAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 10,
      "Mes": "Enero",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "ANDAHUAYLAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 11,
      "Mes": "Enero",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "ANDARAPA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 12,
      "Mes": "Enero",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "HUANCARAMA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 13,
      "Mes": "Enero",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "KISHUARA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 14,
      "Mes": "Enero",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "PACOBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 15,
      "Mes": "Enero",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "PACOBAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 16,
      "Mes": "Enero",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "TUMAY HUARACA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 17,
      "Mes": "Enero",
      "Departamento": "APURÍMAC",
      "Provincia": "ANTABAMBA",
      "Distrito": "ANTABAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 18,
      "Mes": "Enero",
      "Departamento": "APURÍMAC",
      "Provincia": "ANTABAMBA",
      "Distrito": "SABAINO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 19,
      "Mes": "Enero",
      "Departamento": "APURÍMAC",
      "Provincia": "AYMARAES",
      "Distrito": "TAPAIRIHUA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 20,
      "Mes": "Enero",
      "Departamento": "APURÍMAC",
      "Provincia": "AYMARAES",
      "Distrito": "TAPAIRIHUA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 21,
      "Mes": "Enero",
      "Departamento": "APURÍMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "COTABAMBAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 22,
      "Mes": "Enero",
      "Departamento": "APURÍMAC",
      "Provincia": "GRAU",
      "Distrito": "CURPAHUASI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 23,
      "Mes": "Enero",
      "Departamento": "APURÍMAC",
      "Provincia": "GRAU",
      "Distrito": "PROGRESO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 24,
      "Mes": "Enero",
      "Departamento": "AREQUIPA",
      "Provincia": "AREQUIPA",
      "Distrito": "VITOR",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 25,
      "Mes": "Enero",
      "Departamento": "AREQUIPA",
      "Provincia": "CAYLLOMA",
      "Distrito": "CHIVAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 26,
      "Mes": "Enero",
      "Departamento": "AREQUIPA",
      "Provincia": "CAYLLOMA",
      "Distrito": "CHIVAY",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 27,
      "Mes": "Enero",
      "Departamento": "AREQUIPA",
      "Provincia": "CAYLLOMA",
      "Distrito": "MAJES",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 28,
      "Mes": "Enero",
      "Departamento": "AREQUIPA",
      "Provincia": "CONDESUYOS",
      "Distrito": "CHUQUIBAMBA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 29,
      "Mes": "Enero",
      "Departamento": "AYACUCHO",
      "Provincia": "PAUCAR DEL SARA SARA",
      "Distrito": "OYOLO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 30,
      "Mes": "Enero",
      "Departamento": "CAJAMARCA",
      "Provincia": "CAJAMARCA",
      "Distrito": "CAJAMARCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 31,
      "Mes": "Enero",
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CALLAO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 32,
      "Mes": "Enero",
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CALLAO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 33,
      "Mes": "Enero",
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CALLAO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 34,
      "Mes": "Enero",
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "BELLAVISTA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 35,
      "Mes": "Enero",
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "BELLAVISTA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 36,
      "Mes": "Enero",
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "BELLAVISTA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 37,
      "Mes": "Enero",
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "VENTANILLA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 38,
      "Mes": "Enero",
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "VENTANILLA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 39,
      "Mes": "Enero",
      "Departamento": "CUSCO",
      "Provincia": "CALCA",
      "Distrito": "LAMAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 40,
      "Mes": "Enero",
      "Departamento": "CUSCO",
      "Provincia": "CALCA",
      "Distrito": "LAMAY",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 41,
      "Mes": "Enero",
      "Departamento": "CUSCO",
      "Provincia": "CHUMBIVILCAS",
      "Distrito": "LLUSCO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 42,
      "Mes": "Enero",
      "Departamento": "CUSCO",
      "Provincia": "LA CONVENCION",
      "Distrito": "QUELLOUNO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 43,
      "Mes": "Enero",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ACOBAMBA",
      "Distrito": "PAUCARA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 44,
      "Mes": "Enero",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "ANCHONGA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 45,
      "Mes": "Enero",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "CCOCHACCASA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 46,
      "Mes": "Enero",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "CCOCHACCASA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 47,
      "Mes": "Enero",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "CHINCHO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 48,
      "Mes": "Enero",
      "Departamento": "HUANCAVELICA",
      "Provincia": "CASTROVIRREYNA",
      "Distrito": "CASTROVIRREYNA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 49,
      "Mes": "Enero",
      "Departamento": "HUANCAVELICA",
      "Provincia": "CASTROVIRREYNA",
      "Distrito": "CASTROVIRREYNA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 50,
      "Mes": "Enero",
      "Departamento": "HUANCAVELICA",
      "Provincia": "CASTROVIRREYNA",
      "Distrito": "CASTROVIRREYNA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 51,
      "Mes": "Enero",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUAYTARA",
      "Distrito": "HUAYTARA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 52,
      "Mes": "Enero",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "PAMPAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 53,
      "Mes": "Enero",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "ACRAQUIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 54,
      "Mes": "Enero",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "ACRAQUIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 55,
      "Mes": "Enero",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "AHUAYCHA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 56,
      "Mes": "Enero",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "COLCABAMBA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 57,
      "Mes": "Enero",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "DANIEL HERNANDEZ",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 58,
      "Mes": "Enero",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "HUACHOCOLPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 59,
      "Mes": "Enero",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "SURCUBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 60,
      "Mes": "Enero",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "TINTAY PUNCU",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 61,
      "Mes": "Enero",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUÁNUCO",
      "Distrito": "HUÁNUCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 62,
      "Mes": "Enero",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUÁNUCO",
      "Distrito": "HUÁNUCO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 63,
      "Mes": "Enero",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUÁNUCO",
      "Distrito": "CHINCHAO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 64,
      "Mes": "Enero",
      "Departamento": "HUÁNUCO",
      "Provincia": "AMBO",
      "Distrito": "SAN RAFAEL",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 65,
      "Mes": "Enero",
      "Departamento": "HUÁNUCO",
      "Provincia": "DOS DE MAYO",
      "Distrito": "LA UNION",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 66,
      "Mes": "Enero",
      "Departamento": "HUÁNUCO",
      "Provincia": "DOS DE MAYO",
      "Distrito": "MARIAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 67,
      "Mes": "Enero",
      "Departamento": "HUÁNUCO",
      "Provincia": "DOS DE MAYO",
      "Distrito": "PACHAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 68,
      "Mes": "Enero",
      "Departamento": "HUÁNUCO",
      "Provincia": "DOS DE MAYO",
      "Distrito": "PACHAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 69,
      "Mes": "Enero",
      "Departamento": "HUÁNUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "RUPA-RUPA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 70,
      "Mes": "Enero",
      "Departamento": "HUÁNUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "DANIEL ALOMIA ROBLES",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 71,
      "Mes": "Enero",
      "Departamento": "HUÁNUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "DANIEL ALOMIA ROBLES",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 72,
      "Mes": "Enero",
      "Departamento": "HUÁNUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "JOSE CRESPO Y CASTILLO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 73,
      "Mes": "Enero",
      "Departamento": "HUÁNUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "LUYANDO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 74,
      "Mes": "Enero",
      "Departamento": "HUÁNUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "MARIANO DAMASO BERAUN",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 75,
      "Mes": "Enero",
      "Departamento": "HUÁNUCO",
      "Provincia": "MARAÑON",
      "Distrito": "CHOLON",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 76,
      "Mes": "Enero",
      "Departamento": "HUÁNUCO",
      "Provincia": "PACHITEA",
      "Distrito": "PANAO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 77,
      "Mes": "Enero",
      "Departamento": "HUÁNUCO",
      "Provincia": "PUERTO INCA",
      "Distrito": "HONORIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 78,
      "Mes": "Enero",
      "Departamento": "HUÁNUCO",
      "Provincia": "PUERTO INCA",
      "Distrito": "HONORIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 79,
      "Mes": "Enero",
      "Departamento": "HUÁNUCO",
      "Provincia": "LAURICOCHA",
      "Distrito": "BAÑOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 80,
      "Mes": "Enero",
      "Departamento": "HUÁNUCO",
      "Provincia": "LAURICOCHA",
      "Distrito": "RONDOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 81,
      "Mes": "Enero",
      "Departamento": "HUÁNUCO",
      "Provincia": "LAURICOCHA",
      "Distrito": "SAN MIGUEL DE CAURI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 82,
      "Mes": "Enero",
      "Departamento": "HUÁNUCO",
      "Provincia": "LAURICOCHA",
      "Distrito": "SAN MIGUEL DE CAURI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 83,
      "Mes": "Enero",
      "Departamento": "HUÁNUCO",
      "Provincia": "YAROWILCA",
      "Distrito": "APARICIO POMARES",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 84,
      "Mes": "Enero",
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "ICA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 85,
      "Mes": "Enero",
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "OCUCAJE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 86,
      "Mes": "Enero",
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "PUEBLO NUEVO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 87,
      "Mes": "Enero",
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "SAN JOSE DE LOS MOLINOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 88,
      "Mes": "Enero",
      "Departamento": "ICA",
      "Provincia": "CHINCHA",
      "Distrito": "ALTO LARAN",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 89,
      "Mes": "Enero",
      "Departamento": "ICA",
      "Provincia": "CHINCHA",
      "Distrito": "PUEBLO NUEVO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 90,
      "Mes": "Enero",
      "Departamento": "ICA",
      "Provincia": "PALPA",
      "Distrito": "TIBILLO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 91,
      "Mes": "Enero",
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "PISCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 92,
      "Mes": "Enero",
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "PISCO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 93,
      "Mes": "Enero",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "HUANCAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 94,
      "Mes": "Enero",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "HUANCAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 95,
      "Mes": "Enero",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "CHILCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 96,
      "Mes": "Enero",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "CHONGOS ALTO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 97,
      "Mes": "Enero",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "EL TAMBO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 98,
      "Mes": "Enero",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "EL TAMBO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 99,
      "Mes": "Enero",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "HUANCAN",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 100,
      "Mes": "Enero",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "HUANCAN",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 101,
      "Mes": "Enero",
      "Departamento": "JUNÍN",
      "Provincia": "CONCEPCION",
      "Distrito": "CONCEPCION",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 102,
      "Mes": "Enero",
      "Departamento": "JUNÍN",
      "Provincia": "CONCEPCION",
      "Distrito": "SAN JOSE DE QUERO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 103,
      "Mes": "Enero",
      "Departamento": "JUNÍN",
      "Provincia": "CONCEPCION",
      "Distrito": "SANTA ROSA DE OCOPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 104,
      "Mes": "Enero",
      "Departamento": "JUNÍN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PERENE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 105,
      "Mes": "Enero",
      "Departamento": "JUNÍN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PERENE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 106,
      "Mes": "Enero",
      "Departamento": "JUNÍN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PICHANAKI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 107,
      "Mes": "Enero",
      "Departamento": "JUNÍN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "SAN RAMON",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 108,
      "Mes": "Enero",
      "Departamento": "JUNÍN",
      "Provincia": "JAUJA",
      "Distrito": "ACOLLA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 109,
      "Mes": "Enero",
      "Departamento": "JUNÍN",
      "Provincia": "JAUJA",
      "Distrito": "SINCOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 110,
      "Mes": "Enero",
      "Departamento": "JUNÍN",
      "Provincia": "JUNÍN",
      "Distrito": "CARHUAMAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 111,
      "Mes": "Enero",
      "Departamento": "JUNÍN",
      "Provincia": "SATIPO",
      "Distrito": "SATIPO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 112,
      "Mes": "Enero",
      "Departamento": "JUNÍN",
      "Provincia": "SATIPO",
      "Distrito": "LLAYLLA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 113,
      "Mes": "Enero",
      "Departamento": "JUNÍN",
      "Provincia": "SATIPO",
      "Distrito": "MAZAMARI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 114,
      "Mes": "Enero",
      "Departamento": "JUNÍN",
      "Provincia": "SATIPO",
      "Distrito": "PANGOA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 115,
      "Mes": "Enero",
      "Departamento": "JUNÍN",
      "Provincia": "SATIPO",
      "Distrito": "PANGOA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 116,
      "Mes": "Enero",
      "Departamento": "JUNÍN",
      "Provincia": "SATIPO",
      "Distrito": "RIO TAMBO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 117,
      "Mes": "Enero",
      "Departamento": "JUNÍN",
      "Provincia": "SATIPO",
      "Distrito": "RIO TAMBO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 118,
      "Mes": "Enero",
      "Departamento": "JUNÍN",
      "Provincia": "TARMA",
      "Distrito": "TARMA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 119,
      "Mes": "Enero",
      "Departamento": "JUNÍN",
      "Provincia": "TARMA",
      "Distrito": "ACOBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 120,
      "Mes": "Enero",
      "Departamento": "JUNÍN",
      "Provincia": "TARMA",
      "Distrito": "PALCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 121,
      "Mes": "Enero",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "CHICLAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 122,
      "Mes": "Enero",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "CHICLAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 123,
      "Mes": "Enero",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "CHICLAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 124,
      "Mes": "Enero",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "LA VICTORIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 125,
      "Mes": "Enero",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "LA VICTORIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 126,
      "Mes": "Enero",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "FERREÑAFE",
      "Distrito": "PUEBLO NUEVO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 127,
      "Mes": "Enero",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LIMA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 128,
      "Mes": "Enero",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "PACHACAMAC",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 129,
      "Mes": "Enero",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "PACHACAMAC",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 130,
      "Mes": "Enero",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "PACHACAMAC",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 131,
      "Mes": "Enero",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "SAN BARTOLO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 132,
      "Mes": "Enero",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "VILLA EL SALVADOR",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 133,
      "Mes": "Enero",
      "Departamento": "LIMA",
      "Provincia": "CAÑETE",
      "Distrito": "SAN LUIS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 134,
      "Mes": "Enero",
      "Departamento": "LIMA",
      "Provincia": "HUARAL",
      "Distrito": "AUCALLAMA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 135,
      "Mes": "Enero",
      "Departamento": "LIMA",
      "Provincia": "YAUYOS",
      "Distrito": "YAUYOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 136,
      "Mes": "Enero",
      "Departamento": "LIMA",
      "Provincia": "YAUYOS",
      "Distrito": "QUINCHES",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 137,
      "Mes": "Enero",
      "Departamento": "MOQUEGUA",
      "Provincia": "MARISCAL NIETO",
      "Distrito": "MOQUEGUA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 138,
      "Mes": "Enero",
      "Departamento": "MOQUEGUA",
      "Provincia": "MARISCAL NIETO",
      "Distrito": "MOQUEGUA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 139,
      "Mes": "Enero",
      "Departamento": "MOQUEGUA",
      "Provincia": "MARISCAL NIETO",
      "Distrito": "MOQUEGUA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 140,
      "Mes": "Enero",
      "Departamento": "MOQUEGUA",
      "Provincia": "MARISCAL NIETO",
      "Distrito": "MOQUEGUA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 141,
      "Mes": "Enero",
      "Departamento": "MOQUEGUA",
      "Provincia": "ILO",
      "Distrito": "ILO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 142,
      "Mes": "Enero",
      "Departamento": "MOQUEGUA",
      "Provincia": "ILO",
      "Distrito": "ILO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 143,
      "Mes": "Enero",
      "Departamento": "PIURA",
      "Provincia": "PIURA",
      "Distrito": "LA UNION",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 144,
      "Mes": "Enero",
      "Departamento": "PIURA",
      "Provincia": "PIURA",
      "Distrito": "LA UNION",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 145,
      "Mes": "Enero",
      "Departamento": "PIURA",
      "Provincia": "AYABACA",
      "Distrito": "AYABACA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 146,
      "Mes": "Enero",
      "Departamento": "PIURA",
      "Provincia": "HUANCABAMBA",
      "Distrito": "CANCHAQUE",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 147,
      "Mes": "Enero",
      "Departamento": "SAN MARTÍN",
      "Provincia": "MOYOBAMBA",
      "Distrito": "CALZADA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 148,
      "Mes": "Enero",
      "Departamento": "SAN MARTÍN",
      "Provincia": "BELLAVISTA",
      "Distrito": "BAJO BIAVO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 149,
      "Mes": "Enero",
      "Departamento": "SAN MARTÍN",
      "Provincia": "SAN MARTÍN",
      "Distrito": "EL PORVENIR",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 150,
      "Mes": "Enero",
      "Departamento": "SAN MARTÍN",
      "Provincia": "SAN MARTÍN",
      "Distrito": "SAUCE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 151,
      "Mes": "Enero",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "TACNA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 152,
      "Mes": "Enero",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CIUDAD NUEVA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 153,
      "Mes": "Enero",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CORONEL GREGORIO ALBARRACIN LANCHIPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 154,
      "Mes": "Enero",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CORONEL GREGORIO ALBARRACIN LANCHIPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 155,
      "Mes": "Enero",
      "Departamento": "UCAYALI",
      "Provincia": "CORONEL PORTILLO",
      "Distrito": "IPARIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 156,
      "Mes": "Febrero",
      "Departamento": "ÁNCASH",
      "Provincia": "HUARAZ",
      "Distrito": "HUARAZ",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 157,
      "Mes": "Febrero",
      "Departamento": "ÁNCASH",
      "Provincia": "HUARMEY",
      "Distrito": "HUARMEY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 158,
      "Mes": "Febrero",
      "Departamento": "ÁNCASH",
      "Provincia": "HUAYLAS",
      "Distrito": "PAMPAROMAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 159,
      "Mes": "Febrero",
      "Departamento": "ÁNCASH",
      "Provincia": "SANTA",
      "Distrito": "NUEVO CHIMBOTE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 160,
      "Mes": "Febrero",
      "Departamento": "APURÍMAC",
      "Provincia": "ABANCAY",
      "Distrito": "ABANCAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 161,
      "Mes": "Febrero",
      "Departamento": "APURÍMAC",
      "Provincia": "ABANCAY",
      "Distrito": "ABANCAY",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 162,
      "Mes": "Febrero",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "ANDAHUAYLAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 163,
      "Mes": "Febrero",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "ANDAHUAYLAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 164,
      "Mes": "Febrero",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "HUANCARAY",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 165,
      "Mes": "Febrero",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "KISHUARA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 166,
      "Mes": "Febrero",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "PACUCHA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 167,
      "Mes": "Febrero",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "PAMPACHIRI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 168,
      "Mes": "Febrero",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "SAN JERONIMO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 169,
      "Mes": "Febrero",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "TALAVERA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 170,
      "Mes": "Febrero",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "JOSÉ MARÍA ARGUEDAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 171,
      "Mes": "Febrero",
      "Departamento": "APURÍMAC",
      "Provincia": "ANTABAMBA",
      "Distrito": "PACHACONAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 172,
      "Mes": "Febrero",
      "Departamento": "APURÍMAC",
      "Provincia": "ANTABAMBA",
      "Distrito": "PACHACONAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 173,
      "Mes": "Febrero",
      "Departamento": "APURÍMAC",
      "Provincia": "AYMARAES",
      "Distrito": "SAÑAYCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 174,
      "Mes": "Febrero",
      "Departamento": "APURÍMAC",
      "Provincia": "CHINCHEROS",
      "Distrito": "OCOBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 175,
      "Mes": "Febrero",
      "Departamento": "APURÍMAC",
      "Provincia": "CHINCHEROS",
      "Distrito": "OCOBAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 176,
      "Mes": "Febrero",
      "Departamento": "APURÍMAC",
      "Provincia": "GRAU",
      "Distrito": "CHUQUIBAMBILLA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 177,
      "Mes": "Febrero",
      "Departamento": "AREQUIPA",
      "Provincia": "AREQUIPA",
      "Distrito": "CAYMA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 178,
      "Mes": "Febrero",
      "Departamento": "AREQUIPA",
      "Provincia": "AREQUIPA",
      "Distrito": "CERRO COLORADO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 179,
      "Mes": "Febrero",
      "Departamento": "AREQUIPA",
      "Provincia": "ISLAY",
      "Distrito": "MOLLENDO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 180,
      "Mes": "Febrero",
      "Departamento": "AREQUIPA",
      "Provincia": "ISLAY",
      "Distrito": "PUNTA DE BOMBON",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 181,
      "Mes": "Febrero",
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "ACOCRO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 182,
      "Mes": "Febrero",
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "QUINUA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 183,
      "Mes": "Febrero",
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "SAN JUAN BAUTISTA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 184,
      "Mes": "Febrero",
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "SAN JUAN BAUTISTA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 185,
      "Mes": "Febrero",
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "VINCHOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 186,
      "Mes": "Febrero",
      "Departamento": "AYACUCHO",
      "Provincia": "LA MAR",
      "Distrito": "SAN MIGUEL",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 187,
      "Mes": "Febrero",
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CALLAO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 188,
      "Mes": "Febrero",
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CALLAO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 189,
      "Mes": "Febrero",
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CALLAO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 190,
      "Mes": "Febrero",
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CALLAO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 191,
      "Mes": "Febrero",
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "BELLAVISTA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 192,
      "Mes": "Febrero",
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "VENTANILLA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 193,
      "Mes": "Febrero",
      "Departamento": "CUSCO",
      "Provincia": "CANCHIS",
      "Distrito": "SICUANI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 194,
      "Mes": "Febrero",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "HUANCAVELICA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 195,
      "Mes": "Febrero",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "HUANCAVELICA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 196,
      "Mes": "Febrero",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "PILCHACA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 197,
      "Mes": "Febrero",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "VILCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 198,
      "Mes": "Febrero",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "YAULI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 199,
      "Mes": "Febrero",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ACOBAMBA",
      "Distrito": "PAUCARA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 200,
      "Mes": "Febrero",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "ANCHONGA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 201,
      "Mes": "Febrero",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "HUAYLLAY GRANDE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 202,
      "Mes": "Febrero",
      "Departamento": "HUANCAVELICA",
      "Provincia": "CASTROVIRREYNA",
      "Distrito": "CASTROVIRREYNA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 203,
      "Mes": "Febrero",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "ACRAQUIA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 204,
      "Mes": "Febrero",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "DANIEL HERNANDEZ",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 205,
      "Mes": "Febrero",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "HUACHOCOLPA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 206,
      "Mes": "Febrero",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "SURCUBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 207,
      "Mes": "Febrero",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "TINTAY PUNCU",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 208,
      "Mes": "Febrero",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "QUICHUAS",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 209,
      "Mes": "Febrero",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "QUICHUAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 210,
      "Mes": "Febrero",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUÁNUCO",
      "Distrito": "HUÁNUCO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 211,
      "Mes": "Febrero",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUÁNUCO",
      "Distrito": "HUÁNUCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 212,
      "Mes": "Febrero",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUÁNUCO",
      "Distrito": "HUÁNUCO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 213,
      "Mes": "Febrero",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUÁNUCO",
      "Distrito": "AMARILIS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 214,
      "Mes": "Febrero",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUÁNUCO",
      "Distrito": "AMARILIS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 215,
      "Mes": "Febrero",
      "Departamento": "HUÁNUCO",
      "Provincia": "DOS DE MAYO",
      "Distrito": "LA UNION",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 216,
      "Mes": "Febrero",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUACAYBAMBA",
      "Distrito": "HUACAYBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 217,
      "Mes": "Febrero",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUACAYBAMBA",
      "Distrito": "HUACAYBAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 218,
      "Mes": "Febrero",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "CHAVIN DE PARIARCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 219,
      "Mes": "Febrero",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "MONZON",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 220,
      "Mes": "Febrero",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "MONZON",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 221,
      "Mes": "Febrero",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "PUNCHAO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 222,
      "Mes": "Febrero",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "PUÑOS",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 223,
      "Mes": "Febrero",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "PUÑOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 224,
      "Mes": "Febrero",
      "Departamento": "HUÁNUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "RUPA-RUPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 225,
      "Mes": "Febrero",
      "Departamento": "HUÁNUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "JOSE CRESPO Y CASTILLO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 226,
      "Mes": "Febrero",
      "Departamento": "HUÁNUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "LUYANDO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 227,
      "Mes": "Febrero",
      "Departamento": "HUÁNUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "MARIANO DAMASO BERAUN",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 228,
      "Mes": "Febrero",
      "Departamento": "HUÁNUCO",
      "Provincia": "PACHITEA",
      "Distrito": "MOLINO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 229,
      "Mes": "Febrero",
      "Departamento": "HUÁNUCO",
      "Provincia": "PUERTO INCA",
      "Distrito": "PUERTO INCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 230,
      "Mes": "Febrero",
      "Departamento": "HUÁNUCO",
      "Provincia": "PUERTO INCA",
      "Distrito": "HONORIA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 231,
      "Mes": "Febrero",
      "Departamento": "HUÁNUCO",
      "Provincia": "PUERTO INCA",
      "Distrito": "TOURNAVISTA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 232,
      "Mes": "Febrero",
      "Departamento": "HUÁNUCO",
      "Provincia": "YAROWILCA",
      "Distrito": "CHAVINILLO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 233,
      "Mes": "Febrero",
      "Departamento": "HUÁNUCO",
      "Provincia": "YAROWILCA",
      "Distrito": "CAHUAC",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 234,
      "Mes": "Febrero",
      "Departamento": "HUÁNUCO",
      "Provincia": "YAROWILCA",
      "Distrito": "OBAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 235,
      "Mes": "Febrero",
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "ICA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 236,
      "Mes": "Febrero",
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "ICA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 237,
      "Mes": "Febrero",
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "PARCONA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 238,
      "Mes": "Febrero",
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "SUBTANJALLA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 239,
      "Mes": "Febrero",
      "Departamento": "ICA",
      "Provincia": "NAZCA",
      "Distrito": "NAZCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 240,
      "Mes": "Febrero",
      "Departamento": "ICA",
      "Provincia": "NAZCA",
      "Distrito": "NAZCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 241,
      "Mes": "Febrero",
      "Departamento": "ICA",
      "Provincia": "NAZCA",
      "Distrito": "VISTA ALEGRE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 242,
      "Mes": "Febrero",
      "Departamento": "ICA",
      "Provincia": "PALPA",
      "Distrito": "RIO GRANDE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 243,
      "Mes": "Febrero",
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "TUPAC AMARU INCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 244,
      "Mes": "Febrero",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "CHILCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 245,
      "Mes": "Febrero",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "CHONGOS ALTO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 246,
      "Mes": "Febrero",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "EL TAMBO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 247,
      "Mes": "Febrero",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "HUANCAN",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 248,
      "Mes": "Febrero",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "PILCOMAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 249,
      "Mes": "Febrero",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "SICAYA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 250,
      "Mes": "Febrero",
      "Departamento": "JUNÍN",
      "Provincia": "CONCEPCION",
      "Distrito": "MITO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 251,
      "Mes": "Febrero",
      "Departamento": "JUNÍN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PERENE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 252,
      "Mes": "Febrero",
      "Departamento": "JUNÍN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PICHANAKI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 253,
      "Mes": "Febrero",
      "Departamento": "JUNÍN",
      "Provincia": "JAUJA",
      "Distrito": "JAUJA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 254,
      "Mes": "Febrero",
      "Departamento": "JUNÍN",
      "Provincia": "JAUJA",
      "Distrito": "LLOCLLAPAMPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 255,
      "Mes": "Febrero",
      "Departamento": "JUNÍN",
      "Provincia": "JAUJA",
      "Distrito": "MASMA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 256,
      "Mes": "Febrero",
      "Departamento": "JUNÍN",
      "Provincia": "JAUJA",
      "Distrito": "MOLINOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 257,
      "Mes": "Febrero",
      "Departamento": "JUNÍN",
      "Provincia": "JAUJA",
      "Distrito": "SAN LORENZO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 258,
      "Mes": "Febrero",
      "Departamento": "JUNÍN",
      "Provincia": "JAUJA",
      "Distrito": "SAN LORENZO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 259,
      "Mes": "Febrero",
      "Departamento": "JUNÍN",
      "Provincia": "JAUJA",
      "Distrito": "YAUYOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 260,
      "Mes": "Febrero",
      "Departamento": "JUNÍN",
      "Provincia": "JAUJA",
      "Distrito": "YAUYOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 261,
      "Mes": "Febrero",
      "Departamento": "JUNÍN",
      "Provincia": "JUNÍN",
      "Distrito": "CARHUAMAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 262,
      "Mes": "Febrero",
      "Departamento": "JUNÍN",
      "Provincia": "SATIPO",
      "Distrito": "SATIPO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 263,
      "Mes": "Febrero",
      "Departamento": "JUNÍN",
      "Provincia": "SATIPO",
      "Distrito": "PANGOA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 264,
      "Mes": "Febrero",
      "Departamento": "JUNÍN",
      "Provincia": "SATIPO",
      "Distrito": "PANGOA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 265,
      "Mes": "Febrero",
      "Departamento": "JUNÍN",
      "Provincia": "TARMA",
      "Distrito": "TARMA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 266,
      "Mes": "Febrero",
      "Departamento": "JUNÍN",
      "Provincia": "TARMA",
      "Distrito": "PALCA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 267,
      "Mes": "Febrero",
      "Departamento": "JUNÍN",
      "Provincia": "TARMA",
      "Distrito": "TAPO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 268,
      "Mes": "Febrero",
      "Departamento": "LA LIBERTAD",
      "Provincia": "CHEPEN",
      "Distrito": "PUEBLO NUEVO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 269,
      "Mes": "Febrero",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "CHICLAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 270,
      "Mes": "Febrero",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "JOSE LEONARDO ORTIZ",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 271,
      "Mes": "Febrero",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "JOSE LEONARDO ORTIZ",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 272,
      "Mes": "Febrero",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "JOSE LEONARDO ORTIZ",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 273,
      "Mes": "Febrero",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "LA VICTORIA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 274,
      "Mes": "Febrero",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "LA VICTORIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 275,
      "Mes": "Febrero",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "LA VICTORIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 276,
      "Mes": "Febrero",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "FERREÑAFE",
      "Distrito": "PITIPO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 277,
      "Mes": "Febrero",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LIMA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 278,
      "Mes": "Febrero",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LURIGANCHO (CHOSICA)",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 279,
      "Mes": "Febrero",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LURIN",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 280,
      "Mes": "Febrero",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LURIN",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 281,
      "Mes": "Febrero",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "PACHACAMAC",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 282,
      "Mes": "Febrero",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "PUNTA HERMOSA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 283,
      "Mes": "Febrero",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "PUNTA NEGRA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 284,
      "Mes": "Febrero",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "VILLA EL SALVADOR",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 285,
      "Mes": "Febrero",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "VILLA EL SALVADOR",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 286,
      "Mes": "Febrero",
      "Departamento": "LIMA",
      "Provincia": "HUAURA",
      "Distrito": "SANTA MARIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 287,
      "Mes": "Febrero",
      "Departamento": "LORETO",
      "Provincia": "MAYNAS",
      "Distrito": "PUNCHANA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 288,
      "Mes": "Febrero",
      "Departamento": "MADRE DE DIOS",
      "Provincia": "TAMBOPATA",
      "Distrito": "LABERINTO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 289,
      "Mes": "Febrero",
      "Departamento": "MOQUEGUA",
      "Provincia": "MARISCAL NIETO",
      "Distrito": "MOQUEGUA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 290,
      "Mes": "Febrero",
      "Departamento": "MOQUEGUA",
      "Provincia": "MARISCAL NIETO",
      "Distrito": "MOQUEGUA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 291,
      "Mes": "Febrero",
      "Departamento": "MOQUEGUA",
      "Provincia": "ILO",
      "Distrito": "ILO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 292,
      "Mes": "Febrero",
      "Departamento": "MOQUEGUA",
      "Provincia": "ILO",
      "Distrito": "ILO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 293,
      "Mes": "Febrero",
      "Departamento": "PIURA",
      "Provincia": "PIURA",
      "Distrito": "CATACAOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 294,
      "Mes": "Febrero",
      "Departamento": "PIURA",
      "Provincia": "PIURA",
      "Distrito": "LA ARENA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 295,
      "Mes": "Febrero",
      "Departamento": "PIURA",
      "Provincia": "PIURA",
      "Distrito": "LA UNION",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 296,
      "Mes": "Febrero",
      "Departamento": "PIURA",
      "Provincia": "PIURA",
      "Distrito": "LA UNION",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 297,
      "Mes": "Febrero",
      "Departamento": "PIURA",
      "Provincia": "AYABACA",
      "Distrito": "PAIMAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 298,
      "Mes": "Febrero",
      "Departamento": "PIURA",
      "Provincia": "MORROPON",
      "Distrito": "SAN JUAN DE BIGOTE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 299,
      "Mes": "Febrero",
      "Departamento": "PIURA",
      "Provincia": "PAITA",
      "Distrito": "VICHAYAL",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 300,
      "Mes": "Febrero",
      "Departamento": "SAN MARTÍN",
      "Provincia": "BELLAVISTA",
      "Distrito": "BAJO BIAVO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 301,
      "Mes": "Febrero",
      "Departamento": "SAN MARTÍN",
      "Provincia": "LAMAS",
      "Distrito": "CAYNARACHI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 302,
      "Mes": "Febrero",
      "Departamento": "SAN MARTÍN",
      "Provincia": "MARISCAL CACERES",
      "Distrito": "JUANJUI",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 303,
      "Mes": "Febrero",
      "Departamento": "SAN MARTÍN",
      "Provincia": "RIOJA",
      "Distrito": "SAN FERNANDO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 304,
      "Mes": "Febrero",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "TACNA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 305,
      "Mes": "Febrero",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "ALTO DE LA ALIANZA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 306,
      "Mes": "Febrero",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "ALTO DE LA ALIANZA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 307,
      "Mes": "Febrero",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CIUDAD NUEVA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 308,
      "Mes": "Febrero",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CIUDAD NUEVA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 309,
      "Mes": "Febrero",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "POCOLLAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 310,
      "Mes": "Febrero",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CORONEL GREGORIO ALBARRACIN LANCHIPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 311,
      "Mes": "Febrero",
      "Departamento": "TACNA",
      "Provincia": "CANDARAVE",
      "Distrito": "CANDARAVE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 312,
      "Mes": "Febrero",
      "Departamento": "UCAYALI",
      "Provincia": "CORONEL PORTILLO",
      "Distrito": "IPARIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 313,
      "Mes": "Marzo",
      "Departamento": "ÁNCASH",
      "Provincia": "BOLOGNESI",
      "Distrito": "CAJACAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 314,
      "Mes": "Marzo",
      "Departamento": "ÁNCASH",
      "Provincia": "CARHUAZ",
      "Distrito": "CARHUAZ",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 315,
      "Mes": "Marzo",
      "Departamento": "ÁNCASH",
      "Provincia": "CARHUAZ",
      "Distrito": "YUNGAR",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 316,
      "Mes": "Marzo",
      "Departamento": "ÁNCASH",
      "Provincia": "HUARMEY",
      "Distrito": "COCHAPETI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 317,
      "Mes": "Marzo",
      "Departamento": "ÁNCASH",
      "Provincia": "HUAYLAS",
      "Distrito": "MATO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 318,
      "Mes": "Marzo",
      "Departamento": "ÁNCASH",
      "Provincia": "RECUAY",
      "Distrito": "CATAC",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 319,
      "Mes": "Marzo",
      "Departamento": "ÁNCASH",
      "Provincia": "SANTA",
      "Distrito": "SAMANCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 320,
      "Mes": "Marzo",
      "Departamento": "ÁNCASH",
      "Provincia": "SANTA",
      "Distrito": "NUEVO CHIMBOTE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 321,
      "Mes": "Marzo",
      "Departamento": "ÁNCASH",
      "Provincia": "SANTA",
      "Distrito": "NUEVO CHIMBOTE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 322,
      "Mes": "Marzo",
      "Departamento": "ÁNCASH",
      "Provincia": "SANTA",
      "Distrito": "NUEVO CHIMBOTE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 323,
      "Mes": "Marzo",
      "Departamento": "ÁNCASH",
      "Provincia": "YUNGAY",
      "Distrito": "MANCOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 324,
      "Mes": "Marzo",
      "Departamento": "APURÍMAC",
      "Provincia": "ABANCAY",
      "Distrito": "ABANCAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 325,
      "Mes": "Marzo",
      "Departamento": "APURÍMAC",
      "Provincia": "ABANCAY",
      "Distrito": "ABANCAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 326,
      "Mes": "Marzo",
      "Departamento": "APURÍMAC",
      "Provincia": "ABANCAY",
      "Distrito": "ABANCAY",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 327,
      "Mes": "Marzo",
      "Departamento": "APURÍMAC",
      "Provincia": "ABANCAY",
      "Distrito": "HUANIPACA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 328,
      "Mes": "Marzo",
      "Departamento": "APURÍMAC",
      "Provincia": "ABANCAY",
      "Distrito": "LAMBRAMA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 329,
      "Mes": "Marzo",
      "Departamento": "APURÍMAC",
      "Provincia": "ABANCAY",
      "Distrito": "SAN PEDRO DE CACHORA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 330,
      "Mes": "Marzo",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "ANDAHUAYLAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 331,
      "Mes": "Marzo",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "ANDAHUAYLAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 332,
      "Mes": "Marzo",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "CHIARA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 333,
      "Mes": "Marzo",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "HUANCARAMA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 334,
      "Mes": "Marzo",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "KISHUARA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 335,
      "Mes": "Marzo",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "KISHUARA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 336,
      "Mes": "Marzo",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "PACUCHA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 337,
      "Mes": "Marzo",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "PACUCHA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 338,
      "Mes": "Marzo",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "PACUCHA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 339,
      "Mes": "Marzo",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "PACUCHA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 340,
      "Mes": "Marzo",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "PAMPACHIRI",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 341,
      "Mes": "Marzo",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "PAMPACHIRI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 342,
      "Mes": "Marzo",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "SAN ANTONIO DE CACHI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 343,
      "Mes": "Marzo",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "SAN JERONIMO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 344,
      "Mes": "Marzo",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "KAQUIABAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 345,
      "Mes": "Marzo",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "KAQUIABAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 346,
      "Mes": "Marzo",
      "Departamento": "APURÍMAC",
      "Provincia": "ANTABAMBA",
      "Distrito": "HUAQUIRCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 347,
      "Mes": "Marzo",
      "Departamento": "APURÍMAC",
      "Provincia": "AYMARAES",
      "Distrito": "SAN JUAN DE CHACÑA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 348,
      "Mes": "Marzo",
      "Departamento": "APURÍMAC",
      "Provincia": "AYMARAES",
      "Distrito": "SAÑAYCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 349,
      "Mes": "Marzo",
      "Departamento": "APURÍMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "COTABAMBAS",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 350,
      "Mes": "Marzo",
      "Departamento": "APURÍMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "COTABAMBAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 351,
      "Mes": "Marzo",
      "Departamento": "APURÍMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "COTABAMBAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 352,
      "Mes": "Marzo",
      "Departamento": "APURÍMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "COYLLURQUI",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 353,
      "Mes": "Marzo",
      "Departamento": "APURÍMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "COYLLURQUI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 354,
      "Mes": "Marzo",
      "Departamento": "APURÍMAC",
      "Provincia": "CHINCHEROS",
      "Distrito": "CHINCHEROS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 355,
      "Mes": "Marzo",
      "Departamento": "APURÍMAC",
      "Provincia": "CHINCHEROS",
      "Distrito": "HUACCANA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 356,
      "Mes": "Marzo",
      "Departamento": "APURÍMAC",
      "Provincia": "CHINCHEROS",
      "Distrito": "ONGOY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 357,
      "Mes": "Marzo",
      "Departamento": "APURÍMAC",
      "Provincia": "GRAU",
      "Distrito": "GAMARRA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 358,
      "Mes": "Marzo",
      "Departamento": "APURÍMAC",
      "Provincia": "GRAU",
      "Distrito": "HUAYLLATI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 359,
      "Mes": "Marzo",
      "Departamento": "APURÍMAC",
      "Provincia": "GRAU",
      "Distrito": "PROGRESO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 360,
      "Mes": "Marzo",
      "Departamento": "AREQUIPA",
      "Provincia": "AREQUIPA",
      "Distrito": "CHARACATO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 361,
      "Mes": "Marzo",
      "Departamento": "AREQUIPA",
      "Provincia": "AREQUIPA",
      "Distrito": "MARIANO MELGAR",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 362,
      "Mes": "Marzo",
      "Departamento": "AREQUIPA",
      "Provincia": "AREQUIPA",
      "Distrito": "MARIANO MELGAR",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 363,
      "Mes": "Marzo",
      "Departamento": "AREQUIPA",
      "Provincia": "CAYLLOMA",
      "Distrito": "MAJES",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 364,
      "Mes": "Marzo",
      "Departamento": "AREQUIPA",
      "Provincia": "ISLAY",
      "Distrito": "COCACHACRA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 365,
      "Mes": "Marzo",
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "AYACUCHO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 366,
      "Mes": "Marzo",
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "AYACUCHO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 367,
      "Mes": "Marzo",
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "PACAYCASA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 368,
      "Mes": "Marzo",
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "VINCHOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 369,
      "Mes": "Marzo",
      "Departamento": "AYACUCHO",
      "Provincia": "LA MAR",
      "Distrito": "SAN MIGUEL",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 370,
      "Mes": "Marzo",
      "Departamento": "AYACUCHO",
      "Provincia": "VICTOR FAJARDO",
      "Distrito": "HUANCARAYLLA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 371,
      "Mes": "Marzo",
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CALLAO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 372,
      "Mes": "Marzo",
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CALLAO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 373,
      "Mes": "Marzo",
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CALLAO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 374,
      "Mes": "Marzo",
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CARMEN DE LA LEGUA REYNOSO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 375,
      "Mes": "Marzo",
      "Departamento": "CUSCO",
      "Provincia": "URUBAMBA",
      "Distrito": "MACHUPICCHU",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 376,
      "Mes": "Marzo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "HUANCAVELICA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 377,
      "Mes": "Marzo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "HUANCAVELICA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 378,
      "Mes": "Marzo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "HUANCAVELICA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 379,
      "Mes": "Marzo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "ACORIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 380,
      "Mes": "Marzo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "LARIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 381,
      "Mes": "Marzo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "YAULI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 382,
      "Mes": "Marzo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "HUANDO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 383,
      "Mes": "Marzo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ACOBAMBA",
      "Distrito": "ACOBAMBA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 384,
      "Mes": "Marzo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ACOBAMBA",
      "Distrito": "ACOBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 385,
      "Mes": "Marzo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ACOBAMBA",
      "Distrito": "MARCAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 386,
      "Mes": "Marzo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ACOBAMBA",
      "Distrito": "PAUCARA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 387,
      "Mes": "Marzo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "LIRCAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 388,
      "Mes": "Marzo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "CONGALLA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 389,
      "Mes": "Marzo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "SECCLLA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 390,
      "Mes": "Marzo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "CASTROVIRREYNA",
      "Distrito": "SAN JUAN",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 391,
      "Mes": "Marzo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "CASTROVIRREYNA",
      "Distrito": "TICRAPO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 392,
      "Mes": "Marzo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUAYTARA",
      "Distrito": "SANTIAGO DE CHOCORVOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 393,
      "Mes": "Marzo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "PAMPAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 394,
      "Mes": "Marzo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "PAMPAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 395,
      "Mes": "Marzo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "AHUAYCHA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 396,
      "Mes": "Marzo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "COLCABAMBA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 397,
      "Mes": "Marzo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "COLCABAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 398,
      "Mes": "Marzo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "DANIEL HERNANDEZ",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 399,
      "Mes": "Marzo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "QUISHUAR",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 400,
      "Mes": "Marzo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "SALCABAMBA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 401,
      "Mes": "Marzo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "SALCABAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 402,
      "Mes": "Marzo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "SURCUBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 403,
      "Mes": "Marzo",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUÁNUCO",
      "Distrito": "CHURUBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 404,
      "Mes": "Marzo",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUÁNUCO",
      "Distrito": "SAN PEDRO DE CHAULAN",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 405,
      "Mes": "Marzo",
      "Departamento": "HUÁNUCO",
      "Provincia": "DOS DE MAYO",
      "Distrito": "LA UNION",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 406,
      "Mes": "Marzo",
      "Departamento": "HUÁNUCO",
      "Provincia": "DOS DE MAYO",
      "Distrito": "LA UNION",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 407,
      "Mes": "Marzo",
      "Departamento": "HUÁNUCO",
      "Provincia": "DOS DE MAYO",
      "Distrito": "QUIVILLA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 408,
      "Mes": "Marzo",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUACAYBAMBA",
      "Distrito": "PINRA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 409,
      "Mes": "Marzo",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "JACAS GRANDE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 410,
      "Mes": "Marzo",
      "Departamento": "HUÁNUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "RUPA-RUPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 411,
      "Mes": "Marzo",
      "Departamento": "HUÁNUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "HERMILIO VALDIZAN",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 412,
      "Mes": "Marzo",
      "Departamento": "HUÁNUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "LUYANDO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 413,
      "Mes": "Marzo",
      "Departamento": "HUÁNUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "LUYANDO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 414,
      "Mes": "Marzo",
      "Departamento": "HUÁNUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "MARIANO DAMASO BERAUN",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 415,
      "Mes": "Marzo",
      "Departamento": "HUÁNUCO",
      "Provincia": "PACHITEA",
      "Distrito": "MOLINO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 416,
      "Mes": "Marzo",
      "Departamento": "HUÁNUCO",
      "Provincia": "PUERTO INCA",
      "Distrito": "HONORIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 417,
      "Mes": "Marzo",
      "Departamento": "HUÁNUCO",
      "Provincia": "PUERTO INCA",
      "Distrito": "YUYAPICHIS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 418,
      "Mes": "Marzo",
      "Departamento": "HUÁNUCO",
      "Provincia": "LAURICOCHA",
      "Distrito": "SAN MIGUEL DE CAURI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 419,
      "Mes": "Marzo",
      "Departamento": "HUÁNUCO",
      "Provincia": "YAROWILCA",
      "Distrito": "CHAVINILLO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 420,
      "Mes": "Marzo",
      "Departamento": "HUÁNUCO",
      "Provincia": "YAROWILCA",
      "Distrito": "CAHUAC",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 421,
      "Mes": "Marzo",
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "ICA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 422,
      "Mes": "Marzo",
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "ICA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 423,
      "Mes": "Marzo",
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "LA TINGUIÑA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 424,
      "Mes": "Marzo",
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "OCUCAJE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 425,
      "Mes": "Marzo",
      "Departamento": "ICA",
      "Provincia": "NAZCA",
      "Distrito": "NAZCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 426,
      "Mes": "Marzo",
      "Departamento": "ICA",
      "Provincia": "NAZCA",
      "Distrito": "CHANGUILLO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 427,
      "Mes": "Marzo",
      "Departamento": "ICA",
      "Provincia": "NAZCA",
      "Distrito": "EL INGENIO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 428,
      "Mes": "Marzo",
      "Departamento": "ICA",
      "Provincia": "NAZCA",
      "Distrito": "EL INGENIO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 429,
      "Mes": "Marzo",
      "Departamento": "ICA",
      "Provincia": "NAZCA",
      "Distrito": "MARCONA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 430,
      "Mes": "Marzo",
      "Departamento": "ICA",
      "Provincia": "PALPA",
      "Distrito": "LLIPATA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 431,
      "Mes": "Marzo",
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "PISCO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 432,
      "Mes": "Marzo",
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "PISCO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 433,
      "Mes": "Marzo",
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "PISCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 434,
      "Mes": "Marzo",
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "PISCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 435,
      "Mes": "Marzo",
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "HUMAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 436,
      "Mes": "Marzo",
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "INDEPENDENCIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 437,
      "Mes": "Marzo",
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "SAN ANDRES",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 438,
      "Mes": "Marzo",
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "TUPAC AMARU INCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 439,
      "Mes": "Marzo",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "HUANCAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 440,
      "Mes": "Marzo",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "HUANCAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 441,
      "Mes": "Marzo",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "CHILCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 442,
      "Mes": "Marzo",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "CHILCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 443,
      "Mes": "Marzo",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "CHILCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 444,
      "Mes": "Marzo",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "EL TAMBO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 445,
      "Mes": "Marzo",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "EL TAMBO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 446,
      "Mes": "Marzo",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "HUALHUAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 447,
      "Mes": "Marzo",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "HUANCAN",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 448,
      "Mes": "Marzo",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "INGENIO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 449,
      "Mes": "Marzo",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "PARIAHUANCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 450,
      "Mes": "Marzo",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "PARIAHUANCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 451,
      "Mes": "Marzo",
      "Departamento": "JUNÍN",
      "Provincia": "CONCEPCION",
      "Distrito": "COCHAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 452,
      "Mes": "Marzo",
      "Departamento": "JUNÍN",
      "Provincia": "CONCEPCION",
      "Distrito": "ORCOTUNA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 453,
      "Mes": "Marzo",
      "Departamento": "JUNÍN",
      "Provincia": "CONCEPCION",
      "Distrito": "SANTA ROSA DE OCOPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 454,
      "Mes": "Marzo",
      "Departamento": "JUNÍN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "CHANCHAMAYO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 455,
      "Mes": "Marzo",
      "Departamento": "JUNÍN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "CHANCHAMAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 456,
      "Mes": "Marzo",
      "Departamento": "JUNÍN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "CHANCHAMAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 457,
      "Mes": "Marzo",
      "Departamento": "JUNÍN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PERENE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 458,
      "Mes": "Marzo",
      "Departamento": "JUNÍN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PICHANAKI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 459,
      "Mes": "Marzo",
      "Departamento": "JUNÍN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PICHANAKI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 460,
      "Mes": "Marzo",
      "Departamento": "JUNÍN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "SAN LUIS DE SHUARO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 461,
      "Mes": "Marzo",
      "Departamento": "JUNÍN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "SAN RAMON",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 462,
      "Mes": "Marzo",
      "Departamento": "JUNÍN",
      "Provincia": "JAUJA",
      "Distrito": "JAUJA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 463,
      "Mes": "Marzo",
      "Departamento": "JUNÍN",
      "Provincia": "JAUJA",
      "Distrito": "LEONOR ORDOÑEZ",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 464,
      "Mes": "Marzo",
      "Departamento": "JUNÍN",
      "Provincia": "SATIPO",
      "Distrito": "SATIPO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 465,
      "Mes": "Marzo",
      "Departamento": "JUNÍN",
      "Provincia": "SATIPO",
      "Distrito": "PAMPA HERMOSA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 466,
      "Mes": "Marzo",
      "Departamento": "JUNÍN",
      "Provincia": "SATIPO",
      "Distrito": "PANGOA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 467,
      "Mes": "Marzo",
      "Departamento": "JUNÍN",
      "Provincia": "SATIPO",
      "Distrito": "PANGOA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 468,
      "Mes": "Marzo",
      "Departamento": "JUNÍN",
      "Provincia": "TARMA",
      "Distrito": "TARMA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 469,
      "Mes": "Marzo",
      "Departamento": "JUNÍN",
      "Provincia": "TARMA",
      "Distrito": "TARMA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 470,
      "Mes": "Marzo",
      "Departamento": "JUNÍN",
      "Provincia": "CHUPACA",
      "Distrito": "CHUPACA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 471,
      "Mes": "Marzo",
      "Departamento": "JUNÍN",
      "Provincia": "CHUPACA",
      "Distrito": "AHUAC",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 472,
      "Mes": "Marzo",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "CHICLAYO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 473,
      "Mes": "Marzo",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "CHICLAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 474,
      "Mes": "Marzo",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "CHICLAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 475,
      "Mes": "Marzo",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "CHICLAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 476,
      "Mes": "Marzo",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "LA VICTORIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 477,
      "Mes": "Marzo",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "FERREÑAFE",
      "Distrito": "FERREÑAFE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 478,
      "Mes": "Marzo",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "FERREÑAFE",
      "Distrito": "INCAHUASI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 479,
      "Mes": "Marzo",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "LAMBAYEQUE",
      "Distrito": "OLMOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 480,
      "Mes": "Marzo",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "LAMBAYEQUE",
      "Distrito": "OLMOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 481,
      "Mes": "Marzo",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LURIGANCHO (CHOSICA)",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 482,
      "Mes": "Marzo",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LURIGANCHO (CHOSICA)",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 483,
      "Mes": "Marzo",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "PACHACAMAC",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 484,
      "Mes": "Marzo",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "PACHACAMAC",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 485,
      "Mes": "Marzo",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "SAN BARTOLO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 486,
      "Mes": "Marzo",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "VILLA EL SALVADOR",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 487,
      "Mes": "Marzo",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "VILLA EL SALVADOR",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 488,
      "Mes": "Marzo",
      "Departamento": "LIMA",
      "Provincia": "CAÑETE",
      "Distrito": "SAN LUIS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 489,
      "Mes": "Marzo",
      "Departamento": "LIMA",
      "Provincia": "CAÑETE",
      "Distrito": "SAN LUIS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 490,
      "Mes": "Marzo",
      "Departamento": "LIMA",
      "Provincia": "HUAROCHIRI",
      "Distrito": "SAN MATEO DE OTAO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 491,
      "Mes": "Marzo",
      "Departamento": "LIMA",
      "Provincia": "YAUYOS",
      "Distrito": "QUINCHES",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 492,
      "Mes": "Marzo",
      "Departamento": "LORETO",
      "Provincia": "MAYNAS",
      "Distrito": "PUNCHANA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 493,
      "Mes": "Marzo",
      "Departamento": "LORETO",
      "Provincia": "MAYNAS",
      "Distrito": "PUNCHANA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 494,
      "Mes": "Marzo",
      "Departamento": "LORETO",
      "Provincia": "MAYNAS",
      "Distrito": "PUNCHANA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 495,
      "Mes": "Marzo",
      "Departamento": "MADRE DE DIOS",
      "Provincia": "TAMBOPATA",
      "Distrito": "TAMBOPATA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 496,
      "Mes": "Marzo",
      "Departamento": "MADRE DE DIOS",
      "Provincia": "TAMBOPATA",
      "Distrito": "TAMBOPATA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 497,
      "Mes": "Marzo",
      "Departamento": "PASCO",
      "Provincia": "OXAPAMPA",
      "Distrito": "PALCAZU",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 498,
      "Mes": "Marzo",
      "Departamento": "PIURA",
      "Provincia": "AYABACA",
      "Distrito": "AYABACA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 499,
      "Mes": "Marzo",
      "Departamento": "PIURA",
      "Provincia": "AYABACA",
      "Distrito": "PAIMAS",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 500,
      "Mes": "Marzo",
      "Departamento": "PIURA",
      "Provincia": "HUANCABAMBA",
      "Distrito": "CANCHAQUE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 501,
      "Mes": "Marzo",
      "Departamento": "SAN MARTÍN",
      "Provincia": "MOYOBAMBA",
      "Distrito": "MOYOBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 502,
      "Mes": "Marzo",
      "Departamento": "SAN MARTÍN",
      "Provincia": "BELLAVISTA",
      "Distrito": "BELLAVISTA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 503,
      "Mes": "Marzo",
      "Departamento": "SAN MARTÍN",
      "Provincia": "BELLAVISTA",
      "Distrito": "BAJO BIAVO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 504,
      "Mes": "Marzo",
      "Departamento": "SAN MARTÍN",
      "Provincia": "BELLAVISTA",
      "Distrito": "BAJO BIAVO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 505,
      "Mes": "Marzo",
      "Departamento": "SAN MARTÍN",
      "Provincia": "BELLAVISTA",
      "Distrito": "BAJO BIAVO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 506,
      "Mes": "Marzo",
      "Departamento": "SAN MARTÍN",
      "Provincia": "RIOJA",
      "Distrito": "SAN FERNANDO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 507,
      "Mes": "Marzo",
      "Departamento": "SAN MARTÍN",
      "Provincia": "SAN MARTÍN",
      "Distrito": "CHIPURANA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 508,
      "Mes": "Marzo",
      "Departamento": "SAN MARTÍN",
      "Provincia": "SAN MARTÍN",
      "Distrito": "HUIMBAYOC",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 509,
      "Mes": "Marzo",
      "Departamento": "SAN MARTÍN",
      "Provincia": "SAN MARTÍN",
      "Distrito": "SHAPAJA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 510,
      "Mes": "Marzo",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "TACNA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 511,
      "Mes": "Marzo",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "TACNA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 512,
      "Mes": "Marzo",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "TACNA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 513,
      "Mes": "Marzo",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "ALTO DE LA ALIANZA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 514,
      "Mes": "Marzo",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "ALTO DE LA ALIANZA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 515,
      "Mes": "Marzo",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CIUDAD NUEVA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 516,
      "Mes": "Marzo",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "PALCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 517,
      "Mes": "Marzo",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "SAMA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 518,
      "Mes": "Marzo",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CORONEL GREGORIO ALBARRACIN LANCHIPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 519,
      "Mes": "Marzo",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CORONEL GREGORIO ALBARRACIN LANCHIPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 520,
      "Mes": "Marzo",
      "Departamento": "TACNA",
      "Provincia": "CANDARAVE",
      "Distrito": "CANDARAVE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 521,
      "Mes": "Marzo",
      "Departamento": "TACNA",
      "Provincia": "JORGE BASADRE",
      "Distrito": "LOCUMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 522,
      "Mes": "Marzo",
      "Departamento": "TACNA",
      "Provincia": "JORGE BASADRE",
      "Distrito": "ILABAYA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 523,
      "Mes": "Marzo",
      "Departamento": "TACNA",
      "Provincia": "JORGE BASADRE",
      "Distrito": "ILABAYA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 524,
      "Mes": "Marzo",
      "Departamento": "TACNA",
      "Provincia": "TARATA",
      "Distrito": "TARATA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 525,
      "Mes": "Marzo",
      "Departamento": "TACNA",
      "Provincia": "TARATA",
      "Distrito": "HEROES ALBARRACIN",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 526,
      "Mes": "Marzo",
      "Departamento": "TACNA",
      "Provincia": "TARATA",
      "Distrito": "TARUCACHI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 527,
      "Mes": "Marzo",
      "Departamento": "TACNA",
      "Provincia": "TARATA",
      "Distrito": "TARUCACHI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 528,
      "Mes": "Abril",
      "Departamento": "ÁNCASH",
      "Provincia": "HUARAZ",
      "Distrito": "INDEPENDENCIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 529,
      "Mes": "Abril",
      "Departamento": "ÁNCASH",
      "Provincia": "HUAYLAS",
      "Distrito": "MATO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 530,
      "Mes": "Abril",
      "Departamento": "ÁNCASH",
      "Provincia": "SANTA",
      "Distrito": "SAMANCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 531,
      "Mes": "Abril",
      "Departamento": "APURÍMAC",
      "Provincia": "ABANCAY",
      "Distrito": "ABANCAY",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 532,
      "Mes": "Abril",
      "Departamento": "APURÍMAC",
      "Provincia": "ABANCAY",
      "Distrito": "ABANCAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 533,
      "Mes": "Abril",
      "Departamento": "APURÍMAC",
      "Provincia": "ABANCAY",
      "Distrito": "ABANCAY",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 534,
      "Mes": "Abril",
      "Departamento": "APURÍMAC",
      "Provincia": "ABANCAY",
      "Distrito": "CHACOCHE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 535,
      "Mes": "Abril",
      "Departamento": "APURÍMAC",
      "Provincia": "ABANCAY",
      "Distrito": "CURAHUASI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 536,
      "Mes": "Abril",
      "Departamento": "APURÍMAC",
      "Provincia": "ABANCAY",
      "Distrito": "SAN PEDRO DE CACHORA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 537,
      "Mes": "Abril",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "ANDAHUAYLAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 538,
      "Mes": "Abril",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "ANDARAPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 539,
      "Mes": "Abril",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "HUANCARAMA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 540,
      "Mes": "Abril",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "HUAYANA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 541,
      "Mes": "Abril",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "KISHUARA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 542,
      "Mes": "Abril",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "PAMPACHIRI",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 543,
      "Mes": "Abril",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "SAN JERONIMO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 544,
      "Mes": "Abril",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "SAN MIGUEL DE CHACCRAMPA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 545,
      "Mes": "Abril",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "JOSÉ MARÍA ARGUEDAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 546,
      "Mes": "Abril",
      "Departamento": "APURÍMAC",
      "Provincia": "AYMARAES",
      "Distrito": "SAN JUAN DE CHACÑA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 547,
      "Mes": "Abril",
      "Departamento": "APURÍMAC",
      "Provincia": "AYMARAES",
      "Distrito": "TORAYA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 548,
      "Mes": "Abril",
      "Departamento": "APURÍMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "TAMBOBAMBA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 549,
      "Mes": "Abril",
      "Departamento": "APURÍMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "COTABAMBAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 550,
      "Mes": "Abril",
      "Departamento": "APURÍMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "COYLLURQUI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 551,
      "Mes": "Abril",
      "Departamento": "APURÍMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "HAQUIRA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 552,
      "Mes": "Abril",
      "Departamento": "APURÍMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "HAQUIRA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 553,
      "Mes": "Abril",
      "Departamento": "APURÍMAC",
      "Provincia": "GRAU",
      "Distrito": "SAN ANTONIO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 554,
      "Mes": "Abril",
      "Departamento": "AREQUIPA",
      "Provincia": "AREQUIPA",
      "Distrito": "YANAHUARA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 555,
      "Mes": "Abril",
      "Departamento": "AREQUIPA",
      "Provincia": "CARAVELI",
      "Distrito": "ACARI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 556,
      "Mes": "Abril",
      "Departamento": "AREQUIPA",
      "Provincia": "CARAVELI",
      "Distrito": "ACARI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 557,
      "Mes": "Abril",
      "Departamento": "AREQUIPA",
      "Provincia": "CASTILLA",
      "Distrito": "VIRACO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 558,
      "Mes": "Abril",
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "CARMEN ALTO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 559,
      "Mes": "Abril",
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "OCROS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 560,
      "Mes": "Abril",
      "Departamento": "AYACUCHO",
      "Provincia": "LA MAR",
      "Distrito": "SAN MIGUEL",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 561,
      "Mes": "Abril",
      "Departamento": "AYACUCHO",
      "Provincia": "LA MAR",
      "Distrito": "ANCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 562,
      "Mes": "Abril",
      "Departamento": "CAJAMARCA",
      "Provincia": "CAJAMARCA",
      "Distrito": "CAJAMARCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 563,
      "Mes": "Abril",
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CALLAO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 564,
      "Mes": "Abril",
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CALLAO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 565,
      "Mes": "Abril",
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "BELLAVISTA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 566,
      "Mes": "Abril",
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "BELLAVISTA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 567,
      "Mes": "Abril",
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "LA PERLA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 568,
      "Mes": "Abril",
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "LA PUNTA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 569,
      "Mes": "Abril",
      "Departamento": "CUSCO",
      "Provincia": "LA CONVENCION",
      "Distrito": "SANTA ANA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 570,
      "Mes": "Abril",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "HUANCAVELICA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 571,
      "Mes": "Abril",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "CUENCA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 572,
      "Mes": "Abril",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "LARIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 573,
      "Mes": "Abril",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "PALCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 574,
      "Mes": "Abril",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "VILCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 575,
      "Mes": "Abril",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "YAULI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 576,
      "Mes": "Abril",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "HUANDO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 577,
      "Mes": "Abril",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ACOBAMBA",
      "Distrito": "MARCAS",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 578,
      "Mes": "Abril",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ACOBAMBA",
      "Distrito": "MARCAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 579,
      "Mes": "Abril",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ACOBAMBA",
      "Distrito": "ROSARIO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 580,
      "Mes": "Abril",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "LIRCAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 581,
      "Mes": "Abril",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "ANCHONGA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 582,
      "Mes": "Abril",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "ANCHONGA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 583,
      "Mes": "Abril",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "CCOCHACCASA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 584,
      "Mes": "Abril",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "SANTO TOMAS DE PATA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 585,
      "Mes": "Abril",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "SECCLLA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 586,
      "Mes": "Abril",
      "Departamento": "HUANCAVELICA",
      "Provincia": "CASTROVIRREYNA",
      "Distrito": "CASTROVIRREYNA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 587,
      "Mes": "Abril",
      "Departamento": "HUANCAVELICA",
      "Provincia": "CASTROVIRREYNA",
      "Distrito": "ARMA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 588,
      "Mes": "Abril",
      "Departamento": "HUANCAVELICA",
      "Provincia": "CASTROVIRREYNA",
      "Distrito": "MOLLEPAMPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 589,
      "Mes": "Abril",
      "Departamento": "HUANCAVELICA",
      "Provincia": "CHURCAMPA",
      "Distrito": "CHURCAMPA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 590,
      "Mes": "Abril",
      "Departamento": "HUANCAVELICA",
      "Provincia": "CHURCAMPA",
      "Distrito": "CHURCAMPA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 591,
      "Mes": "Abril",
      "Departamento": "HUANCAVELICA",
      "Provincia": "CHURCAMPA",
      "Distrito": "SAN PEDRO DE CORIS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 592,
      "Mes": "Abril",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "PAMPAS",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 593,
      "Mes": "Abril",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "PAMPAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 594,
      "Mes": "Abril",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "PAMPAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 595,
      "Mes": "Abril",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "ACRAQUIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 596,
      "Mes": "Abril",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "ACRAQUIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 597,
      "Mes": "Abril",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "AHUAYCHA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 598,
      "Mes": "Abril",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "COLCABAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 599,
      "Mes": "Abril",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "COLCABAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 600,
      "Mes": "Abril",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "HUACHOCOLPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 601,
      "Mes": "Abril",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "HUACHOCOLPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 602,
      "Mes": "Abril",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "PAZOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 603,
      "Mes": "Abril",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "SALCAHUASI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 604,
      "Mes": "Abril",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "SURCUBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 605,
      "Mes": "Abril",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "SURCUBAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 606,
      "Mes": "Abril",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "TINTAY PUNCU",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 607,
      "Mes": "Abril",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "QUICHUAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 608,
      "Mes": "Abril",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "QUICHUAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 609,
      "Mes": "Abril",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUÁNUCO",
      "Distrito": "HUÁNUCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 610,
      "Mes": "Abril",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUÁNUCO",
      "Distrito": "HUÁNUCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 611,
      "Mes": "Abril",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUÁNUCO",
      "Distrito": "HUÁNUCO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 612,
      "Mes": "Abril",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUÁNUCO",
      "Distrito": "SANTA MARIA DEL VALLE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 613,
      "Mes": "Abril",
      "Departamento": "HUÁNUCO",
      "Provincia": "AMBO",
      "Distrito": "AMBO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 614,
      "Mes": "Abril",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUACAYBAMBA",
      "Distrito": "HUACAYBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 615,
      "Mes": "Abril",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUACAYBAMBA",
      "Distrito": "PINRA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 616,
      "Mes": "Abril",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "LLATA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 617,
      "Mes": "Abril",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "LLATA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 618,
      "Mes": "Abril",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "JIRCAN",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 619,
      "Mes": "Abril",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "MIRAFLORES",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 620,
      "Mes": "Abril",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "MONZON",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 621,
      "Mes": "Abril",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "MONZON",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 622,
      "Mes": "Abril",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "PUNCHAO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 623,
      "Mes": "Abril",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "PUÑOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 624,
      "Mes": "Abril",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "SINGA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 625,
      "Mes": "Abril",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "TANTAMAYO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 626,
      "Mes": "Abril",
      "Departamento": "HUÁNUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "JOSE CRESPO Y CASTILLO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 627,
      "Mes": "Abril",
      "Departamento": "HUÁNUCO",
      "Provincia": "PUERTO INCA",
      "Distrito": "YUYAPICHIS",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 628,
      "Mes": "Abril",
      "Departamento": "HUÁNUCO",
      "Provincia": "LAURICOCHA",
      "Distrito": "BAÑOS",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 629,
      "Mes": "Abril",
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "ICA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 630,
      "Mes": "Abril",
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "ICA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 631,
      "Mes": "Abril",
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "PARCONA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 632,
      "Mes": "Abril",
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "SANTIAGO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 633,
      "Mes": "Abril",
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "TATE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 634,
      "Mes": "Abril",
      "Departamento": "ICA",
      "Provincia": "CHINCHA",
      "Distrito": "ALTO LARAN",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 635,
      "Mes": "Abril",
      "Departamento": "ICA",
      "Provincia": "NAZCA",
      "Distrito": "NAZCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 636,
      "Mes": "Abril",
      "Departamento": "ICA",
      "Provincia": "NAZCA",
      "Distrito": "VISTA ALEGRE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 637,
      "Mes": "Abril",
      "Departamento": "ICA",
      "Provincia": "PALPA",
      "Distrito": "PALPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 638,
      "Mes": "Abril",
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "PISCO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 639,
      "Mes": "Abril",
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "INDEPENDENCIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 640,
      "Mes": "Abril",
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "INDEPENDENCIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 641,
      "Mes": "Abril",
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "SAN ANDRES",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 642,
      "Mes": "Abril",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "HUANCAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 643,
      "Mes": "Abril",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "CHILCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 644,
      "Mes": "Abril",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "CHILCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 645,
      "Mes": "Abril",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "EL TAMBO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 646,
      "Mes": "Abril",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "EL TAMBO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 647,
      "Mes": "Abril",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "HUAYUCACHI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 648,
      "Mes": "Abril",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "INGENIO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 649,
      "Mes": "Abril",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "PILCOMAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 650,
      "Mes": "Abril",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "SAPALLANGA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 651,
      "Mes": "Abril",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "SICAYA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 652,
      "Mes": "Abril",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "SANTO DOMINGO DE ACOBAMBA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 653,
      "Mes": "Abril",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "SANTO DOMINGO DE ACOBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 654,
      "Mes": "Abril",
      "Departamento": "JUNÍN",
      "Provincia": "CONCEPCION",
      "Distrito": "HEROINAS TOLEDO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 655,
      "Mes": "Abril",
      "Departamento": "JUNÍN",
      "Provincia": "CONCEPCION",
      "Distrito": "SANTA ROSA DE OCOPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 656,
      "Mes": "Abril",
      "Departamento": "JUNÍN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "CHANCHAMAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 657,
      "Mes": "Abril",
      "Departamento": "JUNÍN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PERENE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 658,
      "Mes": "Abril",
      "Departamento": "JUNÍN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "SAN RAMON",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 659,
      "Mes": "Abril",
      "Departamento": "JUNÍN",
      "Provincia": "JAUJA",
      "Distrito": "JAUJA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 660,
      "Mes": "Abril",
      "Departamento": "JUNÍN",
      "Provincia": "JAUJA",
      "Distrito": "MONOBAMBA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 661,
      "Mes": "Abril",
      "Departamento": "JUNÍN",
      "Provincia": "JAUJA",
      "Distrito": "MUQUI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 662,
      "Mes": "Abril",
      "Departamento": "JUNÍN",
      "Provincia": "JUNÍN",
      "Distrito": "JUNÍN",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 663,
      "Mes": "Abril",
      "Departamento": "JUNÍN",
      "Provincia": "JUNÍN",
      "Distrito": "ULCUMAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 664,
      "Mes": "Abril",
      "Departamento": "JUNÍN",
      "Provincia": "SATIPO",
      "Distrito": "SATIPO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 665,
      "Mes": "Abril",
      "Departamento": "JUNÍN",
      "Provincia": "SATIPO",
      "Distrito": "PAMPA HERMOSA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 666,
      "Mes": "Abril",
      "Departamento": "JUNÍN",
      "Provincia": "SATIPO",
      "Distrito": "PANGOA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 667,
      "Mes": "Abril",
      "Departamento": "JUNÍN",
      "Provincia": "SATIPO",
      "Distrito": "RIO NEGRO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 668,
      "Mes": "Abril",
      "Departamento": "JUNÍN",
      "Provincia": "SATIPO",
      "Distrito": "RIO TAMBO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 669,
      "Mes": "Abril",
      "Departamento": "JUNÍN",
      "Provincia": "SATIPO",
      "Distrito": "RIO TAMBO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 670,
      "Mes": "Abril",
      "Departamento": "JUNÍN",
      "Provincia": "TARMA",
      "Distrito": "TARMA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 671,
      "Mes": "Abril",
      "Departamento": "JUNÍN",
      "Provincia": "TARMA",
      "Distrito": "ACOBAMBA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 672,
      "Mes": "Abril",
      "Departamento": "JUNÍN",
      "Provincia": "TARMA",
      "Distrito": "ACOBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 673,
      "Mes": "Abril",
      "Departamento": "JUNÍN",
      "Provincia": "TARMA",
      "Distrito": "ACOBAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 674,
      "Mes": "Abril",
      "Departamento": "JUNÍN",
      "Provincia": "TARMA",
      "Distrito": "LA UNION",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 675,
      "Mes": "Abril",
      "Departamento": "JUNÍN",
      "Provincia": "TARMA",
      "Distrito": "LA UNION",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 676,
      "Mes": "Abril",
      "Departamento": "JUNÍN",
      "Provincia": "TARMA",
      "Distrito": "PALCAMAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 677,
      "Mes": "Abril",
      "Departamento": "JUNÍN",
      "Provincia": "YAULI",
      "Distrito": "MARCAPOMACOCHA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 678,
      "Mes": "Abril",
      "Departamento": "LA LIBERTAD",
      "Provincia": "TRUJILLO",
      "Distrito": "POROTO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 679,
      "Mes": "Abril",
      "Departamento": "LA LIBERTAD",
      "Provincia": "CHEPEN",
      "Distrito": "PACANGA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 680,
      "Mes": "Abril",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "CHICLAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 681,
      "Mes": "Abril",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "ETEN",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 682,
      "Mes": "Abril",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "ETEN PUERTO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 683,
      "Mes": "Abril",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "JOSE LEONARDO ORTIZ",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 684,
      "Mes": "Abril",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "FERREÑAFE",
      "Distrito": "CAÑARIS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 685,
      "Mes": "Abril",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "FERREÑAFE",
      "Distrito": "INCAHUASI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 686,
      "Mes": "Abril",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "FERREÑAFE",
      "Distrito": "PITIPO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 687,
      "Mes": "Abril",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "FERREÑAFE",
      "Distrito": "PUEBLO NUEVO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 688,
      "Mes": "Abril",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "FERREÑAFE",
      "Distrito": "PUEBLO NUEVO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 689,
      "Mes": "Abril",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "LAMBAYEQUE",
      "Distrito": "LAMBAYEQUE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 690,
      "Mes": "Abril",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "LAMBAYEQUE",
      "Distrito": "SAN JOSE",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 691,
      "Mes": "Abril",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "ATE",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 692,
      "Mes": "Abril",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "ATE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 693,
      "Mes": "Abril",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "ATE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 694,
      "Mes": "Abril",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "CHACLACAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 695,
      "Mes": "Abril",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "CHACLACAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 696,
      "Mes": "Abril",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "CHORRILLOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 697,
      "Mes": "Abril",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "CHORRILLOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 698,
      "Mes": "Abril",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "CHORRILLOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 699,
      "Mes": "Abril",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "CHORRILLOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 700,
      "Mes": "Abril",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LURIGANCHO (CHOSICA)",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 701,
      "Mes": "Abril",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LURIGANCHO (CHOSICA)",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 702,
      "Mes": "Abril",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LURIN",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 703,
      "Mes": "Abril",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "PACHACAMAC",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 704,
      "Mes": "Abril",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "PUCUSANA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 705,
      "Mes": "Abril",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "PUNTA HERMOSA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 706,
      "Mes": "Abril",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "PUNTA NEGRA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 707,
      "Mes": "Abril",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "SANTIAGO DE SURCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 708,
      "Mes": "Abril",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "SANTIAGO DE SURCO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 709,
      "Mes": "Abril",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "VILLA EL SALVADOR",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 710,
      "Mes": "Abril",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "VILLA EL SALVADOR",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 711,
      "Mes": "Abril",
      "Departamento": "LIMA",
      "Provincia": "CAJATAMBO",
      "Distrito": "CAJATAMBO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 712,
      "Mes": "Abril",
      "Departamento": "LIMA",
      "Provincia": "CAÑETE",
      "Distrito": "SAN LUIS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 713,
      "Mes": "Abril",
      "Departamento": "LIMA",
      "Provincia": "YAUYOS",
      "Distrito": "YAUYOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 714,
      "Mes": "Abril",
      "Departamento": "MADRE DE DIOS",
      "Provincia": "TAMBOPATA",
      "Distrito": "LAS PIEDRAS",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 715,
      "Mes": "Abril",
      "Departamento": "MOQUEGUA",
      "Provincia": "GENERAL SANCHEZ CERRO",
      "Distrito": "UBINAS",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 716,
      "Mes": "Abril",
      "Departamento": "MOQUEGUA",
      "Provincia": "GENERAL SANCHEZ CERRO",
      "Distrito": "UBINAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 717,
      "Mes": "Abril",
      "Departamento": "MOQUEGUA",
      "Provincia": "ILO",
      "Distrito": "ILO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 718,
      "Mes": "Abril",
      "Departamento": "PIURA",
      "Provincia": "AYABACA",
      "Distrito": "AYABACA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 719,
      "Mes": "Abril",
      "Departamento": "PIURA",
      "Provincia": "AYABACA",
      "Distrito": "PAIMAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 720,
      "Mes": "Abril",
      "Departamento": "PUNO",
      "Provincia": "PUNO",
      "Distrito": "PUNO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 721,
      "Mes": "Abril",
      "Departamento": "SAN MARTÍN",
      "Provincia": "MOYOBAMBA",
      "Distrito": "MOYOBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 722,
      "Mes": "Abril",
      "Departamento": "SAN MARTÍN",
      "Provincia": "BELLAVISTA",
      "Distrito": "BAJO BIAVO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 723,
      "Mes": "Abril",
      "Departamento": "SAN MARTÍN",
      "Provincia": "BELLAVISTA",
      "Distrito": "BAJO BIAVO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 724,
      "Mes": "Abril",
      "Departamento": "SAN MARTÍN",
      "Provincia": "BELLAVISTA",
      "Distrito": "BAJO BIAVO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 725,
      "Mes": "Abril",
      "Departamento": "SAN MARTÍN",
      "Provincia": "EL DORADO",
      "Distrito": "AGUA BLANCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 726,
      "Mes": "Abril",
      "Departamento": "SAN MARTÍN",
      "Provincia": "LAMAS",
      "Distrito": "CAYNARACHI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 727,
      "Mes": "Abril",
      "Departamento": "SAN MARTÍN",
      "Provincia": "SAN MARTÍN",
      "Distrito": "HUIMBAYOC",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 728,
      "Mes": "Abril",
      "Departamento": "SAN MARTÍN",
      "Provincia": "SAN MARTÍN",
      "Distrito": "LA BANDA DE SHILCAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 729,
      "Mes": "Abril",
      "Departamento": "SAN MARTÍN",
      "Provincia": "SAN MARTÍN",
      "Distrito": "PAPAPLAYA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 730,
      "Mes": "Abril",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "TACNA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 731,
      "Mes": "Abril",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "TACNA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 732,
      "Mes": "Abril",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "TACNA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 733,
      "Mes": "Abril",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "TACNA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 734,
      "Mes": "Abril",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "ALTO DE LA ALIANZA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 735,
      "Mes": "Abril",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "ALTO DE LA ALIANZA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 736,
      "Mes": "Abril",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CIUDAD NUEVA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 737,
      "Mes": "Abril",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "PACHIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 738,
      "Mes": "Abril",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "PALCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 739,
      "Mes": "Abril",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CORONEL GREGORIO ALBARRACIN LANCHIPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 740,
      "Mes": "Abril",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CORONEL GREGORIO ALBARRACIN LANCHIPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 741,
      "Mes": "Abril",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CORONEL GREGORIO ALBARRACIN LANCHIPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 742,
      "Mes": "Abril",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CORONEL GREGORIO ALBARRACIN LANCHIPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 743,
      "Mes": "Abril",
      "Departamento": "TACNA",
      "Provincia": "CANDARAVE",
      "Distrito": "CANDARAVE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 744,
      "Mes": "Abril",
      "Departamento": "TACNA",
      "Provincia": "JORGE BASADRE",
      "Distrito": "ILABAYA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 745,
      "Mes": "Abril",
      "Departamento": "TACNA",
      "Provincia": "TARATA",
      "Distrito": "TARUCACHI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 746,
      "Mes": "Mayo",
      "Departamento": "ÁNCASH",
      "Provincia": "HUARAZ",
      "Distrito": "INDEPENDENCIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 747,
      "Mes": "Mayo",
      "Departamento": "ÁNCASH",
      "Provincia": "HUAYLAS",
      "Distrito": "MATO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 748,
      "Mes": "Mayo",
      "Departamento": "ÁNCASH",
      "Provincia": "SANTA",
      "Distrito": "CHIMBOTE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 749,
      "Mes": "Mayo",
      "Departamento": "APURÍMAC",
      "Provincia": "ABANCAY",
      "Distrito": "ABANCAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 750,
      "Mes": "Mayo",
      "Departamento": "APURÍMAC",
      "Provincia": "ABANCAY",
      "Distrito": "CURAHUASI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 751,
      "Mes": "Mayo",
      "Departamento": "APURÍMAC",
      "Provincia": "ABANCAY",
      "Distrito": "HUANIPACA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 752,
      "Mes": "Mayo",
      "Departamento": "APURÍMAC",
      "Provincia": "ABANCAY",
      "Distrito": "LAMBRAMA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 753,
      "Mes": "Mayo",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "ANDAHUAYLAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 754,
      "Mes": "Mayo",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "ANDAHUAYLAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 755,
      "Mes": "Mayo",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "ANDARAPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 756,
      "Mes": "Mayo",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "HUANCARAMA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 757,
      "Mes": "Mayo",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "KISHUARA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 758,
      "Mes": "Mayo",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "PAMPACHIRI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 759,
      "Mes": "Mayo",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "SAN MIGUEL DE CHACCRAMPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 760,
      "Mes": "Mayo",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "KAQUIABAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 761,
      "Mes": "Mayo",
      "Departamento": "APURÍMAC",
      "Provincia": "AYMARAES",
      "Distrito": "COTARUSE",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 762,
      "Mes": "Mayo",
      "Departamento": "APURÍMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "TAMBOBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 763,
      "Mes": "Mayo",
      "Departamento": "APURÍMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "COYLLURQUI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 764,
      "Mes": "Mayo",
      "Departamento": "APURÍMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "COYLLURQUI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 765,
      "Mes": "Mayo",
      "Departamento": "APURÍMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "HAQUIRA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 766,
      "Mes": "Mayo",
      "Departamento": "APURÍMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "HAQUIRA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 767,
      "Mes": "Mayo",
      "Departamento": "APURÍMAC",
      "Provincia": "CHINCHEROS",
      "Distrito": "CHINCHEROS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 768,
      "Mes": "Mayo",
      "Departamento": "APURÍMAC",
      "Provincia": "CHINCHEROS",
      "Distrito": "CHINCHEROS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 769,
      "Mes": "Mayo",
      "Departamento": "APURÍMAC",
      "Provincia": "GRAU",
      "Distrito": "VILCABAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 770,
      "Mes": "Mayo",
      "Departamento": "APURÍMAC",
      "Provincia": "GRAU",
      "Distrito": "VILCABAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 771,
      "Mes": "Mayo",
      "Departamento": "APURÍMAC",
      "Provincia": "GRAU",
      "Distrito": "CURASCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 772,
      "Mes": "Mayo",
      "Departamento": "AREQUIPA",
      "Provincia": "AREQUIPA",
      "Distrito": "MIRAFLORES",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 773,
      "Mes": "Mayo",
      "Departamento": "AREQUIPA",
      "Provincia": "AREQUIPA",
      "Distrito": "YANAHUARA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 774,
      "Mes": "Mayo",
      "Departamento": "AREQUIPA",
      "Provincia": "CAMANA",
      "Distrito": "MARIANO NICOLAS VALCARCEL",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 775,
      "Mes": "Mayo",
      "Departamento": "AREQUIPA",
      "Provincia": "CARAVELI",
      "Distrito": "ACARI",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 776,
      "Mes": "Mayo",
      "Departamento": "AREQUIPA",
      "Provincia": "CARAVELI",
      "Distrito": "ATICO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 777,
      "Mes": "Mayo",
      "Departamento": "AREQUIPA",
      "Provincia": "CASTILLA",
      "Distrito": "URACA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 778,
      "Mes": "Mayo",
      "Departamento": "AREQUIPA",
      "Provincia": "CAYLLOMA",
      "Distrito": "TUTI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 779,
      "Mes": "Mayo",
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "AYACUCHO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 780,
      "Mes": "Mayo",
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "AYACUCHO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 781,
      "Mes": "Mayo",
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "CARMEN ALTO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 782,
      "Mes": "Mayo",
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "SAN JUAN BAUTISTA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 783,
      "Mes": "Mayo",
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "JESUS NAZARENO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 784,
      "Mes": "Mayo",
      "Departamento": "AYACUCHO",
      "Provincia": "HUANTA",
      "Distrito": "AYAHUANCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 785,
      "Mes": "Mayo",
      "Departamento": "AYACUCHO",
      "Provincia": "LA MAR",
      "Distrito": "SAN MIGUEL",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 786,
      "Mes": "Mayo",
      "Departamento": "AYACUCHO",
      "Provincia": "LA MAR",
      "Distrito": "SAN MIGUEL",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 787,
      "Mes": "Mayo",
      "Departamento": "AYACUCHO",
      "Provincia": "LUCANAS",
      "Distrito": "CHIPAO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 788,
      "Mes": "Mayo",
      "Departamento": "AYACUCHO",
      "Provincia": "LUCANAS",
      "Distrito": "SAN CRISTOBAL",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 789,
      "Mes": "Mayo",
      "Departamento": "AYACUCHO",
      "Provincia": "PAUCAR DEL SARA SARA",
      "Distrito": "OYOLO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 790,
      "Mes": "Mayo",
      "Departamento": "AYACUCHO",
      "Provincia": "VICTOR FAJARDO",
      "Distrito": "ALCAMENCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 791,
      "Mes": "Mayo",
      "Departamento": "AYACUCHO",
      "Provincia": "VICTOR FAJARDO",
      "Distrito": "HUAMANQUIQUIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 792,
      "Mes": "Mayo",
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CALLAO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 793,
      "Mes": "Mayo",
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CALLAO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 794,
      "Mes": "Mayo",
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "VENTANILLA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 795,
      "Mes": "Mayo",
      "Departamento": "CUSCO",
      "Provincia": "CANCHIS",
      "Distrito": "MARANGANI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 796,
      "Mes": "Mayo",
      "Departamento": "CUSCO",
      "Provincia": "CANCHIS",
      "Distrito": "TINTA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 797,
      "Mes": "Mayo",
      "Departamento": "CUSCO",
      "Provincia": "LA CONVENCION",
      "Distrito": "SANTA ANA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 798,
      "Mes": "Mayo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "HUANCAVELICA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 799,
      "Mes": "Mayo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "ACORIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 800,
      "Mes": "Mayo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "LARIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 801,
      "Mes": "Mayo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "MOYA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 802,
      "Mes": "Mayo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "YAULI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 803,
      "Mes": "Mayo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "YAULI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 804,
      "Mes": "Mayo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "ASCENSION",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 805,
      "Mes": "Mayo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ACOBAMBA",
      "Distrito": "ACOBAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 806,
      "Mes": "Mayo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "LIRCAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 807,
      "Mes": "Mayo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "LIRCAY",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 808,
      "Mes": "Mayo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "LIRCAY",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 809,
      "Mes": "Mayo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "ANCHONGA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 810,
      "Mes": "Mayo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "ANCHONGA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 811,
      "Mes": "Mayo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "ANCHONGA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 812,
      "Mes": "Mayo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "JULCAMARCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 813,
      "Mes": "Mayo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "SAN ANTONIO DE ANTAPARCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 814,
      "Mes": "Mayo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "CASTROVIRREYNA",
      "Distrito": "CASTROVIRREYNA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 815,
      "Mes": "Mayo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "CASTROVIRREYNA",
      "Distrito": "TANTARA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 816,
      "Mes": "Mayo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "CASTROVIRREYNA",
      "Distrito": "TANTARA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 817,
      "Mes": "Mayo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "CASTROVIRREYNA",
      "Distrito": "TANTARA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 818,
      "Mes": "Mayo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "CASTROVIRREYNA",
      "Distrito": "TICRAPO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 819,
      "Mes": "Mayo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "CHURCAMPA",
      "Distrito": "ANCO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 820,
      "Mes": "Mayo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "CHURCAMPA",
      "Distrito": "EL CARMEN",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 821,
      "Mes": "Mayo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "CHURCAMPA",
      "Distrito": "PACHAMARCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 822,
      "Mes": "Mayo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "PAMPAS",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 823,
      "Mes": "Mayo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "COLCABAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 824,
      "Mes": "Mayo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "HUACHOCOLPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 825,
      "Mes": "Mayo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "HUARIBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 826,
      "Mes": "Mayo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "HUARIBAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 827,
      "Mes": "Mayo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "SALCAHUASI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 828,
      "Mes": "Mayo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "SAN MARCOS DE ROCCHAC",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 829,
      "Mes": "Mayo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "TINTAY PUNCU",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 830,
      "Mes": "Mayo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "QUICHUAS",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 831,
      "Mes": "Mayo",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "QUICHUAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 832,
      "Mes": "Mayo",
      "Departamento": "HUÁNUCO",
      "Provincia": "AMBO",
      "Distrito": "HUACAR",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 833,
      "Mes": "Mayo",
      "Departamento": "HUÁNUCO",
      "Provincia": "DOS DE MAYO",
      "Distrito": "QUIVILLA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 834,
      "Mes": "Mayo",
      "Departamento": "HUÁNUCO",
      "Provincia": "DOS DE MAYO",
      "Distrito": "QUIVILLA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 835,
      "Mes": "Mayo",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUACAYBAMBA",
      "Distrito": "HUACAYBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 836,
      "Mes": "Mayo",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUACAYBAMBA",
      "Distrito": "CANCHABAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 837,
      "Mes": "Mayo",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "LLATA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 838,
      "Mes": "Mayo",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "ARANCAY",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 839,
      "Mes": "Mayo",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "PUÑOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 840,
      "Mes": "Mayo",
      "Departamento": "HUÁNUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "LUYANDO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 841,
      "Mes": "Mayo",
      "Departamento": "HUÁNUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "MARIANO DAMASO BERAUN",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 842,
      "Mes": "Mayo",
      "Departamento": "HUÁNUCO",
      "Provincia": "LAURICOCHA",
      "Distrito": "BAÑOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 843,
      "Mes": "Mayo",
      "Departamento": "HUÁNUCO",
      "Provincia": "LAURICOCHA",
      "Distrito": "BAÑOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 844,
      "Mes": "Mayo",
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "ICA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 845,
      "Mes": "Mayo",
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "ICA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 846,
      "Mes": "Mayo",
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "ICA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 847,
      "Mes": "Mayo",
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "SANTIAGO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 848,
      "Mes": "Mayo",
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "SUBTANJALLA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 849,
      "Mes": "Mayo",
      "Departamento": "ICA",
      "Provincia": "CHINCHA",
      "Distrito": "CHINCHA ALTA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 850,
      "Mes": "Mayo",
      "Departamento": "ICA",
      "Provincia": "NAZCA",
      "Distrito": "NAZCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 851,
      "Mes": "Mayo",
      "Departamento": "ICA",
      "Provincia": "NAZCA",
      "Distrito": "EL INGENIO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 852,
      "Mes": "Mayo",
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "PISCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 853,
      "Mes": "Mayo",
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "PISCO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 854,
      "Mes": "Mayo",
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "HUMAY",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 855,
      "Mes": "Mayo",
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "TUPAC AMARU INCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 856,
      "Mes": "Mayo",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "HUANCAYO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 857,
      "Mes": "Mayo",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "HUANCAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 858,
      "Mes": "Mayo",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "HUANCAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 859,
      "Mes": "Mayo",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "CHILCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 860,
      "Mes": "Mayo",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "HUAYUCACHI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 861,
      "Mes": "Mayo",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "PARIAHUANCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 862,
      "Mes": "Mayo",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "SANTO DOMINGO DE ACOBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 863,
      "Mes": "Mayo",
      "Departamento": "JUNÍN",
      "Provincia": "CONCEPCION",
      "Distrito": "ANDAMARCA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 864,
      "Mes": "Mayo",
      "Departamento": "JUNÍN",
      "Provincia": "CONCEPCION",
      "Distrito": "COMAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 865,
      "Mes": "Mayo",
      "Departamento": "JUNÍN",
      "Provincia": "CONCEPCION",
      "Distrito": "ORCOTUNA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 866,
      "Mes": "Mayo",
      "Departamento": "JUNÍN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "CHANCHAMAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 867,
      "Mes": "Mayo",
      "Departamento": "JUNÍN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "CHANCHAMAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 868,
      "Mes": "Mayo",
      "Departamento": "JUNÍN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PERENE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 869,
      "Mes": "Mayo",
      "Departamento": "JUNÍN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PERENE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 870,
      "Mes": "Mayo",
      "Departamento": "JUNÍN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PICHANAKI",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 871,
      "Mes": "Mayo",
      "Departamento": "JUNÍN",
      "Provincia": "JAUJA",
      "Distrito": "JAUJA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 872,
      "Mes": "Mayo",
      "Departamento": "JUNÍN",
      "Provincia": "JAUJA",
      "Distrito": "JAUJA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 873,
      "Mes": "Mayo",
      "Departamento": "JUNÍN",
      "Provincia": "JAUJA",
      "Distrito": "CURICACA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 874,
      "Mes": "Mayo",
      "Departamento": "JUNÍN",
      "Provincia": "JAUJA",
      "Distrito": "JULCAN",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 875,
      "Mes": "Mayo",
      "Departamento": "JUNÍN",
      "Provincia": "JAUJA",
      "Distrito": "MASMA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 876,
      "Mes": "Mayo",
      "Departamento": "JUNÍN",
      "Provincia": "JAUJA",
      "Distrito": "SINCOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 877,
      "Mes": "Mayo",
      "Departamento": "JUNÍN",
      "Provincia": "JAUJA",
      "Distrito": "SINCOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 878,
      "Mes": "Mayo",
      "Departamento": "JUNÍN",
      "Provincia": "JAUJA",
      "Distrito": "YAUYOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 879,
      "Mes": "Mayo",
      "Departamento": "JUNÍN",
      "Provincia": "SATIPO",
      "Distrito": "SATIPO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 880,
      "Mes": "Mayo",
      "Departamento": "JUNÍN",
      "Provincia": "SATIPO",
      "Distrito": "SATIPO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 881,
      "Mes": "Mayo",
      "Departamento": "JUNÍN",
      "Provincia": "SATIPO",
      "Distrito": "PANGOA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 882,
      "Mes": "Mayo",
      "Departamento": "JUNÍN",
      "Provincia": "SATIPO",
      "Distrito": "RIO TAMBO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 883,
      "Mes": "Mayo",
      "Departamento": "JUNÍN",
      "Provincia": "TARMA",
      "Distrito": "TARMA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 884,
      "Mes": "Mayo",
      "Departamento": "JUNÍN",
      "Provincia": "TARMA",
      "Distrito": "PALCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 885,
      "Mes": "Mayo",
      "Departamento": "JUNÍN",
      "Provincia": "YAULI",
      "Distrito": "MARCAPOMACOCHA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 886,
      "Mes": "Mayo",
      "Departamento": "JUNÍN",
      "Provincia": "CHUPACA",
      "Distrito": "CHUPACA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 887,
      "Mes": "Mayo",
      "Departamento": "JUNÍN",
      "Provincia": "CHUPACA",
      "Distrito": "AHUAC",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 888,
      "Mes": "Mayo",
      "Departamento": "JUNÍN",
      "Provincia": "CHUPACA",
      "Distrito": "CHONGOS BAJO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 889,
      "Mes": "Mayo",
      "Departamento": "JUNÍN",
      "Provincia": "CHUPACA",
      "Distrito": "SAN JUAN DE ISCOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 890,
      "Mes": "Mayo",
      "Departamento": "JUNÍN",
      "Provincia": "CHUPACA",
      "Distrito": "TRES DE DICIEMBRE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 891,
      "Mes": "Mayo",
      "Departamento": "JUNÍN",
      "Provincia": "CHUPACA",
      "Distrito": "TRES DE DICIEMBRE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 892,
      "Mes": "Mayo",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "CHICLAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 893,
      "Mes": "Mayo",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "CHICLAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 894,
      "Mes": "Mayo",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "CHICLAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 895,
      "Mes": "Mayo",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "CHICLAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 896,
      "Mes": "Mayo",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "LAGUNAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 897,
      "Mes": "Mayo",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "MONSEFU",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 898,
      "Mes": "Mayo",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "REQUE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 899,
      "Mes": "Mayo",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "REQUE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 900,
      "Mes": "Mayo",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "REQUE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 901,
      "Mes": "Mayo",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "FERREÑAFE",
      "Distrito": "PITIPO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 902,
      "Mes": "Mayo",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "LAMBAYEQUE",
      "Distrito": "MOCHUMI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 903,
      "Mes": "Mayo",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "LAMBAYEQUE",
      "Distrito": "OLMOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 904,
      "Mes": "Mayo",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "LAMBAYEQUE",
      "Distrito": "SAN JOSE",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 905,
      "Mes": "Mayo",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "ATE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 906,
      "Mes": "Mayo",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "ATE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 907,
      "Mes": "Mayo",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "CHACLACAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 908,
      "Mes": "Mayo",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "CHACLACAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 909,
      "Mes": "Mayo",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "CHORRILLOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 910,
      "Mes": "Mayo",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "CHORRILLOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 911,
      "Mes": "Mayo",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "CHORRILLOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 912,
      "Mes": "Mayo",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "CIENEGUILLA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 913,
      "Mes": "Mayo",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "EL AGUSTINO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 914,
      "Mes": "Mayo",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "EL AGUSTINO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 915,
      "Mes": "Mayo",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "EL AGUSTINO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 916,
      "Mes": "Mayo",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "EL AGUSTINO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 917,
      "Mes": "Mayo",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LA MOLINA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 918,
      "Mes": "Mayo",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LURIGANCHO (CHOSICA)",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 919,
      "Mes": "Mayo",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "PACHACAMAC",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 920,
      "Mes": "Mayo",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "SAN BARTOLO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 921,
      "Mes": "Mayo",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "VILLA EL SALVADOR",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 922,
      "Mes": "Mayo",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "VILLA EL SALVADOR",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 923,
      "Mes": "Mayo",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "VILLA EL SALVADOR",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 924,
      "Mes": "Mayo",
      "Departamento": "LIMA",
      "Provincia": "CAÑETE",
      "Distrito": "SAN LUIS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 925,
      "Mes": "Mayo",
      "Departamento": "LIMA",
      "Provincia": "HUARAL",
      "Distrito": "AUCALLAMA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 926,
      "Mes": "Mayo",
      "Departamento": "LIMA",
      "Provincia": "HUAURA",
      "Distrito": "SANTA MARIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 927,
      "Mes": "Mayo",
      "Departamento": "LIMA",
      "Provincia": "YAUYOS",
      "Distrito": "YAUYOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 928,
      "Mes": "Mayo",
      "Departamento": "MADRE DE DIOS",
      "Provincia": "TAMBOPATA",
      "Distrito": "TAMBOPATA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 929,
      "Mes": "Mayo",
      "Departamento": "MADRE DE DIOS",
      "Provincia": "TAMBOPATA",
      "Distrito": "TAMBOPATA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 930,
      "Mes": "Mayo",
      "Departamento": "MADRE DE DIOS",
      "Provincia": "TAMBOPATA",
      "Distrito": "TAMBOPATA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 931,
      "Mes": "Mayo",
      "Departamento": "MADRE DE DIOS",
      "Provincia": "TAMBOPATA",
      "Distrito": "LAS PIEDRAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 932,
      "Mes": "Mayo",
      "Departamento": "MOQUEGUA",
      "Provincia": "MARISCAL NIETO",
      "Distrito": "MOQUEGUA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 933,
      "Mes": "Mayo",
      "Departamento": "MOQUEGUA",
      "Provincia": "GENERAL SANCHEZ CERRO",
      "Distrito": "UBINAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 934,
      "Mes": "Mayo",
      "Departamento": "MOQUEGUA",
      "Provincia": "GENERAL SANCHEZ CERRO",
      "Distrito": "UBINAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 935,
      "Mes": "Mayo",
      "Departamento": "MOQUEGUA",
      "Provincia": "ILO",
      "Distrito": "ILO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 936,
      "Mes": "Mayo",
      "Departamento": "MOQUEGUA",
      "Provincia": "ILO",
      "Distrito": "ILO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 937,
      "Mes": "Mayo",
      "Departamento": "MOQUEGUA",
      "Provincia": "ILO",
      "Distrito": "ILO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 938,
      "Mes": "Mayo",
      "Departamento": "MOQUEGUA",
      "Provincia": "ILO",
      "Distrito": "EL ALGARROBAL",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 939,
      "Mes": "Mayo",
      "Departamento": "MOQUEGUA",
      "Provincia": "ILO",
      "Distrito": "PACOCHA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 940,
      "Mes": "Mayo",
      "Departamento": "PIURA",
      "Provincia": "PIURA",
      "Distrito": "CATACAOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 941,
      "Mes": "Mayo",
      "Departamento": "PIURA",
      "Provincia": "PIURA",
      "Distrito": "CATACAOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 942,
      "Mes": "Mayo",
      "Departamento": "PIURA",
      "Provincia": "PIURA",
      "Distrito": "LA UNION",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 943,
      "Mes": "Mayo",
      "Departamento": "PIURA",
      "Provincia": "AYABACA",
      "Distrito": "AYABACA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 944,
      "Mes": "Mayo",
      "Departamento": "PIURA",
      "Provincia": "AYABACA",
      "Distrito": "AYABACA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 945,
      "Mes": "Mayo",
      "Departamento": "PIURA",
      "Provincia": "AYABACA",
      "Distrito": "PAIMAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 946,
      "Mes": "Mayo",
      "Departamento": "PUNO",
      "Provincia": "PUNO",
      "Distrito": "PUNO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 947,
      "Mes": "Mayo",
      "Departamento": "SAN MARTÍN",
      "Provincia": "MOYOBAMBA",
      "Distrito": "MOYOBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 948,
      "Mes": "Mayo",
      "Departamento": "SAN MARTÍN",
      "Provincia": "BELLAVISTA",
      "Distrito": "BELLAVISTA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 949,
      "Mes": "Mayo",
      "Departamento": "SAN MARTÍN",
      "Provincia": "BELLAVISTA",
      "Distrito": "SAN PABLO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 950,
      "Mes": "Mayo",
      "Departamento": "SAN MARTÍN",
      "Provincia": "MARISCAL CACERES",
      "Distrito": "PAJARILLO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 951,
      "Mes": "Mayo",
      "Departamento": "SAN MARTÍN",
      "Provincia": "RIOJA",
      "Distrito": "RIOJA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 952,
      "Mes": "Mayo",
      "Departamento": "SAN MARTÍN",
      "Provincia": "RIOJA",
      "Distrito": "RIOJA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 953,
      "Mes": "Mayo",
      "Departamento": "SAN MARTÍN",
      "Provincia": "SAN MARTÍN",
      "Distrito": "TARAPOTO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 954,
      "Mes": "Mayo",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "TACNA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 955,
      "Mes": "Mayo",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "TACNA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 956,
      "Mes": "Mayo",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "TACNA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 957,
      "Mes": "Mayo",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "TACNA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 958,
      "Mes": "Mayo",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "ALTO DE LA ALIANZA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 959,
      "Mes": "Mayo",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "ALTO DE LA ALIANZA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 960,
      "Mes": "Mayo",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CIUDAD NUEVA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 961,
      "Mes": "Mayo",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "INCLAN",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 962,
      "Mes": "Mayo",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "PALCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 963,
      "Mes": "Mayo",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CORONEL GREGORIO ALBARRACIN LANCHIPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 964,
      "Mes": "Mayo",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CORONEL GREGORIO ALBARRACIN LANCHIPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 965,
      "Mes": "Mayo",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CORONEL GREGORIO ALBARRACIN LANCHIPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 966,
      "Mes": "Mayo",
      "Departamento": "TACNA",
      "Provincia": "CANDARAVE",
      "Distrito": "HUANUARA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 967,
      "Mes": "Mayo",
      "Departamento": "TACNA",
      "Provincia": "CANDARAVE",
      "Distrito": "QUILAHUANI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 968,
      "Mes": "Mayo",
      "Departamento": "TACNA",
      "Provincia": "JORGE BASADRE",
      "Distrito": "ILABAYA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 969,
      "Mes": "Junio",
      "Departamento": "ÁNCASH",
      "Provincia": "HUARAZ",
      "Distrito": "HUARAZ",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 970,
      "Mes": "Junio",
      "Departamento": "ÁNCASH",
      "Provincia": "CARHUAZ",
      "Distrito": "CARHUAZ",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 971,
      "Mes": "Junio",
      "Departamento": "ÁNCASH",
      "Provincia": "CARHUAZ",
      "Distrito": "YUNGAR",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 972,
      "Mes": "Junio",
      "Departamento": "ÁNCASH",
      "Provincia": "HUAYLAS",
      "Distrito": "MATO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 973,
      "Mes": "Junio",
      "Departamento": "ÁNCASH",
      "Provincia": "HUAYLAS",
      "Distrito": "PAMPAROMAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 974,
      "Mes": "Junio",
      "Departamento": "ÁNCASH",
      "Provincia": "RECUAY",
      "Distrito": "RECUAY",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 975,
      "Mes": "Junio",
      "Departamento": "ÁNCASH",
      "Provincia": "SANTA",
      "Distrito": "CHIMBOTE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 976,
      "Mes": "Junio",
      "Departamento": "APURÍMAC",
      "Provincia": "ABANCAY",
      "Distrito": "ABANCAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 977,
      "Mes": "Junio",
      "Departamento": "APURÍMAC",
      "Provincia": "ABANCAY",
      "Distrito": "CIRCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 978,
      "Mes": "Junio",
      "Departamento": "APURÍMAC",
      "Provincia": "ABANCAY",
      "Distrito": "LAMBRAMA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 979,
      "Mes": "Junio",
      "Departamento": "APURÍMAC",
      "Provincia": "ABANCAY",
      "Distrito": "PICHIRHUA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 980,
      "Mes": "Junio",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "ANDAHUAYLAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 981,
      "Mes": "Junio",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "ANDAHUAYLAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 982,
      "Mes": "Junio",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "ANDARAPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 983,
      "Mes": "Junio",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "HUANCARAMA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 984,
      "Mes": "Junio",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "KISHUARA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 985,
      "Mes": "Junio",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "KISHUARA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 986,
      "Mes": "Junio",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "PACUCHA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 987,
      "Mes": "Junio",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "SAN ANTONIO DE CACHI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 988,
      "Mes": "Junio",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "SAN MIGUEL DE CHACCRAMPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 989,
      "Mes": "Junio",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "SANTA MARIA DE CHICMO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 990,
      "Mes": "Junio",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "TURPO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 991,
      "Mes": "Junio",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "KAQUIABAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 992,
      "Mes": "Junio",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "JOSÉ MARÍA ARGUEDAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 993,
      "Mes": "Junio",
      "Departamento": "APURÍMAC",
      "Provincia": "AYMARAES",
      "Distrito": "SAN JUAN DE CHACÑA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 994,
      "Mes": "Junio",
      "Departamento": "APURÍMAC",
      "Provincia": "AYMARAES",
      "Distrito": "SAÑAYCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 995,
      "Mes": "Junio",
      "Departamento": "APURÍMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "TAMBOBAMBA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 996,
      "Mes": "Junio",
      "Departamento": "APURÍMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "TAMBOBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 997,
      "Mes": "Junio",
      "Departamento": "APURÍMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "COTABAMBAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 998,
      "Mes": "Junio",
      "Departamento": "APURÍMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "COYLLURQUI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 999,
      "Mes": "Junio",
      "Departamento": "APURÍMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "HAQUIRA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1000,
      "Mes": "Junio",
      "Departamento": "APURÍMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "HAQUIRA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1001,
      "Mes": "Junio",
      "Departamento": "APURÍMAC",
      "Provincia": "CHINCHEROS",
      "Distrito": "ANCO-HUALLO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1002,
      "Mes": "Junio",
      "Departamento": "APURÍMAC",
      "Provincia": "CHINCHEROS",
      "Distrito": "COCHARCAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1003,
      "Mes": "Junio",
      "Departamento": "APURÍMAC",
      "Provincia": "CHINCHEROS",
      "Distrito": "ONGOY",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1004,
      "Mes": "Junio",
      "Departamento": "APURÍMAC",
      "Provincia": "GRAU",
      "Distrito": "CHUQUIBAMBILLA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1005,
      "Mes": "Junio",
      "Departamento": "APURÍMAC",
      "Provincia": "GRAU",
      "Distrito": "VIRUNDO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1006,
      "Mes": "Junio",
      "Departamento": "AREQUIPA",
      "Provincia": "AREQUIPA",
      "Distrito": "MARIANO MELGAR",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1007,
      "Mes": "Junio",
      "Departamento": "AREQUIPA",
      "Provincia": "AREQUIPA",
      "Distrito": "MIRAFLORES",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1008,
      "Mes": "Junio",
      "Departamento": "AREQUIPA",
      "Provincia": "AREQUIPA",
      "Distrito": "YANAHUARA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1009,
      "Mes": "Junio",
      "Departamento": "AREQUIPA",
      "Provincia": "CARAVELI",
      "Distrito": "ATICO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1010,
      "Mes": "Junio",
      "Departamento": "AREQUIPA",
      "Provincia": "CARAVELI",
      "Distrito": "ATICO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1011,
      "Mes": "Junio",
      "Departamento": "AREQUIPA",
      "Provincia": "CASTILLA",
      "Distrito": "URACA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1012,
      "Mes": "Junio",
      "Departamento": "AREQUIPA",
      "Provincia": "CASTILLA",
      "Distrito": "URACA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1013,
      "Mes": "Junio",
      "Departamento": "AREQUIPA",
      "Provincia": "CASTILLA",
      "Distrito": "VIRACO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1014,
      "Mes": "Junio",
      "Departamento": "AREQUIPA",
      "Provincia": "CAYLLOMA",
      "Distrito": "CHIVAY",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1015,
      "Mes": "Junio",
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "AYACUCHO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1016,
      "Mes": "Junio",
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "AYACUCHO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1017,
      "Mes": "Junio",
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "ACOCRO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1018,
      "Mes": "Junio",
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "CARMEN ALTO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1019,
      "Mes": "Junio",
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "ANDRES AVELINO CACERES DORREGARAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1020,
      "Mes": "Junio",
      "Departamento": "AYACUCHO",
      "Provincia": "CANGALLO",
      "Distrito": "CHUSCHI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1021,
      "Mes": "Junio",
      "Departamento": "AYACUCHO",
      "Provincia": "CANGALLO",
      "Distrito": "MARIA PARADO DE BELLIDO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1022,
      "Mes": "Junio",
      "Departamento": "AYACUCHO",
      "Provincia": "HUANTA",
      "Distrito": "SANTILLANA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1023,
      "Mes": "Junio",
      "Departamento": "AYACUCHO",
      "Provincia": "LA MAR",
      "Distrito": "SAN MIGUEL",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1024,
      "Mes": "Junio",
      "Departamento": "AYACUCHO",
      "Provincia": "LA MAR",
      "Distrito": "ANCO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1025,
      "Mes": "Junio",
      "Departamento": "AYACUCHO",
      "Provincia": "LA MAR",
      "Distrito": "CHILCAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1026,
      "Mes": "Junio",
      "Departamento": "AYACUCHO",
      "Provincia": "LUCANAS",
      "Distrito": "SAN PEDRO DE PALCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1027,
      "Mes": "Junio",
      "Departamento": "AYACUCHO",
      "Provincia": "PAUCAR DEL SARA SARA",
      "Distrito": "PAUSA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1028,
      "Mes": "Junio",
      "Departamento": "AYACUCHO",
      "Provincia": "PAUCAR DEL SARA SARA",
      "Distrito": "OYOLO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1029,
      "Mes": "Junio",
      "Departamento": "AYACUCHO",
      "Provincia": "SUCRE",
      "Distrito": "QUEROBAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1030,
      "Mes": "Junio",
      "Departamento": "AYACUCHO",
      "Provincia": "VICTOR FAJARDO",
      "Distrito": "HUANCAPI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1031,
      "Mes": "Junio",
      "Departamento": "AYACUCHO",
      "Provincia": "VICTOR FAJARDO",
      "Distrito": "ALCAMENCA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1032,
      "Mes": "Junio",
      "Departamento": "AYACUCHO",
      "Provincia": "VICTOR FAJARDO",
      "Distrito": "HUAMANQUIQUIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1033,
      "Mes": "Junio",
      "Departamento": "AYACUCHO",
      "Provincia": "VILCAS HUAMAN",
      "Distrito": "ACCOMARCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1034,
      "Mes": "Junio",
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CALLAO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1035,
      "Mes": "Junio",
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CALLAO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1036,
      "Mes": "Junio",
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CALLAO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1037,
      "Mes": "Junio",
      "Departamento": "CUSCO",
      "Provincia": "CANCHIS",
      "Distrito": "SICUANI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1038,
      "Mes": "Junio",
      "Departamento": "CUSCO",
      "Provincia": "CANCHIS",
      "Distrito": "SICUANI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1039,
      "Mes": "Junio",
      "Departamento": "CUSCO",
      "Provincia": "CANCHIS",
      "Distrito": "COMBAPATA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1040,
      "Mes": "Junio",
      "Departamento": "CUSCO",
      "Provincia": "LA CONVENCION",
      "Distrito": "VILCABAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1041,
      "Mes": "Junio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "HUANCAVELICA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1042,
      "Mes": "Junio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "HUANCAVELICA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1043,
      "Mes": "Junio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "HUANCAVELICA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1044,
      "Mes": "Junio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "ACORIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1045,
      "Mes": "Junio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "MOYA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1046,
      "Mes": "Junio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "YAULI",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1047,
      "Mes": "Junio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "YAULI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1048,
      "Mes": "Junio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "ASCENSION",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1049,
      "Mes": "Junio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "HUANDO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1050,
      "Mes": "Junio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ACOBAMBA",
      "Distrito": "ANDABAMBA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1051,
      "Mes": "Junio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ACOBAMBA",
      "Distrito": "CAJA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1052,
      "Mes": "Junio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ACOBAMBA",
      "Distrito": "MARCAS",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1053,
      "Mes": "Junio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "LIRCAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1054,
      "Mes": "Junio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "CCOCHACCASA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1055,
      "Mes": "Junio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "CHINCHO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1056,
      "Mes": "Junio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "JULCAMARCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1057,
      "Mes": "Junio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "SAN ANTONIO DE ANTAPARCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1058,
      "Mes": "Junio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "SAN ANTONIO DE ANTAPARCO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1059,
      "Mes": "Junio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "CASTROVIRREYNA",
      "Distrito": "CASTROVIRREYNA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1060,
      "Mes": "Junio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "CASTROVIRREYNA",
      "Distrito": "CHUPAMARCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1061,
      "Mes": "Junio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "CASTROVIRREYNA",
      "Distrito": "CHUPAMARCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1062,
      "Mes": "Junio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "CASTROVIRREYNA",
      "Distrito": "MOLLEPAMPA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1063,
      "Mes": "Junio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "CASTROVIRREYNA",
      "Distrito": "MOLLEPAMPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1064,
      "Mes": "Junio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "CHURCAMPA",
      "Distrito": "CHURCAMPA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1065,
      "Mes": "Junio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "CHURCAMPA",
      "Distrito": "CHURCAMPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1066,
      "Mes": "Junio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "PAMPAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1067,
      "Mes": "Junio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "ACRAQUIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1068,
      "Mes": "Junio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "COLCABAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1069,
      "Mes": "Junio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "COLCABAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1070,
      "Mes": "Junio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "DANIEL HERNANDEZ",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1071,
      "Mes": "Junio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "DANIEL HERNANDEZ",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1072,
      "Mes": "Junio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "HUACHOCOLPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1073,
      "Mes": "Junio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "HUARIBAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1074,
      "Mes": "Junio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "PAZOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1075,
      "Mes": "Junio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "SALCAHUASI",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1076,
      "Mes": "Junio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "TINTAY PUNCU",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1077,
      "Mes": "Junio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "TINTAY PUNCU",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1078,
      "Mes": "Junio",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUÁNUCO",
      "Distrito": "HUÁNUCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1079,
      "Mes": "Junio",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUÁNUCO",
      "Distrito": "CHINCHAO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1080,
      "Mes": "Junio",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUÁNUCO",
      "Distrito": "SANTA MARIA DEL VALLE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1081,
      "Mes": "Junio",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUÁNUCO",
      "Distrito": "YARUMAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1082,
      "Mes": "Junio",
      "Departamento": "HUÁNUCO",
      "Provincia": "AMBO",
      "Distrito": "HUACAR",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1083,
      "Mes": "Junio",
      "Departamento": "HUÁNUCO",
      "Provincia": "AMBO",
      "Distrito": "SAN RAFAEL",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1084,
      "Mes": "Junio",
      "Departamento": "HUÁNUCO",
      "Provincia": "DOS DE MAYO",
      "Distrito": "MARIAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1085,
      "Mes": "Junio",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "LLATA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1086,
      "Mes": "Junio",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "JACAS GRANDE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1087,
      "Mes": "Junio",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "MONZON",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1088,
      "Mes": "Junio",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "PUÑOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1089,
      "Mes": "Junio",
      "Departamento": "HUÁNUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "DANIEL ALOMIA ROBLES",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1090,
      "Mes": "Junio",
      "Departamento": "HUÁNUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "LUYANDO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1091,
      "Mes": "Junio",
      "Departamento": "HUÁNUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "LUYANDO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1092,
      "Mes": "Junio",
      "Departamento": "HUÁNUCO",
      "Provincia": "PACHITEA",
      "Distrito": "PANAO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1093,
      "Mes": "Junio",
      "Departamento": "HUÁNUCO",
      "Provincia": "PUERTO INCA",
      "Distrito": "HONORIA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1094,
      "Mes": "Junio",
      "Departamento": "HUÁNUCO",
      "Provincia": "LAURICOCHA",
      "Distrito": "JESUS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1095,
      "Mes": "Junio",
      "Departamento": "HUÁNUCO",
      "Provincia": "LAURICOCHA",
      "Distrito": "RONDOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1096,
      "Mes": "Junio",
      "Departamento": "HUÁNUCO",
      "Provincia": "YAROWILCA",
      "Distrito": "CHACABAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1097,
      "Mes": "Junio",
      "Departamento": "HUÁNUCO",
      "Provincia": "YAROWILCA",
      "Distrito": "OBAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1098,
      "Mes": "Junio",
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "ICA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1099,
      "Mes": "Junio",
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "ICA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1100,
      "Mes": "Junio",
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "SALAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1101,
      "Mes": "Junio",
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "SAN JUAN BAUTISTA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1102,
      "Mes": "Junio",
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "SANTIAGO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1103,
      "Mes": "Junio",
      "Departamento": "ICA",
      "Provincia": "PALPA",
      "Distrito": "PALPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1104,
      "Mes": "Junio",
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "PISCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1105,
      "Mes": "Junio",
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "INDEPENDENCIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1106,
      "Mes": "Junio",
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "TUPAC AMARU INCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1107,
      "Mes": "Junio",
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "TUPAC AMARU INCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1108,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "HUANCAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1109,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "CHACAPAMPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1110,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "CHACAPAMPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1111,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "CHILCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1112,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "CHILCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1113,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "CHONGOS ALTO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1114,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "EL TAMBO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1115,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "EL TAMBO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1116,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "HUANCAN",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1117,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "HUAYUCACHI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1118,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "HUAYUCACHI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1119,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "SAPALLANGA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1120,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "SAPALLANGA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1121,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "SANTO DOMINGO DE ACOBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1122,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "SANTO DOMINGO DE ACOBAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1123,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "CONCEPCION",
      "Distrito": "ANDAMARCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1124,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "CONCEPCION",
      "Distrito": "COMAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1125,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "CHANCHAMAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1126,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PERENE",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1127,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PICHANAKI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1128,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PICHANAKI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1129,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "SAN LUIS DE SHUARO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1130,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "SAN RAMON",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1131,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "JAUJA",
      "Distrito": "MASMA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1132,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "JAUJA",
      "Distrito": "MUQUIYAUYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1133,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "JAUJA",
      "Distrito": "PARCO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1134,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "JAUJA",
      "Distrito": "YAUYOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1135,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "JAUJA",
      "Distrito": "YAUYOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1136,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "JUNÍN",
      "Distrito": "CARHUAMAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1137,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "JUNÍN",
      "Distrito": "ULCUMAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1138,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "SATIPO",
      "Distrito": "SATIPO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1139,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "SATIPO",
      "Distrito": "COVIRIALI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1140,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "SATIPO",
      "Distrito": "LLAYLLA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1141,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "SATIPO",
      "Distrito": "MAZAMARI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1142,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "SATIPO",
      "Distrito": "PANGOA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1143,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "SATIPO",
      "Distrito": "PANGOA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1144,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "SATIPO",
      "Distrito": "PANGOA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1145,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "SATIPO",
      "Distrito": "RIO TAMBO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1146,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "SATIPO",
      "Distrito": "RIO TAMBO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1147,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "TARMA",
      "Distrito": "HUASAHUASI",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1148,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "YAULI",
      "Distrito": "LA OROYA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1149,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "YAULI",
      "Distrito": "SANTA ROSA DE SACCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1150,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "CHUPACA",
      "Distrito": "AHUAC",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1151,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "CHUPACA",
      "Distrito": "AHUAC",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1152,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "CHUPACA",
      "Distrito": "CHONGOS BAJO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1153,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "CHUPACA",
      "Distrito": "HUACHAC",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1154,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "CHUPACA",
      "Distrito": "HUAMANCACA CHICO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1155,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "CHUPACA",
      "Distrito": "TRES DE DICIEMBRE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1156,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "CHUPACA",
      "Distrito": "TRES DE DICIEMBRE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1157,
      "Mes": "Junio",
      "Departamento": "JUNÍN",
      "Provincia": "CHUPACA",
      "Distrito": "YANACANCHA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1158,
      "Mes": "Junio",
      "Departamento": "LA LIBERTAD",
      "Provincia": "BOLIVAR",
      "Distrito": "UCUNCHA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1159,
      "Mes": "Junio",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "CHICLAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1160,
      "Mes": "Junio",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "ETEN",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1161,
      "Mes": "Junio",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "JOSE LEONARDO ORTIZ",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1162,
      "Mes": "Junio",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "LA VICTORIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1163,
      "Mes": "Junio",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "LA VICTORIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1164,
      "Mes": "Junio",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "LA VICTORIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1165,
      "Mes": "Junio",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "SANTA ROSA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1166,
      "Mes": "Junio",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "FERREÑAFE",
      "Distrito": "CAÑARIS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1167,
      "Mes": "Junio",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "LAMBAYEQUE",
      "Distrito": "SAN JOSE",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1168,
      "Mes": "Junio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "ATE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1169,
      "Mes": "Junio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "ATE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1170,
      "Mes": "Junio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "ATE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1171,
      "Mes": "Junio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "BREÑA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1172,
      "Mes": "Junio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "CHACLACAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1173,
      "Mes": "Junio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "CHORRILLOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1174,
      "Mes": "Junio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "CHORRILLOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1175,
      "Mes": "Junio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "CHORRILLOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1176,
      "Mes": "Junio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "CIENEGUILLA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1177,
      "Mes": "Junio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "EL AGUSTINO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1178,
      "Mes": "Junio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LOS OLIVOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1179,
      "Mes": "Junio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LURIGANCHO (CHOSICA)",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1180,
      "Mes": "Junio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LURIGANCHO (CHOSICA)",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1181,
      "Mes": "Junio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LURIN",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1182,
      "Mes": "Junio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LURIN",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1183,
      "Mes": "Junio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "MAGDALENA VIEJA (PUEBLO LIBRE)",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1184,
      "Mes": "Junio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "MAGDALENA VIEJA (PUEBLO LIBRE)",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1185,
      "Mes": "Junio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "PUCUSANA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1186,
      "Mes": "Junio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "SAN MARTÍN DE PORRES",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1187,
      "Mes": "Junio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "SANTIAGO DE SURCO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1188,
      "Mes": "Junio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "VILLA EL SALVADOR",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1189,
      "Mes": "Junio",
      "Departamento": "LIMA",
      "Provincia": "HUARAL",
      "Distrito": "AUCALLAMA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1190,
      "Mes": "Junio",
      "Departamento": "MADRE DE DIOS",
      "Provincia": "TAMBOPATA",
      "Distrito": "TAMBOPATA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1191,
      "Mes": "Junio",
      "Departamento": "MADRE DE DIOS",
      "Provincia": "TAMBOPATA",
      "Distrito": "TAMBOPATA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1192,
      "Mes": "Junio",
      "Departamento": "MOQUEGUA",
      "Provincia": "ILO",
      "Distrito": "ILO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1193,
      "Mes": "Junio",
      "Departamento": "PIURA",
      "Provincia": "PIURA",
      "Distrito": "CATACAOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1194,
      "Mes": "Junio",
      "Departamento": "PIURA",
      "Provincia": "PIURA",
      "Distrito": "CATACAOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1195,
      "Mes": "Junio",
      "Departamento": "PIURA",
      "Provincia": "PIURA",
      "Distrito": "LA ARENA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1196,
      "Mes": "Junio",
      "Departamento": "PIURA",
      "Provincia": "AYABACA",
      "Distrito": "PAIMAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1197,
      "Mes": "Junio",
      "Departamento": "PIURA",
      "Provincia": "HUANCABAMBA",
      "Distrito": "HUANCABAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1198,
      "Mes": "Junio",
      "Departamento": "PIURA",
      "Provincia": "MORROPON",
      "Distrito": "MORROPON",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1199,
      "Mes": "Junio",
      "Departamento": "PUNO",
      "Provincia": "PUNO",
      "Distrito": "PUNO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1200,
      "Mes": "Junio",
      "Departamento": "PUNO",
      "Provincia": "PUNO",
      "Distrito": "PUNO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1201,
      "Mes": "Junio",
      "Departamento": "SAN MARTÍN",
      "Provincia": "BELLAVISTA",
      "Distrito": "ALTO BIAVO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1202,
      "Mes": "Junio",
      "Departamento": "SAN MARTÍN",
      "Provincia": "BELLAVISTA",
      "Distrito": "SAN PABLO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1203,
      "Mes": "Junio",
      "Departamento": "SAN MARTÍN",
      "Provincia": "RIOJA",
      "Distrito": "ELIAS SOPLIN VARGAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1204,
      "Mes": "Junio",
      "Departamento": "SAN MARTÍN",
      "Provincia": "SAN MARTÍN",
      "Distrito": "TARAPOTO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1205,
      "Mes": "Junio",
      "Departamento": "SAN MARTÍN",
      "Provincia": "SAN MARTÍN",
      "Distrito": "HUIMBAYOC",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1206,
      "Mes": "Junio",
      "Departamento": "SAN MARTÍN",
      "Provincia": "SAN MARTÍN",
      "Distrito": "LA BANDA DE SHILCAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1207,
      "Mes": "Junio",
      "Departamento": "SAN MARTÍN",
      "Provincia": "SAN MARTÍN",
      "Distrito": "LA BANDA DE SHILCAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1208,
      "Mes": "Junio",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "TACNA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1209,
      "Mes": "Junio",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "ALTO DE LA ALIANZA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1210,
      "Mes": "Junio",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "ALTO DE LA ALIANZA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1211,
      "Mes": "Junio",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "PALCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1212,
      "Mes": "Junio",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "POCOLLAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1213,
      "Mes": "Junio",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "POCOLLAY",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1214,
      "Mes": "Junio",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CORONEL GREGORIO ALBARRACIN LANCHIPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1215,
      "Mes": "Junio",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CORONEL GREGORIO ALBARRACIN LANCHIPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1216,
      "Mes": "Junio",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CORONEL GREGORIO ALBARRACIN LANCHIPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1217,
      "Mes": "Junio",
      "Departamento": "TACNA",
      "Provincia": "CANDARAVE",
      "Distrito": "CANDARAVE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1218,
      "Mes": "Junio",
      "Departamento": "TACNA",
      "Provincia": "JORGE BASADRE",
      "Distrito": "ILABAYA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1219,
      "Mes": "Junio",
      "Departamento": "TACNA",
      "Provincia": "JORGE BASADRE",
      "Distrito": "ITE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1220,
      "Mes": "Junio",
      "Departamento": "TACNA",
      "Provincia": "TARATA",
      "Distrito": "TICACO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1221,
      "Mes": "Junio",
      "Departamento": "TACNA",
      "Provincia": "TARATA",
      "Distrito": "TICACO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1222,
      "Mes": "Julio",
      "Departamento": "ÁNCASH",
      "Provincia": "CARHUAZ",
      "Distrito": "ACOPAMPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1223,
      "Mes": "Julio",
      "Departamento": "ÁNCASH",
      "Provincia": "HUAYLAS",
      "Distrito": "PAMPAROMAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1224,
      "Mes": "Julio",
      "Departamento": "ÁNCASH",
      "Provincia": "PALLASCA",
      "Distrito": "LACABAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1225,
      "Mes": "Julio",
      "Departamento": "ÁNCASH",
      "Provincia": "RECUAY",
      "Distrito": "COTAPARACO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1226,
      "Mes": "Julio",
      "Departamento": "ÁNCASH",
      "Provincia": "RECUAY",
      "Distrito": "TICAPAMPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1227,
      "Mes": "Julio",
      "Departamento": "ÁNCASH",
      "Provincia": "SANTA",
      "Distrito": "NUEVO CHIMBOTE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1228,
      "Mes": "Julio",
      "Departamento": "APURÍMAC",
      "Provincia": "ABANCAY",
      "Distrito": "ABANCAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1229,
      "Mes": "Julio",
      "Departamento": "APURÍMAC",
      "Provincia": "ABANCAY",
      "Distrito": "CURAHUASI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1230,
      "Mes": "Julio",
      "Departamento": "APURÍMAC",
      "Provincia": "ABANCAY",
      "Distrito": "CURAHUASI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1231,
      "Mes": "Julio",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "ANDAHUAYLAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1232,
      "Mes": "Julio",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "ANDARAPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1233,
      "Mes": "Julio",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "CHIARA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1234,
      "Mes": "Julio",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "CHIARA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1235,
      "Mes": "Julio",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "PACOBAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1236,
      "Mes": "Julio",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "PAMPACHIRI",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1237,
      "Mes": "Julio",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "PAMPACHIRI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1238,
      "Mes": "Julio",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "PAMPACHIRI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1239,
      "Mes": "Julio",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "TALAVERA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1240,
      "Mes": "Julio",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "TALAVERA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1241,
      "Mes": "Julio",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "KAQUIABAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1242,
      "Mes": "Julio",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "KAQUIABAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1243,
      "Mes": "Julio",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "KAQUIABAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1244,
      "Mes": "Julio",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "JOSÉ MARÍA ARGUEDAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1245,
      "Mes": "Julio",
      "Departamento": "APURÍMAC",
      "Provincia": "AYMARAES",
      "Distrito": "CHALHUANCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1246,
      "Mes": "Julio",
      "Departamento": "APURÍMAC",
      "Provincia": "AYMARAES",
      "Distrito": "CHALHUANCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1247,
      "Mes": "Julio",
      "Departamento": "APURÍMAC",
      "Provincia": "AYMARAES",
      "Distrito": "SAÑAYCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1248,
      "Mes": "Julio",
      "Departamento": "APURÍMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "COTABAMBAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1249,
      "Mes": "Julio",
      "Departamento": "APURÍMAC",
      "Provincia": "GRAU",
      "Distrito": "PROGRESO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1250,
      "Mes": "Julio",
      "Departamento": "AREQUIPA",
      "Provincia": "AREQUIPA",
      "Distrito": "CERRO COLORADO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1251,
      "Mes": "Julio",
      "Departamento": "AREQUIPA",
      "Provincia": "AREQUIPA",
      "Distrito": "MIRAFLORES",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1252,
      "Mes": "Julio",
      "Departamento": "AREQUIPA",
      "Provincia": "CAMANA",
      "Distrito": "MARISCAL CACERES",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1253,
      "Mes": "Julio",
      "Departamento": "AREQUIPA",
      "Provincia": "CAMANA",
      "Distrito": "NICOLAS DE PIEROLA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1254,
      "Mes": "Julio",
      "Departamento": "AREQUIPA",
      "Provincia": "CAYLLOMA",
      "Distrito": "CALLALLI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1255,
      "Mes": "Julio",
      "Departamento": "AREQUIPA",
      "Provincia": "CAYLLOMA",
      "Distrito": "CALLALLI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1256,
      "Mes": "Julio",
      "Departamento": "AREQUIPA",
      "Provincia": "CAYLLOMA",
      "Distrito": "TISCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1257,
      "Mes": "Julio",
      "Departamento": "AREQUIPA",
      "Provincia": "ISLAY",
      "Distrito": "MOLLENDO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1258,
      "Mes": "Julio",
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "AYACUCHO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1259,
      "Mes": "Julio",
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "TAMBILLO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1260,
      "Mes": "Julio",
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "ANDRES AVELINO CACERES DORREGARAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1261,
      "Mes": "Julio",
      "Departamento": "AYACUCHO",
      "Provincia": "CANGALLO",
      "Distrito": "PARAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1262,
      "Mes": "Julio",
      "Departamento": "AYACUCHO",
      "Provincia": "CANGALLO",
      "Distrito": "PARAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1263,
      "Mes": "Julio",
      "Departamento": "AYACUCHO",
      "Provincia": "CANGALLO",
      "Distrito": "TOTOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1264,
      "Mes": "Julio",
      "Departamento": "AYACUCHO",
      "Provincia": "HUANTA",
      "Distrito": "AYAHUANCO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1265,
      "Mes": "Julio",
      "Departamento": "AYACUCHO",
      "Provincia": "HUANTA",
      "Distrito": "SIVIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1266,
      "Mes": "Julio",
      "Departamento": "AYACUCHO",
      "Provincia": "LA MAR",
      "Distrito": "ANCO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1267,
      "Mes": "Julio",
      "Departamento": "AYACUCHO",
      "Provincia": "LA MAR",
      "Distrito": "ANCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1268,
      "Mes": "Julio",
      "Departamento": "AYACUCHO",
      "Provincia": "LA MAR",
      "Distrito": "AYNA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1269,
      "Mes": "Julio",
      "Departamento": "AYACUCHO",
      "Provincia": "LA MAR",
      "Distrito": "AYNA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1270,
      "Mes": "Julio",
      "Departamento": "AYACUCHO",
      "Provincia": "LUCANAS",
      "Distrito": "PUQUIO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1271,
      "Mes": "Julio",
      "Departamento": "AYACUCHO",
      "Provincia": "LUCANAS",
      "Distrito": "PUQUIO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1272,
      "Mes": "Julio",
      "Departamento": "AYACUCHO",
      "Provincia": "LUCANAS",
      "Distrito": "HUAC-HUAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1273,
      "Mes": "Julio",
      "Departamento": "AYACUCHO",
      "Provincia": "LUCANAS",
      "Distrito": "OCAÑA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1274,
      "Mes": "Julio",
      "Departamento": "AYACUCHO",
      "Provincia": "LUCANAS",
      "Distrito": "SAN PEDRO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1275,
      "Mes": "Julio",
      "Departamento": "AYACUCHO",
      "Provincia": "VICTOR FAJARDO",
      "Distrito": "HUAYA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1276,
      "Mes": "Julio",
      "Departamento": "AYACUCHO",
      "Provincia": "VILCAS HUAMAN",
      "Distrito": "VISCHONGO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1277,
      "Mes": "Julio",
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CALLAO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1278,
      "Mes": "Julio",
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CALLAO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1279,
      "Mes": "Julio",
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "LA PERLA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1280,
      "Mes": "Julio",
      "Departamento": "CUSCO",
      "Provincia": "CUSCO",
      "Distrito": "CCORCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1281,
      "Mes": "Julio",
      "Departamento": "CUSCO",
      "Provincia": "CUSCO",
      "Distrito": "SAN JERONIMO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1282,
      "Mes": "Julio",
      "Departamento": "CUSCO",
      "Provincia": "ANTA",
      "Distrito": "LIMATAMBO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1283,
      "Mes": "Julio",
      "Departamento": "CUSCO",
      "Provincia": "CANCHIS",
      "Distrito": "COMBAPATA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1284,
      "Mes": "Julio",
      "Departamento": "CUSCO",
      "Provincia": "CANCHIS",
      "Distrito": "SAN PABLO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1285,
      "Mes": "Julio",
      "Departamento": "CUSCO",
      "Provincia": "LA CONVENCION",
      "Distrito": "SANTA ANA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1286,
      "Mes": "Julio",
      "Departamento": "CUSCO",
      "Provincia": "LA CONVENCION",
      "Distrito": "KIMBIRI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1287,
      "Mes": "Julio",
      "Departamento": "CUSCO",
      "Provincia": "LA CONVENCION",
      "Distrito": "VILCABAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1288,
      "Mes": "Julio",
      "Departamento": "CUSCO",
      "Provincia": "LA CONVENCION",
      "Distrito": "PICHARI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1289,
      "Mes": "Julio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "HUANCAVELICA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1290,
      "Mes": "Julio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "HUANCAVELICA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1291,
      "Mes": "Julio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "CONAYCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1292,
      "Mes": "Julio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "HUACHOCOLPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1293,
      "Mes": "Julio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "PALCA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1294,
      "Mes": "Julio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "HUANDO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1295,
      "Mes": "Julio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "LIRCAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1296,
      "Mes": "Julio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "ANCHONGA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1297,
      "Mes": "Julio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "ANCHONGA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1298,
      "Mes": "Julio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "CHINCHO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1299,
      "Mes": "Julio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "SANTO TOMAS DE PATA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1300,
      "Mes": "Julio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "SECCLLA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1301,
      "Mes": "Julio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "SECCLLA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1302,
      "Mes": "Julio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "CASTROVIRREYNA",
      "Distrito": "CASTROVIRREYNA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1303,
      "Mes": "Julio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "CASTROVIRREYNA",
      "Distrito": "CASTROVIRREYNA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1304,
      "Mes": "Julio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "CASTROVIRREYNA",
      "Distrito": "MOLLEPAMPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1305,
      "Mes": "Julio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "CHURCAMPA",
      "Distrito": "CHURCAMPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1306,
      "Mes": "Julio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "ACOSTAMBO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1307,
      "Mes": "Julio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "COLCABAMBA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1308,
      "Mes": "Julio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "COLCABAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1309,
      "Mes": "Julio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "COLCABAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1310,
      "Mes": "Julio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "DANIEL HERNANDEZ",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1311,
      "Mes": "Julio",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "HUARIBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1312,
      "Mes": "Julio",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUÁNUCO",
      "Distrito": "HUÁNUCO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1313,
      "Mes": "Julio",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUÁNUCO",
      "Distrito": "YACUS",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1314,
      "Mes": "Julio",
      "Departamento": "HUÁNUCO",
      "Provincia": "DOS DE MAYO",
      "Distrito": "PACHAS",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1315,
      "Mes": "Julio",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUACAYBAMBA",
      "Distrito": "HUACAYBAMBA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1316,
      "Mes": "Julio",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "LLATA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1317,
      "Mes": "Julio",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "ARANCAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1318,
      "Mes": "Julio",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "PUÑOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1319,
      "Mes": "Julio",
      "Departamento": "HUÁNUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "JOSE CRESPO Y CASTILLO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1320,
      "Mes": "Julio",
      "Departamento": "HUÁNUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "JOSE CRESPO Y CASTILLO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1321,
      "Mes": "Julio",
      "Departamento": "HUÁNUCO",
      "Provincia": "MARAÑON",
      "Distrito": "CHOLON",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1322,
      "Mes": "Julio",
      "Departamento": "HUÁNUCO",
      "Provincia": "PUERTO INCA",
      "Distrito": "HONORIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1323,
      "Mes": "Julio",
      "Departamento": "HUÁNUCO",
      "Provincia": "PUERTO INCA",
      "Distrito": "TOURNAVISTA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1324,
      "Mes": "Julio",
      "Departamento": "HUÁNUCO",
      "Provincia": "PUERTO INCA",
      "Distrito": "TOURNAVISTA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1325,
      "Mes": "Julio",
      "Departamento": "HUÁNUCO",
      "Provincia": "PUERTO INCA",
      "Distrito": "TOURNAVISTA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1326,
      "Mes": "Julio",
      "Departamento": "HUÁNUCO",
      "Provincia": "LAURICOCHA",
      "Distrito": "BAÑOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1327,
      "Mes": "Julio",
      "Departamento": "HUÁNUCO",
      "Provincia": "YAROWILCA",
      "Distrito": "OBAS",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1328,
      "Mes": "Julio",
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "ICA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1329,
      "Mes": "Julio",
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "ICA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1330,
      "Mes": "Julio",
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "LA TINGUIÑA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1331,
      "Mes": "Julio",
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "PACHACUTEC",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1332,
      "Mes": "Julio",
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "PARCONA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1333,
      "Mes": "Julio",
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "SANTIAGO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1334,
      "Mes": "Julio",
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "YAUCA DEL ROSARIO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1335,
      "Mes": "Julio",
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "PISCO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1336,
      "Mes": "Julio",
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "INDEPENDENCIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1337,
      "Mes": "Julio",
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "INDEPENDENCIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1338,
      "Mes": "Julio",
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "PARACAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1339,
      "Mes": "Julio",
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "SAN ANDRES",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1340,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "HUANCAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1341,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "CHILCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1342,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "EL TAMBO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1343,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "EL TAMBO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1344,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "HUAYUCACHI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1345,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "SANTO DOMINGO DE ACOBAMBA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1346,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "SANTO DOMINGO DE ACOBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1347,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "SANTO DOMINGO DE ACOBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1348,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "CONCEPCION",
      "Distrito": "CONCEPCION",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1349,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "CONCEPCION",
      "Distrito": "SAN JOSE DE QUERO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1350,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "CONCEPCION",
      "Distrito": "SAN JOSE DE QUERO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1351,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "CONCEPCION",
      "Distrito": "SANTA ROSA DE OCOPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1352,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "CHANCHAMAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1353,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PERENE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1354,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PICHANAKI",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1355,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PICHANAKI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1356,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PICHANAKI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1357,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "SAN RAMON",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1358,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "SAN RAMON",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1359,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "JAUJA",
      "Distrito": "JAUJA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1360,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "JAUJA",
      "Distrito": "ACOLLA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1361,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "JAUJA",
      "Distrito": "CANCHAYLLO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1362,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "JAUJA",
      "Distrito": "LLOCLLAPAMPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1363,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "JAUJA",
      "Distrito": "MASMA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1364,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "JAUJA",
      "Distrito": "MASMA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1365,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "JAUJA",
      "Distrito": "SAN LORENZO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1366,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "JAUJA",
      "Distrito": "SAN LORENZO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1367,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "JUNÍN",
      "Distrito": "ULCUMAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1368,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "JUNÍN",
      "Distrito": "ULCUMAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1369,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "SATIPO",
      "Distrito": "SATIPO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1370,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "SATIPO",
      "Distrito": "PANGOA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1371,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "SATIPO",
      "Distrito": "PANGOA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1372,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "SATIPO",
      "Distrito": "PANGOA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1373,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "SATIPO",
      "Distrito": "RIO TAMBO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1374,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "SATIPO",
      "Distrito": "RIO TAMBO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1375,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "TARMA",
      "Distrito": "TARMA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1376,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "TARMA",
      "Distrito": "TARMA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1377,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "TARMA",
      "Distrito": "ACOBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1378,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "TARMA",
      "Distrito": "PALCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1379,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "TARMA",
      "Distrito": "PALCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1380,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "TARMA",
      "Distrito": "SAN PEDRO DE CAJAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1381,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "TARMA",
      "Distrito": "TAPO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1382,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "YAULI",
      "Distrito": "SANTA ROSA DE SACCO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1383,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "YAULI",
      "Distrito": "SUITUCANCHA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1384,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "CHUPACA",
      "Distrito": "CHUPACA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1385,
      "Mes": "Julio",
      "Departamento": "JUNÍN",
      "Provincia": "CHUPACA",
      "Distrito": "CHUPACA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1386,
      "Mes": "Julio",
      "Departamento": "LA LIBERTAD",
      "Provincia": "PATAZ",
      "Distrito": "BULDIBUYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1387,
      "Mes": "Julio",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "ETEN PUERTO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1388,
      "Mes": "Julio",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "JOSE LEONARDO ORTIZ",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1389,
      "Mes": "Julio",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "LAGUNAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1390,
      "Mes": "Julio",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "LAGUNAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1391,
      "Mes": "Julio",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "MONSEFU",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1392,
      "Mes": "Julio",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "FERREÑAFE",
      "Distrito": "FERREÑAFE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1393,
      "Mes": "Julio",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "FERREÑAFE",
      "Distrito": "MANUEL ANTONIO MESONES MURO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1394,
      "Mes": "Julio",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "LAMBAYEQUE",
      "Distrito": "LAMBAYEQUE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1395,
      "Mes": "Julio",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "LAMBAYEQUE",
      "Distrito": "OLMOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1396,
      "Mes": "Julio",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "LAMBAYEQUE",
      "Distrito": "PACORA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1397,
      "Mes": "Julio",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "LAMBAYEQUE",
      "Distrito": "SALAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1398,
      "Mes": "Julio",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "LAMBAYEQUE",
      "Distrito": "SALAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1399,
      "Mes": "Julio",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "LAMBAYEQUE",
      "Distrito": "SAN JOSE",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1400,
      "Mes": "Julio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LIMA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1401,
      "Mes": "Julio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "ATE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1402,
      "Mes": "Julio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "ATE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1403,
      "Mes": "Julio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "BREÑA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1404,
      "Mes": "Julio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "CHACLACAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1405,
      "Mes": "Julio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "EL AGUSTINO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1406,
      "Mes": "Julio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "EL AGUSTINO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1407,
      "Mes": "Julio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LOS OLIVOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1408,
      "Mes": "Julio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LURIGANCHO (CHOSICA)",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1409,
      "Mes": "Julio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LURIGANCHO (CHOSICA)",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1410,
      "Mes": "Julio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LURIGANCHO (CHOSICA)",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1411,
      "Mes": "Julio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "PACHACAMAC",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1412,
      "Mes": "Julio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "RIMAC",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1413,
      "Mes": "Julio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "RIMAC",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1414,
      "Mes": "Julio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "SAN BORJA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1415,
      "Mes": "Julio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "SAN JUAN DE MIRAFLORES",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1416,
      "Mes": "Julio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "SAN JUAN DE MIRAFLORES",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1417,
      "Mes": "Julio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "SAN JUAN DE MIRAFLORES",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1418,
      "Mes": "Julio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "SAN JUAN DE MIRAFLORES",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1419,
      "Mes": "Julio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "SAN MARTÍN DE PORRES",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1420,
      "Mes": "Julio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "SAN MARTÍN DE PORRES",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1421,
      "Mes": "Julio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "VILLA EL SALVADOR",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1422,
      "Mes": "Julio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "VILLA EL SALVADOR",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1423,
      "Mes": "Julio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "VILLA EL SALVADOR",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1424,
      "Mes": "Julio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "VILLA EL SALVADOR",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1425,
      "Mes": "Julio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "VILLA MARIA DEL TRIUNFO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1426,
      "Mes": "Julio",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "VILLA MARIA DEL TRIUNFO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1427,
      "Mes": "Julio",
      "Departamento": "LIMA",
      "Provincia": "CANTA",
      "Distrito": "CANTA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1428,
      "Mes": "Julio",
      "Departamento": "LORETO",
      "Provincia": "MAYNAS",
      "Distrito": "IQUITOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1429,
      "Mes": "Julio",
      "Departamento": "LORETO",
      "Provincia": "MAYNAS",
      "Distrito": "IQUITOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1430,
      "Mes": "Julio",
      "Departamento": "LORETO",
      "Provincia": "MAYNAS",
      "Distrito": "BELEN",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1431,
      "Mes": "Julio",
      "Departamento": "LORETO",
      "Provincia": "MAYNAS",
      "Distrito": "BELEN",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1432,
      "Mes": "Julio",
      "Departamento": "LORETO",
      "Provincia": "MAYNAS",
      "Distrito": "SAN JUAN BAUTISTA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1433,
      "Mes": "Julio",
      "Departamento": "LORETO",
      "Provincia": "MAYNAS",
      "Distrito": "SAN JUAN BAUTISTA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1434,
      "Mes": "Julio",
      "Departamento": "LORETO",
      "Provincia": "MAYNAS",
      "Distrito": "SAN JUAN BAUTISTA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1435,
      "Mes": "Julio",
      "Departamento": "LORETO",
      "Provincia": "LORETO",
      "Distrito": "TROMPETEROS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1436,
      "Mes": "Julio",
      "Departamento": "MADRE DE DIOS",
      "Provincia": "TAMBOPATA",
      "Distrito": "TAMBOPATA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1437,
      "Mes": "Julio",
      "Departamento": "MADRE DE DIOS",
      "Provincia": "TAMBOPATA",
      "Distrito": "INAMBARI",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1438,
      "Mes": "Julio",
      "Departamento": "MOQUEGUA",
      "Provincia": "MARISCAL NIETO",
      "Distrito": "MOQUEGUA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1439,
      "Mes": "Julio",
      "Departamento": "MOQUEGUA",
      "Provincia": "GENERAL SANCHEZ CERRO",
      "Distrito": "UBINAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1440,
      "Mes": "Julio",
      "Departamento": "MOQUEGUA",
      "Provincia": "ILO",
      "Distrito": "ILO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1441,
      "Mes": "Julio",
      "Departamento": "PIURA",
      "Provincia": "PIURA",
      "Distrito": "LA ARENA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1442,
      "Mes": "Julio",
      "Departamento": "PIURA",
      "Provincia": "AYABACA",
      "Distrito": "AYABACA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1443,
      "Mes": "Julio",
      "Departamento": "PIURA",
      "Provincia": "AYABACA",
      "Distrito": "AYABACA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1444,
      "Mes": "Julio",
      "Departamento": "PIURA",
      "Provincia": "HUANCABAMBA",
      "Distrito": "HUANCABAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1445,
      "Mes": "Julio",
      "Departamento": "PIURA",
      "Provincia": "HUANCABAMBA",
      "Distrito": "HUANCABAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1446,
      "Mes": "Julio",
      "Departamento": "PUNO",
      "Provincia": "AZANGARO",
      "Distrito": "MUÑANI",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1447,
      "Mes": "Julio",
      "Departamento": "PUNO",
      "Provincia": "AZANGARO",
      "Distrito": "MUÑANI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1448,
      "Mes": "Julio",
      "Departamento": "PUNO",
      "Provincia": "SANDIA",
      "Distrito": "SANDIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1449,
      "Mes": "Julio",
      "Departamento": "PUNO",
      "Provincia": "SANDIA",
      "Distrito": "SANDIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1450,
      "Mes": "Julio",
      "Departamento": "PUNO",
      "Provincia": "YUNGUYO",
      "Distrito": "COPANI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1451,
      "Mes": "Julio",
      "Departamento": "PUNO",
      "Provincia": "YUNGUYO",
      "Distrito": "OLLARAYA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1452,
      "Mes": "Julio",
      "Departamento": "SAN MARTÍN",
      "Provincia": "MOYOBAMBA",
      "Distrito": "CALZADA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1453,
      "Mes": "Julio",
      "Departamento": "SAN MARTÍN",
      "Provincia": "BELLAVISTA",
      "Distrito": "BELLAVISTA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1454,
      "Mes": "Julio",
      "Departamento": "SAN MARTÍN",
      "Provincia": "BELLAVISTA",
      "Distrito": "ALTO BIAVO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1455,
      "Mes": "Julio",
      "Departamento": "SAN MARTÍN",
      "Provincia": "BELLAVISTA",
      "Distrito": "BAJO BIAVO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1456,
      "Mes": "Julio",
      "Departamento": "SAN MARTÍN",
      "Provincia": "RIOJA",
      "Distrito": "RIOJA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1457,
      "Mes": "Julio",
      "Departamento": "SAN MARTÍN",
      "Provincia": "RIOJA",
      "Distrito": "RIOJA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1458,
      "Mes": "Julio",
      "Departamento": "SAN MARTÍN",
      "Provincia": "RIOJA",
      "Distrito": "SAN FERNANDO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1459,
      "Mes": "Julio",
      "Departamento": "SAN MARTÍN",
      "Provincia": "SAN MARTÍN",
      "Distrito": "TARAPOTO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1460,
      "Mes": "Julio",
      "Departamento": "SAN MARTÍN",
      "Provincia": "SAN MARTÍN",
      "Distrito": "CHIPURANA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1461,
      "Mes": "Julio",
      "Departamento": "SAN MARTÍN",
      "Provincia": "SAN MARTÍN",
      "Distrito": "CHIPURANA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1462,
      "Mes": "Julio",
      "Departamento": "SAN MARTÍN",
      "Provincia": "SAN MARTÍN",
      "Distrito": "LA BANDA DE SHILCAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1463,
      "Mes": "Julio",
      "Departamento": "SAN MARTÍN",
      "Provincia": "SAN MARTÍN",
      "Distrito": "LA BANDA DE SHILCAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1464,
      "Mes": "Julio",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "TACNA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1465,
      "Mes": "Julio",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "TACNA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1466,
      "Mes": "Julio",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "TACNA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1467,
      "Mes": "Julio",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "TACNA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1468,
      "Mes": "Julio",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "TACNA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1469,
      "Mes": "Julio",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "ALTO DE LA ALIANZA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1470,
      "Mes": "Julio",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "ALTO DE LA ALIANZA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1471,
      "Mes": "Julio",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CALANA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1472,
      "Mes": "Julio",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "INCLAN",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1473,
      "Mes": "Julio",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "PACHIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1474,
      "Mes": "Julio",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "PACHIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1475,
      "Mes": "Julio",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "PALCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1476,
      "Mes": "Julio",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "POCOLLAY",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1477,
      "Mes": "Julio",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CORONEL GREGORIO ALBARRACIN LANCHIPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1478,
      "Mes": "Julio",
      "Departamento": "TACNA",
      "Provincia": "CANDARAVE",
      "Distrito": "CAIRANI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1479,
      "Mes": "Julio",
      "Departamento": "TACNA",
      "Provincia": "JORGE BASADRE",
      "Distrito": "LOCUMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1480,
      "Mes": "Julio",
      "Departamento": "TACNA",
      "Provincia": "JORGE BASADRE",
      "Distrito": "LOCUMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1481,
      "Mes": "Julio",
      "Departamento": "TACNA",
      "Provincia": "JORGE BASADRE",
      "Distrito": "ILABAYA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1482,
      "Mes": "Julio",
      "Departamento": "TACNA",
      "Provincia": "JORGE BASADRE",
      "Distrito": "ILABAYA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1483,
      "Mes": "Julio",
      "Departamento": "TACNA",
      "Provincia": "TARATA",
      "Distrito": "TARATA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1484,
      "Mes": "Julio",
      "Departamento": "TACNA",
      "Provincia": "TARATA",
      "Distrito": "ESTIQUE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1485,
      "Mes": "Agosto",
      "Departamento": "ÁNCASH",
      "Provincia": "BOLOGNESI",
      "Distrito": "COLQUIOC",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1486,
      "Mes": "Agosto",
      "Departamento": "ÁNCASH",
      "Provincia": "CARHUAZ",
      "Distrito": "MARCARA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1487,
      "Mes": "Agosto",
      "Departamento": "ÁNCASH",
      "Provincia": "HUARMEY",
      "Distrito": "HUARMEY",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1488,
      "Mes": "Agosto",
      "Departamento": "ÁNCASH",
      "Provincia": "HUAYLAS",
      "Distrito": "MATO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1489,
      "Mes": "Agosto",
      "Departamento": "ÁNCASH",
      "Provincia": "SANTA",
      "Distrito": "CHIMBOTE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1490,
      "Mes": "Agosto",
      "Departamento": "ÁNCASH",
      "Provincia": "SANTA",
      "Distrito": "CHIMBOTE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1491,
      "Mes": "Agosto",
      "Departamento": "APURÍMAC",
      "Provincia": "ABANCAY",
      "Distrito": "CHACOCHE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1492,
      "Mes": "Agosto",
      "Departamento": "APURÍMAC",
      "Provincia": "ABANCAY",
      "Distrito": "CURAHUASI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1493,
      "Mes": "Agosto",
      "Departamento": "APURÍMAC",
      "Provincia": "ABANCAY",
      "Distrito": "PICHIRHUA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1494,
      "Mes": "Agosto",
      "Departamento": "APURÍMAC",
      "Provincia": "ABANCAY",
      "Distrito": "TAMBURCO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1495,
      "Mes": "Agosto",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "ANDAHUAYLAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1496,
      "Mes": "Agosto",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "ANDAHUAYLAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1497,
      "Mes": "Agosto",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "ANDAHUAYLAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1498,
      "Mes": "Agosto",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "ANDAHUAYLAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1499,
      "Mes": "Agosto",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "HUANCARAMA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1500,
      "Mes": "Agosto",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "HUANCARAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1501,
      "Mes": "Agosto",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "HUANCARAY",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1502,
      "Mes": "Agosto",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "HUAYANA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1503,
      "Mes": "Agosto",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "HUAYANA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1504,
      "Mes": "Agosto",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "HUAYANA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1505,
      "Mes": "Agosto",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "KISHUARA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1506,
      "Mes": "Agosto",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "PACOBAMBA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1507,
      "Mes": "Agosto",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "PACUCHA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1508,
      "Mes": "Agosto",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "PAMPACHIRI",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1509,
      "Mes": "Agosto",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "PAMPACHIRI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1510,
      "Mes": "Agosto",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "PAMPACHIRI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1511,
      "Mes": "Agosto",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "POMACOCHA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1512,
      "Mes": "Agosto",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "KAQUIABAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1513,
      "Mes": "Agosto",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "KAQUIABAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1514,
      "Mes": "Agosto",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "JOSÉ MARÍA ARGUEDAS",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1515,
      "Mes": "Agosto",
      "Departamento": "APURÍMAC",
      "Provincia": "ANDAHUAYLAS",
      "Distrito": "JOSÉ MARÍA ARGUEDAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1516,
      "Mes": "Agosto",
      "Departamento": "APURÍMAC",
      "Provincia": "ANTABAMBA",
      "Distrito": "HUAQUIRCA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1517,
      "Mes": "Agosto",
      "Departamento": "APURÍMAC",
      "Provincia": "ANTABAMBA",
      "Distrito": "JUAN ESPINOZA MEDRANO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1518,
      "Mes": "Agosto",
      "Departamento": "APURÍMAC",
      "Provincia": "ANTABAMBA",
      "Distrito": "SABAINO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1519,
      "Mes": "Agosto",
      "Departamento": "APURÍMAC",
      "Provincia": "AYMARAES",
      "Distrito": "SAÑAYCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1520,
      "Mes": "Agosto",
      "Departamento": "APURÍMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "TAMBOBAMBA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1521,
      "Mes": "Agosto",
      "Departamento": "APURÍMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "COYLLURQUI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1522,
      "Mes": "Agosto",
      "Departamento": "APURÍMAC",
      "Provincia": "COTABAMBAS",
      "Distrito": "HAQUIRA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1523,
      "Mes": "Agosto",
      "Departamento": "APURÍMAC",
      "Provincia": "CHINCHEROS",
      "Distrito": "ANCO-HUALLO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1524,
      "Mes": "Agosto",
      "Departamento": "APURÍMAC",
      "Provincia": "CHINCHEROS",
      "Distrito": "COCHARCAS",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1525,
      "Mes": "Agosto",
      "Departamento": "APURÍMAC",
      "Provincia": "CHINCHEROS",
      "Distrito": "HUACCANA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1526,
      "Mes": "Agosto",
      "Departamento": "APURÍMAC",
      "Provincia": "CHINCHEROS",
      "Distrito": "RANRACANCHA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1527,
      "Mes": "Agosto",
      "Departamento": "APURÍMAC",
      "Provincia": "GRAU",
      "Distrito": "HUAYLLATI",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1528,
      "Mes": "Agosto",
      "Departamento": "AREQUIPA",
      "Provincia": "AREQUIPA",
      "Distrito": "CERRO COLORADO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1529,
      "Mes": "Agosto",
      "Departamento": "AREQUIPA",
      "Provincia": "AREQUIPA",
      "Distrito": "PAUCARPATA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1530,
      "Mes": "Agosto",
      "Departamento": "AREQUIPA",
      "Provincia": "CAMANA",
      "Distrito": "SAMUEL PASTOR",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1531,
      "Mes": "Agosto",
      "Departamento": "AREQUIPA",
      "Provincia": "CAYLLOMA",
      "Distrito": "CHIVAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1532,
      "Mes": "Agosto",
      "Departamento": "AYACUCHO",
      "Provincia": "HUAMANGA",
      "Distrito": "ANDRES AVELINO CACERES DORREGARAY",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1533,
      "Mes": "Agosto",
      "Departamento": "AYACUCHO",
      "Provincia": "CANGALLO",
      "Distrito": "CANGALLO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1534,
      "Mes": "Agosto",
      "Departamento": "AYACUCHO",
      "Provincia": "HUANTA",
      "Distrito": "SIVIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1535,
      "Mes": "Agosto",
      "Departamento": "AYACUCHO",
      "Provincia": "LA MAR",
      "Distrito": "SAN MIGUEL",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1536,
      "Mes": "Agosto",
      "Departamento": "AYACUCHO",
      "Provincia": "LA MAR",
      "Distrito": "SAN MIGUEL",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1537,
      "Mes": "Agosto",
      "Departamento": "AYACUCHO",
      "Provincia": "LA MAR",
      "Distrito": "AYNA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1538,
      "Mes": "Agosto",
      "Departamento": "AYACUCHO",
      "Provincia": "LA MAR",
      "Distrito": "AYNA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1539,
      "Mes": "Agosto",
      "Departamento": "AYACUCHO",
      "Provincia": "LA MAR",
      "Distrito": "TAMBO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1540,
      "Mes": "Agosto",
      "Departamento": "AYACUCHO",
      "Provincia": "LUCANAS",
      "Distrito": "PUQUIO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1541,
      "Mes": "Agosto",
      "Departamento": "AYACUCHO",
      "Provincia": "LUCANAS",
      "Distrito": "PUQUIO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1542,
      "Mes": "Agosto",
      "Departamento": "AYACUCHO",
      "Provincia": "LUCANAS",
      "Distrito": "OCAÑA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1543,
      "Mes": "Agosto",
      "Departamento": "AYACUCHO",
      "Provincia": "LUCANAS",
      "Distrito": "OCAÑA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1544,
      "Mes": "Agosto",
      "Departamento": "AYACUCHO",
      "Provincia": "LUCANAS",
      "Distrito": "OCAÑA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1545,
      "Mes": "Agosto",
      "Departamento": "AYACUCHO",
      "Provincia": "PAUCAR DEL SARA SARA",
      "Distrito": "OYOLO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1546,
      "Mes": "Agosto",
      "Departamento": "AYACUCHO",
      "Provincia": "PAUCAR DEL SARA SARA",
      "Distrito": "OYOLO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1547,
      "Mes": "Agosto",
      "Departamento": "AYACUCHO",
      "Provincia": "PAUCAR DEL SARA SARA",
      "Distrito": "SARA SARA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1548,
      "Mes": "Agosto",
      "Departamento": "AYACUCHO",
      "Provincia": "VICTOR FAJARDO",
      "Distrito": "APONGO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1549,
      "Mes": "Agosto",
      "Departamento": "AYACUCHO",
      "Provincia": "VILCAS HUAMAN",
      "Distrito": "VILCAS HUAMAN",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1550,
      "Mes": "Agosto",
      "Departamento": "AYACUCHO",
      "Provincia": "VILCAS HUAMAN",
      "Distrito": "VISCHONGO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1551,
      "Mes": "Agosto",
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CALLAO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1552,
      "Mes": "Agosto",
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CALLAO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1553,
      "Mes": "Agosto",
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "CALLAO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1554,
      "Mes": "Agosto",
      "Departamento": "CALLAO",
      "Provincia": "CALLAO",
      "Distrito": "LA PERLA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1555,
      "Mes": "Agosto",
      "Departamento": "CUSCO",
      "Provincia": "CUSCO",
      "Distrito": "CUSCO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1556,
      "Mes": "Agosto",
      "Departamento": "CUSCO",
      "Provincia": "CUSCO",
      "Distrito": "WANCHAQ",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1557,
      "Mes": "Agosto",
      "Departamento": "CUSCO",
      "Provincia": "CANAS",
      "Distrito": "YANAOCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1558,
      "Mes": "Agosto",
      "Departamento": "CUSCO",
      "Provincia": "CANAS",
      "Distrito": "LAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1559,
      "Mes": "Agosto",
      "Departamento": "CUSCO",
      "Provincia": "CANAS",
      "Distrito": "LAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1560,
      "Mes": "Agosto",
      "Departamento": "CUSCO",
      "Provincia": "CANAS",
      "Distrito": "TUPAC AMARU",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1561,
      "Mes": "Agosto",
      "Departamento": "CUSCO",
      "Provincia": "CANCHIS",
      "Distrito": "SICUANI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1562,
      "Mes": "Agosto",
      "Departamento": "CUSCO",
      "Provincia": "CANCHIS",
      "Distrito": "SICUANI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1563,
      "Mes": "Agosto",
      "Departamento": "CUSCO",
      "Provincia": "CANCHIS",
      "Distrito": "TINTA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1564,
      "Mes": "Agosto",
      "Departamento": "CUSCO",
      "Provincia": "CANCHIS",
      "Distrito": "TINTA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1565,
      "Mes": "Agosto",
      "Departamento": "CUSCO",
      "Provincia": "LA CONVENCION",
      "Distrito": "VILCABAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1566,
      "Mes": "Agosto",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "HUANCAVELICA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1567,
      "Mes": "Agosto",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "HUANCAVELICA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1568,
      "Mes": "Agosto",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "PALCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1569,
      "Mes": "Agosto",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "ASCENSION",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1570,
      "Mes": "Agosto",
      "Departamento": "HUANCAVELICA",
      "Provincia": "HUANCAVELICA",
      "Distrito": "HUANDO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1571,
      "Mes": "Agosto",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "LIRCAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1572,
      "Mes": "Agosto",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "LIRCAY",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1573,
      "Mes": "Agosto",
      "Departamento": "HUANCAVELICA",
      "Provincia": "ANGARAES",
      "Distrito": "CCOCHACCASA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1574,
      "Mes": "Agosto",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "PAMPAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1575,
      "Mes": "Agosto",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "ACRAQUIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1576,
      "Mes": "Agosto",
      "Departamento": "HUANCAVELICA",
      "Provincia": "TAYACAJA",
      "Distrito": "AHUAYCHA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1577,
      "Mes": "Agosto",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUÁNUCO",
      "Distrito": "HUÁNUCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1578,
      "Mes": "Agosto",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUÁNUCO",
      "Distrito": "AMARILIS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1579,
      "Mes": "Agosto",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUÁNUCO",
      "Distrito": "CHURUBAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1580,
      "Mes": "Agosto",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUÁNUCO",
      "Distrito": "SANTA MARIA DEL VALLE",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1581,
      "Mes": "Agosto",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUÁNUCO",
      "Distrito": "YARUMAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1582,
      "Mes": "Agosto",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUÁNUCO",
      "Distrito": "YARUMAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1583,
      "Mes": "Agosto",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUÁNUCO",
      "Distrito": "PILLCO MARCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1584,
      "Mes": "Agosto",
      "Departamento": "HUÁNUCO",
      "Provincia": "DOS DE MAYO",
      "Distrito": "MARIAS",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1585,
      "Mes": "Agosto",
      "Departamento": "HUÁNUCO",
      "Provincia": "DOS DE MAYO",
      "Distrito": "PACHAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1586,
      "Mes": "Agosto",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUACAYBAMBA",
      "Distrito": "HUACAYBAMBA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1587,
      "Mes": "Agosto",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUACAYBAMBA",
      "Distrito": "COCHABAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1588,
      "Mes": "Agosto",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "JACAS GRANDE",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1589,
      "Mes": "Agosto",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "JACAS GRANDE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1590,
      "Mes": "Agosto",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "MONZON",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1591,
      "Mes": "Agosto",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "PUÑOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1592,
      "Mes": "Agosto",
      "Departamento": "HUÁNUCO",
      "Provincia": "HUAMALIES",
      "Distrito": "SINGA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1593,
      "Mes": "Agosto",
      "Departamento": "HUÁNUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "LUYANDO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1594,
      "Mes": "Agosto",
      "Departamento": "HUÁNUCO",
      "Provincia": "LEONCIO PRADO",
      "Distrito": "MARIANO DAMASO BERAUN",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1595,
      "Mes": "Agosto",
      "Departamento": "HUÁNUCO",
      "Provincia": "MARAÑON",
      "Distrito": "HUACRACHUCO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1596,
      "Mes": "Agosto",
      "Departamento": "HUÁNUCO",
      "Provincia": "MARAÑON",
      "Distrito": "HUACRACHUCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1597,
      "Mes": "Agosto",
      "Departamento": "HUÁNUCO",
      "Provincia": "PACHITEA",
      "Distrito": "MOLINO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1598,
      "Mes": "Agosto",
      "Departamento": "HUÁNUCO",
      "Provincia": "PACHITEA",
      "Distrito": "UMARI",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1599,
      "Mes": "Agosto",
      "Departamento": "HUÁNUCO",
      "Provincia": "PUERTO INCA",
      "Distrito": "PUERTO INCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1600,
      "Mes": "Agosto",
      "Departamento": "HUÁNUCO",
      "Provincia": "PUERTO INCA",
      "Distrito": "HONORIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1601,
      "Mes": "Agosto",
      "Departamento": "HUÁNUCO",
      "Provincia": "PUERTO INCA",
      "Distrito": "TOURNAVISTA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1602,
      "Mes": "Agosto",
      "Departamento": "HUÁNUCO",
      "Provincia": "LAURICOCHA",
      "Distrito": "JIVIA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1603,
      "Mes": "Agosto",
      "Departamento": "HUÁNUCO",
      "Provincia": "LAURICOCHA",
      "Distrito": "SAN MIGUEL DE CAURI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1604,
      "Mes": "Agosto",
      "Departamento": "HUÁNUCO",
      "Provincia": "YAROWILCA",
      "Distrito": "OBAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1605,
      "Mes": "Agosto",
      "Departamento": "HUÁNUCO",
      "Provincia": "YAROWILCA",
      "Distrito": "CHORAS",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1606,
      "Mes": "Agosto",
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "ICA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1607,
      "Mes": "Agosto",
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "ICA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1608,
      "Mes": "Agosto",
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "ICA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1609,
      "Mes": "Agosto",
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "PARCONA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1610,
      "Mes": "Agosto",
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "PARCONA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1611,
      "Mes": "Agosto",
      "Departamento": "ICA",
      "Provincia": "ICA",
      "Distrito": "SANTIAGO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1612,
      "Mes": "Agosto",
      "Departamento": "ICA",
      "Provincia": "CHINCHA",
      "Distrito": "CHINCHA ALTA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1613,
      "Mes": "Agosto",
      "Departamento": "ICA",
      "Provincia": "CHINCHA",
      "Distrito": "SUNAMPE",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1614,
      "Mes": "Agosto",
      "Departamento": "ICA",
      "Provincia": "PALPA",
      "Distrito": "PALPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1615,
      "Mes": "Agosto",
      "Departamento": "ICA",
      "Provincia": "PALPA",
      "Distrito": "SANTA CRUZ",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1616,
      "Mes": "Agosto",
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "INDEPENDENCIA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1617,
      "Mes": "Agosto",
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "INDEPENDENCIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1618,
      "Mes": "Agosto",
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "PARACAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1619,
      "Mes": "Agosto",
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "SAN ANDRES",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1620,
      "Mes": "Agosto",
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "SAN CLEMENTE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1621,
      "Mes": "Agosto",
      "Departamento": "ICA",
      "Provincia": "PISCO",
      "Distrito": "TUPAC AMARU INCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1622,
      "Mes": "Agosto",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "HUANCAYO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1623,
      "Mes": "Agosto",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "EL TAMBO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1624,
      "Mes": "Agosto",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "PILCOMAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1625,
      "Mes": "Agosto",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "SAN AGUSTIN",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1626,
      "Mes": "Agosto",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "SAPALLANGA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1627,
      "Mes": "Agosto",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "SANTO DOMINGO DE ACOBAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1628,
      "Mes": "Agosto",
      "Departamento": "JUNÍN",
      "Provincia": "HUANCAYO",
      "Distrito": "SANTO DOMINGO DE ACOBAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1629,
      "Mes": "Agosto",
      "Departamento": "JUNÍN",
      "Provincia": "CONCEPCION",
      "Distrito": "CONCEPCION",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1630,
      "Mes": "Agosto",
      "Departamento": "JUNÍN",
      "Provincia": "CONCEPCION",
      "Distrito": "MANZANARES",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1631,
      "Mes": "Agosto",
      "Departamento": "JUNÍN",
      "Provincia": "CONCEPCION",
      "Distrito": "SAN JOSE DE QUERO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1632,
      "Mes": "Agosto",
      "Departamento": "JUNÍN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "CHANCHAMAYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1633,
      "Mes": "Agosto",
      "Departamento": "JUNÍN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PERENE",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1634,
      "Mes": "Agosto",
      "Departamento": "JUNÍN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PERENE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1635,
      "Mes": "Agosto",
      "Departamento": "JUNÍN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PERENE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1636,
      "Mes": "Agosto",
      "Departamento": "JUNÍN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PERENE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1637,
      "Mes": "Agosto",
      "Departamento": "JUNÍN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PICHANAKI",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1638,
      "Mes": "Agosto",
      "Departamento": "JUNÍN",
      "Provincia": "CHANCHAMAYO",
      "Distrito": "PICHANAKI",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1639,
      "Mes": "Agosto",
      "Departamento": "JUNÍN",
      "Provincia": "JAUJA",
      "Distrito": "APATA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1640,
      "Mes": "Agosto",
      "Departamento": "JUNÍN",
      "Provincia": "JAUJA",
      "Distrito": "CURICACA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1641,
      "Mes": "Agosto",
      "Departamento": "JUNÍN",
      "Provincia": "JAUJA",
      "Distrito": "MOLINOS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1642,
      "Mes": "Agosto",
      "Departamento": "JUNÍN",
      "Provincia": "JAUJA",
      "Distrito": "SINCOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1643,
      "Mes": "Agosto",
      "Departamento": "JUNÍN",
      "Provincia": "SATIPO",
      "Distrito": "SATIPO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1644,
      "Mes": "Agosto",
      "Departamento": "JUNÍN",
      "Provincia": "SATIPO",
      "Distrito": "PAMPA HERMOSA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1645,
      "Mes": "Agosto",
      "Departamento": "JUNÍN",
      "Provincia": "SATIPO",
      "Distrito": "PAMPA HERMOSA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1646,
      "Mes": "Agosto",
      "Departamento": "JUNÍN",
      "Provincia": "SATIPO",
      "Distrito": "PANGOA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1647,
      "Mes": "Agosto",
      "Departamento": "JUNÍN",
      "Provincia": "SATIPO",
      "Distrito": "PANGOA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1648,
      "Mes": "Agosto",
      "Departamento": "JUNÍN",
      "Provincia": "SATIPO",
      "Distrito": "RIO NEGRO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1649,
      "Mes": "Agosto",
      "Departamento": "JUNÍN",
      "Provincia": "YAULI",
      "Distrito": "SANTA ROSA DE SACCO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1650,
      "Mes": "Agosto",
      "Departamento": "JUNÍN",
      "Provincia": "CHUPACA",
      "Distrito": "HUACHAC",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1651,
      "Mes": "Agosto",
      "Departamento": "LA LIBERTAD",
      "Provincia": "ASCOPE",
      "Distrito": "SANTIAGO DE CAO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1652,
      "Mes": "Agosto",
      "Departamento": "LA LIBERTAD",
      "Provincia": "CHEPEN",
      "Distrito": "CHEPEN",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1653,
      "Mes": "Agosto",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "ETEN",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1654,
      "Mes": "Agosto",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "JOSE LEONARDO ORTIZ",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1655,
      "Mes": "Agosto",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "MONSEFU",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1656,
      "Mes": "Agosto",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "MONSEFU",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1657,
      "Mes": "Agosto",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "REQUE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1658,
      "Mes": "Agosto",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "CHICLAYO",
      "Distrito": "REQUE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1659,
      "Mes": "Agosto",
      "Departamento": "LAMBAYEQUE",
      "Provincia": "FERREÑAFE",
      "Distrito": "PITIPO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1660,
      "Mes": "Agosto",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "LURIGANCHO (CHOSICA)",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1661,
      "Mes": "Agosto",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "SAN JUAN DE MIRAFLORES",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1662,
      "Mes": "Agosto",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "SANTA ANITA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1663,
      "Mes": "Agosto",
      "Departamento": "LIMA",
      "Provincia": "LIMA",
      "Distrito": "VILLA EL SALVADOR",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1664,
      "Mes": "Agosto",
      "Departamento": "LIMA",
      "Provincia": "HUAURA",
      "Distrito": "AMBAR",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1665,
      "Mes": "Agosto",
      "Departamento": "LORETO",
      "Provincia": "MAYNAS",
      "Distrito": "SAN JUAN BAUTISTA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1666,
      "Mes": "Agosto",
      "Departamento": "LORETO",
      "Provincia": "MAYNAS",
      "Distrito": "SAN JUAN BAUTISTA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1667,
      "Mes": "Agosto",
      "Departamento": "LORETO",
      "Provincia": "LORETO",
      "Distrito": "TROMPETEROS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1668,
      "Mes": "Agosto",
      "Departamento": "LORETO",
      "Provincia": "MARISCAL RAMON CASTILLA",
      "Distrito": "RAMON CASTILLA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1669,
      "Mes": "Agosto",
      "Departamento": "MADRE DE DIOS",
      "Provincia": "TAMBOPATA",
      "Distrito": "LABERINTO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1670,
      "Mes": "Agosto",
      "Departamento": "MOQUEGUA",
      "Provincia": "MARISCAL NIETO",
      "Distrito": "MOQUEGUA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1671,
      "Mes": "Agosto",
      "Departamento": "MOQUEGUA",
      "Provincia": "ILO",
      "Distrito": "ILO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1672,
      "Mes": "Agosto",
      "Departamento": "MOQUEGUA",
      "Provincia": "ILO",
      "Distrito": "ILO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1673,
      "Mes": "Agosto",
      "Departamento": "PIURA",
      "Provincia": "PIURA",
      "Distrito": "LA ARENA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1674,
      "Mes": "Agosto",
      "Departamento": "PIURA",
      "Provincia": "PIURA",
      "Distrito": "LA ARENA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1675,
      "Mes": "Agosto",
      "Departamento": "PIURA",
      "Provincia": "PIURA",
      "Distrito": "LA ARENA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1676,
      "Mes": "Agosto",
      "Departamento": "PIURA",
      "Provincia": "PIURA",
      "Distrito": "LA UNION",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1677,
      "Mes": "Agosto",
      "Departamento": "PIURA",
      "Provincia": "AYABACA",
      "Distrito": "AYABACA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1678,
      "Mes": "Agosto",
      "Departamento": "PIURA",
      "Provincia": "AYABACA",
      "Distrito": "PAIMAS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1679,
      "Mes": "Agosto",
      "Departamento": "PIURA",
      "Provincia": "HUANCABAMBA",
      "Distrito": "HUANCABAMBA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1680,
      "Mes": "Agosto",
      "Departamento": "PIURA",
      "Provincia": "HUANCABAMBA",
      "Distrito": "HUANCABAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1681,
      "Mes": "Agosto",
      "Departamento": "PUNO",
      "Provincia": "PUNO",
      "Distrito": "PUNO",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1682,
      "Mes": "Agosto",
      "Departamento": "PUNO",
      "Provincia": "PUNO",
      "Distrito": "PUNO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1683,
      "Mes": "Agosto",
      "Departamento": "PUNO",
      "Provincia": "AZANGARO",
      "Distrito": "ASILLO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1684,
      "Mes": "Agosto",
      "Departamento": "PUNO",
      "Provincia": "AZANGARO",
      "Distrito": "SAMAN",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1685,
      "Mes": "Agosto",
      "Departamento": "PUNO",
      "Provincia": "CARABAYA",
      "Distrito": "OLLACHEA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1686,
      "Mes": "Agosto",
      "Departamento": "PUNO",
      "Provincia": "CARABAYA",
      "Distrito": "USICAYOS",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1687,
      "Mes": "Agosto",
      "Departamento": "PUNO",
      "Provincia": "CHUCUITO",
      "Distrito": "POMATA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1688,
      "Mes": "Agosto",
      "Departamento": "PUNO",
      "Provincia": "EL COLLAO",
      "Distrito": "ILAVE",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1689,
      "Mes": "Agosto",
      "Departamento": "PUNO",
      "Provincia": "EL COLLAO",
      "Distrito": "ILAVE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1690,
      "Mes": "Agosto",
      "Departamento": "PUNO",
      "Provincia": "EL COLLAO",
      "Distrito": "ILAVE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1691,
      "Mes": "Agosto",
      "Departamento": "PUNO",
      "Provincia": "EL COLLAO",
      "Distrito": "ILAVE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1692,
      "Mes": "Agosto",
      "Departamento": "PUNO",
      "Provincia": "EL COLLAO",
      "Distrito": "ILAVE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1693,
      "Mes": "Agosto",
      "Departamento": "PUNO",
      "Provincia": "EL COLLAO",
      "Distrito": "PILCUYO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1694,
      "Mes": "Agosto",
      "Departamento": "PUNO",
      "Provincia": "LAMPA",
      "Distrito": "PALCA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1695,
      "Mes": "Agosto",
      "Departamento": "PUNO",
      "Provincia": "SAN ROMAN",
      "Distrito": "JULIACA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1696,
      "Mes": "Agosto",
      "Departamento": "PUNO",
      "Provincia": "SAN ROMAN",
      "Distrito": "JULIACA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1697,
      "Mes": "Agosto",
      "Departamento": "PUNO",
      "Provincia": "SAN ROMAN",
      "Distrito": "CABANILLAS",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1698,
      "Mes": "Agosto",
      "Departamento": "PUNO",
      "Provincia": "SAN ROMAN",
      "Distrito": "CARACOTO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1699,
      "Mes": "Agosto",
      "Departamento": "PUNO",
      "Provincia": "SANDIA",
      "Distrito": "ALTO INAMBARI",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1700,
      "Mes": "Agosto",
      "Departamento": "SAN MARTÍN",
      "Provincia": "MOYOBAMBA",
      "Distrito": "MOYOBAMBA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1701,
      "Mes": "Agosto",
      "Departamento": "SAN MARTÍN",
      "Provincia": "MOYOBAMBA",
      "Distrito": "CALZADA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1702,
      "Mes": "Agosto",
      "Departamento": "SAN MARTÍN",
      "Provincia": "MOYOBAMBA",
      "Distrito": "CALZADA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1703,
      "Mes": "Agosto",
      "Departamento": "SAN MARTÍN",
      "Provincia": "MOYOBAMBA",
      "Distrito": "JEPELACIO",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1704,
      "Mes": "Agosto",
      "Departamento": "SAN MARTÍN",
      "Provincia": "MOYOBAMBA",
      "Distrito": "JEPELACIO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1705,
      "Mes": "Agosto",
      "Departamento": "SAN MARTÍN",
      "Provincia": "MOYOBAMBA",
      "Distrito": "JEPELACIO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1706,
      "Mes": "Agosto",
      "Departamento": "SAN MARTÍN",
      "Provincia": "BELLAVISTA",
      "Distrito": "BELLAVISTA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1707,
      "Mes": "Agosto",
      "Departamento": "SAN MARTÍN",
      "Provincia": "LAMAS",
      "Distrito": "CAYNARACHI",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1708,
      "Mes": "Agosto",
      "Departamento": "SAN MARTÍN",
      "Provincia": "RIOJA",
      "Distrito": "NUEVA CAJAMARCA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1709,
      "Mes": "Agosto",
      "Departamento": "SAN MARTÍN",
      "Provincia": "SAN MARTÍN",
      "Distrito": "SAUCE",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1710,
      "Mes": "Agosto",
      "Departamento": "SAN MARTÍN",
      "Provincia": "TOCACHE",
      "Distrito": "NUEVO PROGRESO",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1711,
      "Mes": "Agosto",
      "Departamento": "SAN MARTÍN",
      "Provincia": "TOCACHE",
      "Distrito": "POLVORA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1712,
      "Mes": "Agosto",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "TACNA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1713,
      "Mes": "Agosto",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "TACNA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1714,
      "Mes": "Agosto",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "TACNA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1715,
      "Mes": "Agosto",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "ALTO DE LA ALIANZA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1716,
      "Mes": "Agosto",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "ALTO DE LA ALIANZA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1717,
      "Mes": "Agosto",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "ALTO DE LA ALIANZA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1718,
      "Mes": "Agosto",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "INCLAN",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1719,
      "Mes": "Agosto",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "PACHIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1720,
      "Mes": "Agosto",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "PACHIA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1721,
      "Mes": "Agosto",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "PALCA",
      "Inicio": 12,
      "Fin": 17,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1722,
      "Mes": "Agosto",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CORONEL GREGORIO ALBARRACIN LANCHIPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1723,
      "Mes": "Agosto",
      "Departamento": "TACNA",
      "Provincia": "TACNA",
      "Distrito": "CORONEL GREGORIO ALBARRACIN LANCHIPA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1724,
      "Mes": "Agosto",
      "Departamento": "TACNA",
      "Provincia": "CANDARAVE",
      "Distrito": "CANDARAVE",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1725,
      "Mes": "Agosto",
      "Departamento": "TACNA",
      "Provincia": "CANDARAVE",
      "Distrito": "CANDARAVE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1726,
      "Mes": "Agosto",
      "Departamento": "TACNA",
      "Provincia": "JORGE BASADRE",
      "Distrito": "ILABAYA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1727,
      "Mes": "Agosto",
      "Departamento": "TACNA",
      "Provincia": "JORGE BASADRE",
      "Distrito": "ITE",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "YUZPE"
    },
    {
      "Id": 1728,
      "Mes": "Agosto",
      "Departamento": "TACNA",
      "Provincia": "TARATA",
      "Distrito": "TARATA",
      "Inicio": 18,
      "Fin": 29,
      "Metodo": "PROGESTAGENO"
    },
    {
      "Id": 1729,
      "Mes": "Agosto",
      "Departamento": "TACNA",
      "Provincia": "TARATA",
      "Distrito": "ESTIQUE-PAMPA",
      "Inicio": 30,
      "Fin": 59,
      "Metodo": "PROGESTAGENO"
    }
  ];
}
