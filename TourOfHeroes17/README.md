# TourOfHeroes17

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.3.

## Command overview for this demo version

- `npm run start`: Start serving the app with development server
- `npm run start:prod`: Start serving the app after production build

## Evaluation: Developer Experience

- "Cool" features
  - New documentation site: [Angular.dev](https://angular.dev)
  - Less junk files in the project directory
  - SSR & hydration are very easy to add and extend ([server.ts](./server.ts), [app.config.server.ts](./src/app/app.config.server.ts))
  - Standalone components make component definitions concise (ex. [main.ts](./src/main.ts), [AppComponent](./src/app/app.component.ts), [MessagesComponent](./src/app/messages/messages.component.ts))
  - Defaults to ES2022, enabling private fields in JS! (ex. [HeroesComponent](./src/app/heroes/heroes.component.ts))
  - Signals are a simple solution for reactivity, and can interoperate with RxJS (ex. [DashboardComponent](./src/app/dashboard/dashboard.component.ts))
  - inject-function makes writing components & services very declarative (ex. [MessageService](./src/app/message.service.ts))
  - Significant amount of quality-of-life improvements
    - Template type safety
    - Error messages
    - Self-closing tags (ex. [HeroListItemComponent](./src/app/hero-list-item/hero-list-item.component.ts))
    - Required inputs (ex. [HeroListItemComponent](./src/app/hero-list-item/hero-list-item.component.ts))
    - Route input binding (ex. [HeroDetailComponent](./src/app/hero-detail/hero-detail.component.ts))
    - ...
  - Dev tools are fast
- Impediments
  - Signal integration can be improved
    - Ex. two way binding with inputs / component inputs & outputs / not-readonly interop with RxJS / coexists with Zone.js
    - BUT: Solutions are on their way! (a quick teaser: [Signal-based components](https://github.com/angular/angular/discussions/49682))

## Evaluation: Performance characteristics

- Multiple prerendered bundles, but slightly bigger overall (~945kB)
- FCP (First Contentful Paint) & LCP (Largest Contentful Paint) got worse slightly (4.4sec / 6.8sec)
  - Can be reduced by compression of the served bundle
- TBT (Total Blocking Time) is very good (60ms)
- Speed index got worse slightly (4.4sec)
- Expectation: Scales better than app with lazy loading
- Reference report: [lighthouse report](./lighthouse_reference_report.html)
