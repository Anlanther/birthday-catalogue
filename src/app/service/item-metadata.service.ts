import { Injectable } from '@angular/core';

export interface ItemMetadata {
  displayName: string;
  variableName: string;
  placeholder: string;
  url: string;
  imagePath: string;
}

export enum VariableName {
  ACCESSORY = 'accessory',
  LAMP = 'lamp',
  CHAIR = 'chair',
  DESK = 'desk',
  STORAGE = 'storage',
  FOOT_REST = 'footRest',
  STAND = 'stand',
  DESK_ACCESSORY = 'deskAccessory',
}

@Injectable({
  providedIn: 'root',
})
export class ItemMetadataService {
  ITEM_MAP: Map<VariableName, ItemMetadata> = new Map([
    [
      VariableName.ACCESSORY,
      {
        displayName: 'Accessory',
        placeholder: '',
        url: 'https://www.ikea.com.hk/en/products/workspace-accessories',
        variableName: VariableName.ACCESSORY,
        imagePath: '',
      },
    ],
    [
      VariableName.LAMP,
      {
        displayName: 'Lamp',
        placeholder: '',
        url: 'https://www.ikea.com.hk/en/products/workspace-lighting',
        variableName: VariableName.LAMP,
        imagePath: '',
      },
    ],
    [
      VariableName.CHAIR,
      {
        displayName: 'Chair',
        placeholder: '',
        url: 'https://www.ikea.com.hk/en/products/work-chairs',
        variableName: VariableName.CHAIR,
        imagePath: '',
      },
    ],
    [
      VariableName.DESK,
      {
        displayName: 'Desk',
        placeholder: '',
        url: 'https://www.ikea.com.hk/en/products/work-desks',
        variableName: VariableName.DESK,
        imagePath: '',
      },
    ],
    [
      VariableName.STORAGE,
      {
        displayName: 'Storage',
        placeholder: 'ALEX',
        url: 'https://www.ikea.com.hk/en/products/office-storage-furniture',
        variableName: VariableName.STORAGE,
        imagePath: '',
      },
    ],
    [
      VariableName.FOOT_REST,
      {
        displayName: 'Foot Rest',
        placeholder: '',
        url: 'https://www.ikea.com.hk/en/search?q=footrest',
        variableName: VariableName.FOOT_REST,
        imagePath: '',
      },
    ],
    [
      VariableName.STAND,
      {
        displayName: 'Stand',
        placeholder: 'ELLOVEN',
        url: 'https://www.ikea.com.hk/en/search?q=monitor+stand',
        variableName: VariableName.STAND,
        imagePath: '',
      },
    ],
    [
      VariableName.DESK_ACCESSORY,
      {
        displayName: 'Desk Accessory',
        variableName: VariableName.DESK_ACCESSORY,
        imagePath: '',
        placeholder: '',
        url: 'https://www.ikea.com.hk/en/products/workspace-accessories/desks-accessories',
      },
    ],
  ]);

  getDisplayName(variableName: VariableName) {
    const metadata = this.ITEM_MAP.get(variableName);
    if (!metadata) {
      throw new Error(`No variable by name ${variableName}`);
    }
    return metadata.displayName;
  }

  getVariableName(variableName: VariableName) {
    const metadata = this.ITEM_MAP.get(variableName);
    if (!metadata) {
      throw new Error(`No variable by name ${variableName}`);
    }
    return metadata.variableName;
  }
}
