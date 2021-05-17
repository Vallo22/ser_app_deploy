import { Injectable } from '@angular/core';
import { AssociazioneInterventoSt } from '../classes/associazione-intervento-st';
import { CaratteristicheQualitativeSt } from '../classes/caratteristiche-qualitative-st';

@Injectable({
  providedIn: 'root'
})
export class RisultatoSelezioneStService {

  constructor() { }

  caratteristicheSelezionate: CaratteristicheQualitativeSt[] = []
  interventiSelezionati: AssociazioneInterventoSt[] = []
  
  public reset(){
    this.caratteristicheSelezionate = []
    this.interventiSelezionati = []
  }

  public aggiungiCaratteristica(x: CaratteristicheQualitativeSt){
    this.caratteristicheSelezionate.push(x)
  }

  public checkCaratteristica(id: number): boolean{
    for(let caratteristicaSelezionata of this.caratteristicheSelezionate){
      if(caratteristicaSelezionata.id === id){
        return true
      }
    }
    return false
  }

  public aggiungiIntervento(x: AssociazioneInterventoSt){
    this.interventiSelezionati.push(x)
  }
}
