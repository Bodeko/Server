import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacedProductDetailsComponent } from './placed-product-details.component';

describe('PlacedProductDetailsComponent', () => {
  let component: PlacedProductDetailsComponent;
  let fixture: ComponentFixture<PlacedProductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacedProductDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacedProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
