import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";

export interface Hero {
  id: number;
  name: string;
}

@Injectable({ providedIn: "root" })
export class HeroService {
  #heroesUrl = "http://localhost:8080/api/heroes";
  #httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  #http = inject(HttpClient);
  #messageService = inject(MessageService);

  /** GET heroes from the server */
  getHeroes(): Observable<Hero[]> {
    return this.#http.get<Hero[]>(this.#heroesUrl).pipe(
      tap((_) => this.log("fetched heroes")),
      catchError(this.handleError<Hero[]>("getHeroes", [])),
    );
  }

  /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<Hero> {
    const url = `${this.#heroesUrl}/${id}`;
    return this.#http.get<Hero>(url).pipe(
      tap((_) => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`)),
    );
  }

  /** GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.#http.get<Hero[]>(`${this.#heroesUrl}?name=${term}`).pipe(
      tap((x) =>
        x.length
          ? this.log(`found heroes matching "${term}"`)
          : this.log(`no heroes matching "${term}"`),
      ),
      catchError(this.handleError<Hero[]>("searchHeroes", [])),
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addHero(hero: Hero): Observable<Hero> {
    return this.#http.post<Hero>(this.#heroesUrl, hero, this.#httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>("addHero")),
    );
  }

  /** DELETE: delete the hero from the server */
  deleteHero(id: number): Observable<Hero> {
    const url = `${this.#heroesUrl}/${id}`;

    return this.#http.delete<Hero>(url, this.#httpOptions).pipe(
      tap((_) => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>("deleteHero")),
    );
  }

  /** PUT: update the hero on the server */
  updateHero(hero: Hero): Observable<any> {
    return this.#http.put(this.#heroesUrl, hero, this.#httpOptions).pipe(
      tap((_) => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>("updateHero")),
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param fallbackResult - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", fallbackResult?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console (for development purposes)
      this.log(`${operation} failed: ${error.message}`);
      return of(fallbackResult as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.#messageService.add(`HeroService: ${message}`);
  }
}
