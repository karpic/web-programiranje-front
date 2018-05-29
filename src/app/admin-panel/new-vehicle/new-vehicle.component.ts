import { VehiclesService } from './../../services/vehicles.service';
import { VehicleCreation } from './../../models/vehicleCreation.model';
import { ActivatedRoute } from '@angular/router';
import { VehicleView } from './../../models/vehicleView.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-vehicle',
  templateUrl: './new-vehicle.component.html',
  styleUrls: ['./new-vehicle.component.css']
})
export class NewVehicleComponent implements OnInit {
  vehicles: VehicleView[];
  updating: boolean;
  newVehicle: VehicleCreation = new VehicleCreation('','','','','',true,'',false);
  vehicleToUpdate: VehicleView;

  onVehicleFormSubmit(forma: NgForm){
    this.newVehicle.brand = forma.value.brand;
    this.newVehicle.model = forma.value.model;
    this.newVehicle.registrationNumber = forma.value.regNum;
    this.newVehicle.productionYear = forma.value.prodyear;
    this.newVehicle.note = forma.value.note;
    this.newVehicle.active = false;
    this.newVehicle.deleted = false;

    console.log(this.newVehicle);
    this.vehicleService.insertVehicle(this.newVehicle).subscribe();
  }

  deleteVehicle(vehicle: VehicleView){
    this.vehicleService.deleteVehicle(vehicle).subscribe();
    this.refreshData();
  }

  updateVehicle(vehicle: VehicleView){
    this.vehicleToUpdate = vehicle;
    this.updating = true;
  }

  refreshData() {
    this.vehicleService.getVehicles().subscribe(
      (data) => this.vehicles = data
    )
  }

  constructor(
    private route: ActivatedRoute,
    private vehicleService: VehiclesService
  ) {
    this.updating = false;
  }

  ngOnInit() {
    this.vehicles = this.route.snapshot.data['vehicles'];
  }

}
