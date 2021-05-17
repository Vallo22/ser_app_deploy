import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AssociazioneInterventoSt } from '../classes/associazione-intervento-st';
import { AssociazioneRiepilogo } from '../classes/associazione-riepilogo';

@Injectable({
  providedIn: 'root'
})
export class AssociazioneRiepilogoService {
  
  url: string

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/';
  }

  public getAssociazioneRiepilogo(): Observable<AssociazioneRiepilogo[]> {
    return this.http.get<AssociazioneRiepilogo[]>(this.url + "associazioneRiepilogo")
  }
  
}
