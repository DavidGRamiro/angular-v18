import { CommonModule } from '@angular/common';
import { Component, OnInit, signal, ChangeDetectionStrategy, computed } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1>Change Detection</h1>

    <pre>{{ frameworkAsSignal() | json }}</pre>
    <pre>{{ frameworkAsProperty | json}}</pre>

    <h2>{{ currentFramework() }}</h2>

    
  `,
})
export default class ChangeDetectionComponent implements OnInit {

  // Cumputed son señales de solo lectura.
  public currentFramework = computed(() => {
    return `Change detection ${this.frameworkAsSignal().name}`
  })


  public frameworkAsSignal = signal({
    name: 'Angular',
    version: '11'
  })
  
  public frameworkAsProperty = {
    name: 'Angular',
    version: '11'
  }
  
  constructor() {
    setTimeout(() => {

      // this.frameworkAsProperty.name = 'React'

      // Junto con ChangeDetectionOnPush, y las señales, mejoran mucho el performance de la app.
      // No esta pendiente de cada cambio que hay en la aplicación por lo tanto la hace mucho mas rápida.
      this.frameworkAsSignal.update( framework => ({...framework, name: 'React'}))


      console.log('Terminado')
    }, 3000)
  }

  ngOnInit(): void {
  }

}
