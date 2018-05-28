import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { RestaurantView } from '../models/restaurantView.model';
import { RestaurantsService } from '../services/restaurants.service';

@Injectable()
export class RestaurantsResolver implements Resolve<RestaurantView[]> {

  constructor(
    private restaurantsService: RestaurantsService
  ){}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<RestaurantView[]>{
    return this.restaurantsService.getRestaurants();
  }
}
