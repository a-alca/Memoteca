import { Component, OnInit, Input } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: Pensamento = { // atributo chamado pensamento, ele é um objeto //A diretiva @Input está dizendo que esse atribuo agora irá receber informacoes do componente pai.
    id: 0,
    conteudo: 'Winter is coming',
    autoria: 'Ned',
    modelo: 'modelo2'
  }

  constructor() {  }

  ngOnInit(): void {

  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}
