import { ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector } from '@angular/core';
import { DialogConfig } from '../dialog-config';
import { DialogRef } from '../dialog-ref';
import { DialogInjector } from '../dialog.injector';
import { DialogModule } from '../dialog.module';
import { ConfirmDialogComponent } from './confirm-dialog.component';

@Injectable({
  providedIn: DialogModule
})
export class ConfirmDialogService {

  confirmDialogComponentRef!: ComponentRef<ConfirmDialogComponent>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  open(message: string) {

    // create a map with the config
    const map = new WeakMap();
    map.set(DialogConfig, {
      data: {
        message
      }
    });

    // add the DialogRef to dependency injection
    const dialogRef = new DialogRef();
    map.set(DialogRef, dialogRef);

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ConfirmDialogComponent);

    // We are passing in the injector we requested in the constructor.
    // This enables the dynamic component to make use of dependency injection itself.
    const componentRef = componentFactory.create(new DialogInjector(this.injector, map));
    
    // This attaches our dynamic component to the angular component tree
    this.appRef.attachView(componentRef.hostView);

    // get the root DOM element of our dynamic craeted component
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

    // attach it to the HTML-body
    document.body.appendChild(domElem);

    // assign the componentRef to our property.
    this.confirmDialogComponentRef = componentRef;

    dialogRef.afterClosed.subscribe(() => {
      this.removeDialogComponentFromBody();
    });

    // return the dialogRef
    return dialogRef;

  }

  private removeDialogComponentFromBody() {
    this.appRef.detachView(this.confirmDialogComponentRef!.hostView);
    this.confirmDialogComponentRef!.destroy();
  }

}
