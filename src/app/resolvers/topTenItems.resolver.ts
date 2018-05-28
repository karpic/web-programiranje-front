import { Injectable } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ItemView } from '../models/itemView.model';

@Injectable()
export class TopTenItemsResolver implements Resolve<ItemView[]> {

  constructor(
    private itemsService: ItemsService
  ){}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ItemView[]>{
    return this.itemsService.getTopTen();
  }
}
