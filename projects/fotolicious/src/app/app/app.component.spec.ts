import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let store: MockStore;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          MatSidenavModule,
          MatToolbarModule,
          RouterTestingModule,
          NoopAnimationsModule,
          TranslateModule.forRoot()
        ],
        providers: [provideMockStore()],
        declarations: [AppComponent]
      }).compileComponents();

      store = TestBed.inject(MockStore);
    })
  );

  it(
    'should create the app',
    waitForAsync(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );
});
