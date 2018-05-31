import { OrderView } from './../../models/orderView.model';
import { OrderService } from './../../services/order.serrvice';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {
  allOrders: OrderView[];

  getAllOrders() {
    this.orderService.getAll().subscribe(
      (data) => this.allOrders = data
    );
  }

  takeOrder(order: OrderView) {
    this.orderService.takeOrder(order).subscribe();
    this.allOrders = this.allOrders.filter(o => o !== order);
  }

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.getAllOrders();
  }

}
