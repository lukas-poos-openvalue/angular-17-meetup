import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatIconModule, MatToolbarModule, MatChipsModule, MatButtonModule, MatInputModule, MatListModule, MatDividerModule, MatCardModule } from '@angular/material';
import { HeroListItemComponent } from './hero-list-item/hero-list-item.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,

    AppRoutingModule,

    MatToolbarModule,
    MatChipsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    HeroesComponent,
    MessagesComponent,
    DashboardComponent,
    HeroListItemComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
