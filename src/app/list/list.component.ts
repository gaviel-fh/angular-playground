import {
  AfterContentInit,
  Component,
  ContentChild,
  Input,
  TemplateRef,
} from '@angular/core';
import { Person } from '../types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements AfterContentInit {
  @ContentChild(TemplateRef)
  public customEntryTemplate?: TemplateRef<any>;
  @Input()
  public persons?: Person[];

  public hasCustomTemplate?: boolean;

  constructor() {}

  ngAfterContentInit() {
    this.hasCustomTemplate = !!this.customEntryTemplate;
    console.log(this.customEntryTemplate);
    console.log(this.hasCustomTemplate);
  }
}
