import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from '../message.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatChipsModule, MatButtonModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {
  #messageService = inject(MessageService);

  messages = this.#messageService.messages;
  clear = () => this.#messageService.clear();
}
