import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../hero.service';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-hero-list-item',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIconModule, MatButtonModule],
  templateUrl: './hero-list-item.component.html',
  styleUrl: './hero-list-item.component.css'
})
export class HeroListItemComponent {
  @Input({ required: true }) hero!: Hero;
  @Output() delete = new EventEmitter<void>();
}
