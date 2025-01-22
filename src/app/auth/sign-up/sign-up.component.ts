import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, NgFor, RouterOutlet],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  name = '';
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  onRegister() {
    if (this.name && this.email && this.password) {
      this.authService.registerUser(this.name, this.email, this.password);
    } else {
      alert('Please fill all fields!');
    }
  }
}
