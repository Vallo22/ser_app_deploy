import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssociazioneInterventoSt } from '../classes-services/classes/associazione-intervento-st';
import { CaratteristicheQualitativeSt } from '../classes-services/classes/caratteristiche-qualitative-st';
import { StrutturaSt } from '../classes-services/classes/structure/struttura-st';
import { ValutazionePunteggioSt } from '../classes-services/classes/valutazione-punteggio-st';
import { AssociazioneInterventoStService } from '../classes-services/services/associazione-intervento-st.service';
import { ElementiStrutturaStService } from '../classes-services/services/elementi-struttura-st.service';
import { RisultatoSelezioneStService } from '../classes-services/services/risultato-selezione-st.service';

@Component({
  selector: 'app-valutazione-interventi-secondario-st',
  templateUrl: './valutazione-interventi-secondario-st.component.html',
  styleUrls: ['./valutazione-interventi-secondario-st.component.css']
})
export class ValutazioneInterventiSecondarioStComponent implements OnInit {

  constructor(
    private risultatoSelezione: RisultatoSelezioneStService,
    private router: Router,
    private service: ElementiStrutturaStService,
    private serviceAssociazione: AssociazioneInterventoStService
  ) {
  }

  result: boolean = false
  interventiDaMostrare: AssociazioneInterventoSt[] = []
  ponderazione: number[] = [0, 0, 0, 0, 0, 0]
  struttura: StrutturaSt[]
  variabileIntervento: AssociazioneInterventoSt[]
  caratteristiche: CaratteristicheQualitativeSt
  car: CaratteristicheQualitativeSt[] = []
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
  vulClassAggiornata: number
  idCaratteristica: number
  idStruttura: number
  contatoreVolte: number
  interventoSingolo: number
  interventiSecondari: AssociazioneInterventoSt[]
  arrayDiNumeriIntervento: number[] = []
  sommaPacchettoInterventi: number
  bottoneVisibile: boolean = false
  pass: boolean = false
  pass2:boolean = false
  
  ngOnInit() {
    this.interventoSingolo = window.history.state.interventoSingolo
    this.emsType = window.history.state.emsType
    this.vulClass = window.history.state.vulClass;
    this.punteggio = window.history.state.punteggio;
    this.risk = window.history.state.risk;
    this.contatoreVolte = window.history.state.contatoreVolte
    console.log("Contatore: ", this.contatoreVolte)
    this.pam = window.history.state.pam;
    this.variabileIntervento = window.history.state.variabileIntervento
    this.ponderazione = window.history.state.ponderazione;
    this.idCaratteristica = window.history.state.idCaratteristica
    this.idStruttura = window.history.state.idStruttura
    this.vulClassAggiornata = window.history.state.vulClassAggiornata
    this.risultatoSelezione.interventiSelezionati.forEach(z => {
      this.interventiDaMostrare.push(z)
    })
    this.service.getCaratteristicheQualitative().subscribe(x => {
      this.car = x
      for(let caratteristicaDellArray of this.car){
        if(caratteristicaDellArray.id === this.idCaratteristica){
         this.caratteristiche = caratteristicaDellArray
        }
      }
    })
    this.serviceAssociazione.getInterventoByCaratteristicaAndStruttura(this.idCaratteristica, this.idStruttura).subscribe(z => {
      this.interventiSecondari = this.serviceAssociazione.interventGrouping(z)
      this.interventiSecondari.forEach(t => {
        if(t.passaggio == 0) {
          this.pass = true
          this.cambiaTotale()
          this.massimoNumero()
        } else {
          this.pass2 = true
        }
      })
    })
    this.calcoloSoglia()
    this.sogliaUgualeZero()
    
  }

  sogliaUgualeZero() {
    this.punteggioPassaggioClasse = this.punteggio - this.soglia
  }

