import { RestaurantsService } from './../../services/restaurants.service';
import { Component, OnInit } from '@angular/core';
import { RestaurantView } from '../../models/restaurantView.model';

@Component({
  selector: 'app-restaurant-search',
  templateUrl: './restaurant-search.component.html',
  styleUrls: ['./restaurant-search.component.css']
})
export class RestaurantSearchComponent implements OnInit {
  name: string = '';
  address: string = '';
  category: string = '';
  restaurants: RestaurantView[];

  searchRestaurants() {
    this.restaurantService.searchRestaurants(this.name, this.address, this.category).subscribe(
      (data) => this.restaurants = data
    )
  }

  constructor(
    private restaurantService: RestaurantsService
  ) { }

  ngOnInit() {
  }

}
