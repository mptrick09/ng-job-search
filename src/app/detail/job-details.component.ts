import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';

import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

import { Detail } from './model/detail';

import { DomSanitizer, SafeHtml } from '@angular/platform-browser';




@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [CommonModule, FormsModule, AppComponent, RouterModule, DatePipe],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) {
    
  }
  currentId: number;
  model: Detail;







  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  http = inject(HttpClient);

 sanitizedJobDescription : SafeHtml;

  ngOnInit(): void {
    this.getJobDetail();
  }

  getJobDetail() {
    this.activatedRoute.params.subscribe(params => {
      this.currentId = params['id'];
      const path = 'jobs/' + this.currentId;

      this.http.get<Detail>(path).subscribe(detail => {
        this.model = detail;
        console.log('jobDetail', detail);
        this.sanitizedJobDescription = this.sanitizeJobDescriptionHtml(this.model.description);
      }
      );
    });



  }
  back() {
    this.router.navigateByUrl('job-component');
  }


  sanitizeJobDescriptionHtml(jobDescriptionHtml:string): SafeHtml{
  return this.sanitizer.bypassSecurityTrustHtml(jobDescriptionHtml);
  }
}