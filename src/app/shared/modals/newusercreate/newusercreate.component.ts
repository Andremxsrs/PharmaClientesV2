import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl  } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserServicesService } from 'src/app/services/user-services.service';
import { Usuarios } from 'src/app/Interfaces/usuarios';
import Swal from 'sweetalert2';
import { MensajeError } from 'src/app/Interfaces/mensaje-error';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newusercreate',
  templateUrl: './newusercreate.component.html',
  styleUrls: ['./newusercreate.component.css']
})
export class NewusercreateComponent {

  users = [
    {value: 'admin', viewValue: 'Admin'},
    {value: 'Empleado', viewValue: 'Gerente de venta'},
    {value: 'gerente_compra', viewValue: 'gerente de compra'},
    {value: 'jefe_bodega', viewValue: 'Jefe de bodega'}
  ];
  
  @Input() modalClass: string = '';
  RegisterForm: FormGroup;
  spinner: boolean = false;
  errorMessage: MensajeError | null = null;

  constructor(private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private servicio:UserServicesService,
    private router:Router
  ) { 
    this.RegisterForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required],
      rol: ['', Validators.required],
      identificacion: ['', Validators.required],
      direccion: ['', [Validators.required, Validators.email]],
      correo: ['', Validators.required],
      telefono: ['', Validators.required],

    });
  }


  onSubmit() {
    //if (this.registrationForm.valid) {
      const userData: Usuarios = this.RegisterForm.value;

      this.spinner = true;
      // Llamada al servicio para registrar al usuario
      this.servicio.registerUser(userData).subscribe(
        response => {
          this.spinner = false;

        Swal.fire('Registro Exitoso!', '', 'success');

        this.errorMessage = null; // Limpiar el mensaje de error si hubo éxito
        console.log('Login exitoso');
        this.router.navigate(['/menu/dashboard']);
        },
        error => {
          console.error("Error:", error);
          console.log(error.error)
          console.log("Error en el registro");
        },
        
      );
    //}
  }

}
