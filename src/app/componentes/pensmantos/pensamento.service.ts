import { Pensamento } from './../pensamentos/pensamento';
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

}
