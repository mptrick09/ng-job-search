import { Routes } from '@angular/router';
import { JobDetailsComponent } from './detail/job-details.component';
import { AppComponent } from './app.component';
import { JobsComponent } from './jobs/jobs.component';

export const routes: Routes = [
    {
        path: 'job-component',
        component: JobsComponent,
      },
      {
        path : 'job/:id',        
        component: JobDetailsComponent, 
      },
      {
        path: '**',
        redirectTo: 'job-component',
      },
    
    
        
];
