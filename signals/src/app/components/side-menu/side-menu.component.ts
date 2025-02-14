import { ChangeDetectionStrategy, Component, signal, type OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';


interface MenuItem {
  title: string,
  router: string
}


@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent implements OnInit {


  public menuItems = signal<MenuItem[]>([
    {title: 'Contador', router: 'counter'},
    {title: 'Usuario', router: 'user-info'},
    {title: 'Mutaciones', router: 'properties'},
  ])

  // public menuItems : MenuItem[] = [
  //   {title: 'Contador', router: 'counter'},
  //   {title: 'Usuario', router: 'user-info'},
  //   {title: 'Mutaciones', router: 'properties'},
  // ]

  ngOnInit(): void { }

}
