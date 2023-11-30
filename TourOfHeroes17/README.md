# TourOfHeroes17

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.3.

## Command overview for this demo version

- `npm run start`: Start serving the app with development server
- `npm run start:prod`: Start serving the app after production build
- `../TourOfHeroesApi/tour-of-heroes-api`: Start backend

## Evaluation: Developer Experience

- Cool features and where to find them (Search for `PoI` (point of interest) in the code!)

  - [Angular.dev](https://angular.dev): Updated branding with new _documentation_
  - [src-folder](./src/): _Less junk files_ in the src directory (vendor.ts, polyfill.ts, karma.conf.js, ...)
  - [server.ts](./server.ts): _SSR + hydration_ are very easy to add and extend (via Angular CLI)
  - [main.ts](./src/main.ts): how to bootstrap an application with a _standalone root component_
  - [HeroesComponent](./src/app/heroes/heroes.component.ts): _signals_, _inject-function_, _standalone_, _private fields_
  - [DashboardComponent](./src/app/dashboard/dashboard.component.ts): _signal-RxJS-interop_
  - [HeroSearchComponent](./src/app/hero-search/hero-search.component.ts): Example where _RxJS_ still works better
  - [HeroDetail HTML](./src/app/hero-detail/hero-detail.component.html): Example there signal-integration seems incomplete
  - [Dashboard HTML](./src/app/dashboard/dashboard.component.html): _Control flow_, _deferrable views_, _self-closing tags_
  - [HeroDetailComponent](./src/app/hero-detail/hero-detail.component.ts): _required inputs_, _route input binding_

- Impediments
  - Signal integration can be improved in many ways
    - Examples
      - two way binding with inputs
      - component inputs & outputs
      - not-readonly interop with RxJS
      - change-detection & DOM-Updates
    - BUT: Solutions are on their way! (a quick teaser: [Signal-based components](https://github.com/angular/angular/discussions/49682))

## Evaluation: Performance

- SSR + hydration has alot of benefits:
  - Prerender what you can before shipping it to the client
  - More smaller bundles
  - Initial page load _should_ be better
  - You have control over the server & rendering behavior
- Analysis of browser network tab
  - The page html is now prerendered and small (<100kB)
  - Modular parts of your application are fetched afterwards
- Analysis using Lighthouse
  - Performance of the demo app is mediocre without tweaks
  - Total blocking time (_when can the page be interacted with?_) is very good (~60ms)
  - Three metrics can be improved easily (see [server.use(compression(...))](./server.ts)):
    - First Contentful Paint (_how long until first content element is painted?_)
    - Largest Contentful Paint (_how long until largest content element is painted?_)
    - Speed index (_how long until the content is visible?_)
  - Interpretation: Loading uncompressed fonts loses time on alot of metrics
  - Lighthouse reference reports:
    - [Without Compression](./lighthouse_report_no_compression.html)
    - [With Compression](./lighthouse_report_with_compression.html)
