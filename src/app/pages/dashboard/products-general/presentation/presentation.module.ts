// src/app/pages/dashboard/products-general/concentration/concentration.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PresentationComponent } from './presentation.component'; // Asegúrate de que la importación sea correcta

@NgModule({
  declarations: [
    PresentationComponent, // Agrega el componente al módulo
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([ // Configura las rutas específicas para este módulo
      { path: '', component: PresentationComponent }, // Ruta raíz del módulo
      // Otras rutas específicas de este módulo si las tienes
    ]),
  ],
})
export class PresentationModule {}
