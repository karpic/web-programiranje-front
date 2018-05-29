import { NewRestaurantComponent } from './admin-panel/new-restaurant/new-restaurant.component';
import { RestaurantsResolver } from './resolvers/restaurants.resolver';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, Router, RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { TopTenItemsResolver } from './resolvers/topTenItems.resolver';
import { NewItemComponent } from './admin-panel/new-item/new-item.component';
import { ItemsResolver } from './resolvers/items.resolver';
import { VehiclesResolver } from './resolvers/vehicles.resolver';
import { NewVehicleComponent } from './admin-panel/new-vehicle/new-vehicle.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'home',
    component: WelcomePageComponent,
    resolve: { topTenItems: TopTenItemsResolver}
  },
  { path: 'admin',
    component: AdminPanelComponent,
    children: [
      { path: 'items',
        component: NewItemComponent,
        resolve: {
          items: ItemsResolver,
          restaurants: RestaurantsResolver
        }
      },
      {
        path: 'restaurants',
        component: NewRestaurantComponent,
        resolve: {
          allrestaurants: RestaurantsResolver
        }
      },
      {
        path: 'vehicles',
        component: NewVehicleComponent,
        resolve: {
          vehicles: VehiclesResolver
        }
      }
    ]
  }

];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
