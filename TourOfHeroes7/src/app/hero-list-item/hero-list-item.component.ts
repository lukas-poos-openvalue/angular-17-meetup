import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../hero.service';

@Component({
  selector: 'app-hero-list-item',
  templateUrl: './hero-list-item.component.html',
  styleUrls: ['./hero-list-item.component.css']
})
export class HeroListItemComponent {
  @Input() hero: Hero | undefined;
  @Output() delete = new EventEmitter<void>();
}
