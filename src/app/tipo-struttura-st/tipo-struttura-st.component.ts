import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AssociazioneInterventoSt } from '../classes-services/classes/associazione-intervento-st';
import { CaratteristicheQualitativeSt } from '../classes-services/classes/caratteristiche-qualitative-st';
import { StrutturaSt } from '../classes-services/classes/structure/struttura-st';
import { TypeStrutturaSt } from '../classes-services/classes/structure/type-struttura-st';
import { AssociazioneInterventoStService } from '../classes-services/services/associazione-intervento-st.service';
import { ElementiStrutturaStService } from '../classes-services/services/elementi-struttura-st.service';
import { RisultatoSelezioneStService } from '../classes-services/services/risultato-selezione-st.service';

@Component({
  selector: 'app-tipo-struttura-st',
  templateUrl: './tipo-struttura-st.component.html',
  styleUrls: ['./tipo-struttura-st.component.css']
})
export class TipoStrutturaStComponent implements OnInit {

  typeStruttura: TypeStrutturaSt[]
  struttura: StrutturaSt[]
  selectedIndex: number
  selectedElement = []
  selectedMeccanicaIndex: number
  selectArr: number
  caratteristiche: CaratteristicheQualitativeSt[] = []
  subscriptionsToDelete: Subscription = new Subscription()
  variabile1
  associazioneIntervento: AssociazioneInterventoSt[]
  variabileIntervento: AssociazioneInterventoSt[]
  vulClass: number
  risk: string
  pam: string
  punteggio: number
  emsType: number
  arrayPassaggio: AssociazioneInterventoSt[]
  noPass: boolean = false
  alert: boolean = false
  alert2: boolean = false
  showTab: boolean = false
  showTabDue: boolean = false

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

  imgM1 = false
  imgM2 = false
  imgM3 = false
  imgM4 = false
  imgM5 = false
  imgM6 = false
  imgM7 = false
  imgM8 = false
  imgM9 = false
  imgM10 = false
  imgM11 = false
  imgM12 = false
  imgM13 = false
  imgM14 = false
  imgM15 = false
  imgM16 = false

  imgTab01 = false
  imgTab02 = false

  constructor(
    private risultatoSelezione: RisultatoSelezioneStService,
    private router: Router,
    private service: ElementiStrutturaStService,
    private serviceAssociazione: AssociazioneInterventoStService
  ) {
  }

  ngOnInit() {
    this.risultatoSelezione.reset()
    this.emsType = window.history.state.emsType
    this.vulClass = window.history.state.vulClass;
    this.punteggio = window.history.state.punteggio;
    this.risk = window.history.state.risk;
    this.pam = window.history.state.pam;
    this.service.getTypeStruttura().subscribe(data => {
      this.typeStruttura = data;
    })
    this.service.getStruttura().subscribe(data => {
      this.struttura = data;
    })
    this.serviceAssociazione.getAssociazioneIntervento().subscribe(data => {
      this.associazioneIntervento = this.serviceAssociazione.interventGrouping(data);
    })
  }

  onChange(index: number) {
    this.selectedElement = []
    this.struttura.forEach(t => {
      if (t.tipoStruttura.id === this.typeStruttura[index].id) {
        this.selectedElement.push(t)
      }
    })
    this.selectedIndex = 0;
    this.onChangeSecondo(0);
  }

  onChangeSecondo(index: number) {
    this.caratteristiche = this.selectedElement[index].carQuality
    this.selectArr = 0;
    this.selectedMeccanicaIndex = 0;
    this.onChangeCaratteristicheQualitative(0);
  }
  
  onChangeCaratteristicheQualitative(index: number) {
    if (index === 0) {
      this.variabileIntervento = null
    } else {
    this.variabileIntervento = []
    let elemento = this.selectedElement[this.selectedIndex]
    let caratteristica = this.caratteristiche[index]
    this.associazioneIntervento.forEach(t => {
      if (elemento.id == t.strutturaAssociazione.id && caratteristica.id == t.caratteristicaAssociazioneIntervento.id) {
        this.variabileIntervento.push(t);
      }
    })
    this.showTab = false
    this.showTabDue = false
    this.mostraTab()
  }
  }

