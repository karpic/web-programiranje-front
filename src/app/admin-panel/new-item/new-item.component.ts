import { ItemsService } from './../../services/items.service';
import { ActivatedRoute } from '@angular/router';
import { ItemView } from './../../models/itemView.model';
import { ItemCreation } from './../../models/itemCreation.model';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RestaurantView } from '../../models/restaurantView.model';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {
  items: ItemView[];
  restaurants: RestaurantView[];

  newItem: ItemCreation = new ItemCreation('', 0, '', '', 0, 0, false, 0);

  onNewItemSubmit(forma: NgForm){
    this.newItem.name = forma.value.name;
    this.newItem.description = forma.value.description;
    this.newItem.price = forma.value.price;
    this.newItem.type = forma.value.type;
    this.newItem.quantity = forma.value.quantity;
    this.newItem.restaurantId = forma.value.restaurant;

    this.itemsService.insertItem(this.newItem).subscribe(
      /* (createdItem) => {
        this.items.push(createdItem);
      } */
    )

    console.log(this.newItem);
  }

  deleteItem(item: ItemView) {
    this.itemsService.deleteItem(item).subscribe();
    this.items = this.items.filter(i => i !== item);
  }

  constructor(
    private route: ActivatedRoute,
    private itemsService: ItemsService
  ) { }

  ngOnInit() {
    this.items = this.route.snapshot.data['items'];
    this.restaurants = this.route.snapshot.data['restaurants'];
  }

}
