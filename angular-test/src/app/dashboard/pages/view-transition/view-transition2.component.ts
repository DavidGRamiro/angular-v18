import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-transition',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>View Transition 2</h1>

    <section class="flex justify-end">

    <img srcset="https://picsum.photos/200/300" alt="" width="200" height="300" style="view-transition-name: hero1">
    
    <div class="bg-blue-800 w-36 h-36 rounded" style="view-transition-name: hero2">
    </div>
    </section>
  
  
  `,
})
export default class ViewTransitionComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
