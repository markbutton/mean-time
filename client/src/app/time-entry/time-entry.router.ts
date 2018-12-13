import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth.guard';
import { WorkComponent } from './components/work/work.component';
import { BreakComponent } from './components/break/break.component';
import { TravelComponent } from './components/travel/travel.component';
import { TimeEntryComponent } from './time-entry.component';

const timeEntryRoutes: Routes = [
    { path: '', component: TimeEntryComponent,
                children: [
                    { path: 'work', component: WorkComponent, canActivate: [AuthGuard]},
                    { path: 'break', component: BreakComponent, canActivate: [AuthGuard]},
                    { path: 'travel', component: TravelComponent, canActivate: [AuthGuard]}
                ]
    },

    // otherwise redirect to home
    { path: '**', redirectTo: 'time-entry' }
];

export const TimeEntryRouter = RouterModule.forChild(timeEntryRoutes);
