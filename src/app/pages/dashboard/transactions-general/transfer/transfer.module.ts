// src/app/pages/dashboard/transactions-general/sales/sales.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { TransferComponent } from './transfer.component'; // Asegúrate de que la importación sea correcta

@NgModule({
  declarations: [
    TransferComponent, // Agrega el componente al módulo
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([ // Configura las rutas específicas para este módulo
      { path: '', component: TransferComponent }, // Ruta raíz del módulo
      // Otras rutas específicas de este módulo si las tienes
    ]),
  ],
})
export class TransferModule {}
