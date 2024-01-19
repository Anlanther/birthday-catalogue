import { TestBed } from '@angular/core/testing';

import { CategoryMetadataService } from './category-metadata';

describe('ItemNameConverterService', () => {
  let service: CategoryMetadataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryMetadataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
