import { Component, Input, inject, signal, effect, runInInjectionContext } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Hero, HeroService } from '../hero.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatButtonModule, MatInputModule, MatIconModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {
  // PoI: Required inputs & route input binding (see route '/detail/{id}')
  @Input({ required: true })
  set id(heroId: string) {
    this.#heroService.getHero(parseInt(heroId, 10))
      .subscribe(hero => this.#hero.set(hero));
  }

  #location = inject(Location);
  #heroService = inject(HeroService);
  #hero = signal<Hero | undefined>(undefined);

  hero = this.#hero.asReadonly();

  goBack(): void {
    this.#location.back();
  }

  updateName(name: string): void {
    this.#hero.update(prev => prev ? { ...prev, name } : undefined);
  }

  save(): void {
    const hero = this.#hero();
    if (!hero) return;
    this.#heroService.updateHero(hero).subscribe(() => this.goBack());
  }
}
