import { Component, OnInit, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { HeroListItemComponent } from '../hero-list-item/hero-list-item.component';
import { Hero, HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatListModule, MatInputModule, HeroListItemComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit {
  #heroService = inject(HeroService);
  #heroes = signal<Hero[]>([]);
  heroes = this.#heroes.asReadonly();
  // #heroesCount = computed(() => this.heroes().length);

  ngOnInit(): void {
    this.#heroService.getHeroes().subscribe(heroes => this.#heroes.set(heroes));
    // effect(() => console.log(`HeroesComponent: Count has updated to ${this.#heroesCount()}`));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) return;
    this.#heroService.addHero({ name } as Hero)
      .subscribe(hero => this.#heroes.update(prev => [...prev, hero]));
  }

  delete(hero: Hero): void {
    this.#heroes.update(prev => prev.filter(h => h !== hero));
    this.#heroService.deleteHero(hero.id).subscribe();
  }
}
