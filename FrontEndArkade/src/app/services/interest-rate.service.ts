import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IInterestRate } from '../models/interestRate.interface';

@Injectable({
  providedIn: 'root'
})
export class InterestRateService {

  constructor(private http: HttpClient) { }
  
  API: string = "https://localhost:7077/api/InterestRates"

  getAll(): Observable<IInterestRate[]> {
    return this.http.get<IInterestRate[]>(`${this.API}`);
  }

  delete(id:string) {
    return this.http.delete(`${this.API}/${id}`);
  }

  add(interestRate: IInterestRate) {
    return this.http.post(`${this.API}`, interestRate);
  }

  findById(id: string): Observable<IInterestRate> {
    return this.http.get<IInterestRate>(`${this.API}/${id}`);
  }

  update(interestRate: IInterestRate): Observable<IInterestRate> {
    return this.http.put<IInterestRate>(`${this.API}/${interestRate.nameInteresRate}`, interestRate);
  }
}
