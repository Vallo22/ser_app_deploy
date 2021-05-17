import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClasseIndicatoreCe } from '../classes-services/classes/classe-indicatore-ce';
import { ClasseIndicatoreNonCe } from '../classes-services/classes/classe-indicatore-non-ce';
import { IndicatoreCe } from '../classes-services/classes/indicatore-ce';
import { IndicatoreNonCe } from '../classes-services/classes/indicatore-non-ce';
import { PerformanceEnergeticaCeService } from '../classes-services/services/performance-energetica-ce.service';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-performance-energetica-ce',
  templateUrl: './performance-energetica-ce.component.html',
  styleUrls: ['./performance-energetica-ce.component.css']
})
export class PerformanceEnergeticaCeComponent implements OnInit {

  indicatore: IndicatoreCe[]
  classeIndicatore: ClasseIndicatoreCe[]
  indicatoreNon: IndicatoreNonCe[]
  classeIndicatoreNon: ClasseIndicatoreNonCe[]

  selezione: number[] = []
  selezione1: number[] = []
  msg1: boolean = false
  scelta: boolean

  totaleEdificioReale: number
  epglEdificioReale: number
  totaleEdificioIdeale: number
  epglEdificioIdeale: number

  classeEnergetica: string
  classeEnA = false
  classeEnB = false
  classeEnC = false
  classeEnD = false
  classeEnEF = false
  classeEnG = false
  
  constructor(
    private service: PerformanceEnergeticaCeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.service.getIndicatore().subscribe(data => {
      this.indicatore = data;
    })
    this.service.getClasseIndicatore().subscribe(data => {
      this.classeIndicatore = data;
    })
    this.service.getIndicatoreNon().subscribe(data => {
      this.indicatoreNon = data;
    })
    this.service.getClasseIndicatoreNon().subscribe(data => {
      this.classeIndicatoreNon = data;
    })
  }

  inserimentoTrue() {
    this.indicatore.forEach(f =>
      this.selezione.push(this.classeIndicatore.filter(c => c.indicatore.id === f.id)[0].id)
      );
  }

  inserimentoFalse() {
    this.indicatoreNon.forEach(f =>
      this.selezione1.push(this.classeIndicatoreNon.filter(c => c.indicatore.id === f.id)[0].id)
      ); 
  }

  outputTotale() {
    const totaleEdificioReale = this.classeIndicatore
    .filter(c => this.selezione.map(m => +m).includes(c.id))
    .reduce((a, c) => a + c.punteggio, 0);
    this.totaleEdificioReale = totaleEdificioReale

    const epglEdificioReale = Math.exp((this.totaleEdificioReale + 1.68875) / 1.00437 )
    this.epglEdificioReale = epglEdificioReale

    const parziale = this.classeIndicatore
    .filter(c => this.selezione.map(m => +m).includes(c.id))
    .slice(0,5)
    .reduce((a, c) => a + c.punteggio, 0);
    this.totaleEdificioIdeale = parziale + 0.16 + 0.1 + 0.04 + 0.04 + 0.03 + 0.35 + 0.09 + 0.03

    const epglEdificioIdeale = Math.exp((this.totaleEdificioIdeale + 2.1079) / 1.2311 )
    this.epglEdificioIdeale = epglEdificioIdeale

    this.msg1 = true
    this.mostraClasseEnergetica()
  }

  outputTotaleNon() {
    const totaleEdificioReale = this.classeIndicatoreNon
    .filter(c => this.selezione1.map(m => +m).includes(c.id))
    .reduce((a, c) => a + c.punteggio, 0);
    this.totaleEdificioReale = totaleEdificioReale

    const epglEdificioReale = Math.exp((this.totaleEdificioReale + 1.12725) / 0.7474 )
    this.epglEdificioReale = epglEdificioReale

    const parziale = this.classeIndicatoreNon
    .filter(c => this.selezione1.map(m => +m).includes(c.id))
    .slice(0,5)
    .reduce((a, c) => a + c.punteggio, 0);
    this.totaleEdificioIdeale = parziale + 0.16 + 0.1 + 0.04 + 0.04 + 0.03 + 0.35 + 0.14

    const epglEdificioIdeale = Math.exp((this.totaleEdificioIdeale + 2.7453) / 1.3044 )
    this.epglEdificioIdeale = epglEdificioIdeale

    this.msg1 = true
    this.mostraClasseEnergetica()
  }

  mostraClasseEnergetica() {
    this.classeEnA = false
    this.classeEnB = false
    this.classeEnC = false
    this.classeEnD = false
    this.classeEnEF = false
    this.classeEnG = false
    if(this.epglEdificioReale < this.epglEdificioIdeale) {
      this.classeEnergetica = "A*"
      this.classeEnA = true
    } else if (this.epglEdificioReale < (1.2 * this.epglEdificioIdeale)) {
      this.classeEnergetica = "B*"
      this.classeEnB = true
    } else if (this.epglEdificioReale < (1.5 * this.epglEdificioIdeale)) {
      this.classeEnergetica = "C*"
      this.classeEnC = true
    } else if (this.epglEdificioReale < (2 * this.epglEdificioIdeale)) {
      this.classeEnergetica = "D*"
      this.classeEnD = true
    } else if (this.epglEdificioReale < (2.6 * this.epglEdificioIdeale)) {
      this.classeEnergetica = "E*"
      this.classeEnEF = true
    } else if (this.epglEdificioReale < (3.5 * this.epglEdificioIdeale)) {
      this.classeEnergetica = "F*"
      this.classeEnEF = true
    } else {
      this.classeEnergetica = "G*"
      this.classeEnG = true
    }
  }

  prosegui() {
    this.router.navigate(['/tipo-struttura-ce'], {
      state: { classeEnergetica: this.classeEnergetica }
    })
    console.log('totale ed. reale: ' + this.totaleEdificioReale)
    console.log('epgl ed. reale: ' + this.epglEdificioReale)
    console.log('totale ed. ideale: ' + this.totaleEdificioIdeale)
    console.log('epgl ed. ideale: ' + this.epglEdificioIdeale)
    console.log('classe energetica: ' + this.classeEnergetica)
  }
  
}
