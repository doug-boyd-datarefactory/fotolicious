import { FotoState } from './foto.models';
import {
  fotoGetURL1,
  fotoGetURL2,
  fotoGetURL1Success,
  fotoGetURL2Success
} from './foto.actions';
import { createReducer, on, Action } from '@ngrx/store';

export const initialState: FotoState = {
  fotoURL1:
    'https://ato-transfer.s3.ap-southeast-2.amazonaws.com/fotolicious-logo.png',
  fotoURL2:
    'https://ato-transfer.s3.ap-southeast-2.amazonaws.com/fotolicious-logo.png',
  fotoPlaceHolder: 'foto1'
};

const reducer = createReducer(
  initialState,
  //
  // on(fotoGetURL1, (state) => ({ ...state, fotoURL1: '' })),
  //
  on(fotoGetURL1Success, (state, result) => ({
    ...state,
    fotoURL1: result.fotoURL,
    fotoPlaceHolder: switchFotoState(state.fotoPlaceHolder)
  })),
  //
  // on(fotoGetURL2, (state) => ({ ...state, fotoURL2: '' })),
  on(fotoGetURL2Success, (state, result) => ({
    ...state,
    fotoURL2: result.fotoURL,
    fotoPlaceHolder: switchFotoState(state.fotoPlaceHolder)
  }))
);

/**
 * Flip flop the foto placeholder between the two states, foto1 or foto2
 * @param fotoPlaceHolder
 * @returns
 */
function switchFotoState(fotoPlaceHolder: string) {
  if (fotoPlaceHolder == 'foto1') {
    return 'foto2';
  } else {
    return 'foto1';
  }
}

export function fotoReducer(
  state: FotoState | undefined,
  action: Action
): FotoState {
  return reducer(state, action);
}
