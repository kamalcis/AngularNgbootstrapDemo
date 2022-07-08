import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import SuperHero from 'src/app/models/SuperHero';

@Injectable({
  providedIn: 'root',
})
export class SuperHeroService {
  //public BASE_URL = 'https://localhost:7030';
  //public SUPERHERO_API = `${this.BASE_URL}/api/management/downloadedworkflows/custom/`;

  public url = '/assets/testdata.json';

  constructor(private http: HttpClient) {}

  getSuperHeroList(): Observable<SuperHero[]> {
    return this.http.get<SuperHero[]>(this.url);
  }
}
