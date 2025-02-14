import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';

@Component({
  selector: 'app-signals-layout',
  standalone: true,
  imports: [RouterModule, SideMenuComponent],
  templateUrl: './signals-layout.component.html',
  styleUrl: './signals-layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsLayoutComponent implements OnInit {

  ngOnInit(): void { }

}
