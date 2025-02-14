import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info-page',
  standalone: true,
  imports: [],
  templateUrl: './user-info-page.component.html',
  styleUrl: './user-info-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserInfoPageComponent implements OnInit {

  ngOnInit(): void { }

}
