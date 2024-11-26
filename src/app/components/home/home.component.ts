import { Component } from '@angular/core';
import { CurrentComponent } from "../current/current.component";
import { CompletedComponent } from "../completed/completed.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CurrentComponent, CompletedComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  currentComponent: string = '';

  constructor(private router: Router) {
    const username = localStorage.getItem('username');
    if (!username) this.router.navigate(['/login']);
    else this.currentComponent = 'current';
  }


  changeTab (tabName: string){
    this.currentComponent = tabName
  }

  logout(){
    const username = localStorage.getItem('username');
    if (username) localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }

}
