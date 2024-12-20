import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { HistoriaClinica } from '../models/historiaClinica';

@Injectable({
  providedIn: 'root'
})
export class HistoriaClinicaService {

  private apiUrl = 'http://localhost:3000/historiasClinicas'

  constructor(private http:HttpClient) { }

  getHistoriaClinica(numeroDocumento: number): Observable<HistoriaClinica[]> {
    return this.http.get<HistoriaClinica[]>(`${this.apiUrl}?numeroDocumento =${numeroDocumento}`) 
  }

  postHistoriaClinica(historiaClinica: HistoriaClinica): Observable<HistoriaClinica> {
    return this.http.post<HistoriaClinica>(this.apiUrl, historiaClinica)
  }
}
