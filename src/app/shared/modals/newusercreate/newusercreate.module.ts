import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NewusercreateComponent } from './newusercreate.component'; // Asegúrate de que la importación sea correcta
import { ReactiveFormsModule } from '@angular/forms';
import { NumbersOnlyDirective } from 'src/app/Directives/numbers-only.directive';
@NgModule({
  declarations: [
    NewusercreateComponent,
    NumbersOnlyDirective // Agrega el componente al módulo
  ],
  imports: [
    CommonModule,
    NgbModalModule,
    ReactiveFormsModule,
    RouterModule.forChild([ // Configura las rutas específicas para este módulo
      { path: '', component: NewusercreateComponent }, // Ruta raíz del módulo
      // Otras rutas específicas de este módulo si las tienes
    ]),
  ],
})
export class newUserCreateModule {}