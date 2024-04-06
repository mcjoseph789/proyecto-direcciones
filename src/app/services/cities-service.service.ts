import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitiesServiceService {
  constructor(private http: HttpClient) { } // Inyectar HttpClient en el constructor

  // Método para realizar una solicitud HTTP GET
  fetchData() {
    return this.http.get('https://api-colombia.com/api/v1/city')
  }
}
