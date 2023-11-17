import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Warehouse } from 'src/app/Interface/warehouse';
import { MensajeError } from 'src/app/Interfaces/mensaje-error';
import { ProductoServicesService } from 'src/app/services/producto-services.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { UserServicesService } from 'src/app/services/user-services.service';
import { Usuarios } from 'src/app/Interfaces/usuarios';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent {
  username = '';
  wareHouseForm : FormGroup;
  spinner: boolean = false;
  errorMessage : MensajeError | null = null;
  datosUsuario:Usuarios | null = null;
  constructor(private formBuilder: FormBuilder, 
    private servicioProductos: ProductoServicesService, 
    private router:Router, 
    private userService: UserServicesService){
    this.wareHouseForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],

    });
  }


  obtener_idUser(): Observable<string> {
    const userDataString = localStorage.getItem('userData');
  
    if (userDataString) {
      try {
        const userData = JSON.parse(userDataString);
        this.username = userData.usuario;
  
      } catch (error) {
        console.error('Error al analizar JSON:', error);
        return of(''); // Puedes retornar un observable con un valor predeterminado en caso de error
      }
    }
  
    // Devuelve un observable con la identificación del usuario
    return this.servicioProductos.obtenerUser(this.username).pipe(
      map((response) => response?.Identificacion || ''),
      catchError((error) => {
        console.log(error);
        return of(''); // Puedes retornar un valor predeterminado en caso de error
      })
    );
  }

  
  onSubmit() {
    const data: Warehouse = this.wareHouseForm.value;
    this.spinner = true;
  
    this.obtener_idUser().subscribe(
      (identificacionUser) => {
        // Agregamos un console.log para verificar que identificacionUser contiene el valor correcto
        console.log('Identificación del usuario en onSubmit:', identificacionUser);
  
        this.servicioProductos.registerWareHouse(identificacionUser, data).subscribe(
          (Response) => {
            this.spinner = false;
  
            Swal.fire('La bodega ha sido registrada exitosamente', '', 'success');
  
            this.errorMessage = null;
            console.log('Registro de bodega exitoso');
            this.router.navigate(['/sidebar/warehouse']);
          },
          (error) => {
            this.spinner = false;
  
            this.errorMessage = error.Message;
            console.log(this.errorMessage);
            console.log(this.wareHouseForm.value)
            Swal.fire({
              title: 'ERROR',
              html: `${this.errorMessage}`,
              icon: 'error',
            });
          }
        );
      },
      (error) => {
        console.error('Error al obtener la identificación del usuario:', error);
        this.spinner = false;
        // Puedes manejar el error relacionado con obtener_idUser aquí si es necesario
      }
    );
  }
}


