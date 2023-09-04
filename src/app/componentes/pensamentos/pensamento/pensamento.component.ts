import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  pensamento = { // atributo chamado pensamento, ele é um objeto
    conteudo: 'Winter is coming',
    autoria: 'Ned',
    modelo: 'modelo2'
  }

  constructor() {  }

  ngOnInit(): void {

  }

}
