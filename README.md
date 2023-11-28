# Angular 17: Recent improvements that have made it awesome!

This repo is the basis for the Meetup at the 30.11.2023.

## Demo project overview

- `TourOfHeroes17`: Main implementation in Angular 17
  - Used features: `All of the above, Standalone components, signals, enhanced control flow, inject-function, self-closing tags, Vite, esbuild, SSR, hydration, ...`
- `TourOfHeroesApi`: Backend / CRUD-API for managing hero entities
- `TourOfHeroes7`: Reference implementation in Angular 7 (FOR PERFORMANCE COMPARISON)
  - Used features: `Components, Modules, Services, Dependency Injection, HttpClient, ...`
- `TourOfHeroes13`: Reference implementation in Angular 13 (FOR PERFORMANCE COMPARISON)
  - Used features: `All of the above, dynamic imports for routes, ...`

## Goal of this demo

- Show of the [Angular 17 implementation](./TourOfHeroes17/README.md) and focus on the following details:
  - What are the "cool" features?
  - What are the potential impediments with the current version?
- Look at the performance implications of Angular 17 + SSR & hydration
  - What does SSR & hydration do for your performance?
  - How can we evaluate that?
  - When time: How does it compare to previous versions?
