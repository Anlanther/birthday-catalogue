import { createFeature } from '@ngrx/store';

import { createReducer, on } from '@ngrx/store';
import { AppActions } from './app.actions';

export type AppStore = { [AppFeature.name]: AppState };
export interface AppState {
  accessories: string[];
  lamps: string[];
  chairs: string[];
  desks: string[];
  storages: string[];
  footRests: string[];
  stands: string[];
  deskAccessories: string[];
  selectionComplete: boolean;
}

export const initialState: AppState = {
  accessories: [],
  lamps: [],
  chairs: [],
  desks: [],
  storages: [],
  footRests: [],
  stands: [],
  deskAccessories: [],
  selectionComplete: false,
};

export const appReducer = createReducer<AppState>(
  initialState,
  on(AppActions.setAccessory, (state, action): AppState => {
    return {
      ...state,
      accessories: action.accessory,
      selectionComplete: checkIfComplete({
        ...state,
        accessories: action.accessory,
      }),
    };
  }),
  on(AppActions.setLamp, (state, action): AppState => {
    return {
      ...state,
      lamps: action.lamp,
      selectionComplete: checkIfComplete({ ...state, lamps: action.lamp }),
    };
  }),
  on(AppActions.setChair, (state, action): AppState => {
    return {
      ...state,
      chairs: action.chair,
      selectionComplete: checkIfComplete({ ...state, chairs: action.chair }),
    };
  }),
  on(AppActions.setDesk, (state, action): AppState => {
    return {
      ...state,
      desks: action.desk,
      selectionComplete: checkIfComplete({ ...state, desks: action.desk }),
    };
  }),
  on(AppActions.setStorage, (state, action): AppState => {
    return {
      ...state,
      storages: action.storage,
      selectionComplete: checkIfComplete({
        ...state,
        storages: action.storage,
      }),
    };
  }),
  on(AppActions.setFootRest, (state, action): AppState => {
    return {
      ...state,
      footRests: action.footRest,
      selectionComplete: checkIfComplete({
        ...state,
        footRests: action.footRest,
      }),
    };
  }),
  on(AppActions.setStand, (state, action): AppState => {
    return {
      ...state,
      stands: action.stand,
      selectionComplete: checkIfComplete({ ...state, stands: action.stand }),
    };
  }),
  on(AppActions.setDeskAccessory, (state, action): AppState => {
    return {
      ...state,
      deskAccessories: action.deskAccessory,
      selectionComplete: checkIfComplete({
        ...state,
        deskAccessories: action.deskAccessory,
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
