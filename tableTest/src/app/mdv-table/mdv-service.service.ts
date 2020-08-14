import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MdvServiceService {

  planURL = '../../assets/mdv-data.json';
  constructor(private http: HttpClient) { }

  getPlans() {
    return this.http.get(this.planURL)
  }
}
