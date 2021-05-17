import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssociazioneInterventoSt } from 'src/app/classes-services/classes/associazione-intervento-st';
import { CaratteristicheQualitativeSt } from 'src/app/classes-services/classes/caratteristiche-qualitative-st';
import { CaratteristicheStrutturaSt } from 'src/app/classes-services/classes/caratteristiche-struttura-st';
import { StrutturaSt } from 'src/app/classes-services/classes/structure/struttura-st';
import { TipoEdificioSt } from 'src/app/classes-services/classes/tipo-edificio-st';
import { AssociazioneInterventoStService } from 'src/app/classes-services/services/associazione-intervento-st.service';
import { CaratteristicheStrutturaStService } from 'src/app/classes-services/services/caratteristiche-struttura-st.service';
import { EdificioStService } from 'src/app/classes-services/services/edificio-st.service';
import { ElementiStrutturaStService } from 'src/app/classes-services/services/elementi-struttura-st.service';
import { RisultatoSelezioneStService } from 'src/app/classes-services/services/risultato-selezione-st.service';

@Component({
  selector: 'app-aggiunta-intervento-secondario-breve-st',
  templateUrl: './aggiunta-intervento-secondario-breve-st.component.html',
  styleUrls: ['./aggiunta-intervento-secondario-breve-st.component.css']
})
export class AggiuntaInterventoSecondarioBreveStComponent implements OnInit {

  constructor(
    private risultatoSelezione: RisultatoSelezioneStService,
    private router: Router,
    private strutturaService: ElementiStrutturaStService,
    private serviceAssociazione: AssociazioneInterventoStService,
    private emsService: EdificioStService,
    private caratteristicheStrutturaService: CaratteristicheStrutturaStService,
    private route: ActivatedRoute
  ) {}

  a: boolean
  arraySelezionati: AssociazioneInterventoSt[] = []
  counterClickCheck: number
  selectedIndex: number
  deltaPunteggioFinale: number = 0
  deltaPunteggioPrecedente: number
  buttonIntervento: boolean = false
  vulClass: number
  risk: string
  pam: string
  punteggio: number
  soglia: number
  emsType: number
  variabileIntervento: AssociazioneInterventoSt[] = []
  caratteristiche: CaratteristicheQualitativeSt
  strutturaObj: StrutturaSt[] = []
  car: CaratteristicheQualitativeSt[]
  carSelezionata: CaratteristicheQualitativeSt
  emsCar: TipoEdificioSt[] = []
  carStrutt: CaratteristicheStrutturaSt[]
  ponderazione: number[] = [0, 0, 0, 0, 0, 0]
  selectedElement1: any
  selectedElement2: any
  selectedElement: AssociazioneInterventoSt
  passaggioCaratteristica: string
  interventiSecondari: AssociazioneInterventoSt[] = []
  idCaratteristica: number
  punteggioPassaggioClasse: number
  interventoTabella: string
  interventoSelezionato: AssociazioneInterventoSt | null = null
  punteggioDiVul: number
  punteggioPassaggioClasseAggiornato: number
  selectedMeccanicaIndex: number
  idStruttura: number
  contatoreVolte: number
  caratteristicheSelezionabili: CaratteristicheQualitativeSt[] = []
  interventoSingolo: number
  cambiaCaratteristica: boolean = false
  caratteristicheFinali: CaratteristicheQualitativeSt[] = []
  alert: boolean = false
  vulClassAggiornata: number
  visualizzaRighe: number
  sommaPacchettoInterventi: number
  interventiDaMostrare: AssociazioneInterventoSt[] = []
  
