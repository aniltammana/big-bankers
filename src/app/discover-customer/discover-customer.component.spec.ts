import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverCustomerComponent } from './discover-customer.component';

describe('DiscoverCustomerComponent', () => {
  let component: DiscoverCustomerComponent;
  let fixture: ComponentFixture<DiscoverCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
