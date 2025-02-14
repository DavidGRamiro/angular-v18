import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { routes } from '../../app.routes';
import { Router } from 'express';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export default class SideMenuComponent implements OnInit {

  public menuItems = routes
    .map(route => route.children ?? [])
    .flat()
    .filter( route => route && route.path)
    .filter( route => !route.path?.includes(':'))


  constructor() {}

  ngOnInit(): void { }

}
