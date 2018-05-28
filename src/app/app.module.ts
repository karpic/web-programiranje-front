import { TopTenItemsResolver } from './resolvers/topTenItems.resolver';
import { TokenStorage } from './services/auth/token.storage';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { UsersService } from './services/users.service';
import { AuthService } from './services/auth/auth.service';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ItemsService } from './services/items.service';
import { ItemComponent } from './welcome-page/item/item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    WelcomePageComponent,
    ItemComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    UsersService,
    AuthService,
    TokenStorage,
    TopTenItemsResolver,
    ItemsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
