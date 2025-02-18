import { computed, Injectable, signal } from '@angular/core';
import { User, UserResponse } from '../interfaces/request';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs';

interface State{
  users : User[];
  loading: boolean

}


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // Forma de hacer la propiedad privada
  #state = signal<State>({
    loading: true,
    users: []
  })


  public users = computed(() => this.#state().users)
  public loading = computed(() => this.#state().loading)



  constructor(private _http: HttpClient) { 

    this._http.get<UserResponse>('https://reqres.in/api/users').
      pipe(delay(5000)).
      subscribe( res => {
      this.#state.set({
        users: res.data,
        loading: false
      })
    })
  }

  getUserById( id : string){
    return this._http.get<any>(`https://reqres.in/api/users/${id}`).
    pipe(
      delay(1500),
      map(response => response.data)
    );
  }
  

}
