// src/app/pages/dashboard/dasboard.component.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {DashboardComponent} from './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([ // Configura las rutas específicas para este módulo
      { path: '', component: DashboardComponent }, // Ruta raíz del módulo
      // Otras rutas específicas de este módulo si las tienes
    ]),
  ],
})
export class DashboardModule {}
