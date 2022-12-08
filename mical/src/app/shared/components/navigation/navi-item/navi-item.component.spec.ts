import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaviItemComponent } from './navi-item.component';

describe('NaviItemComponent', () => {
  let component: NaviItemComponent;
  let fixture: ComponentFixture<NaviItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaviItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaviItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
