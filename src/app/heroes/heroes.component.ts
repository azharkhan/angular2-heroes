import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';
import { Hero } from './hero.model'

@Component({
  moduleId: module.id,
  selector: 'heroes-list',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css'],
  directives: [NgClass]
})
export class HeroesComponent {

  @Input() heroes: Hero[];
  @Output() heroToggled: EventEmitter<Hero> = new EventEmitter();
  selectedHero: Hero;

  selectHero( hero ) {
    // show selected indicator
    this.selectedHero = ( this.selectedHero === hero ) ? null : hero;

    // emit event to show hero details
    this.heroToggled.emit( this.selectedHero );
  }


  constructor() {}

}
