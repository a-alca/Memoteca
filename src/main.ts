import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// O main.ts é o arquivo principal, porta de entrada para acessar nossa aplicacao
platformBrowserDynamic().bootstrapModule(AppModule) // ele é responsável por renderizar nosso primeiro componente contido na pripriedade da estrutura do arquivo AppModule, o bootstrap, que sendo redundante, renderizara o primeiro compoentente que é o AppComponent conforme no arquivo AppModule. Ver AppModule.
  .catch(err => console.error(err));
