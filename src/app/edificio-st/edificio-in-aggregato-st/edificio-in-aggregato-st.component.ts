import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoEdificioSt } from 'src/app/classes-services/classes/tipo-edificio-st';
import { EdificioStService } from 'src/app/classes-services/services/edificio-st.service';

@Component({
  selector: 'app-edificio-in-aggregato-st',
  templateUrl: './edificio-in-aggregato-st.component.html',
  styleUrls: ['./edificio-in-aggregato-st.component.css']
})
export class EdificioInAggregatoStComponent implements OnInit {

  edificioInAggregato: TipoEdificioSt[]
  avantiAbilitato = false
  tipoEdificioSelezionato: TipoEdificioSt
  emsType: number

  constructor(
    private router: Router,
    private edificioService: EdificioStService
    ) {}

  ngOnInit() {
    this.edificioService.getTipoEdificio().subscribe(data => {
      this.edificioInAggregato = data;
    })
  }

  onChange(tipoEdificioId: number) {
    this.tipoEdificioSelezionato = this.edificioInAggregato.find(t => t.id==tipoEdificioId)
    this.avantiAbilitato = this.tipoEdificioSelezionato.abilitato
    this.emsType = this.tipoEdificioSelezionato.id
  }

  outputSelezione() {
    this.router.navigate(['/edificio-in-aggregato-st-q', this.tipoEdificioSelezionato.id], { state: {emsType: this.emsType} })
    console.log("tipo edificio selezionato: ", this.tipoEdificioSelezionato.id)
  }
  
}
