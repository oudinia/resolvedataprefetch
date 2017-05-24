import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
export interface ICompetition {
  name: string;
}

@Injectable()
export class CompetitionsService {

    constructor(private http: Http) { }

    getCompetitions() {
      const h = new Headers();

      h.append('X-Auth-Token', 'f5d3b9f9f77e4a21824d231311cac915');
      const apiUrl = 'https://api.soccerama.pro/v1.2/competitions?api_token=LaZ6deMhhdhZEIVGuHM6F75TryuOMZYyRLpcY8fjhaB0ot6otr6y843xDLNP&include=currentSeason';


      return this.http.get(apiUrl, h)
       .map(c => {
         return c.json().data;
       }).delay(0).do(data => console.log(data));
    }
}
