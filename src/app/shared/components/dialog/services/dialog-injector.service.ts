import { ApplicationRef, ComponentRef, EmbeddedViewRef, Injectable } from '@angular/core';
import { DialogComponent } from '../dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogInjectorService {

  constructor(private appRef: ApplicationRef) { }

  public stackBeforeAppRoot(componetRef: ComponentRef<any>, modalRef: ComponentRef<DialogComponent>): void {
    const modalDomElement = this.createDomElement(modalRef);
    document.body.appendChild(modalDomElement);
    this.insertContent(componetRef, modalDomElement);
  }

  private insertContent(componetRef: ComponentRef<any>, modalDomElement: HTMLElement): void {
    const domElement = this.createDomElement(componetRef);
    const contentInsert = modalDomElement.querySelector('.dialog-content');
    contentInsert.appendChild(domElement);
  }

  private createDomElement(componentRef: ComponentRef<any>): HTMLElement {
    this.appRef.attachView(componentRef.hostView);
    const domElement = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    return domElement;

  }
}
