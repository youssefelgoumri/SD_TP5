import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {CustomersComponent} from "./customers/customers.component";
import {BillsComponent} from "./bills/bills.component";
import {ProductItemsComponent} from "./product-items/product-items.component";


const routes: Routes = [
  { path:'products', component:ProductsComponent },
  { path:'customers', component:CustomersComponent },
  { path:'bills/:customerId', component:BillsComponent },
  { path:'bills/:id/productItems', component:ProductItemsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
