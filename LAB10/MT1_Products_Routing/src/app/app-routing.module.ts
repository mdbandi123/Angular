import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ContactComponent } from './contact/contact.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';


const routes: Routes = [
  { path: "", redirectTo: "", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "products", component: ProductsComponent },
  { path: "product-detail/:id", component: ProductDetailsComponent },
  { path: "contact", component: ContactComponent },
  { path: "date", component: NewCmpComponent },
  { path: "**", component: NoPageFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
