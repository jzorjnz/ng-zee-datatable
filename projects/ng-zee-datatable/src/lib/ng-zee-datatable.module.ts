import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgZeeDataTableComponent } from './ng-zee-datatable.component';
import { NgZeeDataTablePipe } from './ng-zee-datatable-pipe';

@NgModule({
  declarations: [
    NgZeeDataTableComponent,
    NgZeeDataTablePipe
  ],
  imports: [
    CommonModule,

  ],
  exports: [NgZeeDataTableComponent],
  providers: [NgZeeDataTablePipe]
})
export class NgZeeDataTableModule { }
