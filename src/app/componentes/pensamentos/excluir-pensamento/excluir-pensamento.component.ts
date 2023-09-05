import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent {

  pensamento: Pensamento = { // após criar os paremtros excluir() buscarPorId() no pensamento.service.ts, criei esse parametro pensamento que ira enviar os campos do pensamento incluisive o campo id
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
  }

  constructor( // depois adicionar o service PensamentoService e as rotas para direcionamentos por acoes
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute // ActivatedRoute é uma classe que fornece informacoes sobre os parametros, as rotas, os caminhos que virao la do card de pensamento, etao com alguns metodos como snapshot e o paramMap, vou conseguir informacoes do card naquele momento específico, naquela rota
    ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') // O snapshot é responsavel por fazer uma fotografia instantânea, naquele momento em que foi acessado. // A propriedade paramMap, retorna um mapa com as informacoes de parametros obrigatórios e opcionais de um determinado Pensamento // assim nós fazemos um mapa que retorna todos parametros, nos parametros vem o id, o snapshot faz uma fotografia, entao temos id :)
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => { //
      this.pensamento = pensamento
    })
  }

  excluirPensamento() { // criei a funcao excluirPensamento() conforme informei no html
    if(this.pensamento.id){ // se houver um pensamento com id
      this.service.excluir(this.pensamento.id).subscribe(() => { //faz a funcao de excluir o pensamento pelo id, da um subscribe e segue a funcao abaixo
        this.router.navigate(['/listarPensamento']) // quando eu excluir o pensamento, rota navegara até o mural.
      })
    }
  }

  cancelarExclusaoPensamento() { // criei a funcao cancelarExclusaoPensamento()
    this.router.navigate(['/listarPensamento']) // e quando eu clicar no botao cancelarExclusaoPensamento() ele fara a rota para listarPensamento (mural)
  }
  // depois de criar essas funcoes, fui para o app-routting.module.ts para criar as rotas para esse componente excluir-pensamento.component.ts
}
