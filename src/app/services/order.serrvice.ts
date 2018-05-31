import { OrderView } from './../models/orderView.model';
import { OrderCreation } from './../models/orderCreation.model';
import { ItemCreation } from './../models/itemCreation.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { UserCreation } from '../models/userCreation.model';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class OrderService {
  private url = 'http://localhost:8080/webproject/webapi/orders';

  getMyOrders(): Observable<OrderView[]> {
    return this.http.get<OrderView[]>(this.url +'/myorders', httpOptions).pipe(
      catchError(this.handleError<any>('getMyOrders'))
    )
  }

  getMyDelieveres(): Observable<OrderView[]> {
    return this.http.get<OrderView[]>(this.url +'/mydelieveries', httpOptions).pipe(
      catchError(this.handleError<any>('getMyDelieveres'))
    )
  }

  getAll(): Observable<OrderView[]> {
    return this.http.get<OrderView[]>(this.url, httpOptions).pipe(
      catchError(this.handleError<any>('getAll'))
    )
  }

  insertOrder(orderCreation: OrderCreation): Observable<OrderCreation> {
    return this.http.post<OrderCreation>(this.url, orderCreation, httpOptions).pipe(
      catchError(this.handleError<OrderCreation>('insertOrder'))
    );
  }

  takeOrder(order: OrderView): Observable<any> {
    return this.http.post(this.url + '/take?id=' + order.id, httpOptions).pipe(
      catchError(this.handleError<any>('takeOrder'))
    );
  }

  delieverOrder(order: OrderView): Observable<any> {
    return this.http.post(this.url + '/delievered?id=' + order.id, httpOptions).pipe(
      catchError(this.handleError<any>('delieverOrder'))
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
