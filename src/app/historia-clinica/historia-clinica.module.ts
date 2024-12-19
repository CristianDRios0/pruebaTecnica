import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarHistoriaComponent } from './listar-historia/listar-historia.component';
import { CrearHistoriaComponent } from './crear-historia/crear-historia.component';
import { Routes, ROUTES } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ListarHistoriaComponent
  },
  {
    path: 'crear-historia',
    component: CrearHistoriaComponent
  }
]

@NgModule({
  declarations: [
    ListarHistoriaComponent,
    CrearHistoriaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HistoriaClinicaModule { }
