import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<any>("https://api.checkwx.com/metar/VABB/decoded?x-api-key=69cfc5f01e354e77a4b8188dca");
  }
}
