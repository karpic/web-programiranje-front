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
export class RestaurantsService {
  private url = 'http://localhost:8080/webproject/webapi/restaurants';
  private deleteUrl = 'http://localhost:8080/webproject/webapi/restaurants/delete';
  private updateUrl = 'http://localhost:8080/webproject/webapi/restaurants/update';


  getRestaurants(): Observable<RestaurantView[]> {
    return this.http.get<RestaurantView[]>(this.url, httpOptions).pipe(
      catchError(this.handleError<any>('getRestaurants'))
    )
  }

  insertRestaurant(restaurant: RestaurantCreation): Observable<RestaurantCreation> {
    return this.http.post<RestaurantCreation>(this.url, restaurant, httpOptions).pipe(
      catchError(this.handleError<RestaurantCreation>('insertRestaurant'))
    );
  }

  deleteRestaurant(restaurant: RestaurantView | number): Observable<RestaurantView> {
    const id = typeof restaurant === 'number' ? restaurant : restaurant.id;
    const url = `${this.deleteUrl}/${id}`;
    console.log(url);

    return this.http.delete<RestaurantView>(url, httpOptions).pipe(
      catchError(this.handleError<RestaurantView>('deleteRestaurant'))
    );
  }

  updateRestaurant(restaurant: RestaurantView): Observable<RestaurantView>{
    //const id = typeof ponuda === 'string' ? ponuda : ponuda.id;
    //const url = `${this.url}/${id}`;
    return this.http.put<RestaurantView>(this.updateUrl, restaurant, httpOptions).pipe(
      catchError(this.handleError<RestaurantView>('updateRestaurant'))
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
