import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarHistoriaComponent } from './listar-historia/listar-historia.component';
import { CrearHistoriaComponent } from './crear-historia/crear-historia.component';
import { RouterModule, Routes, ROUTES } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'listar-historia',
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
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class HistoriaClinicaModule { }
