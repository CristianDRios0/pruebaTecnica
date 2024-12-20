import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarHistoriaComponent } from './listar-historia.component';
import { HistoriaClinicaService } from '../../servicios/historia-clinica.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ListarHistoriaComponent', () => {
  let component: ListarHistoriaComponent;
  let fixture: ComponentFixture<ListarHistoriaComponent>;
  let historiaClinicaService: jasmine.SpyObj<HistoriaClinicaService>;

  // Configuración inicial del test
  beforeEach(async () => {
    const historiaClinicaServiceSpy = jasmine.createSpyObj('HistoriaClinicaService', ['getTodasLasHistorias']);

    await TestBed.configureTestingModule({
      declarations: [ListarHistoriaComponent],
      providers: [
        { provide: HistoriaClinicaService, useValue: historiaClinicaServiceSpy }
      ],
      schemas: [NO_ERRORS_SCHEMA] // Ignora los errores de componentes no declarados
    }).compileComponents();
    
    fixture = TestBed.createComponent(ListarHistoriaComponent);
    component = fixture.componentInstance;
    historiaClinicaService = TestBed.inject(HistoriaClinicaService) as jasmine.SpyObj<HistoriaClinicaService>;

    // Datos simulados para el servicio
    const mockData = [
      { numeroDocumento: 123, fecha: '2021-01-01', descripcion: 'Test', diagnostico: 'Test', tratamiento: 'Test' },
      { numeroDocumento: 456, fecha: '2021-02-01', descripcion: 'Test 2', diagnostico: 'Test 2', tratamiento: 'Test 2' }
    ];
    historiaClinicaService.getTodasLasHistorias.and.returnValue(of(mockData));
    
    fixture.detectChanges();
  });

  // Prueba 1: Verificar que el componente se cree correctamente
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // Prueba 2: Verificar que se llama al servicio `getTodasLasHistorias` y se obtienen las historias
  it('should fetch historias on ngOnInit', () => {
    component.ngOnInit();
    expect(historiaClinicaService.getTodasLasHistorias).toHaveBeenCalled();
    expect(component.todasLasHistorias.length).toBeGreaterThan(0); // Asegura que se han cargado historias
  });

  // Prueba 3: Verificar que la función de búsqueda filtra correctamente las historias
  it('should filter historias when searching', () => {
    component.todasLasHistorias = [
      { numeroDocumento: 123, fecha: '2021-01-01', descripcion: 'Test', diagnostico: 'Test', tratamiento: 'Test' },
      { numeroDocumento: 456, fecha: '2021-02-01', descripcion: 'Test 2', diagnostico: 'Test 2', tratamiento: 'Test 2' }
    ];
    component.numeroBusqueda = '123';
    component.buscarHistorias();
    expect(component.busqueda.length).toBe(1); // Sólo debe haber una historia
    expect(component.busqueda[0].numeroDocumento).toBe(123);
  });

  // Prueba 4: Verificar que se muestran todas las historias cuando se borra el campo de búsqueda
  it('should display all historias when the search input is cleared', () => {
    component.todasLasHistorias = [
      { numeroDocumento: 123, fecha: '2021-01-01', descripcion: 'Test', diagnostico: 'Test', tratamiento: 'Test' },
      { numeroDocumento: 456, fecha: '2021-02-01', descripcion: 'Test 2', diagnostico: 'Test 2', tratamiento: 'Test 2' }
    ];
    component.numeroBusqueda = '';
    component.buscarHistorias();
    expect(component.busqueda.length).toBe(2); // Se deben mostrar todas las historias
  });

  // Prueba 5: Verificar que la función `buscarHistorias` es llamada cuando el valor del input cambia
  it('should call buscarHistorias when input changes', () => {
    spyOn(component, 'buscarHistorias');
    const inputElement = fixture.debugElement.query(By.css('input'));
    inputElement.triggerEventHandler('input', { target: inputElement.nativeElement });
    expect(component.buscarHistorias).toHaveBeenCalled();
  });
});
