import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { UserServiceService } from '../../../../../../signals/src/app/services/user-service.service';
import { UsersService } from '../../../services/users.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export default class UsersComponent implements OnInit {

  public userService = inject(UsersService)


  constructor() {
    // No podemos acceder por que es de tipo privada.
    // Para ello creamos una señal computada en el servicio
    this.userService.users
  }

  ngOnInit(): void {
  }

}
