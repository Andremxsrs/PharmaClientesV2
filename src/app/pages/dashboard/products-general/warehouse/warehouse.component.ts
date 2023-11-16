import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Warehouse } from 'src/app/Interface/warehouse';
import { MensajeError } from 'src/app/Interfaces/mensaje-error';
import { ProductoServicesService } from 'src/app/services/producto-services.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent {
  wareHouseForm : FormGroup;
  spinner: boolean = false;
  errorMessage : MensajeError | null = null;

  constructor(private formBuilder: FormBuilder, private servicioProductos: ProductoServicesService, private router:Router){
    this.wareHouseForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],

    });
  }

  onSubmit(){
    const data : Warehouse = this.wareHouseForm.value;
    this.spinner = true;
    this.servicioProductos.registerWareHouse(data).subscribe(
      Response => {
        this.spinner = false;

        Swal.fire('Login Exitoso', '', 'success');

        this.errorMessage = null; // Limpiar el mensaje de error si hubo éxito
        console.log('Login exitoso');
        this.router.navigate(['/sidebar/warehouse']);
      }, 
      error => {
        this.spinner = false;

        this.errorMessage = error.Message; // Accede al campo "Message" del JSON de error
        console.log(this.errorMessage);

        Swal.fire({
          title: 'ERROR',
          html: `${this.errorMessage}`,
          icon: 'error',
        });
      }
    )
  }
}


