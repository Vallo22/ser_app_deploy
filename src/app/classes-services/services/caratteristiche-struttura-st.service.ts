import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CaratteristicheStrutturaSt } from '../classes/caratteristiche-struttura-st';

@Injectable({
  providedIn: 'root'
})
export class CaratteristicheStrutturaStService {

  url: string

  constructor(private http: HttpClient) {
    this.url = 'http://94.177.192.141:8080/';
  }

  public getStrutturaDalleCaratteristiche(): Observable<CaratteristicheStrutturaSt[]> {
    return this.http.get<CaratteristicheStrutturaSt[]>(this.url + "caratteristicheStrutturaSt")
  }
}
