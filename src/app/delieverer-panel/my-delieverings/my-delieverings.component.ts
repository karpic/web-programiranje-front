import { OrderView } from './../../models/orderView.model';
import { OrderService } from './../../services/order.serrvice';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-delieverings',
  templateUrl: './my-delieverings.component.html',
  styleUrls: ['./my-delieverings.component.css']
})
export class MyDelieveringsComponent implements OnInit {
  myDelieverings: OrderView[];

  getMyDelieverings() {
    this.orderService.getMyDelieveres().subscribe(
      (data) => this.myDelieverings = data
    );
  }

  deliever(order: OrderView){
    this.orderService.delieverOrder(order).subscribe();
    this.myDelieverings = this.myDelieverings.filter(o => o !== order);
  }

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.getMyDelieverings();
  }

}
