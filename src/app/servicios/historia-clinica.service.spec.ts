import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HistoriaClinicaService } from './historia-clinica.service';
import { HistoriaClinica } from '../models/historiaClinica';

describe('HistoriaClinicaService', () => {
  let service: HistoriaClinicaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HistoriaClinicaService]
    });
    service = TestBed.inject(HistoriaClinicaService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all medical histories', () => {
    const mockHistorias: HistoriaClinica[] = [
      { numeroDocumento: 12345, fecha: '2024-01-01', descripcion: 'Consulta general', diagnostico: 'Resfriado común', tratamiento: 'Paracetamol y reposo' },
      // Agregar más historias clínicas según sea necesario
    ];
    service.getTodasLasHistorias().subscribe(historias => {
      expect(historias.length).toBeGreaterThan(0);
      expect(historias).toEqual(mockHistorias);
    });
    const req = httpMock.expectOne(service['apiUrl']);
    expect(req.request.method).toBe('GET');
    req.flush(mockHistorias);
  });

  it('should handle error and return empty array', () => {
    service.getTodasLasHistorias().subscribe(historias => {
      expect(historias).toEqual([]);
    });
    const req = httpMock.expectOne(service['apiUrl']);
    req.flush('Error', { status: 500, statusText: 'Server Error' });
  });

  afterEach(() => {
    httpMock.verify();
  });
});
