import { Component, Input } from '@angular/core';
import { Paciente } from '../../models/paciente';

@Component({
  selector: 'app-consultar-paciente',
  templateUrl: './consultar-paciente.component.html',
  styleUrl: './consultar-paciente.component.scss'
})
export class ConsultarPacienteComponent {

  @Input() pacienteSeleccionado: Paciente | undefined;

}
