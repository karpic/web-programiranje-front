import { ItemsService } from './../../services/items.service';
import { Component, OnInit, Input } from '@angular/core';
import { ItemView } from '../../models/itemView.model';
import { RestaurantView } from '../../models/restaurantView.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {
  @Input() itemToUpdate:ItemView;
  @Input() restaurants: RestaurantView[];
  success: boolean;

  onUpdateItem(forma: NgForm) {
    console.log(this.itemToUpdate);
    this.itemsService.updatePonuda(this.itemToUpdate).subscribe();
    this.success = true;
  }
  constructor(
    private itemsService: ItemsService
  ) {
    this.success = false;
  }

  ngOnInit() {
  }

}
