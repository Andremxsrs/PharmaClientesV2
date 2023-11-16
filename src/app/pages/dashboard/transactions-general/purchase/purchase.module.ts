// src/app/pages/dashboard/transactions-general/purchase/purchase.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PurchaseComponent } from './purchase.component'; // Asegúrate de que la importación sea correcta

@NgModule({
  declarations: [
    PurchaseComponent, // Agrega el componente al módulo
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([ // Configura las rutas específicas para este módulo
      { path: '', component: PurchaseComponent }, // Ruta raíz del módulo
      // Otras rutas específicas de este módulo si las tienes
    ]),
  ],
})
export class PurchaseModule {}
