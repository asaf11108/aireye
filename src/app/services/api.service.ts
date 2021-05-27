import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Record } from '../interfaces/record';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly ENDPOINT = 'https://test-fed.aireye.me/results';

  constructor(private http: HttpClient) { }

  getRecords() {
    return this.http.get<Record[]>(this.ENDPOINT);
  }
}
