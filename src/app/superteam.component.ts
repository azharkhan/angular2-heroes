import { Component, OnInit } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './heroes/hero.service';
import { Hero } from './heroes/hero.model';

@Component({
  moduleId: module.id,
  selector: 'superteam-app',
  directives: [HeroesComponent, HeroDetailComponent],
  templateUrl: 'superteam.component.html',
  styleUrls: ['superteam.component.css', './shared/normalize.css', './shared/app.css'],
  providers: [HeroService]
})
export class SuperteamAppComponent implements OnInit {

  constructor(private heroService: HeroService) {}
  
  title = 'SuperTeam';
  selectedHero: Hero;
  allHeroes: Hero[];

  toggleHeroDetails(hero: Hero) {
    this.selectedHero = hero;
  }

  ngOnInit() {
    this.heroService.getHeroes()
      .subscribe(heroes => this.allHeroes = heroes );
  }
}
