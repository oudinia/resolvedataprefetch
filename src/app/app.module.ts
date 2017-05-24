import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {CommonModule} from '@angular/common';
import { CompetitionsComponent } from './competitions/competitions.component';
import {RouterModule} from '@angular/router';
import {CompetitionsService} from './competitions/competitions.service';
import {CompetitionsResolver} from './compeitions-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    CompetitionsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'competitions', component: CompetitionsComponent, resolve: { competitions: CompetitionsResolver}}
      ])
  ],
  providers: [CompetitionsService, CompetitionsResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
