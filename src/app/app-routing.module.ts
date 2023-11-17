import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebaSidebarComponent } from './shared/prueba-sidebar/prueba-sidebar.component';
import { Page404Component } from './shared/page404/page404.component';
import { MantenimientoComponent } from './shared/mantenimiento/mantenimiento.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', loadChildren: () => import('./pages/dashboard/login-clients/login-clients.module').then(m => m.LoginClientsModule) },
  {
    path: 'sidebar',
    component: PruebaSidebarComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'factura', loadChildren: () => import('./pages/dashboard/bills/bills.module').then(m => m.BillsModule) },
      { path: 'thirds', loadChildren: () => import('./pages/dashboard/thirds/thirds.module').then(m => m.ThirdsModule) },
      { path: 'products', loadChildren: () => import('./pages/dashboard/products-general/products/products.module').then(m => m.ProductsModule) },
      { path: 'concentration', loadChildren: () => import('./pages/dashboard/products-general/concentration/concentration.module').then(m => m.ConcentrationModule) },
      { path: 'presentation', loadChildren: () => import('./pages/dashboard/products-general/presentation/presentation.module').then(m => m.PresentationModule) },
      { path: 'warehouse', loadChildren: () => import('./pages/dashboard/products-general/warehouse/warehouse.module').then(m => m.WarehouseModule) },
      { path: 'ajustes', loadChildren: () => import('./pages/dashboard/settings-general/ajustes/ajustes.module').then(m => m.AjustesModule) },
      { path: 'usuarios', loadChildren: () => import('./pages/dashboard/settings-general/usuarios/usuarioss.module').then(m => m.UsuariossModule) },
      /* { path: 'newuser', loadChildren: () => import('./shared/modals/newusercreate/newusercreate.module').then(m => m.NewUserCreateModule) }, */
      { path: 'cambiar', loadChildren: () => import('./shared/change-user-password/change-user-password.module').then(m => m.ChangeUserPasswordModule) },
      { path: 'purchase', loadChildren: () => import('./pages/dashboard/transactions-general/purchase/purchase.module').then(m => m.PurchaseModule) },
      { path: 'sales', loadChildren: () => import('./pages/dashboard/transactions-general/sales/sales.module').then(m => m.SalesModule) },
      { path: 'transfer', loadChildren: () => import('./pages/dashboard/transactions-general/transfer/transfer.module').then(m => m.TransferModule) },
      // ... más rutas hijas para 'sidebar' si es necesario
    ],
  },
  { path: '**', component: Page404Component },
  { path: '**', component: MantenimientoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
