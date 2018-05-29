import { ItemsService } from './../../services/items.service';
import { Component, OnInit } from '@angular/core';
import { ItemView } from '../../models/itemView.model';

@Component({
  selector: 'app-item-search',
  templateUrl: './item-search.component.html',
  styleUrls: ['./item-search.component.css']
})
export class ItemSearchComponent implements OnInit {
  name: string = '';
  price: string = '';
  restaurantName: string = '';
  type: string = '';
  items: ItemView[];

  searchItems() {
    this.itemsService.searchItems(this.name, this.price, this.type, this.restaurantName).subscribe(
      (data) => this.items = data
    );
  }

  constructor(
    private itemsService: ItemsService
  ) { }

  ngOnInit() {
  }

}
