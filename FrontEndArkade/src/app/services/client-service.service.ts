import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IClient } from '../models/client.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }
  clientEdited:IClient={ id:"",
  name: '',
  cellPhone: '' ,
  address: '',
  gender: '', 
  email : '' ,
  dateBirth: new Date()};
  API: string = "https://localhost:7077/api/Clients"

  getAll(): Observable<IClient[]> {
    return this.http.get<IClient[]>(`${this.API}`);
  }

  delete(id:string) {
    return this.http.delete(`${this.API}/${id}`);
  }

  add(client: IClient) {
    return this.http.post(`${this.API}`, client);
  }

  findById(id: string): Observable<IClient> {
    return this.http.get<IClient>(`${this.API}/${id}`);
  }

  update(client: IClient): Observable<IClient> {
    return this.http.put<IClient>(`${this.API}/${client.id}`, client);
  }
}
