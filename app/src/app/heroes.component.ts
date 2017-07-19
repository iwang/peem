import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';
import {Router} from '@angular/router';

@Component({
  selector: 'my-heroes',
  styleUrls: [ './heroes.component.css' ],
  templateUrl: './heroes.component.html'

})

export class HeroesComponent implements OnInit  { 
  
  selectedHero: Hero;
  heroes: Hero[];

  constructor(
    private router:Router,
    private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(
      heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail():void {
     this.router.navigate(['/detail', this.selectedHero.id]);
  }
}

