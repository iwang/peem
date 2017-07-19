import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Gu } from './gu';

@Component({
  selector: 'g-list',
  //styleUrls: [ './g-list.component.css' ],
  templateUrl: './g-list.component.html'
})

export class GListComponent implements OnInit{ 
  gues: Gu[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getGues()
      .then(gues => this.gues = gues);
  }
}