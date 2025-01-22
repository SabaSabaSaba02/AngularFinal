import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data/data.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false; // Tracks authentication status
  private currentUser: { name: string; email: string } | null = null; // Tracks the current user

  constructor(private router: Router, private dataService: DataService) {}

  registerUser(name: string, email: string, password: string): boolean {
    const existingUser = this.dataService.findUser(email);

    if (existingUser) {
      alert('User already exists! Please login.');
      return false;
    }

    this.dataService.addUser({ name, email, password });
    alert('Registration successful!');
    this.router.navigate(['/login']); 
    return true;
  }

  loginUser(email: string, password: string): boolean {
    const user = this.dataService.findUser(email);

    if (user && user.password === password) {
      this.isAuthenticated = true; 
      this.currentUser = { name: user.name, email: user.email }; 
      alert('Login successful!');
      this.router.navigate(['/home']); 
      return true;
    } else {
      alert('Invalid email or password.');
      return false;
    }
  }

  logout(): void {
    this.isAuthenticated = false; 
    this.currentUser = null; 
    alert('Logged out successfully.');
    this.router.navigate(['/login']); 
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getCurrentUser(): { name: string; email: string } | null {
    return this.currentUser;
  }
}
