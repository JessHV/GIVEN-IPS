import { Pipe, PipeTransform } from '@angular/core';
import { Anticoncepcion } from '../models/model.interface';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(dataset: Anticoncepcion[], page: number = 0, search: string = ""): Anticoncepcion[] {
    if(search.length === 0) 
      return dataset.slice(page, page + 15);

    const filteredDataset = dataset.filter( 
      data => data.Departamento.toString().toLowerCase().includes(search.toString().trim().toLowerCase()) || 
              data.Provincia.toString().toLowerCase().includes(search.toString().trim().toLowerCase()) ||
              data.Distrito.toString().toLowerCase().includes(search.toString().trim().toLowerCase()) ||
              data.Mes.toString().toLowerCase().includes(search.toString().trim().toLowerCase()) ||
              data.Inicio.toString().toLowerCase().includes(search.toString().trim().toLowerCase()) ||
              data.Fin.toString().toLowerCase().includes(search.toString().trim().toLowerCase()) ||
              data.Metodo.toString().toLowerCase().includes(search.toString().trim().toLowerCase())
    );
    return filteredDataset.slice(page, page + 15); 
  }

}
