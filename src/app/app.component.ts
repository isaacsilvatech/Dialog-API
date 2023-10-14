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
