import { OrderService } from './../services/order.serrvice';
import { OrderCreation } from './../models/orderCreation.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RestaurantView } from '../models/restaurantView.model';
import { ItemView } from '../models/itemView.model';
import { RestaurantsService } from '../services/restaurants.service';
import { ItemsService } from '../services/items.service';
import { OrderItemCreation } from '../models/orderItemCreation.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  restaurant: RestaurantView;
  items: ItemView[];
  restaurantId: number;
  orderPreview: Array<string> = [];
  newOrder: OrderCreation = new OrderCreation([], new Date(), '', '', 'ORDERED', '', false);

  addOrderItem(item: ItemView, quantity: number){
    this.orderPreview.push(item.name + ' x'+quantity);

    let orderItem = new OrderItemCreation(item.id, quantity);
    this.newOrder.orderItems.push(orderItem);
    console.log(this.newOrder);
  }

  submitOrder() {
    this.orderService.insertOrder(this.newOrder).subscribe();
    this.router.navigate(['/home']);
  }

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantsService,
    private itemService: ItemsService,
    private orderService: OrderService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.restaurantId = +params['id'];
      this.restaurantService.getRestaurantById(this.restaurantId).subscribe(
        (data) => {
          this.restaurant = data;
          console.log(this.restaurant);
        }
      );
      this.itemService.getItemsForRestaurantId(this.restaurantId).subscribe(
        (data) => {
          this.items = data;
          console.log(this.items);
        }
      );
    });
  }

}
