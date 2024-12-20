import { Injectable } from '@angular/core';
import { Paciente } from '../models/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private listaPacientes: Paciente[] = []

  constructor() { 
    this.cargarDatosIniciales()
  }

  cargarDatosIniciales(): void {
    const pacientesGuardados = localStorage.getItem('pacientes')
    if (pacientesGuardados) {
      this.listaPacientes = JSON.parse(pacientesGuardados)
    } else {
      this.generarPacientes()
    }
  }

  generarPacientes(): void {
    this.listaPacientes = [
      {
        primerNombre: 'Juan',
        segundoNombre: 'Carlos',
        primerApellido: 'Pérez',
        segundoApellido: 'González',
        tipoDocumento: 'CC',
        numeroDocumento: 12345678,
        numeroCelular: 3001234567,
        direccion: 'Calle 10 #15-20',
        pais: 'Colombia',
        departamento: 'Antioquia',
        ciudad: 'Medellín',
        email: 'juan.perez@ejemplo.com',
      },
      {
        primerNombre: 'María',
        segundoNombre: 'Fernanda',
        primerApellido: 'Gómez',
        segundoApellido: 'Rodríguez',
        tipoDocumento: 'TI',
        numeroDocumento: 87654321,
        numeroCelular: 3007654321,
        direccion: 'Avenida 5 #32-10',
        pais: 'Colombia',
        departamento: 'Cundinamarca',
        ciudad: 'Bogotá',
        email: 'maria.gomez@ejemplo.com',
      },
      {
        primerNombre: 'Carlos',
        segundoNombre: 'Eduardo',
        primerApellido: 'Martínez',
        segundoApellido: 'López',
        tipoDocumento: 'CC',
        numeroDocumento: 11223344,
        numeroCelular: 3009876543,
        direccion: 'Calle 30 #20-40',
        pais: 'Colombia',
        departamento: 'Valle del Cauca',
        ciudad: 'Cali',
        email: 'carlos.martinez@ejemplo.com',
      },
      {
        primerNombre: 'Ana',
        segundoNombre: 'Lucía',
        primerApellido: 'Fernández',
        segundoApellido: 'Jiménez',
        tipoDocumento: 'CE',
        numeroDocumento: 55667788,
        numeroCelular: 3001122334,
        direccion: 'Carrera 15 #25-50',
        pais: 'Colombia',
        departamento: 'Santander',
        ciudad: 'Bucaramanga',
        email: 'ana.fernandez@ejemplo.com',
      },
      {
        primerNombre: 'Luis',
        segundoNombre: 'Alberto',
        primerApellido: 'Ramírez',
        segundoApellido: 'Vásquez',
        tipoDocumento: 'CC',
        numeroDocumento: 22334455,
        numeroCelular: 3002233445,
        direccion: 'Calle 40 #10-30',
        pais: 'Colombia',
        departamento: 'Atlántico',
        ciudad: 'Barranquilla',
        email: 'luis.ramirez@ejemplo.com',
      },
      {
        primerNombre: 'Paola',
        segundoNombre: 'Mariana',
        primerApellido: 'Suárez',
        segundoApellido: 'Díaz',
        tipoDocumento: 'TI',
        numeroDocumento: 66554433,
        numeroCelular: 3001122335,
        direccion: 'Avenida 12 #20-70',
        pais: 'Colombia',
        departamento: 'Caldas',
        ciudad: 'Manizales',
        email: 'paola.suarez@ejemplo.com',
      },
      {
        primerNombre: 'Carlos',
        segundoNombre: 'Andrés',
        primerApellido: 'Torres',
        segundoApellido: 'Hernández',
        tipoDocumento: 'CC',
        numeroDocumento: 99887766,
        numeroCelular: 3009988776,
        direccion: 'Calle 5 #15-10',
        pais: 'Colombia',
        departamento: 'Huila',
        ciudad: 'Neiva',
        email: 'carlos.torres@ejemplo.com',
      },
      {
        primerNombre: 'Diana',
        segundoNombre: 'Cecilia',
        primerApellido: 'Paredes',
        segundoApellido: 'Jiménez',
        tipoDocumento: 'CC',
        numeroDocumento: 44332211,
        numeroCelular: 3003344556,
        direccion: 'Carrera 20 #10-25',
        pais: 'Colombia',
        departamento: 'Risaralda',
        ciudad: 'Pereira',
        email: 'diana.paredes@ejemplo.com',
      },
      {
        primerNombre: 'Andrés',
        segundoNombre: 'Felipe',
        primerApellido: 'Vega',
        segundoApellido: 'Gómez',
        tipoDocumento: 'TI',
        numeroDocumento: 77665544,
        numeroCelular: 3006677889,
        direccion: 'Calle 25 #30-50',
        pais: 'Colombia',
        departamento: 'Cundinamarca',
        ciudad: 'Chía',
        email: 'andres.vega@ejemplo.com',
      },
      {
        primerNombre: 'Luisa',
        segundoNombre: 'María',
        primerApellido: 'Romero',
        segundoApellido: 'Pérez',
        tipoDocumento: 'CC',
        numeroDocumento: 55667799,
        numeroCelular: 3005551234,
        direccion: 'Avenida 10 #10-90',
        pais: 'Colombia',
        departamento: 'Nariño',
        ciudad: 'Pasto',
        email: 'luisa.romero@ejemplo.com',
      },
      {
        primerNombre: 'José',
        segundoNombre: 'Luis',
        primerApellido: 'García',
        segundoApellido: 'Mendoza',
        tipoDocumento: 'CC',
        numeroDocumento: 11223366,
        numeroCelular: 3006677991,
        direccion: 'Calle 22 #10-15',
        pais: 'Colombia',
        departamento: 'Cauca',
        ciudad: 'Popayán',
        email: 'jose.garcia@ejemplo.com',
      },
      {
        primerNombre: 'Isabel',
        segundoNombre: 'Cristina',
        primerApellido: 'Sánchez',
        segundoApellido: 'Rodríguez',
        tipoDocumento: 'TI',
        numeroDocumento: 99887733,
        numeroCelular: 3003344557,
        direccion: 'Carrera 8 #20-30',
        pais: 'Colombia',
        departamento: 'Sucre',
        ciudad: 'Sincelejo',
        email: 'isabel.sanchez@ejemplo.com',
      },
      {
        primerNombre: 'Felipe',
        segundoNombre: 'Martín',
        primerApellido: 'López',
        segundoApellido: 'García',
        tipoDocumento: 'CC',
        numeroDocumento: 22334477,
        numeroCelular: 3001122336,
        direccion: 'Calle 13 #10-10',
        pais: 'Colombia',
        departamento: 'Bolívar',
        ciudad: 'Cartagena',
        email: 'felipe.lopez@ejemplo.com',
      },
      {
        primerNombre: 'Verónica',
        segundoNombre: 'Cecilia',
        primerApellido: 'Mora',
        segundoApellido: 'Martínez',
        tipoDocumento: 'TI',
        numeroDocumento: 44556688,
        numeroCelular: 3005566677,
        direccion: 'Avenida 9 #50-40',
        pais: 'Colombia',
        departamento: 'Quindío',
        ciudad: 'Armenia',
        email: 'veronica.mora@ejemplo.com',
      },
      {
        primerNombre: 'Edgar',
        segundoNombre: 'Félix',
        primerApellido: 'Silva',
        segundoApellido: 'González',
        tipoDocumento: 'CC',
        numeroDocumento: 33557799,
        numeroCelular: 3002233446,
        direccion: 'Calle 18 #15-35',
        pais: 'Colombia',
        departamento: 'Tolima',
        ciudad: 'Ibagué',
        email: 'edgar.silva@ejemplo.com',
      }
    ]
    localStorage.setItem('listaPacientes',JSON.stringify(this.listaPacientes))
  }


  obtenerPacientes(): Paciente[] {
    return this.listaPacientes
  }

  registrarPaciente(paciente: Paciente): void {
    this.listaPacientes.push(paciente)
    localStorage.setItem('pacientes',JSON.stringify(this.listaPacientes))
  }
}
