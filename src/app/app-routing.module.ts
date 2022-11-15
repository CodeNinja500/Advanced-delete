import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsListComponentModule } from './components/products-list/products-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductsListComponent }]), ProductsListComponentModule, ProductsServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
