import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defer-views',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './defer-views.component.html',
  styleUrl: './defer-views.component.scss'
})
export default class DeferViewsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
