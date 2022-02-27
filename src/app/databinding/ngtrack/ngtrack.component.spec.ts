import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgtrackComponent } from './ngtrack.component';

describe('NgtrackComponent', () => {
  let component: NgtrackComponent;
  let fixture: ComponentFixture<NgtrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgtrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgtrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
