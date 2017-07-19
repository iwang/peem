import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Gu } from './gu';
import { HEROES, GUES } from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHero(id: number):Promise<Hero> {
    return this.getHeroes().
    then(heroes => heroes.find(hero => hero.id === id))
  }

  getGues():Promise<Gu[]> {
    return Promise.resolve(GUES);
  }
}
