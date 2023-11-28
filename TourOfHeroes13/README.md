# TourOfHeroes13

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.11.

## Command overview for this demo version

- `npm run start`: Start serving the app with development server
- `npm run start:prod`: Start serving the app after production build (requires [http-server](https://www.npmjs.com/package/http-server))

## Evaluation: Developer Experience

- "Cool" features
  - Feature modules can be lazily loaded
  - Tools got a bit faster
- Impediments
  - Still very verbose
  - Little noticable quality-of-life improvements
  - Not much innovation yet

## Evaluation: Performance characteristics

- Multiple smaller bundles, and slightly better total size (~757kB)
- FCP (First Contentful Paint) & LCP (Largest Contentful Paint) improved slightly (4.0sec / 4.5sec)
  - Can be reduced by compression of the served bundle
- TBT (Total Blocking Time) is good (140ms)
- Speed index improved slightly (4.0sec)
- Expectation: Scales better than pure SPA
- Reference report: [lighthouse report](./lighthouse_reference_report.html)
