import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiltrosComponent } from './filtros/filtros.component';
import { InformacionComponent } from './informacion/informacion.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'filtros', component: FiltrosComponent},
      {path: 'informacion', component: InformacionComponent},
      {path: '**', redirectTo: 'filtros'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusquedaRoutingModule { }
