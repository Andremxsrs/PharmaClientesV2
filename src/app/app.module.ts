import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button'; /* PrimeNG - Importación de Ejemplo */
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PruebaSidebarComponent } from './shared/prueba-sidebar/prueba-sidebar.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { RouterModule, Routes } from '@angular/router';
import { RegisterClientsComponent } from './pages/dashboard/register-clients/register-clients.component';
import { LoginErrorAuthComponent } from './shared/modals/login/login-error-auth/login-error-auth.component';
import { LoginSuccesfulAuthComponent } from './shared/modals/login/login-succesful-auth/login-succesful-auth.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Page404Component } from './shared/page404/page404.component';
import { MantenimientoComponent } from './shared/mantenimiento/mantenimiento.component';
import { MatTableModule } from '@angular/material/table';
import { PurchaseModalComponent } from './shared/modals/transactions/purchase-modal/purchase-modal.component';
import { SalesModalComponent } from './shared/modals/transactions/sales-modal/sales-modal.component';
import { ThirdsModalComponent } from './shared/modals/thirds/thirds-modal/thirds-modal.component';
import { CreatethirdsComponent } from './shared/modals/thirds/createthirds/createthirds.component';

registerLocaleData(es);

const routes: Routes = [
  {path: '', redirectTo: '/sidebar', pathMatch: 'full'},
  {path: 'sidebar', component: PruebaSidebarComponent},
  
]
@NgModule({
  declarations: [
    AppComponent,
    PruebaSidebarComponent,
    RegisterClientsComponent,
    LoginErrorAuthComponent,
    LoginSuccesfulAuthComponent,
    Page404Component,
    MantenimientoComponent,
    PurchaseModalComponent,
    SalesModalComponent,
    ThirdsModalComponent,
    CreatethirdsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzIconModule,
    NzButtonModule,
    NzStepsModule,
    NgbModule,
    ScrollingModule,
    NgApexchartsModule,
    MatTableModule,
    ButtonModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: es_ES }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
