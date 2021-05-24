import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TipoEdificioSt } from '../classes/tipo-edificio-st';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EdificioStService {

  edificioUrl: string

  constructor(private http: HttpClient) {
    this.edificioUrl = 'https://ser.unicam.it/'
   }

   public getTipoEdificio():Observable<TipoEdificioSt[]>{
     return this.http.get<TipoEdificioSt[]>(this.edificioUrl + 'tipologiaStrutturaSt').pipe(map(data =>{
       const tipiEdificio: TipoEdificioSt[] = [];
       data.forEach(d => {
        const tipoEdificio = new TipoEdificioSt();
        tipoEdificio.id = d.id;
        tipoEdificio.tipologiaStrutture = d.tipologiaStrutture;
        tipoEdificio.abilitato = d.id == 2 || d.id == 4;
        tipoEdificio.carQualEms = d.carQualEms
        tipiEdificio.push(tipoEdificio);
       });
       return tipiEdificio;
     }))
   }

}
