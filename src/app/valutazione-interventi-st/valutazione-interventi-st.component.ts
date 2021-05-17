import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssociazioneInterventoSt } from '../classes-services/classes/associazione-intervento-st';
import { CaratteristicheQualitativeSt } from '../classes-services/classes/caratteristiche-qualitative-st';
import { StrutturaSt } from '../classes-services/classes/structure/struttura-st';
import { ValutazionePunteggioSt } from '../classes-services/classes/valutazione-punteggio-st';
import { ElementiStrutturaStService } from '../classes-services/services/elementi-struttura-st.service';
import { RisultatoSelezioneStService } from '../classes-services/services/risultato-selezione-st.service';

@Component({
  selector: 'app-valutazione-interventi-st',
  templateUrl: './valutazione-interventi-st.component.html',
  styleUrls: ['./valutazione-interventi-st.component.css']
})
export class ValutazioneInterventiStComponent implements OnInit {

  constructor(
    private risultatoSelezione: RisultatoSelezioneStService,
    private router: Router,
    private service: ElementiStrutturaStService
  ) {
  }

  result: boolean = false
  ponderazione: number[] = [0, 0, 0, 0, 0, 0]
  struttura: StrutturaSt[]
  variabileIntervento: AssociazioneInterventoSt[]
  caratteristiche: CaratteristicheQualitativeSt
  car: CaratteristicheQualitativeSt[]
  totale: number[]
  modCos: number
  effic: number
  supInton: number
  supVis: number
  revers: number
  semplCant: number
  esigIngom: number
  carQual: number
  intervento: number
  strutturaAssociazione: number
  toggleSuperficie: boolean = true
  buttonIntervento: boolean = false
  valutazionePunteggio: ValutazionePunteggioSt[]
  a: boolean = false
  selectedElement1: any
  selectedElement2: any
  deltaPunteggioFinale: number = 0
  vulClass: number
  risk: string
  pam: string
  punteggio: number
  soglia: number
  emsType: number
  arraySelezionati: AssociazioneInterventoSt[] = []
  selectedElement: AssociazioneInterventoSt
  counterClickCheck: number = 0
  punteggioPassaggioClasse: number
  punteggioDiVul: number = 0
  punteggioPassaggioClasseAggiornato: number = 0
  contatoreVolte: number
  interventoSingolo: number
  bottoneVisibile: boolean = false
  bottoneVisibile1: boolean = false
  ugualeA0: boolean = false
  pass: boolean = false
  pass2:boolean = false
  vulClassAggiornata: number

  ngOnInit() {
    this.emsType = window.history.state.emsType
    this.vulClass = window.history.state.vulClass;
    this.punteggio = window.history.state.punteggio;
    this.risk = window.history.state.risk;
    this.pam = window.history.state.pam;
    this.caratteristiche = window.history.state.caratteristiche
    this.variabileIntervento = window.history.state.variabileIntervento
    this.ponderazione = window.history.state.ponderazione;
    this.contatoreVolte = window.history.state.contatoreVolte
    this.service.getCaratteristicheQualitative().subscribe(data => {
      this.car = data
    })
    this.passaggioTrue()
    this.calcoloSoglia()
    this.sogliaUgualeZero()
    
  }

  passaggioTrue() {
    this.variabileIntervento.forEach(t => {
      if(t.passaggio == 0) {
        this.pass = true
        this.cambiaTotale()
        this.massimoNumero()
      } else {
        this.pass2 = true
      }
    })
  }

  sogliaUgualeZero() {
    this.punteggioPassaggioClasse = this.punteggio - this.soglia
  }

  cambiaTotale() {
    this.variabileIntervento.forEach(t => {
      t.totale = []
      for (const i in t.varianti) {
        this.modCos = t.modicitaDiCosto[i] * this.ponderazione[0]
        this.effic = t.efficacia[i] * this.ponderazione[1]
        this.supInton = this.toggleSuperficie ? t.supIntonacate[i] * this.ponderazione[2] : 0
        this.supVis = !this.toggleSuperficie ? t.supVista[i] * this.ponderazione[2] : 0
        this.revers = t.reversibilita[i] * this.ponderazione[3]
        this.semplCant = t.semplicitaDiCantiere[i] * this.ponderazione[4]
        this.esigIngom = t.esiguitaDiIngombro[i] * this.ponderazione[5]
        t.totale.push(this.modCos + this.effic + this.supInton + this.supVis + this.revers + this.semplCant + this.esigIngom)
      }
    })
  }

