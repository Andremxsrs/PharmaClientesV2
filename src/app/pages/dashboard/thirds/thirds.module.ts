// src/app/pages/dashboard/thirds/thirds.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ThirdsComponent } from './thirds.component'; // Asegúrate de que la importación sea correcta
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    ThirdsComponent, // Agrega el componente al módulo
  ],
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule.forChild([ // Configura las rutas específicas para este módulo
      { path: '', component: ThirdsComponent }, // Ruta raíz del módulo
      // Otras rutas específicas de este módulo si las tienes
    ]),
  ],
})
export class ThirdsModule {}


