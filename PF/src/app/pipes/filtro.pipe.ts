import { Pipe, PipeTransform } from '@angular/core';
import { Anticoncepcion } from '../models/model.interface';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(dataset: Anticoncepcion[], page: number = 0, search: string = "", option:number = 0): Anticoncepcion[] {
    if(search.length === 0) 
      return dataset.slice(page, page + 15);

    var filteredDataset:Anticoncepcion[]=[];
    switch(option) {
      case 0: 
        filteredDataset = dataset.filter( 
          data => data.Departamento.toString().toLowerCase().includes(search.toString().trim().toLowerCase()) || 
                  data.Provincia.toString().toLowerCase().includes(search.toString().trim().toLowerCase()) ||
                  data.Distrito.toString().toLowerCase().includes(search.toString().trim().toLowerCase()) ||
                  data.Mes.toString().toLowerCase().includes(search.toString().trim().toLowerCase()) ||
                  data.Inicio.toString().toLowerCase().includes(search.toString().trim().toLowerCase()) ||
                  data.Fin.toString().toLowerCase().includes(search.toString().trim().toLowerCase()) ||
                  data.Metodo.toString().toLowerCase().includes(search.toString().trim().toLowerCase())
        );
      break;
      case 1:
        filteredDataset = dataset.filter(data => data.Mes.toString().toLowerCase().includes(search.toString().trim().toLowerCase()));  
      break;
      case 2:
        filteredDataset = dataset.filter(data => data.Departamento.toString().toLowerCase().includes(search.toString().trim().toLowerCase()));
      break;
      case 3:
        filteredDataset = dataset.filter(data => data.Provincia.toString().toLowerCase().includes(search.toString().trim().toLowerCase()));
      break;
      case 4:
        filteredDataset = dataset.filter(data => data.Distrito.toString().toLowerCase().includes(search.toString().trim().toLowerCase()));
      break;
      case 5:
        filteredDataset = dataset.filter(data => data.Inicio.toString().includes(search.split("-")[0]) &&
                                                data.Fin.toString().includes(search.split("-")[1]));
      break;
      case 6:
        filteredDataset = dataset.filter(data => data.Metodo.toString().toLowerCase().includes(search.toLowerCase()));
      break;
    }
    
    return filteredDataset.slice(page, page + 15); 
  }

}
