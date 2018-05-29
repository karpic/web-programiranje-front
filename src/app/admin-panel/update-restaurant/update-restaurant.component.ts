import { RestaurantsService } from './../../services/restaurants.service';
import { Component, OnInit, Input } from '@angular/core';
import { RestaurantView } from '../../models/restaurantView.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {
  @Input() restaurantToUpdate: RestaurantView;
  success: boolean;
  constructor(
    private restaurantService: RestaurantsService
  ) {
    this.success = false;
   }

  onUpdateSubmit(forma: NgForm){
    this.restaurantService.updateRestaurant(this.restaurantToUpdate).subscribe();
    this.success = true;
  }

  ngOnInit() {
  }

}
