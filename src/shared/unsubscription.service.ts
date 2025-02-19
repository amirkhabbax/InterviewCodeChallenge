import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnsubscriptionService implements OnDestroy {

  UnSubscribe$ = new Subject<void>();
  constructor() { }

  ngOnDestroy(): void {
    this.UnSubscribe$.next();
    this.UnSubscribe$.complete();
  }
}
