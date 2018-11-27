import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShooterListComponent } from './shooter-list.component';

describe('ShooterListComponent', () => {
  let component: ShooterListComponent;
  let fixture: ComponentFixture<ShooterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShooterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShooterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
