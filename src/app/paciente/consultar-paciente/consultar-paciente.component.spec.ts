import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ConsultarPacienteComponent } from './consultar-paciente.component';
import { Paciente } from '../../models/paciente';

describe('ConsultarPacienteComponent', () => {
  let component: ConsultarPacienteComponent;
  let fixture: ComponentFixture<ConsultarPacienteComponent>;

  // Configuración inicial antes de cada prueba
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultarPacienteComponent],
      imports: [FormsModule], // Importar FormsModule para usar ngModel
    }).compileComponents();
  });

  // Inicialización de la instancia del componente y el fixture
  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Prueba unitaria para verificar que el componente se crea correctamente
  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  // Prueba unitaria para verificar que el pacienteSeleccionado se asigna correctamente
  it('debería asignar pacienteSeleccionado correctamente', () => {
    const paciente: Paciente = {
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
      ciudad: 'Medellín',
    };

    component.pacienteSeleccionado = paciente;
    fixture.detectChanges();

    expect(component.pacienteSeleccionado).toEqual(paciente);
  });
});
