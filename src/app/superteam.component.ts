import { Component } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';

@Component({
  moduleId: module.id,
  selector: 'superteam-app',
  directives: [HeroesComponent],
  templateUrl: 'superteam.component.html',
  styleUrls: ['superteam.component.css']
})
export class SuperteamAppComponent {
  title = 'Assemble your SuperTeam Here!';
}
