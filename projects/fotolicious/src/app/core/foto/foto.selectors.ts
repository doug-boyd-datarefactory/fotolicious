import { createSelector } from '@ngrx/store';

import { selectFotoState } from '../core.state';
import { FotoState } from './foto.models';

export const selectFoto = createSelector(
  selectFotoState,
  (state: FotoState) => state
);

export const selectFotoPlaceHolder = createSelector(
  selectFotoState,
  (state: FotoState) => state.fotoPlaceHolder
);

export const selectFotoURL1 = createSelector(
  selectFotoState,
  (state: FotoState) => state.fotoURL1
);

export const selectFotoURL2 = createSelector(
  selectFotoState,
  (state: FotoState) => state.fotoURL2
);
