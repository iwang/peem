import {Component, ViewChild, ElementRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import { HeroService } from './hero.service';

// import {Observable} from 'rxjs/Rx' is going to import all methods
// https://stackoverflow.com/questions/34397162/angular2-rxjs-getting-observable-1-observable-fromevent-is-not-a-function-erro;

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/fromEvent';

import {Gu} from './gu';

import {MdAutocompleteTrigger} from '@angular/material';

@Component({
  selector: 'quick-search',
  template: `<md-input-container>
      <input #searchInputEl mdInput placeholder="placeHolder" 
      [mdAutocomplete]="auto" >
    </md-input-container>

    <md-autocomplete #auto="mdAutocomplete">
      <md-option *ngFor="let gu of gues | async" [value]="gu.name" 
      (onSelectionChange)="callSomeFunction($event, gu)">
        {{ gu.name }}
      </md-option>
    </md-autocomplete>`
})

export class QuickSearchComponent {
  @ViewChild('searchInputEl') searchInputEl:ElementRef;
  
  gues: any;

  constructor(private heroService: HeroService) {
    
  }

  ngAfterViewInit() {
    this.gues = Observable.fromEvent(this.searchInputEl.nativeElement, 'input')
        .debounceTime(500)
        .map(key => key.target.value)
        .switchMap(name => Observable.fromPromise(this.heroService.getGues(name)))
  }

  callSomeFunction($event, item) {
    console.log($event, item);
  }
  
}