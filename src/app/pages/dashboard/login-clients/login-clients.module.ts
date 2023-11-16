// src/app/pages/dashboard/login-clients/login-clients.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'; /* Importación nueva */


import { LoginClientsComponent } from './login-clients.component'; // Asegúrate de que la importación sea correcta

@NgModule({
  declarations: [
    LoginClientsComponent, // Agrega el componente al módulo
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([ // Configura las rutas específicas para este módulo
      { path: '', component: LoginClientsComponent }, // Ruta raíz del módulo
      // Otras rutas específicas de este módulo si las tienes
    ]),
  ],
})
export class LoginClientsModule {}


