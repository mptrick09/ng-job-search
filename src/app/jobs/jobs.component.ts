


import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, Input, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';



import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {  faStar } from '@fortawesome/free-solid-svg-icons';
import { ALL_JOBS, mockHandlers } from '../../mocks';



@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [ CommonModule, FormsModule,  FontAwesomeModule, RouterModule],
  templateUrl:  './jobs.component.html',
  styleUrl:  './jobs.component.css',
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class JobsComponent implements OnInit {

  title = 'ng-job-search';
  router = inject(Router);


  //  detailedJobs = ;
   allJobs = ALL_JOBS;
  handlers = mockHandlers;

 showJob : boolean = true;
 showFavs : boolean = false; 
@Input() filterJobs = ALL_JOBS;
 showIcon:boolean = true;

 fav = faStar;



  ngOnInit(): void {
    // console.log(this.detailedJobs);
    console.log(this.allJobs);
    console.log(this.handlers);
    this.allJobs;
  }
  onJobsClicked(value:string){

    if(value === 'list'){
      this.showJob= true; 
      this.filterJobs = this.allJobs;
      this.showIcon = true;
     
    
    }  
    else if ( value === 'fav'){
      this.showFavs = true;
      
      this.filterJobs = this.allJobs.filter(job => job.isRated === true);
      this.showIcon =  false;
      if(this.filterJobs.length < 0){
        this.filterJobs = [];
      }
       
      
     
    }  
    
    
    

  }

  onTitleClicked(value:number){

    this.router.navigateByUrl('job/'+ value);
   

  }

 

  toggleRating(jobId: number) {
    this.allJobs = this.allJobs.map(job => {
      if (job.id === jobId) {
        job.isRated =  !job.isRated;
      }
      return job;
    });
  }

}

