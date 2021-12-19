import {
  ActionReducerMap,
  MetaReducer,
  createFeatureSelector
} from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import { environment } from '../../environments/environment';

// import { initStateFromLocalStorage } from './meta-reducers/DELinit-state-from-local-storage.reducer';
import { FotoState } from './foto/foto.models';
import { fotoReducer } from './foto/foto.reducer';

export const reducers: ActionReducerMap<AppState> = {
  foto: fotoReducer
};

/*
export const metaReducers: MetaReducer<AppState>[] = [
  initStateFromLocalStorage
];

if (!environment.production) {
  if (!environment.test) {
    metaReducers.unshift(debug);
  }
}
*/

export const selectFotoState = createFeatureSelector<AppState, FotoState>(
  'foto'
);

export interface AppState {
  foto: FotoState;
}
