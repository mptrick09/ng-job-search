import { Routes } from '@angular/router';
import { JobDetailsComponent } from './detail/job-details.component';

import { JobsComponent } from './jobs/jobs.component';
import { mockHandlers } from '../mocks';
import { handleRequest } from 'msw';
import { NotFoundComponent } from './not-found/not-found.component';

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
        path: 'not-favJob', 
        component: NotFoundComponent,

      },
      {
        path: '**',
        redirectTo: 'job-component',
      },
    
    
        
];
