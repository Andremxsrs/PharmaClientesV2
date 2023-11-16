import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
  ],
  providers: [
    { provide: NZ_I18N, useValue: es_ES }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
