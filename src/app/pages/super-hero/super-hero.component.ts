import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import SuperHero from 'src/app/models/SuperHero';
import { SuperHeroService } from 'src/app/services/SuperHero/super-hero.service';

@Component({
  selector: 'app-super-hero',
  templateUrl: './super-hero.component.html',
  styleUrls: ['./super-hero.component.scss'],
})
export class SuperHeroComponent implements OnInit {
  public superHeroId: any;
  public superHeroName: any;
  public superHeroList: SuperHero[] = [];

  constructor(
    private _Activatedroute: ActivatedRoute,
    private _superHeroService: SuperHeroService
  ) {}

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe((params) => {
      this.superHeroId = params.get('id');
      this.superHeroName = params.get('name');
    });

    this._superHeroService
      .getSuperHeroList()
      .subscribe((data) => (this.superHeroList = data));
  }
}
