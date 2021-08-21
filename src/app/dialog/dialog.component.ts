import { animate, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, ComponentRef, OnDestroy, OnInit, Type, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { DialogConfig } from './dialog-config';
import { DialogRef } from './dialog-ref';
import { InsertionDirective } from './insertion.directive';

export const slideUpAnimation = trigger('slideUpAnimation', [
  transition(':enter', [
    style({ top: '100%' }), animate('300ms', style({ top: 0, }))]
  ),
  // transition(':leave',
  //   [style({ top: 0 }), animate('300ms', style({ top: '120%' }))]
  // ),
  transition('* => close',
    [style({ top: 0 }), animate('300ms', style({ top: '120%' }))]
  )
]);

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
    this.height = this.config.height || '';
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
    // console.log(this.config.data.message);
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
    console.log(event);
    if (this.state === 'close' && event.toState === 'close') {
      // console.log("called");
      this.dialogRef.closeAnimationFinished(this.result);
    }
  }

}
