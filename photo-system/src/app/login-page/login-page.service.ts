import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Login } from './login.model';

@Injectable({
  providedIn: 'root'
})



export class LoginPageService {
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
 
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }




  constructor(
    private http: HttpClient
  ) { }

  getLogin(): Observable<Login[]> {
    return this.http.get<Login[]>("http://localhost:4000/admin")
  }
  //aqui
  postLogin(login: Login): Observable<Login> {

    return this.http.post<Login>("http://localhost:4000/admin", login,this.httpOptions).pipe(
     tap((login:Login) => console.log(login)), 
      catchError(this.handleError<Login>('addLogin'))
    );

  }

}