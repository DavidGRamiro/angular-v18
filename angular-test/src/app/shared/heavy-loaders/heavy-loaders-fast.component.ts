import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-fast',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section [ngClass]="['w-full ', cssClass]">
    <ng-content></ng-content>
  
  </section>`
})
export class HeavyLoadersFastComponent implements OnInit {

  @Input({ required: true }) cssClass!: string;

  constructor() {

    console.log('Heavy loader fast creado')
  }

  ngOnInit(): void {
  }

}
