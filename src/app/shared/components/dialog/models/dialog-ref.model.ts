import { ComponentRef } from "@angular/core";
import { DialogModalRef } from "./dialog-modal-ref.model";
import { Subject, Observable } from "rxjs";

export class DialogRef<T> {
  
    protected _componentRef: ComponentRef<T>;
    protected _modalRef: DialogModalRef;

    get componentInstance(): T {
        return this._componentRef.instance;
    }

    public close(value?: any): void {
        this._modalRef.close(value);
    }

    get onClose(): Observable<any> {
        return this._modalRef.onClose;
    }
}