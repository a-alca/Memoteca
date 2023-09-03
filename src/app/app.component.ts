import { Component } from '@angular/core';

@Component({ // decoretor que indica para o Angula que este arquivo é um componente
  selector: 'app-root', // a propriedade selector, que contem a string app-root, esse seletor a gente vai utilizar em forma de tags para poder renderizar o nosso conteudo na tela, o aap-rrot está tagueado no index.html, dentro da tag <body><app-root></app-root></body>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'memoteca';
}
