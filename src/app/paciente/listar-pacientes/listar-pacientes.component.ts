import { Component } from '@angular/core';
import { Paciente } from '../../models/paciente';
import { PacienteService } from '../../servicios/paciente.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-listar-pacientes',
  templateUrl: './listar-pacientes.component.html',
  styleUrl: './listar-pacientes.component.scss'
})
export class ListarPacientesComponent {

  listaPacientes: Paciente[] = []
  busqueda: Paciente[] = []
  numeroBusqueda: string = ''
  nuevoPaciente: Paciente = {
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    tipoDocumento: '',
    numeroDocumento: 0,
    fechaNacimiento: new Date(),
    numeroCelular: 0,
    direccion: '',
    pais: '',
    departamento: '',
    ciudad: '',
    email: ''
  }
  pacienteSeleccionado: Paciente | undefined;

  constructor(private pacienteService:PacienteService){}

  ngOnInit(): void{

    this.listaPacientes = this.pacienteService.obtenerPacientes()
    this.busqueda = [...this.listaPacientes]
  }

  registrarPaciente(form: NgForm): void {
    if (form.valid) {
      this.pacienteService.registrarPaciente(this.nuevoPaciente)
    }
    form.reset()
  }

  buscarPaciente(): void{
    if (this.numeroBusqueda.trim() === '') {
      this.busqueda = this.listaPacientes
    } else {
      this.busqueda = this.listaPacientes.filter(paciente => paciente.numeroDocumento.toString().includes(this.numeroBusqueda))
    }
  }

  seleccionarPaciente(paciente: Paciente) {
    this.pacienteSeleccionado = paciente
  }
}
