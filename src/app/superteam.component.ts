import { Component, OnInit } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from './heroes/hero.service';
import { Hero } from './heroes/hero.model';

@Component({
  moduleId: module.id,
  selector: 'superteam-app',
  directives: [HeroesComponent],
  templateUrl: 'superteam.component.html',
  styleUrls: ['superteam.component.css', './shared/normalize.css'],
  providers: [HeroService]
})
export class SuperteamAppComponent implements OnInit {
  title = 'Assemble your SuperTeam Here!';
  allHeroes: Hero[];

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.heroService.getHeroes()
      .subscribe(heroes => this.allHeroes = heroes );
  }
}
