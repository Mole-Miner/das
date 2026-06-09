import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedCategory } from './shared-category';

describe('SharedCategory', () => {
  let component: SharedCategory;
  let fixture: ComponentFixture<SharedCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedCategory],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedCategory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
