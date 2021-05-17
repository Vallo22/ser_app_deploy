import { Injectable } from '@angular/core';
import { CaratteristicheQualitativeCe } from '../classes/caratteristiche-qualitative-ce';
import { AssociazioneInterventoCe } from '../classes/associazione-intervento-ce';


@Injectable({
  providedIn: 'root'
})
export class RisultatoSelezioneCeService {

  constructor() { }

  caratteristicheSelezionate: CaratteristicheQualitativeCe[] = []
  interventiSelezionati: AssociazioneInterventoCe[] = []

  public reset() {
    this.caratteristicheSelezionate = []
    this.interventiSelezionati = []
  }

  public aggiungiCaratteristica(x: CaratteristicheQualitativeCe) {
    this.caratteristicheSelezionate.push(x)
  }

  public checkCaratteristica(id: number): boolean {
    for(let caratteristicaSelezionata of this.caratteristicheSelezionate) {
      if(caratteristicaSelezionata.id === id) {
        return true
      }
    }
    return false
  }

  public aggiungiIntervento(x: AssociazioneInterventoCe) {
    this.interventiSelezionati.push(x)
  }
}
