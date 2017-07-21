import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule }    from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent }  from './app.component';
import { HeroesComponent }  from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
import { GListComponent} from './g-list.component';
import {QuickSearchComponent} from './quick-search.component';

import { HeroService } from './hero.service';

import { AppRoutingModule }  from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import {MdAutocompleteModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import { ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    BrowserAnimationsModule,
    MdAutocompleteModule,
    MdInputModule,
    ReactiveFormsModule
  ],
  declarations: [ 
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    GListComponent,
    QuickSearchComponent
   ],
   providers: [HeroService],
   bootstrap: [ AppComponent ]
})
export class AppModule { }
