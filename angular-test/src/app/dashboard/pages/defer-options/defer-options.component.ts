import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defer-options',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './defer-options.component.html',
  styleUrl: './defer-options.component.scss'
})
export class DeferOptionsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
