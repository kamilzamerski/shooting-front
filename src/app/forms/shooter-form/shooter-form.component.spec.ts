import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShooterFormComponent } from './shooter-form.component';

describe('ClubFormComponent', () => {
  let component: ShooterFormComponent;
  let fixture: ComponentFixture<ShooterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShooterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShooterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
