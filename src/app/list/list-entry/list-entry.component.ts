import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/types';

@Component({
  selector: 'app-list-entry',
  templateUrl: './list-entry.component.html',
  styleUrls: ['./list-entry.component.scss'],
})
export class ListEntryComponent implements OnInit {
  @Input()
  public person?: Person;

  constructor() {}

  ngOnInit(): void {}
}
