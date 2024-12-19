import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarPacientesComponent } from './listar-pacientes/listar-pacientes.component';
import { RegistrarPacienteComponent } from './registrar-paciente/registrar-paciente.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ListarPacientesComponent
  },
  {
    path:'registrar-paciente',
    component: RegistrarPacienteComponent
  }
]

@NgModule({
  declarations: [
    ListarPacientesComponent,
    RegistrarPacienteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PacienteModule { }
