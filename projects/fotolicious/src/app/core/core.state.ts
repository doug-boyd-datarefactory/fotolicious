import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

// import { initStateFromLocalStorage } from './meta-reducers/DELinit-state-from-local-storage.reducer';
import { FotoState } from './foto/foto.models';
import { fotoReducer } from './foto/foto.reducer';

export const reducers: ActionReducerMap<AppState> = {
  foto: fotoReducer
};

export const selectFotoState = createFeatureSelector<AppState, FotoState>(
  'foto'
);

export interface AppState {
  foto: FotoState;
}
