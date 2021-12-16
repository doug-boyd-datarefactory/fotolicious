import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { FotoService } from './foto.service';

import * as fotoActions from './foto.actions';

export const AUTH_KEY = 'AUTH';

@Injectable()
export class FotoEffects {
  //
  fotoGetURL1 = createEffect(() =>
    this.actions$.pipe(
      ofType(fotoActions.fotoGetURL1),
      exhaustMap(() =>
        this.fotoService.getPic().pipe(
          map((response) => {
            return fotoActions.fotoGetURL1Success(response);
          }),
          catchError((error: any) => of(fotoActions.fotoGetURL1Failure(error)))
        )
      )
    )
  );

  fotoGetURL2 = createEffect(() =>
    this.actions$.pipe(
      ofType(fotoActions.fotoGetURL2),
      exhaustMap(() =>
        this.fotoService.getPic().pipe(
          map((response) => fotoActions.fotoGetURL2Success(response)),
          catchError((error: any) => of(fotoActions.fotoGetURL2Failure(error)))
        )
      )
    )
  );

  constructor(private actions$: Actions, private fotoService: FotoService) {}
}
