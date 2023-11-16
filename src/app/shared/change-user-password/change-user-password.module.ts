// src/app/shared/change-user-password/change-user-password.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import {ChangeUserPasswordComponent} from './change-user-password.component'; // Asegúrate de que la importación sea correcta

@NgModule({
  declarations: [
    ChangeUserPasswordComponent, // Agrega el componente al módulo
  ],
  imports: [
    CommonModule,
    NzStepsModule,
    RouterModule.forChild([ // Configura las rutas específicas para este módulo
      { path: '', component: ChangeUserPasswordComponent }, // Ruta raíz del módulo
      // Otras rutas específicas de este módulo si las tienes
    ]),
  ],
})
export class ChangeUserPasswordModule {}