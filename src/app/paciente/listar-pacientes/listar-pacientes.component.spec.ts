import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarPacientesComponent } from './listar-pacientes.component';
import { PacienteService } from '../../servicios/paciente.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { ConsultarPacienteComponent } from '../consultar-paciente/consultar-paciente.component';

// Mock del servicio PacienteService
class MockPacienteService {
  obtenerPacientes() {
    return of([
      { numeroDocumento: 123, primerNombre: 'Juan', segundoNombre: 'Carlos', primerApellido: 'Pérez', segundoApellido: 'Gómez' },
      { numeroDocumento: 456, primerNombre: 'María', segundoNombre: 'José', primerApellido: 'Lopez', segundoApellido: 'Martínez' },
    ]);
  }

  registrarPaciente(paciente: any) {
    return of(paciente); // Simula el registro de un paciente
  }
}

describe('ListarPacientesComponent', () => {
  let component: ListarPacientesComponent;
  let fixture: ComponentFixture<ListarPacientesComponent>;
  let pacienteService: PacienteService;

  // Configuración del entorno de pruebas
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarPacientesComponent, ConsultarPacienteComponent],
      imports: [FormsModule], // Importamos FormsModule para usar ngModel
      providers: [
        { provide: PacienteService, useClass: MockPacienteService } // Usamos el mock del servicio
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPacientesComponent);
    component = fixture.componentInstance;
    pacienteService = TestBed.inject(PacienteService);
    fixture.detectChanges(); // Detecta cambios para inicializar la vista
  });

  // Prueba 1: Verificar que el componente se crea correctamente
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // Prueba 2: Verificar que la lista de pacientes se carga correctamente al iniciar el componente
  it('should load patient list on init', () => {
    component.ngOnInit();
    expect(component.listaPacientes.length).toBe(2); // Debe haber 2 pacientes en la lista
    expect(component.busqueda.length).toBe(2); // La búsqueda también debe tener los mismos pacientes
  });

  // Prueba 3: Verificar que la búsqueda de pacientes por documento funciona
  it('should filter patients by document number', () => {
    component.numeroBusqueda = '123';
    component.buscarPaciente();
    expect(component.busqueda.length).toBe(1); // Solo debe encontrar 1 paciente
    expect(component.busqueda[0].numeroDocumento).toBe(123); // El paciente encontrado debe tener el documento correcto
  });

  // Prueba 4: Verificar que la búsqueda no se aplica si el campo de búsqueda está vacío
  it('should show all patients when search field is empty', () => {
    component.numeroBusqueda = '';
    component.buscarPaciente();
    expect(component.busqueda.length).toBe(2); // Debe mostrar todos los pacientes
  });

  // Prueba 5: Verificar que al hacer clic en el botón "Ver detalles" se selecciona un paciente
  it('should select a patient when clicking the details button', () => {
    const paciente = component.listaPacientes[0];
    component.seleccionarPaciente(paciente);
    expect(component.pacienteSeleccionado).toEqual(paciente); // El paciente seleccionado debe coincidir con el paciente clickeado
  });

  // Prueba 6: Verificar que el formulario de registro de pacientes llama al servicio de registro correctamente
  it('should register a new patient', () => {
    const pacienteTest = {
      primerNombre: 'Test',
      segundoNombre: 'Paciente',
      primerApellido: 'Apellido',
      segundoApellido: 'Prueba',
      tipoDocumento: 'DNI',
      numeroDocumento: 789,
      numeroCelular: 123456789,
      direccion: 'Test Street',
      pais: 'Test Country',
      departamento: 'Test Department',
      ciudad: 'Test City',
      email: 'test@correo.com'
    };

    spyOn(pacienteService, 'registrarPaciente').and.callThrough(); // Espía el método registrarPaciente
    component.nuevoPaciente = pacienteTest;

    const form = { valid: true } as NgForm; // Simulamos un formulario válido
    component.registrarPaciente(form);

    expect(pacienteService.registrarPaciente).toHaveBeenCalledWith(pacienteTest); // Verifica que el servicio haya sido llamado con el paciente correcto
  });

  // Prueba 7: Verificar que el botón "Ver detalles" muestra el modal correctamente
  it('should open modal when clicking on the "Ver detalles" button', () => {
    const button = fixture.debugElement.query(By.css('.btn-info')); // Encuentra el botón de "Ver detalles"
    button.triggerEventHandler('click', null); // Dispara el evento click
    fixture.detectChanges(); // Detecta los cambios en la vista

    const modal = fixture.debugElement.query(By.css('#detallePacienteModal'));
    expect(modal).toBeTruthy(); // Verifica que el modal haya sido mostrado
  });

  // Prueba 8: Verificar la correcta visualización de los pacientes en la tabla
  it('should display patients in the table', () => {
    fixture.detectChanges(); // Recarga la vista del componente
    const rows = fixture.debugElement.queryAll(By.css('table tbody tr')); // Encuentra todas las filas de la tabla
    expect(rows.length).toBe(2); // Deben haber 2 filas en la tabla (correspondientes a 2 pacientes)

    const firstRow = rows[0].nativeElement;
    expect(firstRow.textContent).toContain('123'); // La primera fila debe contener el número de documento 123
    expect(firstRow.textContent).toContain('Juan'); // La primera fila debe contener el primer nombre "Juan"
  });
});
