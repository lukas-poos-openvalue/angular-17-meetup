import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// PoI: Bootstrap a standalone root component with configured providers!
bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err),
);
