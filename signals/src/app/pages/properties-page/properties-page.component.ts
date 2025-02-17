import { ChangeDetectionStrategy, Component, effect, signal, type OnInit } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-properties-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertiesPageComponent implements OnInit {

  public counter = signal(10)


  public user = signal<User>({
    id: 1,
    first_name: 'George',
    last_name: 'Bluth',
    email: 'george.bluth@reqres.in',
    avatar: "https://reqres.in/img/faces/1-image.jpg"
  })

  // Es una señal que se ejecuta cada vez que se actualiza el valor de la señal user o del contador
  // Se autodestruye
  public userChangeEffect = effect(() => {
    console.log(`Usuaio: ${this.user().first_name} Contador: ${this.counter()}`)

  })

  incrementar(value:number){
    this.counter.update(current => current + value)
  }

  ngOnInit(): void { }

  onFieldUpdated(field : keyof User, value:string){

    this.user.update( current => ({
      ...current,
      [field]: value
    }))


  }

}
