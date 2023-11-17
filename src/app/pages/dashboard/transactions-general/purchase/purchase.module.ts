// src/app/pages/dashboard/transactions-general/purchase/purchase.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { PurchaseComponent } from './purchase.component'; // Asegúrate de que la importación sea correcta

@NgModule({
  declarations: [
    PurchaseComponent, // Agrega el componente al módulo
  ],
  imports: [
    CommonModule,
    NzStepsModule,
    NzIconModule,
    RouterModule.forChild([ // Configura las rutas específicas para este módulo
      { path: '', component: PurchaseComponent }, // Ruta raíz del módulo
      // Otras rutas específicas de este módulo si las tienes
    ]),
  ],
})
export class PurchaseModule {}
