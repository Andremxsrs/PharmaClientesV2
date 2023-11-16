import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NzStepsModule } from 'ng-zorro-antd/steps';

import { ProductsComponent } from './products.component'; // Asegúrate de que la importación sea correcta

@NgModule({
  declarations: [
    ProductsComponent, // Agrega el componente al módulo
  ],
  imports: [
    CommonModule,
    NzStepsModule,
    RouterModule.forChild([ // Configura las rutas específicas para este módulo
      { path: '', component: ProductsComponent }, // Ruta raíz del módulo
      // Otras rutas específicas de este módulo si las tienes
    ]),
  ],
})
export class ProductsModule {}
