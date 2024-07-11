import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, effect, inject, signal } from '@angular/core';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { Job } from './job';
import { faUnderline } from '@fortawesome/free-solid-svg-icons';


@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private favoritesKey:string = 'favorites';
  
  setFavorite(jobId: number): void {
    let favorites = localStorage.getItem(this.favoritesKey);
    if (!favorites) {
      favorites = JSON.stringify([]) ;
    }
    const favoritesArray = JSON.parse(favorites);
    if (favoritesArray.includes(jobId)) {
      return; // Already favorited
    }
    favoritesArray.push(jobId);
    localStorage.setItem(this.favoritesKey, JSON.stringify(favoritesArray));
  }

  getFavorite(): number[] {
    const favorites = localStorage.getItem(this.favoritesKey);
    return favorites ? JSON.parse(favorites) : [];
  }
  

  clearFavorites(): void {
    localStorage.removeItem(this.favoritesKey);
  }
  
}
 


