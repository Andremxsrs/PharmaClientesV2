import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebaSidebarComponent } from './shared/prueba-sidebar/prueba-sidebar.component';
import { LoginClientsComponent } from './pages/login-clients/login-clients.component';
import { ProductsComponent } from './pages/products-general/products/products.component';
import { ConcentrationComponent } from './pages/products-general/concentration/concentration.component';
import { PresentationComponent } from './pages/products-general/presentation/presentation.component';
import { WarehouseComponent } from './pages/products-general/warehouse/warehouse.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AjustesComponent } from './pages/settings-general/ajustes/ajustes.component';
import { UsuariossComponent } from './pages/settings-general/usuarios/usuarioss.component';
import { NewusercreateComponent } from './shared/modals/newusercreate/newusercreate.component';
import { ChangeUserPasswordComponent } from './shared/change-user-password/change-user-password.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: LoginClientsComponent },

  
  {
    path: 'sidebar',
    component: PruebaSidebarComponent, // Usa el mismo componente principal para mantener el sidebar
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'sidebar' },    
      { path: 'dashboard', component: DashboardComponent },   
      { path: 'products', component: ProductsComponent },
      { path: 'concentration', component: ConcentrationComponent },
      { path: 'presentation', component: PresentationComponent },
      { path: 'warehouse', component: WarehouseComponent },
      { path: 'dashboard', component: DashboardComponent},
      { path: 'ajustes', component: AjustesComponent},
      { path: 'usuarios', component: UsuariossComponent},
      { path: 'newuser', component: NewusercreateComponent},
      { path: 'cambiar', component: ChangeUserPasswordComponent},
      
    ],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
