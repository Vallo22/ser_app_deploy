import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssociazioneInterventoSt } from '../classes-services/classes/associazione-intervento-st';
import { CaratteristicheQualitativeSt } from '../classes-services/classes/caratteristiche-qualitative-st';

@Component({
  selector: 'app-matrice-st',
  templateUrl: './matrice-st.component.html',
  styleUrls: ['./matrice-st.component.css']
})
export class MatriceStComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  numeroArray: number = 0
  x: number = 1
  y: number
  a: number
  cr: number
  mxp: number[] = [0, 0, 0, 0, 0, 0]
  ponderazione: number[] = [0, 0, 0, 0, 0, 0]
  arrayOpposite: number[]
  arr: number[]
  arrayProva: number[] = []
  numeroPrimario
  z: number
  matriceNormalizzata: number[][] = []
  oggetto: any = {}
  matrix: number[][] = []
  matrixRisultati: number[] = [0, 0, 0, 0, 0, 0]
  variabileIntervento: AssociazioneInterventoSt[]
  caratteristiche: CaratteristicheQualitativeSt[]
  vulClass: number
  risk: string
  pam: string
  punteggio: number
  emsType: number
  interventoSelezionato: AssociazioneInterventoSt | null = null
  idStruttura: number = 0
  idCaratteristica: number = 0
  contatoreVolte: number
  interventoSingolo: number
  interventiSecondari: AssociazioneInterventoSt[]
  showDiv: boolean = true
  showAlert: boolean = false
  showMatrice: boolean = false
  punteggioDiVul: number
  vulClassAggiornata: number

  scelta: boolean = true
  scelta2: boolean = true
  scelta3: boolean = true
  scelta4: boolean = true
  scelta5: boolean = true
  scelta6: boolean = true
  scelta7: boolean = true
  scelta8: boolean = true
  scelta9: boolean = true
  scelta10: boolean = true
  scelta11: boolean = true
  scelta12: boolean = true
  scelta13: boolean = true
  scelta14: boolean = true
  scelta15: boolean = true

  arrayStringhe = [
    "MDC",
    "EFF",
    "CV",
    "REV",
    "SDC",
    "EDI"
  ]

  arrayComparazioneFrazioni = [
    { id: 1, char: "1.", num: 1 / 9 },
    { id: 2, char: "2. di poco", num: 1 / 8 },
    { id: 3, char: "3.", num: 1 / 7 },
    { id: 4, char: "4. abbastanza", num: 1 / 6 },
    { id: 5, char: "5.", num: 1 / 5 },
    { id: 6, char: "6. decisamente", num: 1 / 4 },
    { id: 7, char: "7.", num: 1 / 3 },
    { id: 8, char: "8. assolutamente", num: 1 / 2 }
  ]

  arrayComparazioneInteri = [
    { id: 1, char: "1.", num: 2 },
    { id: 2, char: "2. di poco", num: 3 },
    { id: 3, char: "3.", num: 4 },
    { id: 4, char: "4. abbastanza", num: 5 },
    { id: 5, char: "5.", num: 6 },
    { id: 6, char: "6. decisamente", num: 7 },
    { id: 7, char: "7.", num: 8 },
    { id: 8, char: "8. assolutamente", num: 9 }
  ]

  arrayComparazione = [
    { id: 1, char: "1/9", num: 1 / 9 },
    { id: 2, char: "1/8", num: 1 / 8 },
    { id: 3, char: "1/7", num: 1 / 7 },
    { id: 4, char: "1/6", num: 1 / 6 },
    { id: 5, char: "1/5", num: 1 / 5 },
    { id: 6, char: "1/4", num: 1 / 4 },
    { id: 7, char: "1/3", num: 1 / 3 },
    { id: 8, char: "1/2", num: 1 / 2 },
    { id: 9, char: "2", num: 2 },
    { id: 10, char: "3", num: 3 },
    { id: 11, char: "4", num: 4 },
    { id: 12, char: "5", num: 5 },
    { id: 13, char: "6", num: 6 },
    { id: 14, char: "7", num: 7 },
    { id: 15, char: "8", num: 8 },
    { id: 16, char: "9", num: 9 }
  ]

  ngOnInit() {
    this.interventoSingolo = window.history.state.interventoSingolo
    this.contatoreVolte = window.history.state.contatoreVolte
    console.log("Contatore: ",this.contatoreVolte)
    this.emsType = window.history.state.emsType
    this.vulClass = window.history.state.vulClass;
    this.punteggio = window.history.state.punteggio;
    this.risk = window.history.state.risk;
    this.pam = window.history.state.pam;
    this.variabileIntervento = window.history.state.variabileIntervento
    this.caratteristiche = window.history.state.caratteristiche
    this.interventoSelezionato = window.history.state.interventoSelezionato
    this.interventiSecondari = window.history.state.interventiSecondari
    this.idCaratteristica = window.history.state.idCaratteristica
    this.idStruttura = window.history.state.idStruttura
    this.punteggioDiVul = window.history.state.punteggioDiVul
    this.vulClassAggiornata = window.history.state.vulClassAggiornata
    if(this.contatoreVolte == undefined) {
      this.variabileIntervento.forEach(t => {
        if(t.passaggio == 1) {
          this.showAlert = true
        } else {
          this.showMatrice = true
        }
      })
    } else {
      this.interventiSecondari.forEach(t => {
        if(t.passaggio == 1) {
          this.showAlert = true
        } else {
          this.showMatrice = true
        }
      })
    }
    for (let r = 0; r < 6; r++) {
      this.matriceNormalizzata.push([0, 0, 0, 0, 0, 0])
      this.matrix[r] = []
      this.oggetto[r] = {}
      this.oggetto[r][r] = 1
      for (let c = 0; c < 6; c++) {
        if (r == c) {
          this.matrix[r].push(1)
          this.oggetto[r][c] = 1
        }
        if (r > c) {
          this.matrix[r].push(1 / 2)
          this.oggetto[r][c] = 1 / 2
        }
        else if (r < c) {
          this.matrix[r].push(2)
          this.oggetto[r][c] = 2
        }
      }
    }
    this.onSelectChange(0, 0)
  }

  onSelectChange(r: number, c: number) {
    this.oggetto[c][r] = 1 / this.oggetto[r][c]
    this.matrixRisultati = [0, 0, 0, 0, 0, 0]
    for (let r = 0; r < this.matrix.length; r++) {
      for (let c = 0; c < this.matrix[r].length; c++) {
        this.matrixRisultati[c] += this.oggetto[r][c] !== undefined ? this.oggetto[r][c] : 0
      }
    }
    for (let r = 0; r < this.matriceNormalizzata.length; r++) {
      for (let c = 0; c < this.matriceNormalizzata[r].length; c++) {
        this.matriceNormalizzata[r][c] = this.oggetto[r][c] / this.matrixRisultati[c]
      }
    }
    this.ponderazione = [0, 0, 0, 0, 0, 0]
    for (let r = 0; r < this.matriceNormalizzata.length; r++) {
      for (let c = 0; c < this.matriceNormalizzata[r].length; c++) {
        this.ponderazione[r] += this.matriceNormalizzata[r][c]
      }
      this.ponderazione[r] = this.ponderazione[r] / this.matriceNormalizzata.length
    }
    for (let r = 0; r < 6; r++) {
      let riga = []
      for (let c = 0; c < 6; c++) {
        riga.push(this.oggetto[r][c] !== undefined ? this.oggetto[r][c] : 0)
      }
      this.mxp[r] = this.prodottoVettoriale(riga, this.ponderazione)
    }
    let lambda = 0
    for (let r in this.mxp) {
      lambda += this.mxp[r] / this.ponderazione[r]
    }
    lambda = lambda / 6
    let ci = (lambda - 6) / 5
    let ri = 1.24
    this.cr = ci / ri
  }

  prodottoVettoriale(array1: number[], array2: number[]) {
    let risultato = 0
    for (let r = 0; r < array1.length; r++) {
      risultato = risultato + array1[r] * array2[r]
    }
    return risultato
  }

  metodo1(element: number) {
    this.arrayComparazione.find(t => t.id == element);
    this.numeroPrimario = element;
    if (this.numeroPrimario < 1) {
      this.y = 1 / (this.numeroPrimario.valueOf())
    }
    if (this.numeroPrimario > 1) {
      this.y = this.numeroPrimario.valueOf() * (1 / (this.numeroPrimario.valueOf() * this.numeroPrimario.valueOf()))
    }
  }

  mostra() {
    this.showDiv = false;
  }

  trasferisciPonderazione() {
    this.showAlert = false
    this.showMatrice = false
    console.log("mod cost: " + this.ponderazione[0]*100 + "%")
    console.log("efficacia: " + this.ponderazione[1]*100 + "%")
    console.log("comp visiva: " + this.ponderazione[2]*100 + "%")
    console.log("reversibilità: " + this.ponderazione[3]*100 + "%")
    console.log("sempl di cant: " + this.ponderazione[4]*100 + "%")
    console.log("eseg di ingomb: " + this.ponderazione[5]*100 + "%")
    if(this.contatoreVolte == 0 || this.contatoreVolte == undefined){
    this.contatoreVolte = 1
    this.router.navigate(['/valutazione-interventi-st'], {
      state: {
        emsType: this.emsType
        , vulClass: this.vulClass
        , punteggio: this.punteggio
        , risk: this.risk
        , pam: this.pam
        , caratteristiche: this.caratteristiche
        , ponderazione: this.ponderazione
        , variabileIntervento: this.variabileIntervento
        , idStruttura: this.idStruttura
        , idCaratteristica: this.idCaratteristica
        , interventoSelezionato: this.interventoSelezionato
        , contatoreVolte: this.contatoreVolte
      }
    })
  }else{
    this.router.navigate(['/valutazione-interventi-secondario-st'], {
      state: {
        emsType: this.emsType
        , vulClass: this.vulClass
        , punteggio: this.punteggio
        , risk: this.risk
        , pam: this.pam
        , caratteristiche: this.caratteristiche
        , ponderazione: this.ponderazione
        , variabileIntervento: this.variabileIntervento
        , idStruttura: this.idStruttura
        , idCaratteristica: this.idCaratteristica
        , interventoSelezionato: this.interventoSelezionato
        , interventiSecondari: this.interventiSecondari
        , contatoreVolte: this.contatoreVolte
        , interventoSingolo: this.interventoSingolo
        , punteggioDiVul: this.punteggioDiVul
        , vulClassAggiornata: this.vulClassAggiornata
      }
    })
  }
  }

  proseguiSenzaMatrice() {
    if(this.contatoreVolte == 0 || this.contatoreVolte == undefined){
      this.contatoreVolte = 1
      this.router.navigate(['/valutazione-interventi-st'], {
        state: {
          emsType: this.emsType
          , vulClass: this.vulClass
          , punteggio: this.punteggio
          , risk: this.risk
          , pam: this.pam
          , caratteristiche: this.caratteristiche
          , ponderazione: this.ponderazione
          , variabileIntervento: this.variabileIntervento
          , idStruttura: this.idStruttura
          , idCaratteristica: this.idCaratteristica
          , interventoSelezionato: this.interventoSelezionato
          , contatoreVolte: this.contatoreVolte
        }
      })
    }else{
      this.router.navigate(['/valutazione-interventi-secondario-st'], {
        state: {
          emsType: this.emsType
          , vulClass: this.vulClass
          , punteggio: this.punteggio
          , risk: this.risk
          , pam: this.pam
          , caratteristiche: this.caratteristiche
          , ponderazione: this.ponderazione
          , variabileIntervento: this.variabileIntervento
          , idStruttura: this.idStruttura
          , idCaratteristica: this.idCaratteristica
          , interventoSelezionato: this.interventoSelezionato
          , interventiSecondari: this.interventiSecondari
          , contatoreVolte: this.contatoreVolte
          , interventoSingolo: this.interventoSingolo
          , punteggioDiVul: this.punteggioDiVul
          , vulClassAggiornata: this.vulClassAggiornata
        }
      })
    }
  }

}
