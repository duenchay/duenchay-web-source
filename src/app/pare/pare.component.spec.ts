import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PareComponent } from './pare.component';

describe('PareComponent', () => {
  let component: PareComponent;
  let fixture: ComponentFixture<PareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
