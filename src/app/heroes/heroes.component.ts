import { Component, OnInit } from '@angular/core';
import { Hero } from './hero.model'
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'heroes-list',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  constructor(private heroService: HeroService) {}

  ngOnInit() {
      this.heroService.getHeroes()
        .subscribe( heroes => this.heroes = heroes );
  }

}
