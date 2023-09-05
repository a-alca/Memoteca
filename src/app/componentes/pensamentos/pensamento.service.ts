import { Pensamento } from './pensamento';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos'

  constructor(private http: HttpClient) { } // com private o atributo é privado do PensamentoService

  listar(): Observable<Pensamento[]> {  // aqui tipei para ficar explicito que listar() é uma observable da listaPensamento
    return this.http.get<Pensamento[]>(this.API)
  }
  criar(pensamento: Pensamento): Observable<Pensamento> { // aqui para criar o pensamento, criar é um observable de pensamento (nao da lista pois vai criar um pensamento) como vai criar, (Created) é utilizado o metodo post do tipo Pensamento passando a API como e pensamento.
    return this.http.post<Pensamento>(this.API, pensamento)
  }
  editar(pensamento: Pensamento): Observable<Pensamento> { // criei a funcao editar
    const url = `${this.API}/${pensamento.id}` // criei a constante ulr para editar o pensamento da api
    return this.http.put<Pensamento>(url, pensamento ) // e put a alteracao, depois vou para editar css e html...
  }
  excluir(id: number): Observable<Pensamento> { // fiz o metodo PensamentoService.excluir e ele é um observable de Pensamento
    const url = `${this.API}/${id}` // criei a contstante chamada url pq alem de passsar a url http://localhost:3000/pensamentos, eu preciso acrecentar o id
    return this.http.delete<Pensamento>(url) // entao retrona o metodo delete do Pensamento respectivo a id encontrada sobre o pensamento deletado
  }
  buscarPorId(id: number): Observable<Pensamento> { // criei o metodo para Pensamento.buscarPorId ele tbm é um obeservable de pensamento :)
    const url = `${this.API}/${id}` // mesma constante para pegar id
    return this.http.get<Pensamento>(url) // ja nesse retorno o metodo foi get para pegar um pensamento por id e depois fui para o excluir-pensamento.component.ts para criar o paramentro de pensamento para passar os dados de exclusao
  }
  // Apos criacao dos parametros excluir() e buscarPorId(), fui para o arqquivo excluir-pensamento.component.ts para craicao do parametro pensamento que recebera os campos de pensamento.

}
