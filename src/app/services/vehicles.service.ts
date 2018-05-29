import { VehicleCreation } from './../models/vehicleCreation.model';
import { VehicleView } from './../models/vehicleView.model';
import { RestaurantCreation } from './../models/restaurantCreation.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { UserCreation } from '../models/userCreation.model';
import { RestaurantView } from '../models/restaurantView.model';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class VehiclesService {
  private url = 'http://localhost:8080/webproject/webapi/vehicles';
  private deleteUrl = 'http://localhost:8080/webproject/webapi/vehicles/delete';
  private updateUrl = 'http://localhost:8080/webproject/webapi/vehicles/update';


  getVehicles(): Observable<VehicleView[]> {
    return this.http.get<VehicleView[]>(this.url, httpOptions).pipe(
      catchError(this.handleError<any>('getVehicles'))
    )
  }

  insertVehicle(vehicle: VehicleCreation): Observable<VehicleCreation> {
    return this.http.post<VehicleCreation>(this.url, vehicle, httpOptions).pipe(
      catchError(this.handleError<VehicleCreation>('insertVehicle'))
    );
  }

  deleteVehicle(vehicle: VehicleView | number): Observable<VehicleView> {
    const id = typeof vehicle === 'number' ? vehicle : vehicle.id;
    const url = `${this.deleteUrl}/${id}`;
    console.log(url);

    return this.http.delete<VehicleView>(url, httpOptions).pipe(
      catchError(this.handleError<VehicleView>('deleteVehicle'))
    );
  }

  updateVehicle(vehicle: VehicleView): Observable<VehicleView>{
    //const id = typeof ponuda === 'string' ? ponuda : ponuda.id;
    //const url = `${this.url}/${id}`;
    return this.http.put<VehicleView>(this.updateUrl, vehicle, httpOptions).pipe(
      catchError(this.handleError<VehicleView>('updateVehicle'))
    );
  }

  constructor(
    private http: HttpClient
  ) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption


      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
