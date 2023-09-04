import { Component, OnInit } from '@angular/core';
import { PensamentoComponent } from '../pensamento/pensamento.component';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Pensamento[  ] = [
    // {
    //   conteudo: 'Passo informações para o componente filho.',
    //   autoria: 'Componente pai',
    //   modelo: 'modelo1'
    // },
    // {
    //   conteudo: 'Minha propriedade é decorada com @Input().',
    //   autoria: 'Componente filho',
    //   modelo: 'modelo2'
    // },
    // {
    //   conteudo: `Pensamento gerado na aula ngClass para renderizar esses cards conforme metodo larguraPesamento() no arquivo pensamento.component.ts
    //   larguraPensamento(): string {
    //     if(this.pensamento.conteudo.length >= 256) {
    //       return 'pensamento-g'
    //     }
    //     return 'pensamento-p'
    //   }`,
    //   autoria: 'Componente pai',
    //   modelo: 'modelo3'
    // }
  ];

  constructor() {  }

  ngOnInit(): void {

  }
}
