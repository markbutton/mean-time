import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeEntryComponent } from './time-entry.component';
import { ProfileComponent } from '../profile/profile.component';
import { WorkComponent } from './components/work/work.component';
import { BreakComponent } from './components/break/break.component';
import { TravelComponent } from './components/travel/travel.component';
import { TimeEntryRouter } from './time-entry.router';

@NgModule({
  declarations: [
    TimeEntryComponent,
    ProfileComponent,
    WorkComponent,
    BreakComponent,
    TravelComponent
  ],
  imports: [
    CommonModule,
    TimeEntryRouter
  ],
  exports: [TimeEntryComponent]
})
export class TimeEntryModule { }
