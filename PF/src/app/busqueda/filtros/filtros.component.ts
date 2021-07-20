import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  constructor(private service:SharedService) { }

  /* Tabla y Filtros */
  MethodList:any=[];
  MethodNameFilter:string="";
  MethodListWithoutFilter:any=[];

  // ==== Sin API ====
  public localMethods:any = [
    {
      "MetodoId": 1,
      "MetodoNombre": "Método del calendario",
      "MetodoDescripcion": "Abstinencia de relaciones sexuales en el periodo fértil del ciclo menstrual para evitar un embarazo",
      "MetodoMecanismo": "Basado en la abstinencia sexual durante la fase fértil del ciclo menstrual para evitar un embarazo",
      "MetodoImagen": "metodo-1.png"
    },
    {
      "MetodoId": 2,
      "MetodoNombre": "Método de la ovulación",
      "MetodoDescripcion": "Abstinencia de relaciones sexuales en el periodo fértil del ciclo menstrual determinado por la presencia de moco cervical o sensación de humedad en genitales",
      "MetodoMecanismo": "Basado en la abstinencia sexual durante la fase fértil del ciclo menstrual para evitar un embarazo",
      "MetodoImagen": "metodo-2.jpg"
    },
    {
      "MetodoId": 3,
      "MetodoNombre": "Método del collar",
      "MetodoDescripcion": "Método de abstinencia periódica que se apoya en perlas de colores (marrón, blanco y rojo) para determinar los días fértiles del ciclo menstrual",
      "MetodoMecanismo": "Basado en la abstinencia sexual durante la fase fértil del ciclo menstrual para evitar un embarazo",
      "MetodoImagen": "metodo-3.jpg"
    },
    {
      "MetodoId": 4,
      "MetodoNombre": "Método de Lactancia Materna Exclusiva y Amenorrea",
      "MetodoDescripcion": "Único método natural, basado en la infertilidad temporal de la mujer durante la lactancia",
      "MetodoMecanismo": "Supresión de la ovulación ocasionada por el incremento de la hormona prolactina como consecuencia de la lactancia materna exclusiva",
      "MetodoImagen": "metodo-4.jpg"
    },
    {
      "MetodoId": 5,
      "MetodoNombre": "Condón Masculino",
      "MetodoDescripcion": "Funda delgada de látex, lubricada, sin nonoxinol 9, que se coloca en el pene antes de iniciar la relación sexual",
      "MetodoMecanismo": "Impide que los espermatozoides tengan acceso al tracto reproductor femenino",
      "MetodoImagen": "metodo-5.jpg"
    },
    {
      "MetodoId": 6,
      "MetodoNombre": "Condón Femenino",
      "MetodoDescripcion": "Funda amplia y delgada de polímero de nitrilo que se coloca en la vagina antes de una relación sexual",
      "MetodoMecanismo": "Impide el pasaje de los espermatozoides al tracto reproductor femenino",
      "MetodoImagen": "metodo-6.jpg"
    },
    {
      "MetodoId": 7,
      "MetodoNombre": "Espermicidas",
      "MetodoDescripcion": "Productos químicos que se presentan en forma de óvulos o tabletas vaginales, crema, jalea, gel y espuma que destruyen los espermatozoides; los que contienen nonoxinol-9",
      "MetodoMecanismo": "Inactivan o destruyen los espermatozoides en la vagina",
      "MetodoImagen": "metodo-7.jpg"
    },
    {
      "MetodoId": 8,
      "MetodoNombre": "Anticonceptivos Orales Combinados",
      "MetodoDescripcion": "Son aquellos que contienen estrógeno y progestágeno para administración por vía oral",
      "MetodoMecanismo": "Supresión de la ovulación y espesamiento de moco cervical",
      "MetodoImagen": "metodo-8.jpg"
    },
    {
      "MetodoId": 9,
      "MetodoNombre": "Anticonceptivos Hormonales Combinados de Depósito",
      "MetodoDescripcion": "Son aquellos que poseen estrógeno y progestágeno",
      "MetodoMecanismo": "Supresión de la ovulación y espesamiento del moco cervical, impidiendo la penetración de los espermatozoides",
      "MetodoImagen": "metodo-9.jpg"
    },
    {
      "MetodoId": 10,
      "MetodoNombre": "Parche Hormonal Combinado",
      "MetodoDescripcion": "parche adhesivo pequeño (20 centímetros cuadrados no es 4 x 4) que se coloca en la piel. El parche libera estrógeno y progestina a través de la piel y en la sangre",
      "MetodoMecanismo": "Supresión de la ovulación y espesamiento del moco cervical, impidiendo la penetración de los espermatozoides",
      "MetodoImagen": "metodo-10.jpg"
    },
    {
      "MetodoId": 11,
      "MetodoNombre": "Anillo Vaginal Combinado",
      "MetodoDescripcion": "Anillo delgado, transparente y flexible que se inserta en la vagina una vez por mes para proporcionar protección anticonceptiva. Contiene estrógeno y progesterona que son liberados en forma continua y a baja dosis",
      "MetodoMecanismo": "Supresión de la ovulación y espesamiento del moco cervical, impidiendo la penetración de los espermatozoides",
      "MetodoImagen": "metodo-11.png"
    },
    {
      "MetodoId": 12,
      "MetodoNombre": "Píldoras solo de Progestinas",
      "MetodoDescripcion": "Son aquellas que poseen sólo progestágeno",
      "MetodoMecanismo": "Inhiben parcialmente la ovulación y espesa el moco cervical, dificultando la penetración de los espermatozoides",
      "MetodoImagen": "metodo-12.jpg"
    },
    {
      "MetodoId": 13,
      "MetodoNombre": "Inyectables solo de Progestinas",
      "MetodoDescripcion": "Son aquellos que contienen sólo progestágeno",
      "MetodoMecanismo": "Espesamiento del moco cervical, impidiendo la penetración de los espermatozoides y supresión de la ovulación en un 50%",
      "MetodoImagen": "metodo-13.jpg"
    },
    {
      "MetodoId": 14,
      "MetodoNombre": "Implantes solo de Progestinas",
      "MetodoDescripcion": "Pequeños cilindros o cápsulas delgadas, flexibles, no biodegradables, que se colocan debajo de la piel de la parte superior interna del brazo. Brinda protección contra el embarazo a largo plazo",
      "MetodoMecanismo": "Espesamiento del moco cervical, impidiendo la penetración de los espermatozoides, supresión de la ovulación y reducción del transporte de los óvulos en las Trompas de Falopio",
      "MetodoImagen": "metodo-14.png"
    },
    {
      "MetodoId": 15,
      "MetodoNombre": "Dispositivo Intrauterino Liberador de Cobre TCu 380A",
      "MetodoDescripcion": "Dispositivos que se insertan en la cavidad uterina y liberan cobre",
      "MetodoMecanismo": "Afectan la capacidad de los espermatozoides de pasar a través de la cavidad uterina ya sea inmovilizándolos o destruyéndolos e interfieren en el proceso reproductor antes que ocurra la fertilización",
      "MetodoImagen": "metodo-15.jpg"
    },
    {
      "MetodoId": 16,
      "MetodoNombre": "Dispositivo Intrauterino Liberador de Cobre Progestágeno",
      "MetodoDescripcion": "Dispositivos que se insertan en la cavidad uterina, y liberan levonorgestrel",
      "MetodoMecanismo": "Espesamiento del moco cervical, impidiendo la penetración de los espermatozoides y supresión de la ovulación",
      "MetodoImagen": "metodo-16.jpg"
    },
    {
      "MetodoId": 17,
      "MetodoNombre": "Anticoncepción Quirúrgica Voluntaria Femenina",
      "MetodoDescripcion": "Es permanente y se realiza mediante una intervención quirúrgica electiva, cuyo objetivo es impedir la unión de espermatozoide con el óvulo al nivel de la trompa",
      "MetodoMecanismo": "Es la oclusión y sección de las trompas de Falopio para impedir la unión del espermatozoide con el óvulo",
      "MetodoImagen": "metodo-17.jpg"
    },
    {
      "MetodoId": 18,
      "MetodoNombre": "Anticoncepción Quirúrgica Voluntaria Masculina",
      "MetodoDescripcion": "Es permanente. Conocida como vasectomía, es una intervención quirúrgica electiva, considerada como cirugía menor, destinada a ligar y seccionar los conductos deferentes en el hombre",
      "MetodoMecanismo": "La oclusión de los conductos deferentes que impide la salida de los espermatozoides, evitando la unión con el óvulo",
      "MetodoImagen": "metodo-18.png"
    },
    {
      "MetodoId": 19,
      "MetodoNombre": "Método de Yuzpe",
      "MetodoDescripcion": "Píldoras utilizadas en casos de emergencia luego de una relación sexual sin protección, violación o ruptura de condón",
      "MetodoMecanismo": "Inhibe la ovulación y espesa el moco cervical",
      "MetodoImagen": "metodo-19.jpeg"
    },
    {
      "MetodoId": 20,
      "MetodoNombre": "Método de sólo Progestágeno",
      "MetodoDescripcion": "Píldoras utilizadas en casos de emergencia luego de una relación sexual sin protección, violación o ruptura de condón",
      "MetodoMecanismo": "Inhibe la ovulación y espesa el moco cervical",
      "MetodoImagen": "metodo-20.jpg"
    }
  ];

  ngOnInit(): void {
    this.refreshMethodList();
  }

  refreshMethodList() {
    // ==== Sin API ====
    this.MethodList=this.localMethods;
    this.MethodListWithoutFilter=this.localMethods;

    /* Desde la API */
    /* this.service.getMethodList().subscribe(data=>{
      this.MethodList=data;
      this.MethodListWithoutFilter=data;
    }); */
  }

  filterMethods() {
    var MethodNameFilter = this.MethodNameFilter;

    this.MethodList = this.MethodListWithoutFilter.filter(function(el:any) {
      return el.MetodoNombre.toString().toLowerCase().includes(MethodNameFilter.toString().trim().toLowerCase());
    });
  }

}
