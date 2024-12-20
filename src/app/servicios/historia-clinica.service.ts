import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HistoriaClinica } from '../models/historiaClinica';
import { catchError } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class HistoriaClinicaService {

  private apiUrl = 'http://localhost:3000/historiasClinicas'
  private historiasClinicas: HistoriaClinica[] = [
    {
      numeroDocumento: 12345,
      fecha: '2024-01-01',
      descripcion: 'Consulta general',
      diagnostico: 'Resfriado común',
      tratamiento: 'Paracetamol y reposo'
    },
    {
      numeroDocumento: 67890,
      fecha: '2024-02-15',
      descripcion: 'Chequeo rutinario',
      diagnostico: 'Todo en orden',
      tratamiento: 'Ninguno'
    },
    {
      numeroDocumento: 11223,
      fecha: '2024-03-05',
      descripcion: 'Urgencias por dolor abdominal',
      diagnostico: 'Gastritis',
      tratamiento: 'Medicamentos antiácidos'
    },
    {
      numeroDocumento: 22334,
      fecha: '2024-04-10',
      descripcion: 'Consulta pediátrica',
      diagnostico: 'Fiebre',
      tratamiento: 'Paracetamol y descanso'
    },
    {
      numeroDocumento: 33445,
      fecha: '2024-05-20',
      descripcion: 'Revisión ginecológica',
      diagnostico: 'Sin anormalidades',
      tratamiento: 'Control anual'
    },
    {
      numeroDocumento: 44556,
      fecha: '2024-06-05',
      descripcion: 'Consulta dermatológica',
      diagnostico: 'Acné',
      tratamiento: 'Crema antibiótica y gel para el acné'
    },
    {
      numeroDocumento: 55667,
      fecha: '2024-07-12',
      descripcion: 'Consulta oftalmológica',
      diagnostico: 'Miopía',
      tratamiento: 'Anteojos correctivos'
    },
    {
      numeroDocumento: 66778,
      fecha: '2024-08-22',
      descripcion: 'Chequeo odontológico',
      diagnostico: 'Caries dental',
      tratamiento: 'Relleno dental'
    },
    {
      numeroDocumento: 77889,
      fecha: '2024-09-18',
      descripcion: 'Consulta de control',
      diagnostico: 'Presión arterial alta',
      tratamiento: 'Medicamentos antihipertensivos'
    },
    {
      numeroDocumento: 88990,
      fecha: '2024-10-03',
      descripcion: 'Consulta cardiológica',
      diagnostico: 'Arritmia',
      tratamiento: 'Medicación y monitoreo'
    },
    {
      numeroDocumento: 99101,
      fecha: '2024-11-07',
      descripcion: 'Consulta neumológica',
      diagnostico: 'Asma',
      tratamiento: 'Inhaladores y seguimiento'
    },
    {
      numeroDocumento: 10212,
      fecha: '2024-12-01',
      descripcion: 'Consulta de salud mental',
      diagnostico: 'Ansiedad',
      tratamiento: 'Terapia y medicación ansiolítica'
    },
    {
      numeroDocumento: 11323,
      fecha: '2024-12-05',
      descripcion: 'Chequeo de embarazo',
      diagnostico: 'Embarazo en curso',
      tratamiento: 'Control prenatal'
    },
    {
      numeroDocumento: 12434,
      fecha: '2024-12-10',
      descripcion: 'Revisión de próstata',
      diagnostico: 'Próstata agrandada',
      tratamiento: 'Control periódico'
    },
    {
      numeroDocumento: 13545,
      fecha: '2024-12-15',
      descripcion: 'Consulta endocrinológica',
      diagnostico: 'Hipotiroidismo',
      tratamiento: 'Levotiroxina'
    },
    {
      numeroDocumento: 14656,
      fecha: '2024-12-20',
      descripcion: 'Consulta urológica',
      diagnostico: 'Infección urinaria',
      tratamiento: 'Antibióticos'
    },
    {
      numeroDocumento: 15767,
      fecha: '2024-12-25',
      descripcion: 'Consulta ortopédica',
      diagnostico: 'Lesión de rodilla',
      tratamiento: 'Fisioterapia y descanso'
    },
    {
      numeroDocumento: 16878,
      fecha: '2024-12-30',
      descripcion: 'Consulta dermatológica',
      diagnostico: 'Eczema',
      tratamiento: 'Cremas hidratantes y medicamentos tópicos'
    },
    {
      numeroDocumento: 17989,
      fecha: '2024-12-31',
      descripcion: 'Chequeo de salud',
      diagnostico: 'Estrés',
      tratamiento: 'Terapia de relajación y cambios en estilo de vida'
    },
    {
      numeroDocumento: 18001,
      fecha: '2025-01-01',
      descripcion: 'Revisión de colesterol',
      diagnostico: 'Colesterol alto',
      tratamiento: 'Dieta y medicación'
    }
  ]

  constructor(private http:HttpClient) { }

  getTodasLasHistorias(): Observable<HistoriaClinica[]> {
    return of(this.historiasClinicas).pipe(
      catchError(this.handleError<HistoriaClinica[]>('getTodasLasHistorias', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
