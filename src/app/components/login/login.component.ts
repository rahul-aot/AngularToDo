import { Component } from '@angular/core';
import { ILogin } from '../../model/model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  UserObj : ILogin = new ILogin();

  constructor(private router: Router) {
    const username = localStorage.getItem('username');
    if (username) this.router.navigate(['/home']);
  }
  

  onLogin() {
    if (this.UserObj.username === 'admin' && this.UserObj.password === 'admin') {
      localStorage.setItem('username', this.UserObj.username);
      this.UserObj = new ILogin();
      this.router.navigate(['/home']);
    }
    else {
      alert('Invalid username or password');
    }
  }
}
