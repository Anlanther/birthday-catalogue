import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { exhaustMap, filter, map } from 'rxjs';
import { ItemDialogueComponent } from '../catalogue/item-dialogue/item-dialogue.component';
import { CategoryName } from '../services/category-metadata';
import { AppActions } from './app.actions';
import { AppFeature, AppStore } from './app.state';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppStore>,
    private dialogue: MatDialog
  ) {}

  dialogueOpened$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.openDialogue),
      concatLatestFrom(({ categoryName }) => {
        if (categoryName === CategoryName.ACCESSORY)
          return this.store.pipe(select(AppFeature.selectAccessories));
        if (categoryName === CategoryName.LAMP)
          return this.store.pipe(select(AppFeature.selectLamps));
        if (categoryName === CategoryName.CHAIR)
          return this.store.pipe(select(AppFeature.selectChairs));
        if (categoryName === CategoryName.DESK)
          return this.store.pipe(select(AppFeature.selectDesks));
        if (categoryName === CategoryName.STORAGE)
          return this.store.pipe(select(AppFeature.selectStorages));
        if (categoryName === CategoryName.FOOT_REST)
          return this.store.pipe(select(AppFeature.selectFootRests));
        if (categoryName === CategoryName.STAND)
          return this.store.pipe(select(AppFeature.selectStands));
        else return this.store.pipe(select(AppFeature.selectDeskAccessories));
      }),
      exhaustMap(([{ categoryName }, items]) => {
        const dialogRef = this.dialogue.open(ItemDialogueComponent, {
          data: { categoryName, items },
        });
        return dialogRef.afterClosed();
      }),
      filter((dialogRes) => !!dialogRes),
      map((dialogRes: { categoryName: CategoryName; items: string[] }) =>
        AppActions.dialogueSavedSuccess(dialogRes.categoryName, dialogRes.items)
      )
    )
  );

  dialogueSaved$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.dialogueSavedSuccess),
      map(({ categoryName, items }) => {
        if (categoryName === CategoryName.ACCESSORY)
          return AppActions.setAccessory(items);
        if (categoryName === CategoryName.CHAIR)
          return AppActions.setChair(items);
        if (categoryName === CategoryName.DESK)
          return AppActions.setDesk(items);
        if (categoryName === CategoryName.DESK_ACCESSORY)
          return AppActions.setDeskAccessory(items);
        if (categoryName === CategoryName.FOOT_REST)
          return AppActions.setFootRest(items);
        if (categoryName === CategoryName.LAMP)
          return AppActions.setLamp(items);
        if (categoryName === CategoryName.STAND)
          return AppActions.setStand(items);
        else return AppActions.setStorage(items);
      })
    )
  );
}
