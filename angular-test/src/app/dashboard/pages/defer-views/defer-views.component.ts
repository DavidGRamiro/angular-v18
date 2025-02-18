import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeavyLoadersComponent } from '../../../shared/heavy-loaders/heavy-loaders-slow.component';

@Component({
  selector: 'app-defer-views',
  standalone: true,
  imports: [CommonModule, HeavyLoadersComponent],
  templateUrl: './defer-views.component.html',
  styleUrl: './defer-views.component.scss'
})
export default class DeferViewsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
