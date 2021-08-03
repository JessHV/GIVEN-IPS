import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
//Internacionalizacion
import { TranslateConfigService } from '../../services/translate-config.service';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  constructor(private service:SharedService, private translateConfigService: TranslateConfigService) { }

  // Variables
  MethodList:any=[];
  MethodNameFilter:string="";
  TypeMethodFilter:string="";
  GenderMethodFilter:string="";
  MethodListWithoutFilter:any=[];
  public localMethods:any = [
    {
      "MetodoId": 1,
      "MetodoNombre": "Método del calendario",
      "MetodoDescripcion": "Abstinencia de relaciones sexuales en el periodo fértil del ciclo menstrual para evitar un embarazo",
      "MetodoMecanismo": "Basado en la abstinencia sexual durante la fase fértil del ciclo menstrual para evitar un embarazo",
      "MetodoImagen": "metodo-1.png",
      "MetodoTipo": "MAP",
      "MetodoTasa": "Falla teórica o de uso perfecto 9 embarazos por cada 100 mujeres en el primer año de uso.|Falla de uso o uso típico 25 embarazos por cada 100 mujeres en el primer año de uso.",
      "MetodoGenero": "Femenino"
    },
    {
      "MetodoId": 2,
      "MetodoNombre": "Método de la ovulación",
      "MetodoDescripcion": "Abstinencia de relaciones sexuales en el periodo fértil del ciclo menstrual determinado por la presencia de moco cervical o sensación de humedad en genitales",
      "MetodoMecanismo": "Basado en la abstinencia sexual durante la fase fértil del ciclo menstrual para evitar un embarazo",
      "MetodoImagen": "metodo-2.jpg",
      "MetodoTipo": "MAP",
      "MetodoTasa": "Falla teórica o de uso perfecto 3 embarazos por cada 100 mujeres en el primer año de uso.|Falla de uso o uso típico 25 embarazos por cada 100 mujeres en el primer año de uso.",
      "MetodoGenero": "Femenino"
    },
    {
      "MetodoId": 3,
      "MetodoNombre": "Método del collar",
      "MetodoDescripcion": "Método de abstinencia periódica que se apoya en perlas de colores (marrón, blanco y rojo) para determinar los días fértiles del ciclo menstrual",
      "MetodoMecanismo": "Basado en la abstinencia sexual durante la fase fértil del ciclo menstrual para evitar un embarazo",
      "MetodoImagen": "metodo-3.jpg",
      "MetodoTipo": "MAP",
      "MetodoTasa": "Falla teórica o de uso perfecto 3 embarazos por cada 100 mujeres en el primer año de uso.|Falla de uso o uso típico 25 embarazos por cada 100 mujeres en el primer año de uso.",
      "MetodoGenero": "Femenino"
    },
    {
      "MetodoId": 4,
      "MetodoNombre": "Método de Lactancia Materna Exclusiva y Amenorrea",
      "MetodoDescripcion": "Único método natural, basado en la infertilidad temporal de la mujer durante la lactancia",
      "MetodoMecanismo": "Supresión de la ovulación ocasionada por el incremento de la hormona prolactina como consecuencia de la lactancia materna exclusiva",
      "MetodoImagen": "metodo-4.jpg",
      "MetodoTipo": "MELA",
      "MetodoTasa": "Falla teórica o de uso perfecto 1 embarazo por 100 mujeres, en los primeros seis meses post parto.|Falla de uso o uso típico 2 embarazos por 100 mujeres, en los primeros seis meses postparto.",
      "MetodoGenero": "Femenino"
    },
    {
      "MetodoId": 5,
      "MetodoNombre": "Condón Masculino",
      "MetodoDescripcion": "Funda delgada de látex, lubricada, sin nonoxinol 9, que se coloca en el pene antes de iniciar la relación sexual",
      "MetodoMecanismo": "Impide que los espermatozoides tengan acceso al tracto reproductor femenino",
      "MetodoImagen": "metodo-5.jpg",
      "MetodoTipo": "MB",
      "MetodoTasa": "Falla teórica o de uso perfecto 2 embarazos por cada 100 mujeres en el primer año de uso.|Falla de uso o uso típico 15 embarazos por cada 100 mujeres en el primer año de uso.",
      "MetodoGenero": "Masculino"
    },
    {
      "MetodoId": 6,
      "MetodoNombre": "Condón Femenino",
      "MetodoDescripcion": "Funda amplia y delgada de polímero de nitrilo que se coloca en la vagina antes de una relación sexual",
      "MetodoMecanismo": "Impide el pasaje de los espermatozoides al tracto reproductor femenino",
      "MetodoImagen": "metodo-6.jpg",
      "MetodoTipo": "MB",
      "MetodoTasa": "Falla teórica o de uso perfecto 5 embarazos por cada 100 mujeres en el primer año de uso.|Falla de uso o uso típico 21 embarazos por cada 100 mujeres en el primer año de uso.",
      "MetodoGenero": "Femenino"
    },
    {
      "MetodoId": 7,
      "MetodoNombre": "Espermicidas",
      "MetodoDescripcion": "Productos químicos que se presentan en forma de óvulos o tabletas vaginales, crema, jalea, gel y espuma que destruyen los espermatozoides; los que contienen nonoxinol-9",
      "MetodoMecanismo": "Inactivan o destruyen los espermatozoides en la vagina",
      "MetodoImagen": "metodo-7.jpg",
      "MetodoTipo": "MB",
      "MetodoTasa": "Falla teórica o de uso perfecto 18 embarazos por cada 100 mujeres en el primer año de uso.|Falla de uso o uso típico 29 embarazos por cada 100 mujeres en el primer año de uso.",
      "MetodoGenero": "Femenino"
    },
    {
      "MetodoId": 8,
      "MetodoNombre": "Anticonceptivos Orales Combinados",
      "MetodoDescripcion": "Son aquellos que contienen estrógeno y progestágeno para administración por vía oral",
      "MetodoMecanismo": "Supresión de la ovulación y espesamiento de moco cervical",
      "MetodoImagen": "metodo-8.jpg",
      "MetodoTipo": "AH",
      "MetodoTasa": "Falla teórica o de uso perfecto 0.3 embarazos por cada 100 mujeres en el primer año de uso.|Falla de uso o uso típico 8 embarazos por cada 100 mujeres en el primer año de uso.",
      "MetodoGenero": "Femenino"
    },
    {
      "MetodoId": 9,
      "MetodoNombre": "Anticonceptivos Hormonales Combinados de Depósito",
      "MetodoDescripcion": "Son aquellos que poseen estrógeno y progestágeno",
      "MetodoMecanismo": "Supresión de la ovulación y espesamiento del moco cervical, impidiendo la penetración de los espermatozoides",
      "MetodoImagen": "metodo-9.jpg",
      "MetodoTipo": "AH",
      "MetodoTasa": "Falla teórica 0.05 embarazos por cada 100 mujeres en el primer año.|Falla de uso típico 3 embarazos por cada 100 mujeres en el primer año.",
      "MetodoGenero": "Femenino"
    },
    {
      "MetodoId": 10,
      "MetodoNombre": "Parche Hormonal Combinado",
      "MetodoDescripcion": "Parche adhesivo pequeño (20 centímetros cuadrados no es 4 x 4) que se coloca en la piel. El parche libera estrógeno y progestina a través de la piel y en la sangre",
      "MetodoMecanismo": "Supresión de la ovulación y espesamiento del moco cervical, impidiendo la penetración de los espermatozoides",
      "MetodoImagen": "metodo-10.jpg",
      "MetodoTipo": "AH",
      "MetodoTasa": "Falla teórica 0.3 embarazos por cada 100 mujeres en el primer año.|Falla de uso típico 8 embarazos por cada 100 mujeres en el primer año.",
      "MetodoGenero": "Femenino"
    },
    {
      "MetodoId": 11,
      "MetodoNombre": "Anillo Vaginal Combinado",
      "MetodoDescripcion": "Anillo delgado, transparente y flexible que se inserta en la vagina una vez por mes para proporcionar protección anticonceptiva. Contiene estrógeno y progesterona que son liberados en forma continua y a baja dosis",
      "MetodoMecanismo": "Supresión de la ovulación y espesamiento del moco cervical, impidiendo la penetración de los espermatozoides",
      "MetodoImagen": "metodo-11.png",
      "MetodoTipo": "MB",
      "MetodoTasa": "Falla teórica 0.3 embarazos por cada 100 mujeres en el primer año.|Falla de uso típico 8 embarazos por cada 100 mujeres en el primer año",
      "MetodoGenero": "Femenino"
    },
    {
      "MetodoId": 12,
      "MetodoNombre": "Píldoras solo de Progestinas",
      "MetodoDescripcion": "Son aquellas que poseen sólo progestágeno",
      "MetodoMecanismo": "Inhiben parcialmente la ovulación y espesa el moco cervical, dificultando la penetración de los espermatozoides",
      "MetodoImagen": "metodo-12.jpg",
      "MetodoTipo": "MB",
      "MetodoTasa": "Falla teórica es 0.3 embarazos por cada 100 mujeres en el primer año.|Falla de uso típico es 8 embarazos por cada 100 mujeres en el primer año",
      "MetodoGenero": "Femenino"
    },
    {
      "MetodoId": 13,
      "MetodoNombre": "Inyectables solo de Progestinas",
      "MetodoDescripcion": "Son aquellos que contienen sólo progestágeno",
      "MetodoMecanismo": "Espesamiento del moco cervical, impidiendo la penetración de los espermatozoides y supresión de la ovulación en un 50%",
      "MetodoImagen": "metodo-13.jpg",
      "MetodoTipo": "MB",
      "MetodoTasa": "Falla teórica 0.3 embarazos por cada 100 mujeres en el primer año.|Falla de uso típico 3 embarazos por cada 100 mujeres en el primer año.",
      "MetodoGenero": "Femenino"
    },
    {
      "MetodoId": 14,
      "MetodoNombre": "Implantes solo de Progestinas",
      "MetodoDescripcion": "Pequeños cilindros o cápsulas delgadas, flexibles, no biodegradables, que se colocan debajo de la piel de la parte superior interna del brazo. Brinda protección contra el embarazo a largo plazo",
      "MetodoMecanismo": "Espesamiento del moco cervical, impidiendo la penetración de los espermatozoides, supresión de la ovulación y reducción del transporte de los óvulos en las Trompas de Falopio",
      "MetodoImagen": "metodo-14.png",
      "MetodoTipo": "MB",
      "MetodoTasa": "Es uno de los métodos más eficaces y de mayor duración.|0.05% de falla teórica y en el uso típico (1 en 100 mujeres).",
      "MetodoGenero": "Femenino"
    },
    {
      "MetodoId": 15,
      "MetodoNombre": "Dispositivo Intrauterino Liberador de Cobre TCu 380A",
      "MetodoDescripcion": "Dispositivos que se insertan en la cavidad uterina y liberan cobre",
      "MetodoMecanismo": "Afectan la capacidad de los espermatozoides de pasar a través de la cavidad uterina ya sea inmovilizándolos o destruyéndolos e interfieren en el proceso reproductor antes que ocurra la fertilización",
      "MetodoImagen": "metodo-15.jpg",
      "MetodoTipo": "DIU",
      "MetodoTasa": "Falla teórica  de 0.6 embarazos por cada 100 mujeres en el primer año.|Falla de uso típico 0.8 embarazos por cada 100 mujeres en el primer año.",
      "MetodoGenero": "Femenino"
    },
    {
      "MetodoId": 16,
      "MetodoNombre": "Dispositivo Intrauterino Liberador de Cobre Progestágeno",
      "MetodoDescripcion": "Dispositivos que se insertan en la cavidad uterina, y liberan levonorgestrel",
      "MetodoMecanismo": "Espesamiento del moco cervical, impidiendo la penetración de los espermatozoides y supresión de la ovulación",
      "MetodoImagen": "metodo-16.jpg",
      "MetodoTipo": "DIU",
      "MetodoTasa": "Falla teórica 0.1 embarazos por cada 100 mujeres en el primer año.|Falla de uso típico 0.1 embarazos por cada 100 mujeres en el primer año.",
      "MetodoGenero": "Femenino"
    },
    {
      "MetodoId": 17,
      "MetodoNombre": "Anticoncepción Quirúrgica Voluntaria Femenina",
      "MetodoDescripcion": "Es permanente y se realiza mediante una intervención quirúrgica electiva, cuyo objetivo es impedir la unión de espermatozoide con el óvulo al nivel de la trompa",
      "MetodoMecanismo": "Es la oclusión y sección de las trompas de Falopio para impedir la unión del espermatozoide con el óvulo",
      "MetodoImagen": "metodo-17.jpg",
      "MetodoTipo": "AQV",
      "MetodoTasa": "Falla teórica 0.5 embarazos por cada 100 mujeres en el primer año.|Falla de uso típico 0.5 embarazos por cada 100 mujeres en el primer año.",
      "MetodoGenero": "Femenino"
    },
    {
      "MetodoId": 18,
      "MetodoNombre": "Anticoncepción Quirúrgica Voluntaria Masculina",
      "MetodoDescripcion": "Es permanente. Conocida como vasectomía, es una intervención quirúrgica electiva, considerada como cirugía menor, destinada a ligar y seccionar los conductos deferentes en el hombre",
      "MetodoMecanismo": "La oclusión de los conductos deferentes que impide la salida de los espermatozoides, evitando la unión con el óvulo",
      "MetodoImagen": "metodo-18.png",
      "MetodoTipo": "AQV",
      "MetodoTasa": "Falla teórica 0.15 embarazos por cada 100 mujeres en el primer año.|Falla de uso 0.15 embarazos por cada 100 mujeres en el primer año.",
      "MetodoGenero": "Masculino"
    },
    {
      "MetodoId": 19,
      "MetodoNombre": "Método de Yuzpe",
      "MetodoDescripcion": "Píldoras utilizadas en casos de emergencia luego de una relación sexual sin protección, violación o ruptura de condón",
      "MetodoMecanismo": "Inhibe la ovulación y espesa el moco cervical",
      "MetodoImagen": "metodo-19.jpeg",
      "MetodoTipo": "AE",
      "MetodoTasa": "Cuando más pronto sea su uso, mayor será su eficacia.|Los anticonceptivos combinados (Método de Yuzpe) hasta 75%",
      "MetodoGenero": "Femenino"
    },
    {
      "MetodoId": 20,
      "MetodoNombre": "Método de sólo Progestágeno",
      "MetodoDescripcion": "Píldoras utilizadas en casos de emergencia luego de una relación sexual sin protección, violación o ruptura de condón",
      "MetodoMecanismo": "Inhibe la ovulación y espesa el moco cervical",
      "MetodoImagen": "metodo-20.jpg",
      "MetodoTipo": "AE",
      "MetodoTasa": "Cuando más pronto sea su uso, mayor será su eficacia.|Los de solo progestágeno (levonorgestrel) hasta 95%.",
      "MetodoGenero": "Femenino"
    }
  ];

  // Función de Angular para inicializar el componente
  ngOnInit(): void {
    this.refreshMethodList();
  }

  // Función para actualizar la lista de métodos anticonceptivos
  refreshMethodList() {
    this.MethodList=this.localMethods;
    this.MethodListWithoutFilter=this.localMethods;

    // Con Django Rest API  
    /* this.service.getMethodList().subscribe(data=>{
      this.MethodList=data;
      this.MethodListWithoutFilter=data;
    }); */
  }

  // Función para filtrar los métodos anticonceptivos
  filterMethods() {
    var MethodNameFilter = this.MethodNameFilter;
    this.TypeMethodFilter="";
    this.GenderMethodFilter="";

    this.MethodList = this.MethodListWithoutFilter.filter(function(el:any) {
      return el.MetodoNombre.toString().toLowerCase().includes(MethodNameFilter.toString().trim().toLowerCase());
    });
  }

  // Función para filtrar métodos anticonceptivos según su tipo
  filterType() {
    var TypeMethodFilter = this.TypeMethodFilter;
    this.MethodNameFilter="";
    this.GenderMethodFilter="";

    this.MethodList = this.MethodListWithoutFilter.filter(function(el:any) {
      return el.MetodoTipo.toString().toLowerCase().includes(TypeMethodFilter.toString().trim().toLowerCase());
    });
  }

  // Función para filtrar métodos anticonceptivos según el género de la persona
  filterGender() {
    var GenderMethodFilter = this.GenderMethodFilter;
    this.TypeMethodFilter="";
    this.MethodNameFilter="";

    this.MethodList = this.MethodListWithoutFilter.filter(function(el:any) {
      return el.MetodoGenero.toString().toLowerCase().includes(GenderMethodFilter.toString().trim().toLowerCase());
    });
  }

}
