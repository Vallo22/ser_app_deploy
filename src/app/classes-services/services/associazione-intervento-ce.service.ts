import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AssociazioneInterventoCe } from '../classes/associazione-intervento-ce';

@Injectable({
  providedIn: 'root'
})
export class AssociazioneInterventoCeService {

  url: string

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/';
  }

  public getAssociazioneIntervento(): Observable<AssociazioneInterventoCe[]> {
    return this.http.get<AssociazioneInterventoCe[]>(`${this.url}${"associazioneInterventoCe"}`)
  }

  public getInterventoSingolo(carattQualit: number, intervento: number, strutturaAssociazione: number): Observable<AssociazioneInterventoCe[]> {
    return this.http.get<AssociazioneInterventoCe[]>(`${this.url}${"getInterventoSingoloCe"}`, {
      params: {
        carattQualit: `${carattQualit}`,
        intervento: `${intervento}`,
        strutturaAssociazione: `${strutturaAssociazione}`
      }
    }) 
  }

  public getInterventoByCaratteristicaAndStruttura(carattQualit: number, strutturaId: number): Observable<AssociazioneInterventoCe[]> {
    return this.http.get<AssociazioneInterventoCe[]>(`${this.url}${"getInterventoByCarattersticaCe"}`, {
      params: {
        carattQualit: `${carattQualit}`,
        struttura: `${strutturaId}`
      }
    })
  }

  public interventGrouping(data: AssociazioneInterventoCe[]){
    const result = []
    const raggruppamento = {}
    for (const value of data) {
      const idIntervento = value.intervento.id
      const idCaratteristica = value.caratteristicaAssociazioneIntervento.id
      const idStruttura = value.strutturaAssociazione.id
      const key = idIntervento + "_" + idCaratteristica + "_" + idStruttura
      if (!raggruppamento[key]) {
        raggruppamento[key] = {
          ...value,
          varianti: [],
          modicitaDiCosto: [],
          efficacia: [],
          supIntonacate: [],
          supEvIi: [],
          supIvEi: [],
          reversibilita: [],
          semplicitaDiCantiere: [],
          esiguitaDiIngombro: []
        }
      }
      raggruppamento[key].varianti.push(value.varianti)
      raggruppamento[key].modicitaDiCosto.push(value.modicitaDiCosto)
      raggruppamento[key].efficacia.push(value.efficacia)
      raggruppamento[key].supIntonacate.push(value.supIntonacate)
      raggruppamento[key].supEvIi.push(value.supEvIi)
      raggruppamento[key].supIvEi.push(value.supIvEi)
      raggruppamento[key].reversibilita.push(value.reversibilita)
      raggruppamento[key].semplicitaDiCantiere.push(value.semplicitaDiCantiere)
      raggruppamento[key].esiguitaDiIngombro.push(value.esiguitaDiIngombro)
    }
    for (const key in raggruppamento) {
      result.push(raggruppamento[key])
    }
    return result
  }
}
