import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ // esse decoretor informa para o angular que essa é uma classe injetavel, ou seja, ela pode ser utilizada em outras depedencias.. em outras classes.. em outros compoentes, atraves de um metodo chamado de injecao de dependencias assunto do proximo commit.
  providedIn: 'root'
})
export class PensamentoService {

  constructor(private http: HttpClient) { } // com private o atributo é privado do PensamentoService

}
