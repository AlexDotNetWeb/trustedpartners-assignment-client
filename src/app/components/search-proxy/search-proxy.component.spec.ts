import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProxyComponent } from './search-proxy.component';

describe('SearchProxyComponent', () => {
  let component: SearchProxyComponent;
  let fixture: ComponentFixture<SearchProxyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchProxyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchProxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
