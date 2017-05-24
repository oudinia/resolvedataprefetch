import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {CompetitionsService, ICompetition} from './competitions/competitions.service';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class CompetitionsResolver implements Resolve<any> {
  comps: Array<ICompetition>;

  constructor(private competitionsService: CompetitionsService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<ICompetition> | Promise<any> | any {
    return this.competitionsService.getCompetitions();
  }
}
