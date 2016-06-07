import { Component, OnInit, Input } from '@angular/core';
import { Hero } from './hero.model'

@Component({
  moduleId: module.id,
  selector: 'heroes-list',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css']
})
export class HeroesComponent {

  @Input() heroes: Hero[];
  constructor() {}

}
