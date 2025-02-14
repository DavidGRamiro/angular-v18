import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss'
})
export default class ControlFlowComponent implements OnInit {


  public showContent = signal(false);


  constructor() { }

  ngOnInit(): void {
  }

}