  imgA1 = false
  imgA1parte2 = false
  imgA2 = false
  imgA3 = false
  imgA3parte2 = false
  imgA4 = false
  imgA5 = false
  imgA6 = false
  imgA6parte2 = false
  imgA7 = false
  imgA8 = false
  imgB1 = false
  imgB2 = false
  imgB3 = false
  imgB4 = false
  imgB5 = false
  imgB6 = false
  imgB7 = false
  imgB8 = false
  imgB9 = false
  imgB10 = false
  imgB11 = false
  imgB12 = false
  imgB13 = false
  imgB14 = false
  imgB15 = false
  imgC1 = false
  imgC2 = false
  imgC3 = false
  imgC4 = false
  imgC5 = false
  imgC6 = false
  imgC7 = false
  imgC8 = false
  imgD1 = false
  imgD2 = false
  imgD2parte2 = false
  imgD3 = false
  imgD4 = false
  imgD5 = false
  imgD6 = false
  imgD7 = false
  imgD7parte2 = false
  imgD8 = false
  imgD9 = false
  imgD10 = false
  imgD11 = false
  imgD12 = false
  imgD13 = false
  imgD14 = false
  imgF1 = false
  imgF2 = false
  imgF3 = false
  imgF4 = false
  imgG1 = false
  imgG2 = false
  imgG3 = false
  imgG3parte2 = false
  imgG4 = false
  imgG4parte2 = false
  imgG5 = false
  imgG6 = false
  imgG7 = false
  imgG8 = false
  imgG9 = false
  imgH1 = false
  imgH2 = false
  imgI1 = false
  imgTab01 = false
  imgTab02 = false

  ngOnInit() {
    this.caratteristicheStrutturaService.getStrutturaDalleCaratteristiche().subscribe(caratteristicheStrutture => {
      this.carStrutt = caratteristicheStrutture
    })
    this.interventoSingolo = window.history.state.interventoSingolo
    this.soglia = window.history.state.soglia
    this.punteggioPassaggioClasse = window.history.state.punteggioPassaggioClasse
    this.emsType = 5
    this.vulClass = window.history.state.vulClass;
    this.punteggio = window.history.state.punteggio;
    this.risk = window.history.state.risk;
    this.pam = window.history.state.pam;
    this.caratteristiche = window.history.state.caratteristiche
    this.variabileIntervento = window.history.state.variabileIntervento
    this.ponderazione = window.history.state.ponderazione;
    this.deltaPunteggioPrecedente = window.history.state.deltaPunteggioFinale
    this.punteggioDiVul = window.history.state.punteggioDiVul
    this.punteggioPassaggioClasseAggiornato = window.history.state.punteggioPassaggioClasseAggiornato
    this.contatoreVolte = window.history.state.contatoreVolte
    this.vulClassAggiornata = window.history.state.vulClassAggiornata
    this.visualizzaRighe = window.history.state.visualizzaRighe
    this.strutturaService.getCaratteristicheQualitative().subscribe(data => {
      this.car = data
    })
    this.emsService.getTipoEdificio().subscribe(data => {
      this.caratteristicheSelezionabili = []
      this.emsCar = data
      for (let caratteristica of this.emsCar[this.emsType - 1].carQualEms) {
        if(!this.risultatoSelezione.checkCaratteristica(caratteristica.id)) {
          this.caratteristicheSelezionabili.push(caratteristica)
          const caratteristicheFinali: CaratteristicheQualitativeSt[] = []
          this.caratteristicheSelezionabili.forEach(d => {
            const caratteristiche = new CaratteristicheQualitativeSt()
            caratteristiche.id = d.id
            caratteristiche.caratteristicheQualitative = d.caratteristicheQualitative
            caratteristiche.meccanismiAssociati = d.meccanismiAssociati
            caratteristiche.valutazionePunteggio = d.valutazionePunteggio
            caratteristiche.abilitato = d.id == 4 || d.id == 6
            caratteristicheFinali.push(caratteristiche)
            this.caratteristicheFinali = caratteristicheFinali
          })
        }
      }
    })
  }


  selezionaCaratteristica(strCaratteristica: string) {
    this.selectedMeccanicaIndex = 0
    let idCaratteristica = parseInt(strCaratteristica)
    this.strutturaService.getStruttureByCaratteristiche(idCaratteristica).subscribe(car => {
      this.strutturaObj = car
      this.selezionaInterventiByCaratteristicaAndStruttura(this.strutturaObj[0].id)
    })
    this.idCaratteristica = idCaratteristica
  }

