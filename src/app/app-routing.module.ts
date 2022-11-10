import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path:'home', component:HomeComponent
  },
  {
    path:'aboutUs', component:AboutusComponent
  },
  {
    path:'products', component:ProductsComponent
  },
  {
    path:'contactUs', component:ContactUsComponent
  },
  {
    path:'checkout', component:CheckoutComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
