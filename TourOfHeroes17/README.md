# TourOfHeroes17

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.3.

## Command overview for this demo version

- `npm run start`: Start serving the app with development server
- `npm run start:prod`: Start serving the app after production build

## Evaluation: Developer Experience

- Cool features and where to find them

  - [Angular.dev](https://angular.dev): Updated branding with new _documentation_
  - [src-folder](./src/): _Less junk files_ in the src directory (vendor.ts, polyfill.ts, karma.conf.js, ...)
  - [server.ts](./server.ts): _SSR + hydration_ are very easy to add and extend (via Angular CLI)
  - [main.ts](./src/main.ts): how to bootstrap an application with a _standalone root component_
  - [HeroesComponent](./src/app/heroes/heroes.component.ts): _signals_, _inject-function_, _standalone_, _private fields_
  - [Heroes HTML](./src/app/heroes/heroes.component.html): _self-closing tags_
  - [DashboardComponent](./src/app/dashboard/dashboard.component.ts): _signal-RxJS-interop_
  - [Dashboard HTML](./src/app/dashboard/dashboard.component.html): _Control flow_, _deferrable views_
  - [HeroSearchComponent](./src/app/hero-search/hero-search.component.ts): Example where _RxJS_ still works better
  - [HeroListItemComponent](./src/app/hero-list-item/hero-list-item.component.ts): _required inputs_
  - [HeroDetailComponent](./src/app/hero-detail/hero-detail.component.ts): _route input binding_
  - [HeroDetail HTML](./src/app/hero-detail/hero-detail.component.html): Example there signal-integration seems incomplete

- Impediments
  - Signal integration can be improved
    - Ex. two way binding with inputs / component inputs & outputs / not-readonly interop with RxJS / coexists with Zone.js
    - BUT: Solutions are on their way! (a quick teaser: [Signal-based components](https://github.com/angular/angular/discussions/49682))

## Evaluation: Performance

- SSR + hydration has alot of benefits:
  - Prerender what you can before shipping it to the client
  - More smaller bundles
  - Initial page load _should_ be better
  - You have control over the rendering behavior
- Analysis of browser network tab
  - The page html is now prerendered and small (<100kB)
  - Modular parts of your application are fetched afterwards
- Analysis using Lighthouse
  - Performance without tweaks is mediocre
  - Total blocking time is good (60ms)
  - Three metrics can be improved easily (see [server.use(compression(...))](./server.ts)):
    - First Contentful Paint (how long until first content element is painted?)
    - Largest Contentful Paint (how long until largest content element is painted?)
    - Speed index (how long until the content is visible?)
  - Interpretation: Loading uncompressed fonts loses time on alot of metrics
  - Reference report: [lighthouse report](./lighthouse_reference_report.html)
