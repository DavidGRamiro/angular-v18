import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.scss'
})
export class ChangeDetectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
