import { ItemCreation } from './../models/itemCreation.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { UserCreation } from '../models/userCreation.model';
import { ItemView } from '../models/itemView.model';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class ItemsService {
  private url = 'http://localhost:8080/webproject/webapi/items';
  private urlTop = 'http://localhost:8080/webproject/webapi/items/top';
  private deleteUrl = 'http://localhost:8080/webproject/webapi/items/delete';
  private updateUrl = 'http://localhost:8080/webproject/webapi/items/update';

  getTopTen(): Observable<ItemView[]> {
    return this.http.get<ItemView[]>(this.urlTop, httpOptions).pipe(
      catchError(this.handleError<any>('getTopTen'))
    )
  }

  getAll(): Observable<ItemView[]> {
    return this.http.get<ItemView[]>(this.url, httpOptions).pipe(
      catchError(this.handleError<any>('getAll'))
    )
  }

  getItemsForRestaurantId(id: number): Observable<ItemView[]> {
    return this.http.get<ItemView[]>(this.url + '/restaurant?id=' + id, httpOptions).pipe(
      catchError(this.handleError<any>('getItemsForRestaurantId'))
    )
  }

  insertItem(item: ItemCreation) {
    return this.http.post<ItemCreation>(this.url, item, httpOptions).pipe(
      catchError(this.handleError<ItemCreation>('insertItem'))
    );
  }

  deleteItem(item: ItemView | number): Observable<ItemView> {
    const id = typeof item === 'number' ? item : item.id;
    const url = `${this.deleteUrl}/${id}`;
    console.log(url);

    return this.http.delete<ItemView>(url, httpOptions).pipe(
      catchError(this.handleError<ItemView>('deleteItem'))
    );
  }

  updatePonuda(item: ItemView): Observable<ItemView>{
    //const id = typeof ponuda === 'string' ? ponuda : ponuda.id;
    //const url = `${this.url}/${id}`;
    return this.http.put<ItemView>(this.updateUrl, item, httpOptions).pipe(
      catchError(this.handleError<ItemView>('updatePonuda'))
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
