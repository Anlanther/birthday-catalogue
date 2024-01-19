import { createActionGroup } from '@ngrx/store';
import { CategoryName } from '../services/category-metadata';

export const AppActions = createActionGroup({
  source: 'App',
  events: {
    'Set Accessory': (accessory: string[]) => ({ accessory }),
    'Set Lamp': (lamp: string[]) => ({ lamp }),
    'Set Chair': (chair: string[]) => ({ chair }),
    'Set Desk': (desk: string[]) => ({ desk }),
    'Set Storage': (storage: string[]) => ({ storage }),
    'Set Foot Rest': (footRest: string[]) => ({ footRest }),
    'Set Stand': (stand: string[]) => ({ stand }),
    'Set Desk Accessory': (deskAccessory: string[]) => ({ deskAccessory }),
    'Open Dialogue': (categoryName: CategoryName) => ({ categoryName }),
    'Dialogue Saved Success': (
      categoryName: CategoryName,
      items: string[]
    ) => ({
      categoryName,
      items,
    }),
  },
});
