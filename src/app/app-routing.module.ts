import { AllOrdersComponent } from './delieverer-panel/all-orders/all-orders.component';
import { DelievererPanelComponent } from './delieverer-panel/delieverer-panel.component';
import { UserRestaurantsComponent } from './user-profile/user-restaurants/user-restaurants.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { OrderComponent } from './order/order.component';
import { RestaurantSearchComponent } from './search/restaurant-search/restaurant-search.component';
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
import { SearchComponent } from './search/search.component';
import { ItemSearchComponent } from './search/item-search/item-search.component';
import { UserOrdersComponent } from './user-profile/user-orders/user-orders.component';
import { MyDelieveringsComponent } from './delieverer-panel/my-delieverings/my-delieverings.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'delieverer', component: DelievererPanelComponent, children: [
      { path: 'allorders', component: AllOrdersComponent},
      { path: 'mydelieveries', component: MyDelieveringsComponent}
    ]
  },
  {
    path: 'userprofile', component: UserProfileComponent, children: [
      { path: 'myorders', component: UserOrdersComponent},
      { path: 'savedrestaurants', component: UserRestaurantsComponent}
    ]
  },
  {
    path: 'search', component: SearchComponent, children: [
      {path: 'items', component: ItemSearchComponent},
      {path: 'restaurants', component: RestaurantSearchComponent}
    ]
  },
  {
    path: 'order/:id', component: OrderComponent
  },
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
