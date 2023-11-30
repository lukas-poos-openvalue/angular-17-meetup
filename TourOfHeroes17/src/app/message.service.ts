import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MessageService {
  #messages = signal<string[]>([]);
  messages = this.#messages.asReadonly();

  add(message: string) {
    this.#messages.update((prev) => [...prev, message]);
  }

  clear() {
    this.#messages.set([]);
  }
}
