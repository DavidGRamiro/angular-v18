import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-properties-page',
  standalone: true,
  imports: [],
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertiesPageComponent implements OnInit {

  ngOnInit(): void { }

}