  cambiaTotale() {
    this.interventiSecondari.forEach(t => {
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

  aggiuntaInterventoSecondario() {
    console.log("mod cost: " + this.ponderazione[0]*100 + "%")
    console.log("efficacia: " + this.ponderazione[1]*100 + "%")
    console.log("comp visiva: " + this.ponderazione[2]*100 + "%")
    console.log("reversibilità: " + this.ponderazione[3]*100 + "%")
    console.log("sempl di cant: " + this.ponderazione[4]*100 + "%")
    console.log("eseg di ingomb: " + this.ponderazione[5]*100 + "%")
    this.risultatoSelezione.aggiungiCaratteristica(this.caratteristiche)
    this.router.navigate(['/aggiunta-intervento-secondario-st'], {
      state: {
        soglia: this.soglia
        , interventoSingolo: this.interventoSingolo
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
        , vulClassAggiornata: this.vulClassAggiornata
      }
    })
  }

  calcoloParziale(index: number){
    this.sommaPacchettoInterventi = this.deltaPunteggioFinale
    for(let i=0; i<=index; i++){
      this.sommaPacchettoInterventi += this.interventiDaMostrare[i].ante - this.interventiDaMostrare[i].post
    }
    return this.sommaPacchettoInterventi
  }

  risultatoDelta() {
    this.deltaPunteggioFinale = 0
    this.arraySelezionati.forEach(selezionato => {
      this.deltaPunteggioFinale += selezionato.ante - selezionato.post
    })
    this.punteggioDiVul = this.punteggio - this.deltaPunteggioFinale
    this.punteggioPassaggioClasseAggiornato = this.punteggioPassaggioClasse
    if(this.punteggioDiVul < this.soglia) {
      this.vulClassAggiornata = this.vulClass - 1
    } else {
      this.vulClassAggiornata = this.vulClass
    }
    this.a = true
    this.bottoneVisibile = true
  }

  massimoNumero() {
    let min = Infinity
    let max = 0
    let maxIntervento: AssociazioneInterventoSt
    let minIntervento: AssociazioneInterventoSt
    let maxIndex: number
    let minIndex: number
    this.interventiSecondari.forEach(interventi => {
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

  deltaPunteggio1(x: number) {
    this.selectedElement.ante = x
  }

  deltaPunteggio2(y: number) {
    this.selectedElement.post = y
  }

  calcoloSoglia() {
    if (this.emsType == 3) {
      this.soglia = 50
    }
    else if (this.emsType == 5 && (this.punteggio >= 30 && this.punteggio <= 60)) {
      this.soglia = 30
    } 
    else if (this.emsType == 5 && (this.punteggio < 30 || this.punteggio > 60)){
      this.soglia = 60
    }
    else if (this.emsType == 6 && (this.punteggio >= 30 && this.punteggio <= 60)) {
      this.soglia = 30
    } 
    else if (this.emsType == 6 && (this.punteggio < 30 || this.punteggio > 60)){
      this.soglia = 60
    }
    else if (this.emsType == 7 && (this.punteggio >= 30 && this.punteggio <= 60)) {
      this.soglia = 30
    } 
    else if (this.emsType == 7 && (this.punteggio < 30 || this.punteggio > 60)){
      this.soglia = 60
    }
  }

  interventoSingoloRisultato(){
        this.interventoSingolo = this.selectedElement.ante - this.selectedElement.post
        console.log("punteggio pre: " + this.selectedElement.ante)
        console.log("punteggio post: " + this.selectedElement.post)
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
        this.interventiSecondari.splice(index, 1)
      }
    }
    this.risultatoSelezione.aggiungiIntervento(this.arraySelezionati[0])
  }

  trasferisciClasseDiRischio(){
    this.router.navigate(['/riepilogo-costi-st'], {
      state: {
        risk: this.risk,
        soglia: this.soglia,
        sommaPacchettoInterventi: this.sommaPacchettoInterventi,
        punteggio: this.punteggio,
        vulClass: this.vulClass,
        punteggioDiVul: this.punteggioDiVul,
        vulClassAggiornata: this.vulClassAggiornata
      }
    })
  }

}
