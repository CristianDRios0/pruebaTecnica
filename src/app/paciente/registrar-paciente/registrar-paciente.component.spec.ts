import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarPacienteComponent } from './registrar-paciente.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { PacienteService } from '../../servicios/paciente.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

// Mock del servicio PacienteService
class MockPacienteService {
  registrarPaciente(paciente: any) {
    // Simula la lógica de registro de paciente
  }
}

describe('RegistrarPacienteComponent', () => {
  let component: RegistrarPacienteComponent;
  let fixture: ComponentFixture<RegistrarPacienteComponent>;
  let mockPacienteService: MockPacienteService;
  let router: Router;

  beforeEach(async () => {
    // Configuración del entorno de pruebas
    await TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule],
      declarations: [RegistrarPacienteComponent],
      providers: [
        { provide: PacienteService, useClass: MockPacienteService },
        Router
      ]
    }).compileComponents();

    // Creación de la instancia del componente y sus dependencias
    fixture = TestBed.createComponent(RegistrarPacienteComponent);
    component = fixture.componentInstance;
    mockPacienteService = TestBed.inject(PacienteService);
    router = TestBed.inject(Router);

    // Inicialización de los datos del componente
    component.nuevoPaciente = {
      primerNombre: 'Juan',
      segundoNombre: 'Carlos',
      primerApellido: 'Pérez',
      segundoApellido: 'Gómez',
      tipoDocumento: 'CC',
      numeroDocumento: 123456789,
      email: 'juan.perez@example.com',
      numeroCelular: 3001234567,
      direccion: 'Calle Falsa 123',
      pais: 'Colombia',
      departamento: 'Antioquia',
      ciudad: 'Medellín'
    };
  });

  it('should create', () => {
    // Verifica que el componente se cree correctamente
    expect(component).toBeTruthy();
  });

  it('should initialize nuevoPaciente with default values', () => {
    // Verifica que los valores iniciales de nuevoPaciente sean los esperados
    expect(component.nuevoPaciente.primerNombre).toBe('');
    expect(component.nuevoPaciente.segundoNombre).toBe('');
    expect(component.nuevoPaciente.primerApellido).toBe('');
    expect(component.nuevoPaciente.segundoApellido).toBe('');
    expect(component.nuevoPaciente.tipoDocumento).toBe('');
    expect(component.nuevoPaciente.numeroDocumento).toBe(0);
    expect(component.nuevoPaciente.email).toBe('');
    expect(component.nuevoPaciente.numeroCelular).toBe(0);
    expect(component.nuevoPaciente.direccion).toBe('');
    expect(component.nuevoPaciente.pais).toBe('');
    expect(component.nuevoPaciente.departamento).toBe('');
    expect(component.nuevoPaciente.ciudad).toBe('');
  });

  it('should call registrarPaciente and navigate to /paciente on success', () => {
    // Espía el método registrarPaciente del servicio
    spyOn(mockPacienteService, 'registrarPaciente').and.callThrough();
    // Espía el método navigate del enrutador
    spyOn(router, 'navigate');

    // Llama al método registrarPaciente
    component.registrarPaciente();

    // Verifica que el método registrarPaciente haya sido llamado
    expect(mockPacienteService.registrarPaciente).toHaveBeenCalledWith(component.nuevoPaciente);
    // Verifica que la navegación haya ocurrido
    expect(router.navigate).toHaveBeenCalledWith(['/paciente']);
  });

  it('should display success alert when paciente is registered', () => {
    // Espía el método fire de Swal
    spyOn(Swal, 'fire');

    // Llama al método registrarPaciente
    component.registrarPaciente();

    // Verifica que se haya mostrado la alerta de éxito
    expect(Swal.fire).toHaveBeenCalledWith(
      jasmine.objectContaining({
        icon: 'success',
        title: 'Paciente registrado',
        buttonsStyling: false,
        customClass: {
          confirmButton: 'btn btn-success'
        }
      })
    );
  });
});
