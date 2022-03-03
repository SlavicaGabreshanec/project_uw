import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevTemporaryComponent } from './dev-temporary.component';

describe('DevTemporaryComponent', () => {
  let component: DevTemporaryComponent;
  let fixture: ComponentFixture<DevTemporaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevTemporaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevTemporaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
