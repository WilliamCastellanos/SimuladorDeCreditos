import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  user: IUser = {
    id_client: '',
    nickName: '',
    username: '',
    perfil: '',
    state: '',
    password: ''
  };
  isAdmin: boolean = false;
  isClient: boolean = false;
  viewLogin: boolean = true;
  API: string = "https://localhost:7077/api/Logins"

  getAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.API}`);
  }

  delete(id: string) {
    return this.http.delete(`${this.API}/${id}`);
  }

  add(user: IUser) {
    return this.http.post(`${this.API}`, user);
  }

  findById(id: string): Observable<IUser> {
    return this.http.get<IUser>(`${this.API}/${id}`);
  }

  update(user: IUser): Observable<IUser> {
    return this.http.put<IUser>(`${this.API}/${user.nickName}`, user);
  }
}