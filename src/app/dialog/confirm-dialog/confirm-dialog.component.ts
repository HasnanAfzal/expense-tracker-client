import { Component } from '@angular/core';
import { slideUpAnimation } from 'src/app/shared-animations/slide-animation';
import { DialogConfig } from '../dialog-config';
import { DialogRef } from '../dialog-ref';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
  animations: [
    slideUpAnimation
  ]
})
export class ConfirmDialogComponent {

  state: string = '';

  message: string = '';

  result: boolean = false;

  constructor(private dialogRef: DialogRef, private dialogConfig: DialogConfig) {
    this.message = this.dialogConfig.data.message;
  }

  onOverlayClicked(evt: MouseEvent) {
    // close the dialog
    evt.stopPropagation();
    this.state = 'close';
  }

  onCloseClick(result: boolean) {
    this.result = result;
    this.state = 'close';
  }

  onDialogClicked(evt: MouseEvent) {
    evt.stopPropagation();
  }

  animationEnded(event: any) {
    if (this.state === 'close' && event.toState === 'close') {
      this.dialogRef.closeAnimationFinished(this.result);
    }
  }

}
