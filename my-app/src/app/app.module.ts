import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormLoginComponent } from './login/form-login/form-login.component';
import { ContainerComponent } from './container/container.component';
import { ButtonLoginComponent } from './button-login/button-login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { FormRegisterComponent } from './register/form-register/form-register.component';
import { FormRegisterInfoComponent } from './register/form-register/form-register-info/form-register-info.component';
import { FormRegisterAddressComponent } from './register/form-register/form-register-address/form-register-address.component';
import { ButtonRegisterComponent } from './register/button-register/button-register.component';
import { NavHomeComponent } from './home/nav-home/nav-home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderHomeComponent } from './home/header-home/header-home.component';
import { CardsHomeComponent } from './home/cards-home/cards-home.component';
import { FooterHomeComponent } from './home/footer-home/footer-home.component';
import { LoginComponent } from './login/login.component';

import { routing } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FormLoginComponent,
    ContainerComponent,
    ButtonLoginComponent,
    HomeComponent,
    RegisterComponent,
    FormRegisterComponent,
    FormRegisterInfoComponent,
    FormRegisterAddressComponent,
    ButtonRegisterComponent,
    NavHomeComponent,
    FooterComponent,
    HeaderHomeComponent,
    CardsHomeComponent,
    FooterHomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
