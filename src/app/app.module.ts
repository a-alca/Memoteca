import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; // esse componente foi automaticamente importado quando eu o criei com comando ng g c home. Após o console informar a criacao de cada componente  home (.module.ts; .css; .html; .spec.ts; component.ts e module.ts). O console informa a importacao dele assim: UPDATE src/app/app.module.ts (1056 bytes)

@NgModule({
  declarations: [ //1 - declretions onde voce vai incluir todos os componentes além de outros arquivos como diretivas e pipes que estao contidas no seu modulo.
    AppComponent, HomeComponent
  ],
  imports: [ // 2 - Nos Imports vc vai incluir os módulos importados tantos os da sua aplicacao como os de alguma outra biblioteca que vc estja usando, como, Angular Matirial, por exemplo.
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // 3 - Nos Providers nos geralmente declaramos as classes de servicos
  bootstrap: [AppComponent] // 5 - primeiro componente a ser renderizado.
})
export class AppModule { }// 4- E nos exports nos vamos colocar todos compenetes como diretivas e pipes que nos queremos expotar para fora do modulo, e ser visiveis em outros modulos.
