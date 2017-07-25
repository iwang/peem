import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'favor-add',
  //styleUrls: ['./favor.add.css'],
  template: `
  <div *ngIf="show">
    Add Favor
  </div>
  `
})

export class FavorAddComponent {
  show: boolean;

  ngAfterViewInit() {
    Observable.fromEvent(document, 'keydown')
              .filter(event => {
                return (event.ctrlKey || event.metaKey) &&
                       String.fromCharCode(event.which).toLowerCase() === 'd';
              }).subscribe(event => {
                event.preventDefault();
                this.show = !this.show;
              })
  }
}