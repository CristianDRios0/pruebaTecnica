import { TestBed } from '@angular/core/testing';
import { PacienteService } from './paciente.service';
import { Paciente } from '../models/paciente';

describe('PacienteService', () => {
  let service: PacienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PacienteService);
  });

  it('should be created', () => {
    // Verifica que el servicio se haya creado correctamente
    expect(service).toBeTruthy();
  });

  it('should load initial data from localStorage if available', () => {
    // Configura datos de pacientes en localStorage
    const pacientesMock: Paciente[] = [
      { primerNombre: 'Juan', segundoNombre: 'Carlos', primerApellido: 'Pérez', segundoApellido: 'González', tipoDocumento: 'CC', numeroDocumento: 12345678, numeroCelular: 3001234567, direccion: 'Calle 10 #15-20', pais: 'Colombia', departamento: 'Antioquia', ciudad: 'Medellín', email: 'juan.perez@ejemplo.com' },
      // ... otros pacientes
    ];
    localStorage.setItem('pacientes', JSON.stringify(pacientesMock));

    // Llama al método que carga los datos iniciales
    service.cargarDatosIniciales();

    // Verifica que la lista de pacientes se haya cargado correctamente
    expect(service.obtenerPacientes().length).toBe(pacientesMock.length);
  });

  it('should generate default patients if no data in localStorage', () => {
    // Elimina cualquier dato previo en localStorage
    localStorage.removeItem('pacientes');

    // Llama al método que carga los datos iniciales
    service.cargarDatosIniciales();

    // Verifica que la lista de pacientes tenga la cantidad esperada de pacientes por defecto
    expect(service.obtenerPacientes().length).toBe(15); // Asumiendo que 'generarPacientes' crea 15 pacientes
  });

  it('should add a new patient to the list', () => {
    // Crea un nuevo paciente
    const nuevoPaciente: Paciente = { primerNombre: 'Ana', segundoNombre: 'Lucía', primerApellido: 'Fernández', segundoApellido: 'Jiménez', tipoDocumento: 'CE', numeroDocumento: 55667788, numeroCelular: 3001122334, direccion: 'Carrera 15 #25-50', pais: 'Colombia', departamento: 'Santander', ciudad: 'Bucaramanga', email: 'ana.fernandez@ejemplo.com' };

    // Llama al método para registrar el nuevo paciente
    service.registrarPaciente(nuevoPaciente);

    // Verifica que la lista de pacientes tenga un elemento más
    expect(service.obtenerPacientes().length).toBe(16); // Asumiendo que 'generarPacientes' crea 15 pacientes por defecto
  });
});
