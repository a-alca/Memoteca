import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from '../pensamentos/pensamento';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos'

  constructor(private http: HttpClient) { } // com private o atributo é privado do PensamentoService

  listar() { // aqui pede para dar a lista de array pensamento que tem na API, depois vou no listar-pensamento.component.ts e no constructor informo o service: Pensamento para consumir esse servico
    return this.http.get<Pensamento[]>(this.API)
  }

}
