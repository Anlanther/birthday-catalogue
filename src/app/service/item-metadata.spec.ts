import { TestBed } from '@angular/core/testing';

import { ItemMetadataService } from './item-metadata.service';

describe('ItemNameConverterService', () => {
  let service: ItemMetadataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemMetadataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
