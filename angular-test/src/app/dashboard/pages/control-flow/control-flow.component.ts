import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';

type Grade = 'A' | 'B' | 'C' | 'D' | 'F';


@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss'
})
export default class ControlFlowComponent implements OnInit {


  public showContent = signal(false);
  public grade = signal<Grade>('A');


  constructor() { }

  ngOnInit(): void {
  }

  toggleContent(){
    this.showContent.update( current => !current)
  }

}
