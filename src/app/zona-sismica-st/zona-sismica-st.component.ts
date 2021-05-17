import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zona-sismica-st',
  templateUrl: './zona-sismica-st.component.html',
  styleUrls: ['./zona-sismica-st.component.css']
})
export class ZonaSismicaStComponent implements OnInit {

  vulClass: number
  risk: string
  pam: string
  punteggio: number
  emsType: number
  msg1: boolean = false
  riskType: number
  value: number[] = []
  messaggio1: boolean = false
  far: boolean = false
  valore: number

  classeAA: boolean = false
  classeA: boolean = false
  classeB: boolean = false
  classeC: boolean = false
  classeD: boolean = false
  classeE: boolean = false
  classeF: boolean = false
  classeG: boolean = false
  vulClassImg1: boolean = false
  vulClassImg2: boolean = false
  vulClassImg3 :boolean = false
  vulClassImg4 :boolean = false
  vulClassImg5 :boolean = false
  vulClassImg6 :boolean = false

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.emsType = window.history.state.emsType
    this.vulClass = window.history.state.vulClass;
    this.punteggio = window.history.state.punteggio;
    
    if(this.vulClass == 1){
      this.vulClassImg1 = true
    }
    if(this.vulClass == 2){
      this.vulClassImg2 = true
    }
    if(this.vulClass == 3){
      this.vulClassImg3 = true
    }
    if(this.vulClass == 4){
      this.vulClassImg4 = true
    }
    if(this.vulClass == 5){
      this.vulClassImg5 = true
    }
    if(this.vulClass == 6){
      this.vulClassImg6 = true
    }
  }

  onChange(zonaId: number) {
    this.zonaSismica.find(t => t.id == zonaId);
    this.riskType = zonaId
  }

  zonaSismica = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 }
  ];

  gradoDiRischio() {
    this.classeAA = false
    this.classeA = false
    this.classeB = false
    this.classeC = false
    this.classeD = false
    this.classeE = false
    this.classeF = false
    this.classeG = false

    if (this.vulClass == 6 && this.riskType == 1) {
      this.risk = "G"
      this.pam = "7,5%"
      this.classeG = true
    }
    if (this.vulClass == 6 && this.riskType == 2) {
      this.risk = "F"
      this.pam = "4,5% ÷ 7,5%"
      this.classeF = true
    }
    if (this.vulClass == 6 && this.riskType == 3) {
      this.risk = "D"
      this.pam = "2,5% ÷ 3,5%"
      this.classeD = true
    }
    if (this.vulClass == 6 && this.riskType == 4) {
      this.risk = "C"
      this.pam = "1,5% ÷ 2,5%"
      this.classeC = true
    }
    if (this.vulClass == 5 && this.riskType == 1) {
      this.risk = "F"
      this.pam = "4,5% ÷ 7,5%"
      this.classeF = true
    }
    if (this.vulClass == 5 && this.riskType == 2) {
      this.risk = "E"
      this.pam = "3,5% ÷ 4,5%"
      this.classeE = true
    }
    if (this.vulClass == 5 && this.riskType == 3) {
      this.risk = "D"
      this.pam = "2,5% ÷ 3,5%"
      this.classeD = true
    }
    if (this.vulClass == 5 && this.riskType == 4) {
      this.risk = "B"
      this.pam = "1% ÷ 1,5%"
      this.classeB = true
    }
    if (this.vulClass == 4 && this.riskType == 1) {
      this.risk = "E"
      this.pam = "3,5% ÷ 4,5%"
      this.classeE = true
    }
    if (this.vulClass == 4 && this.riskType == 2) {
      this.risk = "D"
      this.pam = "2,5% ÷ 3,5%"
      this.classeD = true
    }
    if (this.vulClass == 4 && this.riskType == 3) {
      this.risk = "C"
      this.pam = "1,5% ÷ 2,5%"
      this.classeC = true
    }
    if (this.vulClass == 4 && this.riskType == 4) {
      this.risk = "A"
      this.pam = "0,5% ÷ 1%"
      this.classeA = true
    }
    if (this.vulClass == 3 && this.riskType == 1) {
      this.risk = "D"
      this.pam = "2,5% ÷ 3,5%"
      this.classeD = true
    }
    if (this.vulClass == 3 && this.riskType == 2) {
      this.risk = "C"
      this.pam = "1,5% ÷ 2,5%"
      this.classeC = true
    }
    if (this.vulClass == 3 && this.riskType == 3) {
      this.risk = "B"
      this.pam = "1% ÷ 1,5%"
      this.classeB = true
    }
    if (this.vulClass == 3 && this.riskType == 4) {
      this.risk = "A"
      this.pam = "0,5% ÷ 1%"
      this.classeA = true
    }
    if (this.vulClass == 2 && this.riskType == 1) {
      this.risk = "C"
      this.pam = "1,5% ÷ 2,5%"
      this.classeC = true
    }
    if (this.vulClass == 2 && this.riskType == 2) {
      this.risk = "B"
      this.pam = "1% ÷ 1,5%"
      this.classeB = true
    }
    if (this.vulClass == 2 && this.riskType == 3) {
      this.risk = "A"
      this.pam = "0,5% ÷ 1%"
      this.classeA = true
    }
    if (this.vulClass == 2 && this.riskType == 4) {
      this.risk = "A+"
      this.pam = "≤0,5%"
      this.classeAA = true
    }
    this.msg1 = true
    this.far = true
  }

  mandaValori() {
    this.router.navigate(['/tipo-struttura-st'], {
      state: { emsType: this.emsType, vulClass: this.vulClass, punteggio: this.punteggio, risk: this.risk, pam: this.pam }
    })
    console.log("zona sismica: " + this.riskType)
    console.log("rischio: " + this.risk)
    console.log("pam: " + this.pam)
  }
  
}
