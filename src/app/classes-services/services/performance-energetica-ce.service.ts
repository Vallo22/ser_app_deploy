import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IndicatoreCe } from '../classes/indicatore-ce';
import { ClasseIndicatoreCe } from '../classes/classe-indicatore-ce';
import { IndicatoreNonCe } from '../classes/indicatore-non-ce';
import { ClasseIndicatoreNonCe } from '../classes/classe-indicatore-non-ce';

@Injectable({
  providedIn: 'root'
})
export class PerformanceEnergeticaCeService {

  url: string

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/';
   }

   public getIndicatore(): Observable<IndicatoreCe[]>{
     return this.http.get<IndicatoreCe[]>(`${this.url}${"indicatoreCe"}`);
   }

   public getClasseIndicatore(): Observable<ClasseIndicatoreCe[]>{
    return this.http.get<ClasseIndicatoreCe[]>(`${this.url}${"classeIndicatoreCe"}`);
  }

  public getIndicatoreNon(): Observable<IndicatoreNonCe[]>{
    return this.http.get<IndicatoreNonCe[]>(`${this.url}${"indicatoreNonCe"}`);
  }

  public getClasseIndicatoreNon(): Observable<ClasseIndicatoreNonCe[]>{
    return this.http.get<ClasseIndicatoreNonCe[]>(`${this.url}${"classeIndicatoreNonCe"}`);
  }


  
}
