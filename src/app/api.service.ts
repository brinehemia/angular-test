import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private baseURL = 'https://api.yara.staging.algostudio.net/api/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    responseType: 'text' as "json"
  };

  constructor(private http: HttpClient) { }
 
  Get(uri:string): Observable<any> {
    return this.http.get<any>(`${this.baseURL}${uri}`, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  Post(uri:string, data:any): Observable<any> {
    return this.http.post<any>(`${this.baseURL}${uri}`, data, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  Put(uri:string, id:number, data:any): Observable<any> {
    return this.http.put<any>(`${this.baseURL}${uri}/${id}`, data, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  Delete(uri:string, id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseURL}${uri}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Error';
    if (error.error instanceof ErrorEvent) 
      errorMessage = `Error: ${error.error.message}`;
    else 
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    
    return throwError(() => errorMessage);
  }
}