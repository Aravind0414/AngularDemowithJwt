import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { BehaviorSubject, catchError, map, Observable } from 'rxjs';
import { Config } from '../config';
import { Service } from './service';


@Injectable({
    providedIn: 'root'
  })
  
export class AuthenticationService{
 

    private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;
    protected _baseURL;
    constructor(private http: HttpClient) {
        this._baseURL = Config.baseURL;

        this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem('TokenInfo'));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    login(username: string, password: string): Observable<any> {
      
        return this.http.post<any>(this._baseURL + 'api/name/Authenticate?Username=' + username + '&Password=' + password, {})
           .pipe(map(res => {
              // login successful if there's a jwt token in the response
              console.log(res);
              if (res.token) { 
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('TokenInfo', res.token);
                 return res;
              }
             
            }));
  
     }

}