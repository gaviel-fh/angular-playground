import { Component } from '@angular/core';
import { PersonService } from './services/person.service';
import { Person } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private personService: PersonService) {}
  public persons: Person[] = this.personService.getPersons();
}
