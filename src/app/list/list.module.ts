import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ListEntryComponent } from './list-entry/list-entry.component';

@NgModule({
  declarations: [ListComponent, ListEntryComponent],
  imports: [CommonModule],
  exports: [ListComponent],
})
export class ListModule {}
