import { VehiclesService } from './../../services/vehicles.service';
import { Component, OnInit, Input } from '@angular/core';
import { VehicleView } from '../../models/vehicleView.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.css']
})
export class UpdateVehicleComponent implements OnInit {
  @Input() vehicleToUpdate: VehicleView;
  success: boolean;

  onUpdateVehicleForm(forma: NgForm){
    this.vehicleService.updateVehicle(this.vehicleToUpdate).subscribe();
    this.success = true;
  }
  constructor(
    private vehicleService: VehiclesService
  ) {
    this.success = false;
  }

  ngOnInit() {
  }

}
