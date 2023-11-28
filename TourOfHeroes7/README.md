# TourOfHeroes7

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.10.

## Command overview for this demo version

- `npm run start`: Start serving the app with development server
- `npm run start:prod`: Start serving the app after production build (requires [http-server](https://www.npmjs.com/package/http-server))
- _IMPORTANT_: The Angular CLI command might not work, since Angular 7 relies of deprecated features of NodeJS. `export NODE_OPTIONS=--openssl-legacy-provider` might help!

## Evaluation: Developer Experience

- "Cool" features
  - The out-of-the-box experience is feature-complete (Http / Routing / Toolset / ...)
  - Modularization is possible
- Impediments
  - It feels verbose (module requirement, alot of files)
  - Change detection is "magical" (Zone.js) or ambiguous (Zone.js + RxJS)
  - Dev tools feel slow

## Evaluation: Performance characteristics

- Big initial bundle (~840kB)
- FCP (First Contentful Paint) & LCP (Largest Contentful Paint) are bad (5.3sec / 5.6sec)
  - Can be reduced by compression of the served bundle
- TBT (Total Blocking Time) is mediocre (210ms)
- Speed index is mediocre (5.3sec)
- Reference report: [lighthouse report](./lighthouse_reference_report.html)
