import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public jogoEmAndamento: boolean = true
  public jogoResultado: string

  constructor() {
  }

  public encerrarJogo(tipo: string): void {
    this.jogoEmAndamento = false
    this.jogoResultado = tipo
  }

  public jogarNovamente(): void {
    this.jogoEmAndamento = true;
    this.jogoResultado = undefined;
  }
  
}
