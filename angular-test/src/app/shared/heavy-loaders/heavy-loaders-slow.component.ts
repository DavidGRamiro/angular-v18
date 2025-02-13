import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heavy-loader-slow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `<h1>Hola slow</h1>`
})
export class HeavyLoadersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
