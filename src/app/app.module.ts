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
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginClientsComponent } from './pages/login-clients/login-clients.component';
import { RegisterClientsComponent } from './pages/register-clients/register-clients.component';
import { ChangeUserPasswordComponent } from './shared/change-user-password/change-user-password.component';
import { ConcentrationComponent } from './pages/products-general/concentration/concentration.component';
import { PresentationComponent } from './pages/products-general/presentation/presentation.component';
import { ProductsComponent } from './pages/products-general/products/products.component';
import { WarehouseComponent } from './pages/products-general/warehouse/warehouse.component';
import { PurchaseComponent } from './pages/transactions-general/purchase/purchase.component';
import { SalesComponent } from './pages/transactions-general/sales/sales.component';
import { TransferComponent } from './pages/transactions-general/transfer/transfer.component';
import { LoginErrorAuthComponent } from './shared/modals/login/login-error-auth/login-error-auth.component';
import { LoginSuccesfulAuthComponent } from './shared/modals/login/login-succesful-auth/login-succesful-auth.component';
import { UsuariossComponent } from './pages/settings-general/usuarios/usuarioss.component';
import { NuevousuarioComponent } from './pages/settings-general/nuevousuario/nuevousuario.component';
import { AjustesComponent } from './pages/settings-general/ajustes/ajustes.component';
import { NewusercreateComponent } from './shared/modals/newusercreate/newusercreate.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

registerLocaleData(es);

const routes: Routes = [
  {path: '', redirectTo: '/sidebar', pathMatch: 'full'},
  {path: 'sidebar', component: PruebaSidebarComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    PruebaSidebarComponent,
    DashboardComponent,
    LoginClientsComponent,
    RegisterClientsComponent,
    ChangeUserPasswordComponent,
    ConcentrationComponent,
    PresentationComponent,
    ProductsComponent,
    WarehouseComponent,
    PurchaseComponent,
    SalesComponent,
    TransferComponent,
    LoginErrorAuthComponent,
    LoginSuccesfulAuthComponent,
    UsuariossComponent,
    NuevousuarioComponent,
    AjustesComponent,
    NewusercreateComponent,
    
    
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
  ],
  providers: [
    { provide: NZ_I18N, useValue: es_ES }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
