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
  private urlTop = 'http://localhost:8080/webproject/webapi/items/top'

  getTopTen(): Observable<ItemView[]> {
    return this.http.get<ItemView[]>(this.urlTop, httpOptions).pipe(
      catchError(this.handleError<any>('getTopTen'))
    )
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
