import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';

// Constante routes representando as rotas da aplicacao, do tipo Route que é um objeto de configuracao que define as rotas. Na nossa aplicacao havera um arrey de rotas
const routes: Routes = [
  {
    path: '', // sempre que criar uma propriedade com caminho vazio, é necessário crirar outra propriedade, o pathMatch, como abaixo:
    redirectTo: 'listarPensamento',
    pathMatch: 'full' // essa propriedade possui dois valores, o prefix e o full, pq a URL é lida da esquerda para direita, etao se colocar o valor de prefix é considerado apenas o localhost:4200 e desconsidera o resto, porém caso escolha full, é lida toda url e feito o redirecinamento para os componentes.
  },
  {
    path: 'criarPensamento', // esse path é o caminho para rota que eu quero acessar - quando a rota criarPensamento for acessada, o que eu quero que carregue? o componente abaixo:
    component: CriarPensamentoComponent
  },
  {
    path: 'listarPensamento',
    component: ListarPensamentoComponent
  },
  {
    path: 'pensamentos/excluirPensamento/:id',
    component: ExcluirPensamentoComponent // rota de exclusao de pensamento por id, fiz apos criar a funcao excluir em excluir-pensamento.component.ts e apos fui em pensamento.component.html para inserir o routerLink="/pensamentos/excluirPensamento/{{pensamento.id}}"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
