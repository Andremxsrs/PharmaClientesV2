// src/app/pages/dashboard/products-general/presentation/presentation.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ConcentrationComponent } from './concentration.component'; // Asegúrate de que la importación sea correcta

@NgModule({
  declarations: [
    ConcentrationComponent, // Agrega el componente al módulo
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([ // Configura las rutas específicas para este módulo
      { path: '', component: ConcentrationComponent }, // Ruta raíz del módulo
      // Otras rutas específicas de este módulo si las tienes
    ]),
  ],
})
export class ConcentrationModule {}
