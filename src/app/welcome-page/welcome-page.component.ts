import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { ItemView } from '../models/itemView.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  topTenItems: ItemView[];

  getTopTen() {
    this.itemsService.getTopTen
  }

  constructor(
    private itemsService: ItemsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.topTenItems = this.route.snapshot.data['topTenItems'];
  }

}
