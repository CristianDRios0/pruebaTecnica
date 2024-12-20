import { Component } from '@angular/core';
import { HistoriaClinica } from '../../models/historiaClinica';
import { HistoriaClinicaService } from '../../servicios/historia-clinica.service';

@Component({
  selector: 'app-listar-historia',
  templateUrl: './listar-historia.component.html',
  styleUrl: './listar-historia.component.scss'
})
export class ListarHistoriaComponent {

  numeroBusqueda: string = ''
  busqueda: HistoriaClinica[] = []
  todasLasHistorias: HistoriaClinica[] = []

  constructor(private historiaClinicaService: HistoriaClinicaService) {}

  ngOnInit(): void {
    this.historiaClinicaService.getTodasLasHistorias().subscribe(data => {
      this.todasLasHistorias = data;
      this.busqueda = data;
    });
  }

  buscarHistorias(): void{
    if (this.numeroBusqueda.trim() === '') {
      this.busqueda = this.todasLasHistorias
    } else {
      this.busqueda = this.todasLasHistorias.filter(paciente => paciente.numeroDocumento.toString().includes(this.numeroBusqueda))
    }
  }

}
