import { createAction, props } from '@ngrx/store';

/**
 * URL 1, send, success and failure
 */
export const fotoGetURL1 = createAction('[Foto] Get URL 1');

export const fotoGetURL1Success = createAction(
  '[Foto] Get URL 1 Success',
  props<any>()
);

export const fotoGetURL1Failure = createAction(
  '[Foto] Get URL 1 Failure',
  props<{ message: string }>()
);

/**
 * URL 2, send, success and failure
 */
export const fotoGetURL2 = createAction('[Foto] Get URL 2');

export const fotoGetURL2Success = createAction(
  '[Foto] Get URL 2 Success',
  props<any>()
);

export const fotoGetURL2Failure = createAction(
  '[Foto] Get URL 2 Failure',
  props<{ message: string }>()
);
