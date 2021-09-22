import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, ComponentRef, OnDestroy, OnInit, Type, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { slideUpAnimation } from '../shared-animations/slide-animation';
import { DialogConfig } from './dialog-config';
import { DialogRef } from './dialog-ref';
import { InsertionDirective } from './insertion.directive';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  animations: [
    slideUpAnimation
  ]
})
export class DialogComponent implements OnInit, AfterViewInit, OnDestroy {

  private readonly _onClose = new Subject<any>()

  public componentRef!: ComponentRef<any>
  public childComponentType!: Type<any>
  public onClose = this._onClose.asObservable()

  state: string = '';

  title: string = 'Modal';

  result: any = null;

  height: string = 'auto';

  @ViewChild(InsertionDirective) insertionPoint!: InsertionDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private cd: ChangeDetectorRef,
    private dialogRef: DialogRef,
    private config: DialogConfig) {
    // this.height = this.config.height || '';
    if (this.config.size === 'LARGE') {
      this.height = 'calc(100% - 32px)';
    }
    this.title = this.config.title || this.title;
  }

  ngOnDestroy(): void {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  ngAfterViewInit() {
    this.loadChildComponent(this.childComponentType);
    this.cd.detectChanges();
  }

  ngOnInit(): void {
    this.dialogRef.startCloseAnimation.subscribe((result: any) => {
      this.state = 'close';
      this.result = result;
    });
  }

  onOverlayClicked(evt: MouseEvent) {
    // close the dialog
    this.state = 'close';
  }

  onDialogClicked(evt: MouseEvent) {
    evt.stopPropagation();
  }

  loadChildComponent(componentType: Type<any>) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);

    let viewContainerRef = this.insertionPoint.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent(componentFactory);
  }

  animationEnded(event: any) {
    if (this.state === 'close' && event.toState === 'close') {
      this.dialogRef.closeAnimationFinished(this.result);
    }
  }

}
