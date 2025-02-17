import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { User, UserResponse } from '../interfaces/user-request.interface';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private _http = inject(HttpClient)
  private _url = 'https://reqres.in/api/users'

  getUserById(id: number) : Observable<User>{
    return this._http.get<UserResponse>(`${this._url}/${id}`).pipe(
      map( response => response.data),
      tap( console.log)
    )
  }



}
