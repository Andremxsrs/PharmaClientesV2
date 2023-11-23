import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Warehouse } from '../Interface/warehouse';

@Injectable({
  providedIn: 'root'
})
export class ProductoServicesService {
  private apiObtenerUser = 'http://localhost:5171/api/usuarios/mostrar/';
  private apiUrl = 'http://localhost:5171/api/bodega/insertar';
  

  constructor(private http: HttpClient) { }

  obtenerUser(usuario: string): Observable<any> 
  {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.get(this.apiObtenerUser + usuario, { headers });
  }
  
  //metodo para guardar bodega
  registerWareHouse(identificacion: string ,bodega:Warehouse): Observable<any> 
  {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(this.apiUrl+ identificacion, bodega, { headers });
  }
}
