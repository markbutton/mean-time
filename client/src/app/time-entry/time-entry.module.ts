import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeEntryComponent } from './time-entry.component';
import { ProfileComponent } from '../profile/profile.component';

@NgModule({
  declarations: [
    TimeEntryComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [TimeEntryComponent]
})
export class TimeEntryModule { }
