import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssociazioneInterventoSt } from '../classes-services/classes/associazione-intervento-st';
import { CostoAAB } from '../classes-services/classes/damage/costo-aab';
import { CostoC } from '../classes-services/classes/damage/costo-c';
import { CostoDE } from '../classes-services/classes/damage/costo-de';
import { CostoFG } from '../classes-services/classes/damage/costo-fg';
import { RisultatoSelezioneStService } from '../classes-services/services/risultato-selezione-st.service';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-riepilogo-costi-st',
  templateUrl: './riepilogo-costi-st.component.html',
  styleUrls: ['./riepilogo-costi-st.component.css']
})
export class RiepilogoCostiStComponent implements OnInit {

  constructor(
    private router: Router,
    private risultatoSelezione: RisultatoSelezioneStService
  ) { }
  
  interventi: AssociazioneInterventoSt[] = []
  risk: string
  soglia: number
  vulClass: number
  vulClassAggiornata: number
  sommaPacchettoInterventi: number
  tipo_superficie: number = 0
  totale: number = 0
  risultatoDivisione: number
  punteggio: number
  punteggioDiVul: number
  prezzoParziale = []
  selezione: number
  inputUtente: number
  costoDiRiparazione: number = 0
  visualizzaRighe: number
  nomeCosto: string
  listaStrutturali = []
  alert: boolean = false
  
  costoAAB: CostoAAB[] = [
    {id: 1, nome: "D2", costo: 240},
    {id: 2, nome: "D3", costo: 840},
    {id: 3, nome: "D4", costo: 1200},
    {id: 4, nome: "D5", costo: 1200}
  ]

  costoFG: CostoFG[] = [
    {id: 5, nome: "D0", costo: 840},
    {id: 6, nome: "D1", costo: 840},
    {id: 7, nome: "D2", costo: 1080},
    {id: 8, nome: "D3", costo: 1200},
    {id: 9, nome: "D4", costo: 1200},
    {id: 10, nome: "D5", costo: 1200}
  ]

  costoC: CostoC[] = [
    {id: 11, nome: "D0", costo: 240},
    {id: 12, nome: "D1", costo: 240},
    {id: 13, nome: "D2", costo: 600},
    {id: 14, nome: "D3", costo: 840},
    {id: 15, nome: "D4", costo: 1200},
    {id: 16, nome: "D5", costo: 1200}
  ]

  costoDE: CostoDE[] = [
    {id: 17, nome: "D0", costo: 600},
    {id: 18, nome: "D1", costo: 600},
    {id: 19, nome: "D2", costo: 840},
    {id: 20, nome: "D3", costo: 1080},
    {id: 21, nome: "D4", costo: 1200},
    {id: 22, nome: "D5", costo: 1200}
  ]

  ngOnInit() {
    this.sommaPacchettoInterventi = window.history.state.sommaPacchettoInterventi
    this.soglia = window.history.state.soglia
    this.vulClass = window.history.state.vulClass
    this.risk = window.history.state.risk;
    this.punteggio = window.history.state.punteggio
    this.punteggioDiVul = window.history.state.punteggioDiVul
    this.vulClassAggiornata = window.history.state.vulClassAggiornata
    this.visualizzaRighe = window.history.state.visualizzaRighe
    this.risultatoSelezione.interventiSelezionati.forEach(z => {
      this.interventi.push(z)
    })
    this.interventi.forEach(c => {
      this.listaStrutturali.push(c.intervento.codice)
    })
  }

  calcolaInvestimentoTotale(){
    this.totale = 0
    this.interventi.forEach(z => {
      let pr: number
      if(z.tipo_superficie == 1) {
        pr = z.prezzo * z.valoreCifra
      } else if(z.tipo_superficie == 2) {
        pr = z.prezzoSupInt * z.valoreCifra
      } else if(z.tipo_superficie == 3) {
        pr = z.prezzoEntrInt * z.valoreCifra
      } else if(z.tipo_superficie == 4) {
        pr = 33.83 * z.valoreCifra
      } else if(z.tipo_superficie == 5) {
        pr = 54.96 * z.valoreCifra
      } else if(z.tipo_superficie == 6) {
        pr = 728.07 * z.valoreCifra
      } else if(z.tipo_superficie == 7) {
        pr = 180 * z.valoreCifra
      } else if(z.tipo_superficie == 8) {
        pr = 234.93 * z.valoreCifra
      }
      this.prezzoParziale.push(pr)
      this.totale += pr
    })
    console.log("costo investimento totale: " + this.totale)
    this.risultatoDivisione = this.totale/this.soglia
  }

  onChangeCostoAAB(costo: number) {
    if(costo == 240) {
      this.nomeCosto = "D2"
    } else if(costo == 840) {
      this.nomeCosto = "D3"
    } else if(costo == 1200) {
      this.nomeCosto = "D4 / D5"
    }
  }

  onChangeCostoFG(costo: number) {
    if(costo == 840) {
      this.nomeCosto = "D0 / D1"
    } else if(costo == 1080) {
      this.nomeCosto = "D2"
    } else if(costo == 1200) {
      this.nomeCosto = "D3 / D4 / D5"
    }
  }

  onChangeCostoC(costo: number) {
    if(costo == 240) {
      this.nomeCosto = "D0 / D1"
    } else if(costo == 600) {
      this.nomeCosto = "D2"
    } else if(costo == 840) {
      this.nomeCosto = "D3"
    } else if(costo == 1200) {
      this.nomeCosto = "D4 / D5"
    }
  }

  onChangeCostoDE(costo: number) {
    if(costo == 600) {
      this.nomeCosto = "D0 / D1"
    } else if(costo == 840) {
      this.nomeCosto = "D2"
    } else if(costo == 1080) {
      this.nomeCosto = "D3"
    } else if(costo == 1200) {
      this.nomeCosto = "D4 / D5"
    }
  }

  mostraTotaleRiparazione() {
    this.costoDiRiparazione = this.inputUtente * this.selezione
    console.log("costo di riparazione: " + this.costoDiRiparazione)
  }

  trasferisciInterventi() {
    if(this.totale == undefined || this.totale <= 0) {
      this.alert = true
      window.scrollTo(0, 0)
    } else {
      this.router.navigate(['/riepilogo-combinato-st'], {
        state: {
          interventi: this.interventi,
          soglia: this.soglia,
          vulClass: this.vulClass,
          risk: this.risk,
          punteggio: this.punteggio,
          punteggioDiVul: this.punteggioDiVul,
          vulClassAggiornata: this.vulClassAggiornata,
          totale: this.totale,
          prezzoParziale: this.prezzoParziale,
          costoDiRiparazione: this.costoDiRiparazione,
          visualizzaRighe: this.visualizzaRighe,
          nomeCosto: this.nomeCosto,
          listaStrutturali: this.listaStrutturali
        }
      })
    }
  }

}
