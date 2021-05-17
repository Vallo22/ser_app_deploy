import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EdificioInAggregatoSt } from 'src/app/classes-services/classes/edificio-in-aggregato-st';
import { QualitySt } from 'src/app/classes-services/classes/quality-st';
import { QualitaEdificiStService } from 'src/app/classes-services/services/qualita-edifici-st.service';
import { EdificioInAggregatoStComponent } from '../edificio-in-aggregato-st/edificio-in-aggregato-st.component';

@Component({
  selector: 'app-edificio-singolo-st-q',
  templateUrl: './edificio-singolo-st-q.component.html',
  styleUrls: ['./edificio-singolo-st-q.component.css']
})
export class EdificioSingoloStQComponent implements OnInit {

  edificioInAggregato: { [key: string]: EdificioInAggregatoSt[] } = {}
  edificioSelezionato1: EdificioInAggregatoSt[]
  selezione: number[] = []
  value: number[] = []
  muratura: EdificioInAggregatoStComponent
  edificioFiltro: EdificioInAggregatoSt[]
  quality: QualitySt[] = []
  totalePunteggio: number
  varEmp: number
  vulnerability: number
  msg1: boolean = false
  edificioByQuality: { [key: number]: EdificioInAggregatoSt[] } = {}
  subscriptionsToDelete: Subscription = new Subscription()
  Colors: Array<any> = ["#ce5e59","#fad677","#5a8982"]
  emsType: number

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private qualità: QualitaEdificiStService,
  ) {}

  ngOnInit() {
    this.emsType = window.history.state.emsType
    this.subscriptionsToDelete.add(
      this.route.params.subscribe(params => {
        Object.keys(params['id'])
        this.varEmp = params['id']
      }));
    this.qualità.getQEdificio().subscribe(data => {
      const edifici = {}
      for (const edificio of data) {
        const { tipoStruttura } = edificio.quality.tQuality
        if (!edifici[tipoStruttura]) {
          edifici[tipoStruttura] = []
        }
        edifici[tipoStruttura].push(edificio)
      }
      this.edificioInAggregato = edifici
      let qualityId = null
      this.edificioInAggregato['Edificio Singolo'].forEach(element => {
        this.quality.push(element.quality)
        if(qualityId !== element.quality.id) {
          this.selezione.push(element.id)
        }
        if(!this.edificioByQuality[element.quality.id]) {
          this.edificioByQuality[element.quality.id] = []
        }
        this.edificioByQuality[element.quality.id].push(element)
        qualityId = element.quality.id
      });
      qualityId = null
      this.cleanQualityArray()
    });
    this.qualità.getQEdificio().subscribe(data => {
      this.edificioSelezionato1 = data;
    })
  }

  outputSelection() {
    let totalePunteggio = 0
    this.selezione.forEach((function (value, index, array) {
      for (const key in this.edificioInAggregato) {
        const list = this.edificioInAggregato[key]
        list.forEach(function (edificio, edificioIndex, edificioArray) {
          if (edificio.id === value) {
            totalePunteggio = totalePunteggio + parseInt(edificio.punteggio)
          }
        })
      }
    }).bind(this))
    const selezionati = {}
    for(const value of this.selezione) {
      selezionati[value] = true
    }
    if(selezionati[37] && selezionati[40]) {
      totalePunteggio += 15
    } else if(selezionati[39] && selezionati[42]) {
      totalePunteggio += 0
    } else {
      totalePunteggio += 8
    }
    this.totalePunteggio = totalePunteggio
    this.vediMuratura()
    this.msg1 = true
  }

  vediMuratura() {
    if (this.varEmp == 1) {
      this.vulnerability = 6;
    }
    if (this.varEmp == 3) {
      if (this.totalePunteggio < 50) {
        this.vulnerability = 5;
      } else if (this.totalePunteggio >= 50) {
        this.vulnerability = 6;
      }
    }
    if (this.varEmp == 5) {
      if (this.totalePunteggio < 30) {
        this.vulnerability = 4;
      } else if (this.totalePunteggio >= 60) {
        this.vulnerability = 6;
      } else if (this.totalePunteggio >= 30 && this.totalePunteggio <= 60) {
        this.vulnerability = 5;
      }
    } 
    if (this.varEmp == 6) {
      if (this.totalePunteggio < 30) {
        this.vulnerability = 3;
      } else if (this.totalePunteggio >= 60) {
        this.vulnerability = 5;
      } else if (this.totalePunteggio >= 30 && this.totalePunteggio <= 60) {
        this.vulnerability = 4;
      }
    } 
    if (this.varEmp == 7) {
      if (this.totalePunteggio < 30) {
        this.vulnerability = 2;
      } else if (this.totalePunteggio >= 60) {
        this.vulnerability = 4;
      } else if (this.totalePunteggio >= 30 && this.totalePunteggio <= 60) {
        this.vulnerability = 3;
      }
    }
    console.log("totale punteggio: " + this.totalePunteggio)
    console.log("classe di vulnerabilità: V" + this.vulnerability)
  }

  trasferisciClassVul() {
    this.router.navigate(['/zona-sismica-st'], { state: {emsType: this.emsType, vulClass: this.vulnerability, punteggio: this.totalePunteggio } })
  }

  cleanQualityArray(): void {
    const qualityIds: number[] = []
    this.quality.forEach(el => {
      qualityIds.push(el.id)
    })
    const unique = new Set(qualityIds)
    const qualityTemp: QualitySt[] = []
    unique.forEach(u => {
      qualityTemp.push(this.quality.find(qE => qE.id == u))
    });
    this.quality = qualityTemp
  }

  getColors(index) {
    let num = this.getnumber(index)
    return this.Colors[num]
  }

  getnumber(data) {
    let i = data
    if(i > this.Colors.length - 1) {
      i = i - this.Colors.length
      if(i < this.Colors.length) {
        return i
      } else {
        this.getnumber(i)
      }
    } else {
      return i
    }
  }

}
