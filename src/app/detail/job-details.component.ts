import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { ALL_JOBS, mockHandlers } from '../../mocks';
import { http, HttpHandler, HttpResponse } from "msw";
import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [CommonModule, FormsModule, AppComponent],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent implements OnInit {

  currentId: any;

  allJobs = ALL_JOBS;
  handlers = mockHandlers;
  job:any;
  


  constructor(private activatedRoute: ActivatedRoute,    
    private router: Router
  ) {

  }

  ngOnInit(): void {


    this.loaddData();

  }

  loaddData() {
    this.activatedRoute.params.subscribe(params => {
      this.currentId = params['id'];
      const path = '/job/' + this.currentId;
       http.get(path, ()=>
      {
        console.log(this.handlers[this.currentId]);

      });

     });
      
    




  



  }





  back() {
    this.router.navigateByUrl('job-component');
  }
}