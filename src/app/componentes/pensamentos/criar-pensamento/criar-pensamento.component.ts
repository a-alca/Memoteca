import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

pensamento = { // atributo pensamento, esse atributo é um objeto que possui as propriedades: id, conteudo, autoria e modelo. // como associar esse atributo ao input de pensamento, autoria e modelo lá nas tags input do HTML >> ver linha 13 [value] do criar-pensamento.component.html.
  id: '1',
  conteudo: 'Aprendendo Angular',
  autoria: 'Dev',
  modelo: 'modelo1'
}

constructor() {  }

ngOnInit(): void {

}

criarPensamento() {
  alert("Novo pensamento criado")
}

cancelar() {
  alert("Ação cancelada. Por favor, clique em fechar para redirecionamento à página de Pensamentos.")
}

}
