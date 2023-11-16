// src/app/pages/dashboard/warehouse/warehouse.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { WarehouseComponent } from './warehouse.component'; // Asegúrate de que la importación sea correcta

@NgModule({
  declarations: [
    WarehouseComponent, // Agrega el componente al módulo
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([ // Configura las rutas específicas para este módulo
      { path: '', component: WarehouseComponent }, // Ruta raíz del módulo
      // Otras rutas específicas de este módulo si las tienes
    ]),
  ],
})
export class WarehouseModule {}
