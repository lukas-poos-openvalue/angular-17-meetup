# TourOfHeroes17

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.3.

## Command overview for this demo version

- `npm run start`: Start serving the app with development server
- `npm run start:prod`: Start serving the app after production build

## Implementation overview for this demo version

- _Some_ similarities to [TourOfHeroes13](../TourOfHeroes13/README.md#implementation-overview-for-this-demo-version)
  - Same components
  - Same services\*
- There is a server for SSR and hydration!
  - [server.ts](./server.ts): Generated server for serving your Angular frontend
  - [app.config.server.ts](./src/app/app.config.server.ts): Configuration of prerendering behaviour
- All components are standalone!
  - No more modules are used!
  - AppComponent is bootstrapped in [main.ts](./src/main.ts), and configuration is in [app.config.ts](./src/app/app.config.ts)
  - All components define their imports individually
- Components and services use signals for state wherever applicable!
  - Exception: [HeroSearchComponent](./src/app/hero-search/hero-search.component.ts): Easier to use RxJS operations to build debounce timer
  - Exception: [HeroDetailComponent](./src/app/hero-detail/hero-detail.component.ts): Two-way binding to input-field value
  - Unclean: [HeroesComponent](./src/app/heroes/heroes.component.ts): Use ngInit to initialize writable signal with observable

## Evaluation: Developer Experience

- "Cool" features
  - New documentation site: [Angular.dev](https://angular.dev)
  - Less junk files in the project directory
  - SSR & hydration are very easy to add and extend ([server.ts](./server.ts), [app.config.server.ts](./src/app/app.config.server.ts))
  - Defaults to ES2022 (private fields etc. are possible in JS now!)
  - Standalone components make component definitions concise (ex. [MessagesComponent](./src/app/messages/messages.component.ts))
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
