// src/app/pages/dashboard/login-clients/login-clients.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BillsComponent } from './bills.component'; // Asegúrate de que la importación sea correcta

@NgModule({
  declarations: [
    BillsComponent, // Agrega el componente al módulo
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([ // Configura las rutas específicas para este módulo
      { path: '', component: BillsComponent }, // Ruta raíz del módulo
      // Otras rutas específicas de este módulo si las tienes
    ]),
  ],
})
export class BillsModule {}
