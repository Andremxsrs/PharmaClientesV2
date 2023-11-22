// src/app/pages/dashboard/transactions-general/purchase/purchase.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { MatTableModule } from '@angular/material/table';
import { PurchaseComponent } from './purchase.component'; // Asegúrate de que la importación sea correcta
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PurchaseComponent, // Agrega el componente al módulo
  ],
  imports: [
    CommonModule,
    NzStepsModule,
    NzIconModule, 
    MatTableModule,
    FormsModule,
    RouterModule.forChild([ // Configura las rutas específicas para este módulo
      { path: '', component: PurchaseComponent }, // Ruta raíz del módulo
      // Otras rutas específicas de este módulo si las tienes
    ]),
  ],
})
export class PurchaseModule {}
