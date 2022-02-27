import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, Observable, throwError } from 'rxjs';
import { Config } from '../config';

@Injectable()
export class Service {
  protected _baseURL: any;
  protected _httpHeader: any;
  protected _DateOffset: any;

  constructor(protected _http: HttpClient) { }

  protected handleError(err: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';

    if ((err.error && err.error instanceof Error) || err.error || err.message)  {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = err.message;
    } 
    else {
      errorMessage = "Server failed to respond.";
    }
   
    return throwError(err);
  }

}