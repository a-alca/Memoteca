import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component'; // esse componente foi automaticamente importado quando eu o criei com comando ng g c componentes/cabecalho. Após o console informar a criacao de cada componente  cabecalho (.module.ts; .css; .html; .spec.ts; component.ts e module.ts). O console informa a importacao dele assim: PDATE src/app/app.module.ts (1458 bytes) - ISSO FOI FEITO PARA CRIRAR O PRIMEIRO COMPONENTE PARA ATENDER A CONSTRUCAO DO MEMOTECA, COMECANDO PELO CABECALHO, DEFININDO ESTILIZACAO E HTML.
import { FormsModule } from '@angular/forms';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { PensamentoComponent } from './componentes/pensamentos/pensamento/pensamento.component';

@NgModule({
  declarations: [
    AppComponent, CabecalhoComponent, RodapeComponent, CriarPensamentoComponent, ListarPensamentoComponent, PensamentoComponent
  ],  //1 - declretions onde voce vai incluir todos os componentes além de outros arquivos como diretivas e pipes que estao contidas no seu modulo.
  imports: [ // 2 - Nos Imports vc vai incluir os módulos importados tantos os da sua aplicacao como os de alguma outra biblioteca que vc estja usando, como, Angular Matirial, por exemplo.
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [], // 3 - Nos Providers nos geralmente declaramos as classes de servicos
  bootstrap: [AppComponent] // 5 - primeiro componente a ser renderizado.
})
export class AppModule { }// 4- E nos exports nos vamos colocar todos compenetes como diretivas e pipes que nos queremos expotar para fora do modulo, e ser visiveis em outros modulos.
