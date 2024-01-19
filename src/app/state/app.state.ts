import { createFeature } from '@ngrx/store';

import { createReducer, on } from '@ngrx/store';
import { AppActions } from './app.actions';

export type AppStore = { [AppFeature.name]: AppState };
export interface AppState {
  accessory: string[];
  lamp: string[];
  chair: string[];
  desk: string[];
  storage: string[];
  footRest: string[];
  stand: string[];
  deskAccessory: string[];
  selectionComplete: boolean;
}

export const initialState: AppState = {
  accessory: [],
  lamp: [],
  chair: [],
  desk: [],
  storage: [],
  footRest: [],
  stand: [],
  deskAccessory: [],
  selectionComplete: false,
};

export const appReducer = createReducer<AppState>(
  initialState,
  on(AppActions.setAccessory, (state, action): AppState => {
    return {
      ...state,
      accessory: action.accessory,
      selectionComplete: checkIfComplete({
        ...state,
        accessory: action.accessory,
      }),
    };
  }),
  on(AppActions.setLamp, (state, action): AppState => {
    return {
      ...state,
      lamp: action.lamp,
      selectionComplete: checkIfComplete({ ...state, lamp: action.lamp }),
    };
  }),
  on(AppActions.setChair, (state, action): AppState => {
    return {
      ...state,
      chair: action.chair,
      selectionComplete: checkIfComplete({ ...state, chair: action.chair }),
    };
  }),
  on(AppActions.setDesk, (state, action): AppState => {
    return {
      ...state,
      desk: action.desk,
      selectionComplete: checkIfComplete({ ...state, desk: action.desk }),
    };
  }),
  on(AppActions.setStorage, (state, action): AppState => {
    return {
      ...state,
      storage: action.storage,
      selectionComplete: checkIfComplete({ ...state, storage: action.storage }),
    };
  }),
  on(AppActions.setFootRest, (state, action): AppState => {
    return {
      ...state,
      footRest: action.footRest,
      selectionComplete: checkIfComplete({
        ...state,
        footRest: action.footRest,
      }),
    };
  }),
  on(AppActions.setStand, (state, action): AppState => {
    return {
      ...state,
      stand: action.stand,
      selectionComplete: checkIfComplete({ ...state, stand: action.stand }),
    };
  }),
  on(AppActions.setDeskAccessory, (state, action): AppState => {
    return {
      ...state,
      deskAccessory: action.deskAccessory,
      selectionComplete: checkIfComplete({
        ...state,
        deskAccessory: action.deskAccessory,
      }),
    };
  })
);

function checkIfComplete(state: AppState) {
  const { selectionComplete, ...rest } = state;
  return Object.values(rest).every((item) => item.length > 0);
}

export const AppFeature = createFeature({
  name: 'app',
  reducer: appReducer,
});
