import { ChangeDetectionStrategy, Component, computed, signal, type OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  standalone: true,
  imports: [],
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent implements OnInit {

  public counter = signal(10)
  public squareCounter = computed(() => this.counter() * this.counter())


  ngOnInit(): void { }

  incrementar(value:number){
    this.counter.update( current => current + value)
  }

}
