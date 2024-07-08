import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { ALL_JOBS, mockHandlers } from '../../mocks';
import { http } from "msw";
import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import React, { useEffect, useState } from 'react';
import { Detail } from '../detail';



@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [CommonModule, FormsModule, AppComponent, RouterModule],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent implements OnInit {

  currentId: any;

  allJobs = ALL_JOBS;
  handlers = mockHandlers;




  constructor(private activatedRoute: ActivatedRoute,
    private router: Router


  ) {

  }

  ngOnInit(): void {
    this.getCurrentId();




  }

  getCurrentId() {
    this.activatedRoute.params.subscribe(params => {
      this.currentId = params['id'];
      // http.get('jobs/:id', ({params})=>{{
      //   const {id} = params
      // }})   

    });

    //  // kindly tell me how to get this Details Data


  }


  back() {
    this.router.navigateByUrl('job-component');
  }
}