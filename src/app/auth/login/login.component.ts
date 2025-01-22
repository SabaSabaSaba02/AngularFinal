import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { FormsModule} from '@angular/forms';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,NgFor,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  onLogin() {
    if (this.email && this.password) {
      this.authService.loginUser(this.email, this.password);
    } else {
      alert('Please fill in both fields.');
    }
  }
}
