import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { HowItWOrksComponent } from './how-it-works/how-it-works.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path:'', component:HomeComponent},  
  { path: 'Products', component: ProductsComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'HowItWOrks', component: HowItWOrksComponent },
  { path: 'ContactUs', component: ContactComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideNavComponent,
    HeaderComponent,
    ProductsComponent,
    OrdersComponent,
    HowItWOrksComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
