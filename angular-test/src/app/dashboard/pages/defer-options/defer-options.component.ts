import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeavyLoadersFastComponent } from '../../../shared/heavy-loaders/heavy-loaders-fast.component';

@Component({
  selector: 'app-defer-options',
  standalone: true,
  imports: [CommonModule, HeavyLoadersFastComponent],
  templateUrl: './defer-options.component.html',
  styleUrl: './defer-options.component.scss'
})
export default class  DeferOptionsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
