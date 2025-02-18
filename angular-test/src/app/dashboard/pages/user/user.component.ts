import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop'
import { switchMap } from 'rxjs';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  template: `

  @if(user()){
    <h1>{{ title() }}</h1>
  }
    
    @if(user()){

      <section>
        <img [srcset]="user()?.avatar" alt="" width="200" height="200">

        <p>{{ user()?.first_name }}</p>
      </section>
    }@else{
      Cargando..
    }

  `,
})
export default class UserComponent implements OnInit {

  public userService = inject(UsersService)

  public title  = computed(( ) => {
    if(this.user()){
      return this.user().first_name
    }else{
      return 'Informacion del usuario'
    }
  })

  private route = inject(ActivatedRoute)
  public user  = toSignal(
    this.route.params.pipe(
      switchMap( ({ id }) =>{
        console.log(id)
        return this.userService.getUserById(id);
      })
    )
  )


  constructor() {
    console.log(this.route.params)
   }

  ngOnInit(): void {
  }

}
