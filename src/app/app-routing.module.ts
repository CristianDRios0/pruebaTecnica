import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'paciente',
    loadChildren: ()=> import('./paciente/paciente.module').then(m=> m.PacienteModule)
  },
  {
    path:'historia-clinica',
    loadChildren: ()=> import('./historia-clinica/historia-clinica.module').then(h => h.HistoriaClinicaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
