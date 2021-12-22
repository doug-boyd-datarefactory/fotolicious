import browser from 'browser-detect';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
  Inject,
  AfterViewChecked
} from '@angular/core';

import { DOCUMENT } from '@angular/common';

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
  elem: any;
  isFullScreen: boolean;

  constructor(
    private store: Store<AppState>,
    @Inject(DOCUMENT) private document: any
  ) {
    this.subscription = new Subscription();
    this.fotoPlaceHolderSubscription = new Subscription();
    this.isFullScreen = false;
  }

  /**
   * Init. Grabs the document for full screen and a bunch of streams from the store
   */
  ngOnInit(): void {
    this.elem = document.documentElement;
    this.fotoPlaceHolder$ = this.store.pipe(select(selectFotoPlaceHolder));
    this.fotoURL1$ = this.store.pipe(select(selectFotoURL1));
    this.fotoURL2$ = this.store.pipe(select(selectFotoURL2));
  }

  /**
   * Triggers whenever the slide changes. Acts as a toggle from 1 to 2
   */
  onSlideChange() {
    this.fotoPlaceHolder$
      ?.subscribe((res) => {
        if (res == 'foto1') {
          this.store.dispatch(fotoGetURL1());
        } else {
          this.store.dispatch(fotoGetURL2());
        }
      })
      .unsubscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  toggleFullScreen() {
    // It isn't currently full screen - make it so
    if (!this.isFullScreen) {
      this.goFullScreen();
      this.isFullScreen = true;
    } else {
      this.exitFullScreen();
      this.isFullScreen = false;
    }
  }

  /**
   * exactly what you think
   */
  exitFullScreen() {
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
    }
  }
  goFullScreen() {
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }
  }
}
