// src/app/pages/dashboard/settins-general/ajustes/ajustes.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AjustesComponent } from './ajustes.component'; // Asegúrate de que la importación sea correcta

@NgModule({
  declarations: [
    AjustesComponent, // Agrega el componente al módulo
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([ // Configura las rutas específicas para este módulo
      { path: '', component: AjustesComponent }, // Ruta raíz del módulo
      // Otras rutas específicas de este módulo si las tienes
    ]),
  ],
})
export class AjustesModule {}
