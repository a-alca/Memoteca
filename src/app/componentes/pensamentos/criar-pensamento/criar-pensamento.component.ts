import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

pensamento: Pensamento = { // atributo pensamento, esse atributo é um objeto que possui as propriedades: id, conteudo, autoria e modelo. // como associar esse atributo ao input de pensamento, autoria e modelo lá nas tags input do HTML >> ver linha 13 [value] do criar-pensamento.component.html.

  conteudo: '',
  autoria: '',
  modelo: 'modelo1'
}

constructor(
  private service: PensamentoService,
  private router: Router
  ) {  } // no consctructor informei (private service: PensamentoService) para consumor o PensamentoService e vou para method criarPensamento

ngOnInit(): void {

}

criarPensamento() {
  this.service.criar(this.pensamento).subscribe(() => {
    this.router.navigate(['/listarPensamento'])
  }) // depois de consumir o PensamentoService no constructor, o servico ira criar pensamento e enviar um subscribe // depois de cadastrado e informado a propriedade router no constructor e this.router.navigate(['/listarPensamento']), ao preencher o form e clicar em salvar, é redirecioado para o mural com o novo pensamento cadastrado no db.json e renderizado na tela
}

cancelar() {
  this.router.navigate(['/listarPensamento'])
}

}
