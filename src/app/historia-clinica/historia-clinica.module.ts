import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarHistoriaComponent } from './listar-historia/listar-historia.component';
import { RouterModule, Routes, ROUTES } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'listar-historia',
    component: ListarHistoriaComponent
  }
]

@NgModule({
  declarations: [
    ListarHistoriaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class HistoriaClinicaModule { }
