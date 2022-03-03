import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnepageuiComponent } from './onepageui.component';

describe('OnepageuiComponent', () => {
  let component: OnepageuiComponent;
  let fixture: ComponentFixture<OnepageuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnepageuiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnepageuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
