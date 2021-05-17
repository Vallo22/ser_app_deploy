import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EdificioInAggregatoSt } from '../classes/edificio-in-aggregato-st';

@Injectable({
  providedIn: 'root'
})
export class QualitaEdificiStService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://193.205.90.120:8080/';
  }

  public getQEdificio(): Observable<EdificioInAggregatoSt[]>{
    return this.http.get<EdificioInAggregatoSt[]>(this.url + 'edificioSt');
  }
  
}
