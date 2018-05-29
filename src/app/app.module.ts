import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { HowItworkComponent } from './how-itwork/how-itwork.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUSComponent,
    HowItworkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
