import { RestaurantsService } from './../../../services/restaurants.service';
import { Component, OnInit, Input } from '@angular/core';
import { RestaurantView } from '../../../models/restaurantView.model';
import { ItemsService } from '../../../services/items.service';
import { ItemView } from '../../../models/itemView.model';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  @Input() restaurant: RestaurantView;
  items: ItemView[];
  showItems: boolean;

  updateItems() {
    this.itemService.getItemsForRestaurantId(this.restaurant.id).subscribe(
      (data) => this.items = data
    );
    this.showItems = true;
  }

  save() {
    this.restaurantService.saveRestaurant(this.restaurant).subscribe();
  }

  constructor(
    private itemService: ItemsService,
    private restaurantService: RestaurantsService
  ) {
    this.showItems = false;
   }

  ngOnInit() {
  }

}
