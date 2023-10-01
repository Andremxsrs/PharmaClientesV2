import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebaSidebarComponent } from './shared/prueba-sidebar/prueba-sidebar.component';
import { LoginClientsComponent } from './pages/login-clients/login-clients.component';
import { ProductsComponent } from './pages/products-general/products/products.component';
import { ConcentrationComponent } from './pages/products-general/concentration/concentration.component';
import { PresentationComponent } from './pages/products-general/presentation/presentation.component';
import { WarehouseComponent } from './pages/products-general/warehouse/warehouse.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/sidebar' },
  { path: 'sidebar', component: PruebaSidebarComponent },

  
  {
    path: 'sidebar',
    component: PruebaSidebarComponent, // Usa el mismo componente principal para mantener el sidebar
    children: [
      { path: 'login', component: LoginClientsComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'concentration', component: ConcentrationComponent },
      { path: 'presentation', component: PresentationComponent },
      { path: 'warehouse', component: WarehouseComponent },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
