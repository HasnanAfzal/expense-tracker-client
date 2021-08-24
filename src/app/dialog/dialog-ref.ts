import { Observable, Subject } from 'rxjs';

export class DialogRef {
  constructor() {}

  close(result?: any) {
    // this._afterClosed.next(result)
    this._startCloseAnimation.next(result);
  }

  closeAnimationFinished(result?: any) {
    this._afterClosed.next(result);
  }

  private readonly _afterClosed = new Subject<any>();
  afterClosed: Observable<any> = this._afterClosed.asObservable();

  private readonly _startCloseAnimation = new Subject<any>();
  startCloseAnimation: Observable<any> = this._startCloseAnimation.asObservable();

}