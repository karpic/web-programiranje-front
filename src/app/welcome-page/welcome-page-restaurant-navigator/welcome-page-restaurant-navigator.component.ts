import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../../services/restaurants.service';
import { RestaurantView } from '../../models/restaurantView.model';

@Component({
  selector: 'app-welcome-page-restaurant-navigator',
  templateUrl: './welcome-page-restaurant-navigator.component.html',
  styleUrls: ['./welcome-page-restaurant-navigator.component.css']
})
export class WelcomePageRestaurantNavigatorComponent implements OnInit {
  restaurants: RestaurantView[];

  updateRestaurants(category: string) {
    this.restaurantService.getRestaurantsByCategory(category).subscribe(
      (data) => {
        this.restaurants = data;
        console.log(this.restaurants);
      }
    );
  }

  constructor(
    private restaurantService: RestaurantsService
  ) { }

  ngOnInit() {
  }

}
