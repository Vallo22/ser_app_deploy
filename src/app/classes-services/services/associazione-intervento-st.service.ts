import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AssociazioneInterventoSt } from '../classes/associazione-intervento-st';

@Injectable({
  providedIn: 'root'
})
export class AssociazioneInterventoStService {

  url: string

  constructor(private http: HttpClient) {
    this.url = 'https://ser.unicam.it/';
  }

  public getAssociazioneIntervento(): Observable<AssociazioneInterventoSt[]> {
    return this.http.get<AssociazioneInterventoSt[]>(this.url + "associazioneInterventoSt")
  }

  public getInterventoByCaratteristicaAndStruttura(carQualId: number, strutturaId: number): Observable<AssociazioneInterventoSt[]>{
    return this.http.get<AssociazioneInterventoSt[]>(this.url + "getInterventoByCaratteristicaSt", {
      params: {
        carQual: `${carQualId}`,
        struttura: `${strutturaId}`
      }
    })
  }

  public interventGrouping(data: AssociazioneInterventoSt[]){
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
          reversibilita: [],
          semplicitaDiCantiere: [],
          supIntonacate: [],
          supVista: [],
          esiguitaDiIngombro: [],
          efficacia: []
        }
      }
      raggruppamento[key].varianti.push(value.variante)
      raggruppamento[key].modicitaDiCosto.push(value.modicitaDiCosto)
      raggruppamento[key].reversibilita.push(value.reversibilita)
      raggruppamento[key].semplicitaDiCantiere.push(value.semplicitaDiCantiere)
      raggruppamento[key].supIntonacate.push(value.supIntonacate)
      raggruppamento[key].supVista.push(value.supVista)
      raggruppamento[key].esiguitaDiIngombro.push(value.esiguitaDiIngombro)
      raggruppamento[key].efficacia.push(value.efficacia)
    }
    for (const key in raggruppamento) {
      result.push(raggruppamento[key])
    }
    return result
  }

  public getInterventoSingolo(carQual: number, intervento: number, strutturaAssociazione: number): Observable<AssociazioneInterventoSt[]> {
    return this.http.get<AssociazioneInterventoSt[]>(this.url + "getInterventoSingoloSt", {
      params: {
        carQual: `${carQual}`,
        intervento: `${intervento}`,
        strutturaAssociazione: `${strutturaAssociazione}`
      }
    })
  }
}
