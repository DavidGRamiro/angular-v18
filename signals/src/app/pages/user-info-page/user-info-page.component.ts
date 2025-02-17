import { ChangeDetectionStrategy, Component, computed, inject, signal, type OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-user-info-page',
  standalone: true,
  imports: [],
  templateUrl: './user-info-page.component.html',
  styleUrl: './user-info-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserInfoPageComponent implements OnInit {

  
  private _userService = inject(UserServiceService)
  public _userID = signal(1)
  
  public currentUser = signal<User | undefined >(undefined)
  public userWasFound = signal(true)

  public fullName = computed<string>(() => {
    if( !this.currentUser() ) return 'Usuario no encontrado.'
    return `${this.currentUser()?.first_name} ${this.currentUser()?.last_name}`
  })
  
  ngOnInit(): void {
    this.loadUser(this._userID())
  }

  loadUser( id:number){

    if(id <= 0) return;
    this._userID.set(id)
    this.currentUser.set(undefined)

    this._userService.getUserById(id).subscribe({
      next: (data: any) => {
        this.currentUser.set(data)
        this.userWasFound.set(true)
      },
      error: (error: any) => {
        this.currentUser.set(undefined)
        this.userWasFound.set(false)
      }
    })



  }



}
