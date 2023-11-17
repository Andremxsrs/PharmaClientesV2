import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuarios } from '../Interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  
  private apiUrl = 'http://localhost:5171/api/usuarios/insertar';
  constructor(private http: HttpClient) { }

  

  registerUser(userData: Usuarios): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(this.apiUrl, userData, { headers });
  }
}