  calcoloSoglia() {
    if (this.emsType == 3) {
      this.soglia = 50
    }
    else if (this.emsType == 5 && (this.punteggio >= 30 && this.punteggio <= 60)) {
      this.soglia = 30
    }
    else if (this.emsType == 5 && (this.punteggio < 30 || this.punteggio > 60)) {
      this.soglia = 60
    }
    else if (this.emsType == 6 && (this.punteggio >= 30 && this.punteggio <= 60)) {
      this.soglia = 30
    }
    else if (this.emsType == 6 && (this.punteggio < 30 || this.punteggio > 60)) {
      this.soglia = 60
    }
    else if (this.emsType == 7 && (this.punteggio >= 30 && this.punteggio <= 60)) {
      this.soglia = 30
    }
    else if (this.emsType == 7 && (this.punteggio < 30 || this.punteggio > 60)) {
      this.soglia = 60
    }
  }

  massimoNumero() {
    let min = Infinity
    let max = 0
    let maxIndex: number
    let maxIntervento: AssociazioneInterventoSt
    let minIntervento: AssociazioneInterventoSt
    let minIndex: number
    this.variabileIntervento.forEach(interventi => {
      for (let index in interventi.varianti) {
        if (interventi.totale[index] != 0) {
          if (interventi.totale[index] >= max) {
            max = interventi.totale[index]
            maxIntervento = interventi
            maxIndex = parseInt(index)
          }
          if (interventi.totale[index] < min) {
            min = interventi.totale[index]
            minIntervento = interventi
            minIndex = parseInt(index)
          }
        }else if(interventi.totale[index] == 0){
          interventi.ugualeA0 = true
        }
      }
    })
    maxIntervento.maxVariante = maxIndex
    minIntervento.minVariante = minIndex
  }

  aggiuntaInterventoSecondario() {
    this.router.navigate(['/aggiunta-intervento-secondario-st'], {
      state: {
        soglia: this.soglia
        , punteggioPassaggioClasse: this.punteggioPassaggioClasse
        , emsType: this.emsType
        , vulClass: this.vulClass
        , punteggio: this.punteggio
        , risk: this.risk
        , pam: this.pam
        , variabileIntervento: this.variabileIntervento
        , caratteristiche: this.caratteristiche
        , deltaPunteggioFinale: this.deltaPunteggioFinale
        , punteggioPassaggioClasseAggiornato: this.punteggioPassaggioClasseAggiornato
        , punteggioDiVul: this.punteggioDiVul
        , contatoreVolte: this.contatoreVolte
        , interventoSingolo: this.interventoSingolo
        , vulClassAggiornata: this.vulClassAggiornata
      }
    })
  }

  deltaPunteggio1(x: number) {
    this.selectedElement.ante = x
  }

  deltaPunteggio2(y: number) {
    this.selectedElement.post = y
  }

  interventoSingoloRisultato() {
    this.interventoSingolo = this.selectedElement.ante - this.selectedElement.post
    console.log("punteggio pre: " + this.selectedElement.ante)
    console.log("punteggio post: " + this.selectedElement.post)
  }

  risultatoDelta() {
    this.deltaPunteggioFinale = 0
    this.arraySelezionati.forEach(selezionato => {
      this.deltaPunteggioFinale += selezionato.ante - selezionato.post
    })
    this.punteggioDiVul = this.punteggio - this.deltaPunteggioFinale
    this.punteggioPassaggioClasseAggiornato = this.punteggioPassaggioClasse - this.deltaPunteggioFinale
    if(this.punteggioDiVul < this.soglia) {
      this.vulClassAggiornata = this.vulClass - 1
    } else {
      this.vulClassAggiornata = this.vulClass
    }
    this.a = true
    this.bottoneVisibile = true
  }

  premiBottone(selezionato: AssociazioneInterventoSt, variante: number, index: number, checkBox: boolean) {
    if (!checkBox) {
      let indexToRemove = -1
      for (let index in this.arraySelezionati) {
        let current = this.arraySelezionati[index]
        if (current.caratteristicaAssociazioneIntervento.id === selezionato.caratteristicaAssociazioneIntervento.id && current.strutturaAssociazione.id === selezionato.strutturaAssociazione.id && current.intervento.id === selezionato.intervento.id) {
          indexToRemove = parseInt(index)
          break
        }
      }
      this.arraySelezionati.splice(indexToRemove, 1)
    } else {
      const nuovo = Object.assign({}, selezionato)
      nuovo.ante = 0
      nuovo.post = 0
      this.selectedElement = nuovo
      this.arraySelezionati.push(nuovo)
      this.buttonIntervento = true
      if (selezionato.varianti.length === 0) {
        this.variabileIntervento.splice(index, 1)
      }
    }
    this.risultatoSelezione.aggiungiIntervento(this.arraySelezionati[0])
  }

  trasferisciClasseDiRischio() {
    this.router.navigate(['/riepilogo-costi-st'], {
      state: {
        risk: this.risk,
        vulClass: this.vulClass,
        soglia: this.soglia,
        punteggio: this.punteggio,
        sommaPacchettoInterventi: this.interventoSingolo,
        punteggioDiVul: this.punteggioDiVul,
        vulClassAggiornata: this.vulClassAggiornata
      }
    })
  }

}
