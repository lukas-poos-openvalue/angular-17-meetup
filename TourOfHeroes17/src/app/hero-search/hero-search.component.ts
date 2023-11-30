import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subject } from 'rxjs';
import { Hero, HeroService } from '../hero.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-hero-search',
  standalone: true,
  imports: [CommonModule, RouterLink, MatListModule, MatInputModule, MatIconModule, MatButtonModule],
  templateUrl: './hero-search.component.html',
  styleUrl: './hero-search.component.css'
})
export class HeroSearchComponent {
  #heroService = inject(HeroService);
  #searchTerms = new Subject<string>();

  // PoI: Observables work better here than signals
  heroes$: Observable<Hero[]> = this.#searchTerms.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap((term: string) => this.#heroService.searchHeroes(term)),
  );

  search(term: string): void {
    this.#searchTerms.next(term);
  }
}