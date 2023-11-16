import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Warehouse } from '../Interface/warehouse';

@Injectable({
  providedIn: 'root'
})
export class ProductoServicesService {
  private apiUrl = 'http://localhost:5171/api/bodega/insertar';

  constructor(private http: HttpClient) { }

  //metodo para guardar bodega
  registerWareHouse(bodega:Warehouse): Observable<any> 
  {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(this.apiUrl, bodega, { headers });
  }
}
