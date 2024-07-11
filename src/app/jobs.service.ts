
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private favoritesKey: string = 'favorites';

  setFavorite(jobId: number): void {
    let favorites = localStorage.getItem(this.favoritesKey);
    if (!favorites) {
      favorites = JSON.stringify([]);
    }
    const favoritesArray = JSON.parse(favorites);
    if (favoritesArray.includes(jobId)) {
      return;
    }
    console.log("selectedJobId",jobId);
    favoritesArray.push(jobId);
    localStorage.setItem(this.favoritesKey, JSON.stringify(favoritesArray));
  }

  getFavorite(): number[] {

    const favorites = localStorage.getItem(this.favoritesKey);   
    return favorites ? JSON.parse(favorites) : [];
  }


  clearFavorites(jobId:number): void {
    let favorites = localStorage.getItem(this.favoritesKey);
    if (!favorites) {
      return;
    }
    let favoritesArray = JSON.parse(favorites);
    favoritesArray = favoritesArray.filter((id:number) => id !== jobId);
    localStorage.setItem(this.favoritesKey, JSON.stringify(favoritesArray));
  }

}



