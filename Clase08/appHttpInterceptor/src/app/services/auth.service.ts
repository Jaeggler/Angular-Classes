import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  register(user: User): Observable<any> {
    return this.http.post("http://test.tibajodemanda.com/auth", user)
  }

  login(user: User) {
    return this.http.post("http://test.tibajodemanda.com/auth/login", user)
  }
}
