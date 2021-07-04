import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstComponentService {

  constructor() { }

  persons: string[] = ['Ubaidulla K', 'Jubairiya K', 'AbdulRahim K', 'AbdulVahid K', 'Suhaila K']


  addPerson(name: string) {
    this.persons.push(name);
    console.log(this.persons)
  }
}
