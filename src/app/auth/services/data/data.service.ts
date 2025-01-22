import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  private users: { name: string; email: string; password: string }[] = [];

  constructor(private http: HttpClient) {}  // Inject HttpClient into DataService

  addUser(user: { name: string; email: string; password: string }): void {
    this.users.push(user);
  }

  findUser(email: string): { name: string; email: string; password: string } | undefined {
    return this.users.find((user) => user.email === email);
  }

  fetchUsersFromApi(): Observable<any> {
    return this.http.get(this.apiUrl);  // Using HttpClient to make API calls
  }
}
