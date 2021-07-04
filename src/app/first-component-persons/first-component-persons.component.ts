import { Component, OnInit } from '@angular/core';
import { FirstComponentService } from '../first-component.service';

@Component({
  selector: 'app-first-component-persons',
  templateUrl: './first-component-persons.component.html',
  styleUrls: ['./first-component-persons.component.css']
})
export class FirstComponentPersonsComponent implements OnInit {

  personList: string[] | undefined;
  private firstComponentService: FirstComponentService;

  constructor(frstCmpntService: FirstComponentService) {
    // this.personList = firstComponentService.persons
    this.firstComponentService = frstCmpntService;
  }

  ngOnInit(): void {
    this.personList = this.firstComponentService.persons;
  }



}
