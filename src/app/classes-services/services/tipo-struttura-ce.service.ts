import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StrutturaCe } from '../classes/structure/struttura-ce';
import { StrutturaDueCe } from '../classes/structure/struttura-due-ce';
import { StrutturaTreCe } from '../classes/structure/struttura-tre-ce';
import { CaratteristicheQualitativeCe } from '../classes/caratteristiche-qualitative-ce';

@Injectable({
  providedIn: 'root'
})
export class TipoStrutturaCeService {

  url: string

  constructor(private http: HttpClient) {
    this.url = 'http://172.16.0.7:8080/';
   }

   public getStruttura():Observable<StrutturaCe[]> {
     return this.http.get<StrutturaCe[]>(`${this.url}${"strutturaCe"}`);
   }

   public getStrutturaDue():Observable<StrutturaDueCe[]> {
     return this.http.get<StrutturaDueCe[]>(`${this.url}${"strutturaDueCe"}`);
   }

   public getStrutturaTre():Observable<StrutturaTreCe[]> {
    return this.http.get<StrutturaTreCe[]>(`${this.url}${"strutturaTreCe"}`);
  }

  public getCaratteristicheQualitative():Observable<CaratteristicheQualitativeCe[]>{
    return this.http.get<CaratteristicheQualitativeCe[]>(this.url + 'caratteristicheQualitativeCe');
  }

  }