  trasferisciOggetti() {
    if(this.variabileIntervento == null) {
      this.alert = true
      window.scrollTo(0, 0)
    } else {
      this.variabileIntervento.forEach(t => {
        if(t.intervento.id == 77) {
          this.alert2 = true
          window.scrollTo(0, 0)
        } else {
          this.risultatoSelezione.aggiungiCaratteristica(this.caratteristiche[this.selectArr])
          this.router.navigate(['/matrice-st'], {
          state: { emsType: this.emsType, vulClass: this.vulClass,punteggio: this.punteggio, risk: this.risk, pam: this.pam,  variabileIntervento: this.variabileIntervento, caratteristiche: this.caratteristiche[this.selectArr], selectedMeccanicaIndex: this.selectedMeccanicaIndex }
        })
        }
      })
    }
  }

  mostraTab() {
    this.variabileIntervento.forEach(a => {
      if(a.strutturaAssociazione.id === 1 && a.caratteristicaAssociazioneIntervento.id === 2) {
        this.showTab = true
      } else if(a.strutturaAssociazione.id === 2 && a.caratteristicaAssociazioneIntervento.id === 2) {
        this.showTab = true
      } else if(a.strutturaAssociazione.id === 3 && a.caratteristicaAssociazioneIntervento.id === 2) {
        this.showTab = true
      } else if(a.strutturaAssociazione.id === 8 && a.caratteristicaAssociazioneIntervento.id === 2) {
        this.showTab = true
      } else if(a.strutturaAssociazione.id === 10 && a.caratteristicaAssociazioneIntervento.id === 2) {
        this.showTab = true
      } else if(a.strutturaAssociazione.id === 11 && a.caratteristicaAssociazioneIntervento.id === 2) {
        this.showTab = true
      } else if(a.strutturaAssociazione.id === 13 && a.caratteristicaAssociazioneIntervento.id === 2) {
        this.showTab = true
      } else if(a.strutturaAssociazione.id === 4 && a.caratteristicaAssociazioneIntervento.id === 2) {
        this.showTabDue = true
      } else if(a.strutturaAssociazione.id === 7 && a.caratteristicaAssociazioneIntervento.id === 2) {
        this.showTabDue = true
      } else if(a.strutturaAssociazione.id === 12 && a.caratteristicaAssociazioneIntervento.id === 2) {
        this.showTabDue = true
      } else {
        this.showTab = false
        this.showTabDue = false
      }
    })
  }

  visualizzaTab01(tab: number) {
    if(tab == 1) {
      this.imgTab01 = true
    }
  }

  visualizzaTab02(tab: number) {
    if(tab == 1) {
      this.imgTab02 = true
    }
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
  
    console.log('intervento visualizzato: ' + codice)
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

  visualizzaCodiceMeccanismo(meccanismo: string) {
    this.imgM1 = false
    this.imgM2 = false
    this.imgM3 = false
    this.imgM4 = false
    this.imgM5 = false
    this.imgM6 = false
    this.imgM7 = false
    this.imgM8 = false
    this.imgM9 = false
    this.imgM10 = false
    this.imgM11 = false
    this.imgM12 = false
    this.imgM13 = false
    this.imgM14 = false
    this.imgM15 = false
    this.imgM16 = false
    console.log('meccanismo visualizzato: ' + meccanismo)
    if(meccanismo == "1"){
      this.imgM1 = true
    }
    else if(meccanismo == "2"){
      this.imgM2 = true
    }
    else if(meccanismo == "3"){
      this.imgM3 = true
    }
    else if(meccanismo == "4"){
      this.imgM4 = true
    }
    else if(meccanismo == "5"){
      this.imgM5 = true
    }
    else if(meccanismo == "6"){
      this.imgM6 = true
    }
    else if(meccanismo == "7"){
      this.imgM7 = true
    }
    else if(meccanismo == "8"){
      this.imgM8 = true
    }
    else if(meccanismo == "9"){
      this.imgM9 = true
    }
    else if(meccanismo == "10"){
      this.imgM10 = true
    }
    else if(meccanismo == "11"){
      this.imgM11 = true
    }
    else if(meccanismo == "12"){
      this.imgM12 = true
    }
    else if(meccanismo == "13"){
      this.imgM13 = true
    }
    else if(meccanismo == "14"){
      this.imgM14 = true
    }
    else if(meccanismo == "15"){
      this.imgM15 = true
    }
    else if(meccanismo == "16"){
      this.imgM16 = true
    }
  }

}