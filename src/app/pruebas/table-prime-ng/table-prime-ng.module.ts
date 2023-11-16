// src/app/pages/dashboard/pruebas/pruebas.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TablePrimeNGComponent } from './table-prime-ng.component'; // Asegúrate de que la importación sea correcta
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [
    TablePrimeNGComponent, // Agrega el componente al módulo
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([ // Configura las rutas específicas para este módulo
      { path: '', component: TablePrimeNGComponent }, // Ruta raíz del módulo
      // Otras rutas específicas de este módulo si las tienes
    ]),
  ],
})

export class TablePrimeNGModule {}


