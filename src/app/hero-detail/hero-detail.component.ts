import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../heroes/hero.model';

@Component({
  moduleId: module.id,
  selector: 'hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css']
})

export class HeroDetailComponent {

  public newAbility:string;

  addAbility() {
    this.hero.abilities.push( this.newAbility );
    this.newAbility = null;
  }

  @Input() hero: Hero;

  constructor() {}

}
