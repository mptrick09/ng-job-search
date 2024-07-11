import { Injectable } from '@angular/core';
import { Job } from '../model.jobs/job';

@Injectable({
  providedIn: 'root'
})
export class FavoriteJobsService {

  constructor() {
    this.loadFavoriteJobs();
   }
  private favoriteJobsKey = 'favoriteJobs';



  private loadFavoriteJobs(): Job[] {
    const cachedJobs = localStorage.getItem(this.favoriteJobsKey);
    return cachedJobs ? JSON.parse(cachedJobs) : [];
  }

  getFavoriteJobs(): Job[] {
    return this.loadFavoriteJobs();
  }

  setFavoriteJobs(jobs: Job[]): void {
    localStorage.setItem(this.favoriteJobsKey, JSON.stringify(jobs));
  }

  clearFavoriteJobs(): void {
    localStorage.removeItem(this.favoriteJobsKey);
  } 
}
