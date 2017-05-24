import { Component, OnInit } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {CompetitionsService, ICompetition} from './competitions.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent implements OnInit {
  public competitions: Array<ICompetition>;
  constructor(private http: Http, private competitionsService: CompetitionsService,
  private route: ActivatedRoute) {

  }

  ngOnInit() {
    console.log(this.route.snapshot.data['competitions']);
    this.competitions = this.route.snapshot.data['competitions'];
  }

}
