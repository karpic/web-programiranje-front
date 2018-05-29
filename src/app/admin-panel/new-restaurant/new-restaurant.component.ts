import { RestaurantsService } from './../../services/restaurants.service';
import { RestaurantView } from './../../models/restaurantView.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RestaurantCreation } from '../../models/restaurantCreation.model';

@Component({
  selector: 'app-new-restaurant',
  templateUrl: './new-restaurant.component.html',
  styleUrls: ['./new-restaurant.component.css']
})
export class NewRestaurantComponent implements OnInit {
  restaurants: RestaurantView[];
  updating: boolean;
  restaurantToUpdate: RestaurantView;
  newRestaurant: RestaurantCreation = new RestaurantCreation('','','',false);

  onNewRestaurantFormSubmit(forma: NgForm) {
    this.newRestaurant.name = forma.value.name;
    this.newRestaurant.address = forma.value.address;
    this.newRestaurant.deleted = false;
    console.log(this.newRestaurant);
    this.restaurantService.insertRestaurant(this.newRestaurant).subscribe(
      /* (data) => {
        let createdRestaurant = new RestaurantView(data.id, data.name, data.address, data.category, [], [], false);
      } */
    )
  }

  updateRestaurant(restaurant: RestaurantView) {
    this.restaurantToUpdate = restaurant;
    this.updating = true;
  }

  deleteRestaurant(restaurant: RestaurantView) {
    this.restaurantService.deleteRestaurant(restaurant).subscribe();
    this.refreshData();
  }

  refreshData() {
    this.restaurantService.getRestaurants().subscribe(
      (data) => this.restaurants = data
    );
  }

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantsService
  ) {
    this.updating = false;
  }

  ngOnInit() {
    this.restaurants = this.route.snapshot.data['allrestaurants'];
    console.log(this.route.snapshot.data['allrestaurants']);
  }

}
