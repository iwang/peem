import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Hero } from './hero';
import { Gu } from './gu';
import { HEROES } from './mock-heroes';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
  private guesUrl = 'api/gues';

  constructor(private http:Http) {}

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHero(id: number):Promise<Hero> {
    return this.getHeroes().
    then(heroes => heroes.find(hero => hero.id === id))
  }

  getGues(name):Promise<Gu[]> {
    console.log("sending requesta", name);
    return this.http.get(this.guesUrl)
            .toPromise()
            .then(response => response.json().data as Gu[])
            .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
