import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfitComponentsComponent } from './selfit-components.component';

describe('SelfitComponentsComponent', () => {
  let component: SelfitComponentsComponent;
  let fixture: ComponentFixture<SelfitComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfitComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfitComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
