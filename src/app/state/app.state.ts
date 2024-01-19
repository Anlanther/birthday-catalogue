import { createFeature } from '@ngrx/store';

import { createReducer, on } from '@ngrx/store';
import { AppActions } from './app.actions';

export type AppStore = { [AppFeature.name]: AppState };
export interface AppState {
  accessory: string | null;
  lamp: string | null;
  chair: string | null;
  desk: string | null;
  storage: string | null;
  footRest: string | null;
  stand: string | null;
  deskAccessory: string | null;
  selectionComplete: boolean;
}

export const initialState: AppState = {
  accessory: null,
  lamp: null,
  chair: null,
  desk: null,
  storage: null,
  footRest: null,
  stand: null,
  deskAccessory: null,
  selectionComplete: false,
};

export const appReducer = createReducer<AppState>(
  initialState,
  on(AppActions.setAccessory, (state, action): AppState => {
    return {
      ...state,
      accessory: action.accessory,
      selectionComplete: checkIfComplete(state),
    };
  }),
  on(AppActions.setLamp, (state, action): AppState => {
    return {
      ...state,
      lamp: action.lamp,
      selectionComplete: checkIfComplete(state),
    };
  }),
  on(AppActions.setChair, (state, action): AppState => {
    return {
      ...state,
      chair: action.chair,
      selectionComplete: checkIfComplete(state),
    };
  }),
  on(AppActions.setDesk, (state, action): AppState => {
    return {
      ...state,
      desk: action.desk,
      selectionComplete: checkIfComplete(state),
    };
  }),
  on(AppActions.setStorage, (state, action): AppState => {
    return {
      ...state,
      storage: action.storage,
      selectionComplete: checkIfComplete(state),
    };
  }),
  on(AppActions.setFootRest, (state, action): AppState => {
    return {
      ...state,
      footRest: action.footRest,
      selectionComplete: checkIfComplete(state),
    };
  }),
  on(AppActions.setStand, (state, action): AppState => {
    return {
      ...state,
      stand: action.stand,
      selectionComplete: checkIfComplete(state),
    };
  }),
  on(AppActions.setDeskAccessory, (state, action): AppState => {
    return {
      ...state,
      deskAccessory: action.deskAccessory,
      selectionComplete: checkIfComplete(state),
    };
  })
);

function checkIfComplete(state: AppState) {
  const { selectionComplete, ...rest } = state;
  return Object.values(rest).every((item) => item && item !== '');
}

export const AppFeature = createFeature({
  name: 'app',
  reducer: appReducer,
});
