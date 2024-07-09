import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { Job } from '../job';



@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule, RouterModule],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css',
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class JobsComponent implements OnInit {

  title = 'ng-job-search';
  router = inject(Router);
  http = inject(HttpClient);

  showJob: boolean = true;
  showFavs: boolean = false;
  filterJobs: Job[] = [];
  models: Job[];
  showIcon: boolean = true;
  fav = faStar;



  ngOnInit(): void {

    this.loadData();
  }
  onJobsClicked(value: string) {

    if (value === 'list') {
      this.showJob = true;
      this.filterJobs = this.models;
      this.showIcon = true;


    }
    else if (value === 'fav') {
      this.showFavs = true;

      this.filterJobs = this.models.filter(job => job.isRated === true);
      this.showIcon = false;
      if (!this.filterJobs.length) {
        this.router.navigateByUrl('not-favJob');
        this.filterJobs = [];

      }
    }
  }

  onTitleClicked(value: number) {

    this.router.navigateByUrl('job/' + value);


  }

  toggleRating(jobId: number) {
    this.models = this.models.map(job => {
      if (job.id === jobId) {
        job.isRated = !job.isRated;
      }
      return job;
    });
  }

  loadData() {
    this.http.get<Job[]>('/jobs').subscribe(
      (data) => {
        this.models = data;
        this.filterJobs = this.models;
        console.log("checkData:", data);
      }
    )
  }

}