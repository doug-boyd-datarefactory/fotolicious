import browser from 'browser-detect';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy
} from '@angular/core';

// import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { interval, Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { AppState } from '../../../core/core.state';
import {
  selectFotoPlaceHolder,
  selectFotoURL1,
  selectFotoURL2
} from '../../../core/foto/foto.selectors';
import { fotoGetURL1, fotoGetURL2 } from '../../../core/foto/foto.actions';

@Component({
  selector: 'anms-fotolicious',
  templateUrl: './fotolicious.component.html',
  styleUrls: ['./fotolicious.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FotoliciousComponent implements OnInit, OnDestroy {
  // routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  releaseButler = 'assets/release-butler.png';
  fotoPlaceHolder$: Observable<string> | undefined;
  fotoURL1$: Observable<string> | undefined;
  fotoURL2$: Observable<string> | undefined;
  subscription: Subscription;
  fotoPlaceHolderSubscription: Subscription;

  constructor(private store: Store<AppState>) {
    this.subscription = new Subscription();
    this.fotoPlaceHolderSubscription = new Subscription();
  }

  ngOnInit(): void {
    console.log('In ngOnInit');
    /*
    const source = interval(3000);
    this.subscription = source.subscribe((val) =>
      this.store.dispatch(fotoGetURL())
    );

    */
    this.fotoPlaceHolder$ = this.store.pipe(select(selectFotoPlaceHolder));
    this.fotoURL1$ = this.store.pipe(select(selectFotoURL1));
    this.fotoURL2$ = this.store.pipe(select(selectFotoURL2));
  }

  onSlideChange() {
    console.log('slide changed here');
    this.fotoPlaceHolder$
      ?.subscribe((res) => {
        if (res == 'foto1') {
          console.log('fire foto2');
          this.store.dispatch(fotoGetURL1());
        } else {
          console.log('fire foto1');
          this.store.dispatch(fotoGetURL2());
        }
      })
      .unsubscribe();
    /*
     */
    // this.subscription.unsubscribe();
    // this.store.dispatch(fotoGetURL1());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
