import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarPacientesComponent } from './listar-pacientes/listar-pacientes.component';
import { RegistrarPacienteComponent } from './registrar-paciente/registrar-paciente.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ConsultarPacienteComponent } from './consultar-paciente/consultar-paciente.component';

const routes: Routes = [
  {
    path: '',
    component: ListarPacientesComponent
  },
  {
    path:'registrar-paciente',
    component: RegistrarPacienteComponent
  },
  {
    path:'consultar-paciente',
    component: ConsultarPacienteComponent
  }
]

@NgModule({
  declarations: [
    ListarPacientesComponent,
    RegistrarPacienteComponent,
    ConsultarPacienteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class PacienteModule { }
