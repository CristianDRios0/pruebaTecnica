import { Component } from '@angular/core';
import { Paciente } from '../../models/paciente';
import { PacienteService } from '../../servicios/paciente.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-paciente',
  templateUrl: './registrar-paciente.component.html',
  styleUrl: './registrar-paciente.component.scss'
})
export class RegistrarPacienteComponent {

  nuevoPaciente: Paciente = {
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    tipoDocumento: '',
    numeroDocumento: 0,
    email: '',
    numeroCelular: 0,
    direccion: '',
    pais: '',
    departamento: '',
    ciudad: ''
  }

  constructor(private pacienteService: PacienteService, private router: Router) {}

  registrarPaciente(): void{
    this.pacienteService.registrarPaciente(this.nuevoPaciente)
    Swal.fire(
      {
        icon: 'success',
        title: 'Paciente registrado',
        buttonsStyling: false,
        customClass: {
          confirmButton: 'btn btn-success'
        }
      }
    )
    this.router.navigate(['/paciente'])
  }

}
