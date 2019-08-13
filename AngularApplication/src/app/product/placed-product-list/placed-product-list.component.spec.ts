import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacedProductListComponent } from './placed-product-list.component';

describe('PlacedProductListComponent', () => {
  let component: PlacedProductListComponent;
  let fixture: ComponentFixture<PlacedProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacedProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacedProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
