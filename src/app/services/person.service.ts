import { Injectable } from '@angular/core';
import { Person } from '../types';
import { data } from '../../dummy-data/persons.data';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor() {}

  getPersons(): Person[] {
    return data;
  }

  getPersonById(id: number): Person {
    return data[id];
  }
}
