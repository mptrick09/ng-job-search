import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, FormsModule, AppComponent, RouterModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
  router = inject(Router);

  onClick(){
    this.router.navigateByUrl('job-component');
  }

}
