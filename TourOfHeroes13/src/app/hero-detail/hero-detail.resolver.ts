import { HeroService } from '../hero.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { Hero } from "../hero.service";

@Injectable()
export class HeroDetailResolver implements Resolve<Hero> {

    constructor(private heroService: HeroService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Hero | Observable<Hero> | Promise<Hero> {
        if (!route.paramMap.has('id')) {
            return of();
        }
        return this.heroService.getHero(parseInt(route.paramMap.get('id')!));
    }

}
