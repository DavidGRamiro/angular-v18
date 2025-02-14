import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  standalone: true,
  imports: [],
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent implements OnInit {

  ngOnInit(): void { }

}
