import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssociazioneInterventoCe } from '../classes-services/classes/associazione-intervento-ce';
import { CaratteristicheQualitativeCe } from '../classes-services/classes/caratteristiche-qualitative-ce';
import { RisultatoSelezioneCeService } from '../classes-services/services/risultato-selezione-ce.service';
import { TipoStrutturaCeService } from '../classes-services/services/tipo-struttura-ce.service';

@Component({
  selector: 'app-valutazione-interventi-ce',
  templateUrl: './valutazione-interventi-ce.component.html',
  styleUrls: ['./valutazione-interventi-ce.component.css']
})
export class ValutazioneInterventiCeComponent implements OnInit {

  constructor(
    private service: TipoStrutturaCeService,
    private router: Router,
    private risultatoSelezione: RisultatoSelezioneCeService
  ) { }

  ponderazione: number[] = [0, 0, 0, 0, 0, 0]
  variabileIntervento: AssociazioneInterventoCe[]
  caratteristiche: CaratteristicheQualitativeCe
  car: CaratteristicheQualitativeCe[]
  classeEnergetica: string
  pass: boolean = false
  pass2:boolean = false

  modCos: number
  effic: number
  supInton: number
  supEv: number
  supIv: number
  revers: number
  semplCant: number
  esigIngom: number

  tipo_superficie: number = 0
  maxIntervento: AssociazioneInterventoCe
  minIntervento: AssociazioneInterventoCe
  maxIndex: number
  minIndex: number
  mostraBottone: boolean = false;
  arraySelezionati: AssociazioneInterventoCe[] = []

  ngOnInit() {
    this.caratteristiche = window.history.state.caratteristiche
    this.variabileIntervento = window.history.state.variabileIntervento
    this.ponderazione = window.history.state.ponderazione
    this.classeEnergetica = window.history.state.classeEnergetica
    this.service.getCaratteristicheQualitative().subscribe(data => {
      this.car = data
    })
    this.passaggioTrue()
  }

  passaggioTrue() {
    this.variabileIntervento.forEach(t => {
      if(t.passaggio == 0) {
        this.pass = true
        this.calcolaTotale()
      } else {
        this.pass2 = true
      }
    })
  }

  calcolaTotale() {
    this.variabileIntervento.forEach(t => {
      t.totale = []
      for (const i in t.varianti) {
        this.modCos = t.modicitaDiCosto[i] * this.ponderazione[0]
        this.effic = t.efficacia[i] * this.ponderazione[1]
        if (this.tipo_superficie == 1) {
          this.supInton = t.supIntonacate[i] * this.ponderazione[2]
          this.revers = t.reversibilita[i] * this.ponderazione[3]
          this.semplCant = t.semplicitaDiCantiere[i] * this.ponderazione[4]
          this.esigIngom = t.esiguitaDiIngombro[i] * this.ponderazione[5]
          if (this.supInton === 0) {
            t.totale.push(0)
          } else {
            t.totale.push(this.modCos + this.effic + this.supInton + this.revers + this.semplCant + this.esigIngom)
          }
        }
        else if (this.tipo_superficie == 2) {
          this.supEv = t.supEvIi[i] * this.ponderazione[2]
          this.revers = t.reversibilita[i] * this.ponderazione[3]
          this.semplCant = t.semplicitaDiCantiere[i] * this.ponderazione[4]
          this.esigIngom = t.esiguitaDiIngombro[i] * this.ponderazione[5]
          if (this.supEv === 0) {
            t.totale.push(0)
          } else {
            t.totale.push(this.modCos + this.effic + this.supEv + this.revers + this.semplCant + this.esigIngom)
          }
        }
        else if (this.tipo_superficie == 3) {
          this.supIv = t.supIvEi[i] * this.ponderazione[2]
          this.revers = t.reversibilita[i] * this.ponderazione[3]
          this.semplCant = t.semplicitaDiCantiere[i] * this.ponderazione[4]
          this.esigIngom = t.esiguitaDiIngombro[i] * this.ponderazione[5]
          if (this.supIv === 0) {
            t.totale.push(0)
          } else {
            t.totale.push(this.modCos + this.effic + this.supIv + this.revers + this.semplCant + this.esigIngom)
          }
        }
      }
    })
  }

  massimoNumero() {
    let min = Infinity
    let max = 0
    this.variabileIntervento.forEach(interventi => {
      for (let index in interventi.varianti) {
        if (interventi.totale[index] != 0) {
          if (interventi.totale[index] >= max) {
            max = interventi.totale[index]
            this.maxIntervento = interventi
            this.maxIndex = parseInt(index)
          }
          if (interventi.totale[index] < min) {
            min = interventi.totale[index]
            this.minIntervento = interventi
            this.minIndex = parseInt(index)
          }
        }
      }
    })
    this.maxIntervento.maxVariante = this.maxIndex
    this.minIntervento.minVariante = this.minIndex
  }

  premiBottone(selezionato: AssociazioneInterventoCe) {
    const nuovo = Object.assign({}, selezionato)
    this.arraySelezionati.push(nuovo)
    this.massimoNumero()
    this.mostraBottone = true
    this.risultatoSelezione.aggiungiIntervento(this.arraySelezionati[0])
  }

  premiBottoneDue(selezionato: AssociazioneInterventoCe) {
    const nuovo = Object.assign({}, selezionato)
    this.arraySelezionati.push(nuovo)
    this.mostraBottone = true
    this.risultatoSelezione.aggiungiIntervento(this.arraySelezionati[0])
  }

  trasferisciIntervento() {
    this.router.navigate(['/riepilogo-costi-ce'], {
      state: {
        classeEnergetica: this.classeEnergetica
      }
    })
  }

}
