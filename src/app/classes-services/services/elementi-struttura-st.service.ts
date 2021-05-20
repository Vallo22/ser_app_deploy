import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CaratteristicheQualitativeSt } from '../classes/caratteristiche-qualitative-st';
import { StrutturaSt } from '../classes/structure/struttura-st';
import { TypeStrutturaSt } from '../classes/structure/type-struttura-st';
import { ValutazionePunteggioSt } from '../classes/valutazione-punteggio-st';

@Injectable({
  providedIn: 'root'
})
export class ElementiStrutturaStService {

  url: string
  test: string = ""

  constructor(private http: HttpClient) {
    this.url = 'http://94.177.192.141:8080/';
  }

  public getStruttura():Observable<StrutturaSt[]> {
    return this.http.get<StrutturaSt[]>(this.url + 'strutturaSt');
  }

  public getStruttureByCaratteristiche(carQualId: number): Observable<StrutturaSt[]> {
    return this.http.get<StrutturaSt[]>(this.url + "getStrutturaCaratteristicaSt", {
      params: {
        carQual: `${carQualId}`
      }
    })
  }
  
  public getCaratteristicheQualitative():Observable<CaratteristicheQualitativeSt[]> {
    return this.http.get<CaratteristicheQualitativeSt[]>(this.url + 'caratteristicheQualitativeSt');
  }

  public getValutazionePunteggio():Observable<ValutazionePunteggioSt[]> {
    return this.http.get<ValutazionePunteggioSt[]>(this.url + 'valutazionePunteggioSt')
  }

  public getTypeStruttura():Observable<TypeStrutturaSt[]> {
    return this.http.get<TypeStrutturaSt[]>(this.url + 'typeStrutturaSt');
  }

}
