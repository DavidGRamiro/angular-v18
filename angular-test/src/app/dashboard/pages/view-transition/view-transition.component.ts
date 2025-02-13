import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-transition',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-transition.component.html',
  styleUrl: './view-transition.component.scss'
})
export class ViewTransitionComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
