import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heavy-loader-slow',
  standalone: true,
  imports: [CommonModule],
  template: `<section [ngClass]="['w-full h-[1000px]', cssClass]">
    <h1>HOLA</h1>
  </section>`,
})
export class HeavyLoadersComponent implements OnInit {

  @Input({ required: true }) cssClass!: string;
  
  constructor() {

    // Codigo bloqueante para simular un componente muy pesado para practicar  @defers
    const start = Date.now();
    while (Date.now() - start < 3000) {}
    console.log('Cargado')
  }

  ngOnInit(): void {
  }

}
