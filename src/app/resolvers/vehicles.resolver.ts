import { VehiclesService } from './../services/vehicles.service';
import { VehicleView } from './../models/vehicleView.model';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class VehiclesResolver implements Resolve<VehicleView[]> {

  constructor(
    private vehiclesService: VehiclesService
  ){}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<VehicleView[]>{
    return this.vehiclesService.getVehicles();
  }
}
