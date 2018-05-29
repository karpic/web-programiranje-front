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
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { NewItemComponent } from './admin-panel/new-item/new-item.component';
import { RestaurantsService } from './services/restaurants.service';
import { ItemsResolver } from './resolvers/items.resolver';
import { RestaurantsResolver } from './resolvers/restaurants.resolver';
import { NgxPaginationModule } from 'ngx-pagination';
import { UpdateItemComponent } from './admin-panel/update-item/update-item.component';
import { NewRestaurantComponent } from './admin-panel/new-restaurant/new-restaurant.component';
import { UpdateRestaurantComponent } from './admin-panel/update-restaurant/update-restaurant.component';
import { NewVehicleComponent } from './admin-panel/new-vehicle/new-vehicle.component';
import { UpdateVehicleComponent } from './admin-panel/update-vehicle/update-vehicle.component';
import { VehiclesService } from './services/vehicles.service';
import { VehiclesResolver } from './resolvers/vehicles.resolver';
import { WelcomePageRestaurantNavigatorComponent } from './welcome-page/welcome-page-restaurant-navigator/welcome-page-restaurant-navigator.component';
import { RestaurantComponent } from './welcome-page/welcome-page-restaurant-navigator/restaurant/restaurant.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    WelcomePageComponent,
    ItemComponent,
    AdminPanelComponent,
    NewItemComponent,
    UpdateItemComponent,
    NewRestaurantComponent,
    UpdateRestaurantComponent,
    NewVehicleComponent,
    UpdateVehicleComponent,
    WelcomePageRestaurantNavigatorComponent,
    RestaurantComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [
    UsersService,
    AuthService,
    TokenStorage,
    TopTenItemsResolver,
    ItemsService,
    RestaurantsService,
    ItemsResolver,
    RestaurantsResolver,
    VehiclesService,
    VehiclesResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