  selezionaInterventiByCaratteristicaAndStruttura(idStruttura: number) {
    this.idStruttura = idStruttura
    this.serviceAssociazione.getInterventoByCaratteristicaAndStruttura(this.idCaratteristica, this.idStruttura).subscribe(z => {
      this.interventiSecondari = z
    })
  }

  onChangeIntervento(indexIntervento: number) {
    this.interventoSelezionato = this.interventiSecondari[indexIntervento]
  }

  premiBottone(selezionato: AssociazioneInterventoSt) {
    const nuovo = Object.assign({}, selezionato)
    this.arraySelezionati.push(nuovo)
    this.buttonIntervento = true 
    this.risultatoSelezione.aggiungiIntervento(this.arraySelezionati[0])
  }

  aggiuntaInterventoSecondario() {
    this.risultatoSelezione.aggiungiCaratteristica(this.caratteristiche)
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
      }
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/aggiunta-intervento-secondario-breve-st'], {
      state: {
        interventoSingolo: this.interventoSingolo
        , variabileIntervento: this.variabileIntervento
        , caratteristiche: this.caratteristiche
        , contatoreVolte: this.contatoreVolte
        , visualizzaRighe: this.visualizzaRighe
      }
    })
  }

  trasferisciClasseDiRischio(){
    this.router.navigate(['/riepilogo-costi-st'], {
      state: {
        sommaPacchettoInterventi: this.sommaPacchettoInterventi,
        visualizzaRighe: this.visualizzaRighe
      }
    })
  }
  

  visualizzaCodiceIntervento(codice: string){
    this.imgA1 = false
    this.imgA1parte2 = false
    this.imgA2 = false
    this.imgA3 = false
    this.imgA3parte2 = false
    this.imgA4 = false
    this.imgA5 = false
    this.imgA6 = false
    this.imgA6parte2 = false
    this.imgA7 = false
    this.imgA8 = false
    this.imgB1 = false
    this.imgB2 = false
    this.imgB3 = false
    this.imgB4 = false
    this.imgB5 = false
    this.imgB6 = false
    this.imgB7 = false
    this.imgB8 = false
    this.imgB9 = false
    this.imgB10 = false
    this.imgB11 = false
    this.imgB12 = false
    this.imgB13 = false
    this.imgB14 = false
    this.imgB15 = false
    this.imgC1 = false
    this.imgC2 = false
    this.imgC3 = false
    this.imgC4 = false
    this.imgC5 = false
    this.imgC6 = false
    this.imgC7 = false
    this.imgC8 = false
    this.imgD1 = false
    this.imgD2 = false
    this.imgD2parte2 = false
    this.imgD3 = false
    this.imgD4 = false
    this.imgD5 = false
    this.imgD6 = false
    this.imgD7 = false
    this.imgD7parte2 = false
    this.imgD8 = false
    this.imgD9 = false
    this.imgD10 = false
    this.imgD11 = false
    this.imgD12 = false
    this.imgD13 = false
    this.imgD14 = false
    this.imgF1 = false
    this.imgF2 = false
    this.imgF3 = false
    this.imgF4 = false
    this.imgG1 = false
    this.imgG2 = false
    this.imgG3 = false
    this.imgG3parte2 = false
    this.imgG4 = false
    this.imgG4parte2 = false
    this.imgG5 = false
    this.imgG6 = false
    this.imgG7 = false
    this.imgG8 = false
    this.imgG9 = false
    this.imgH1 = false
    this.imgH2 = false
    this.imgI1 = false
  
    console.log(codice)
    if(codice == "A1"){
      this.imgA1 = true
      this.imgA1parte2 = true
    }
    else if(codice == "A2"){
      this.imgA2 = true
    }    
    else if(codice == "A3"){
      this.imgA3 = true
      this.imgA3parte2 = true
    }   
    else if(codice == "A4"){
      this.imgA4 = true
    }    
    else if(codice == "A5"){
      this.imgA5 = true
    }    
    else if(codice == "A6a" || codice == "A6b" || codice == "A6c" || codice == "A6d"){
      this.imgA6 = true
      this.imgA6parte2 = true
    }   
    else if(codice == "A7"){
      this.imgA7 = true
    }    
    else if(codice == "A8"){
      this.imgA8 = true
    }    
    else if(codice == "B1"){
      this.imgB1 = true
    }  
    else if(codice == "B2"){
      this.imgB2 = true
    }
    else if(codice == "B3"){
      this.imgB3 = true
    }    
    else if(codice == "B4"){
      this.imgB4 = true
    }   
    else if(codice == "B5"){
      this.imgB5 = true
    }    
    else if(codice == "B6"){
      this.imgB6 = true
    }    
    else if(codice == "B7"){
      this.imgB7 = true
    }    
    else if(codice == "B8"){
      this.imgB8 = true
    }    
    else if(codice == "B9"){
      this.imgB9 = true
    }    
    else if(codice == "B10"){
      this.imgB10 = true
    }     
    else if(codice == "B11"){
      this.imgB11 = true
    }
    else if(codice == "B12"){
      this.imgB12 = true
    }    
    else if(codice == "B13"){
      this.imgB13 = true
    }   
    else if(codice == "B14"){
      this.imgB14 = true
    }    
    else if(codice == "B15"){
      this.imgB15 = true
    }    
    else if(codice == "C1"){
      this.imgC1 = true
    }    
    else if(codice == "C2"){
      this.imgC2 = true
    }    
    else if(codice == "C3"){
      this.imgC3 = true
    }    
    else if(codice == "C4"){
      this.imgC4 = true
    }   
    else if(codice == "C5"){
      this.imgC5 = true
    }
    else if(codice == "C6"){
      this.imgC6 = true
    }    
    else if(codice == "C7"){
      this.imgC7 = true
    }   
    else if(codice == "C8"){
      this.imgC8 = true
    }    
    else if(codice == "D1"){
      this.imgD1 = true
    }    
    else if(codice == "D2"){
      this.imgD2 = true
      this.imgD2parte2 = true
    }    
    else if(codice == "D3a" || codice == "D3b"){
      this.imgD3 = true
    }    
    else if(codice == "D4"){
      this.imgD4 = true
    }    
    else if(codice == "D5"){
      this.imgD5 = true
    }  
    else if(codice == "D6"){
      this.imgD6 = true
    }
    else if(codice == "D7"){
      this.imgD7 = true
      this.imgD7parte2 = true
    }    
    else if(codice == "D8"){
      this.imgD8 = true
    }   
    else if(codice == "D9"){
      this.imgD9 = true
    }    
    else if(codice == "D10"){
      this.imgD10 = true
    }    
    else if(codice == "D11"){
      this.imgD11 = true
    }    
    else if(codice == "D12"){
      this.imgD12 = true
    }    
    else if(codice == "D13"){
      this.imgD13 = true
    }    
    else if(codice == "D14"){
      this.imgD14 = true
    }     
    else if(codice == "F1"){
      this.imgF1 = true
    }
    else if(codice == "F2"){
      this.imgF2 = true
    }    
    else if(codice == "F3"){
      this.imgF3 = true
    }   
    else if(codice == "F4"){
      this.imgF4 = true
    }    
    else if(codice == "G1"){
      this.imgG1 = true
    }    
    else if(codice == "G2"){
      this.imgG2 = true
    }    
    else if(codice == "G3"){
      this.imgG3 = true
      this.imgG3parte2 = true
    }    
    else if(codice == "G4"){
      this.imgG4 = true
      this.imgG4parte2 = true
    }    
    else if(codice == "G5"){
      this.imgG5 = true
    } 
    else if(codice == "G6"){
      this.imgG6 = true
    }     
    else if(codice == "G7"){
      this.imgG7 = true
    }
    else if(codice == "G8"){
      this.imgG8 = true
    }    
    else if(codice == "G9"){
      this.imgG9 = true
    }   
    else if(codice == "H1"){
      this.imgH1 = true
    }    
    else if(codice == "H2"){
      this.imgH2 = true
    }    
    else if(codice == "I1"){
      this.imgI1 = true
    }
  }

}
