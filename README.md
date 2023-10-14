# Dialog API - Renderização Dinâmica de Componentes Angular

Este repositório contém uma API Angular para renderizar componentes dinâmicos em um diálogo. O módulo DialogModule permite criar e gerenciar facilmente diálogos dinâmicos em sua aplicação Angular. Este README fornece informações sobre como integrar e usar este módulo em seu projeto.

## Instalação

Para usar o DialogModule, siga as etapas de instalação a seguir:

1. Importe o módulo **DialogModule** em sua aplicação Angular.

```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DialogModule } from './shared/components/dialog/dialog.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }`
```

## Uso
Uma vez que você tenha importado e adicionado o *DialogModule* à sua aplicação Angular, você pode usá-lo para abrir diálogos dinâmicos. Aqui está um exemplo de como usar o **DialogService** para abrir um diálogo:

```
import { Component } from '@angular/core';
import { DialogService } from './shared/components/dialog/services/dialog.service';
import { MyComponent } from './modules/my/my.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dialog';

  constructor(private dialog: DialogService) {
  }

  open() {
    // Abre um diálogo com MeuComponente como seu conteúdo
    let ref = this.dialog.open(MyComponent, {
      title: 'My component',
      width: '400px',
      height: '300px',
      closeButton: true
    });

     // Passe dados para o componente do diálogo
    ref.componentInstance.message = "Hello!";

     // Inscreva-se no evento de fechamento do diálogo
    ref.onClose.subscribe(() => {
      console.log("closed dialog")
    })
  }
}
```

Após a renderização do componente tenha acesso a referencia do dialog atravez do **DialogRef**:

```
import { Component } from '@angular/core';
import { DialogRef } from 'src/app/shared/components/dialog/models/dialog-ref.model';

@Component({
  selector: 'cmp-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent {

  public message: string;

  constructor(private ref: DialogRef<MyComponent>) {
  }
}
```

