import { OrderService } from './../../services/order.serrvice';
import { Component, OnInit } from '@angular/core';
import { OrderView } from '../../models/orderView.model';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit {
  myOrders: OrderView[];

  getMyOrders() {
    this.orderService.getMyOrders().subscribe(
      (data) => this.myOrders = data
    )
  }

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.getMyOrders();
  }

}
