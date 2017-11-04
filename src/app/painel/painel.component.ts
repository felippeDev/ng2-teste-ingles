import { Component, OnInit, EventEmitter, Output } from '@angular/core'
import { Frase } from '../shared/frase.model'
import { FRASES } from './frases.mock'
import swal from 'sweetalert2'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public instrucao: string = 'Traduza a frase para o português'
  public frases: Array<Frase> = FRASES
  public resposta: string = ''
  public rodada: number = 0
  public rodadaFrase: Frase
  public progresso: number = 0
  public tentativas: number = 3
  
  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() {
    this.atualizaRodada()
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (resposta.target as HTMLInputElement).value
  }

  public verificarResposta(): void {
    if (this.rodadaFrase.frasePtBr === this.resposta) {
      swal({
        position: 'top',
        type: 'success',        
        title: 'Parabens!',
        text: 'Tradução correta',
        showConfirmButton: false,
        timer: 1500
      }).catch(swal.noop)

      this.rodada++

      this.progresso = this.progresso + (100 / this.frases.length)

      if(this.rodada === this.frases.length){
        // alert('Parabéns, você passou por todas as traduções!')
        this.encerrarJogo.emit('vitoria');
      }
  
      this.atualizaRodada();
    } else {
      this.tentativas--;

      swal({
        position: 'top',
        type: 'error',        
        title: 'Oops!',
        text: 'Tradução incorreta',
        showConfirmButton: false,
        timer: 1500
      }).catch(swal.noop)

      if(this.tentativas === -1) {
        // alert('Você perdeu todas as tentativas.')
        this.encerrarJogo.emit('derrota');        
      }
    }
  }

  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada]
    
    this.resposta = ''
  }
  
}
