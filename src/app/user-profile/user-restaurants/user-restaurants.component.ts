import { RestaurantsService } from './../../services/restaurants.service';
import { Component, OnInit } from '@angular/core';
import { RestaurantView } from '../../models/restaurantView.model';

@Component({
  selector: 'app-user-restaurants',
  templateUrl: './user-restaurants.component.html',
  styleUrls: ['./user-restaurants.component.css']
})
export class UserRestaurantsComponent implements OnInit {
  savedRestaurants: RestaurantView[];

  getSavedRestaurants() {
    this.restaurantService.getSavedRestaurants().subscribe(
      (data) => this.savedRestaurants = data
    );
  }

  constructor(
    private restaurantService: RestaurantsService
  ) { }

  ngOnInit() {
    this.getSavedRestaurants();
  }

}
