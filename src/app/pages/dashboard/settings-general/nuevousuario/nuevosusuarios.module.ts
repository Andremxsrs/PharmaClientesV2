// src/app/pages/dashboard/settins-general/ajustes/nuevousuario/nuevousuario.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NuevousuarioComponent } from './nuevousuario.component'; // Asegúrate de que la importación sea correcta

@NgModule({
  declarations: [
    NuevousuarioComponent, // Agrega el componente al módulo
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([ // Configura las rutas específicas para este módulo
      { path: '', component: NuevousuarioComponent }, // Ruta raíz del módulo
      // Otras rutas específicas de este módulo si las tienes
    ]),
  ],
})
export class NewUserCreateModule {}
