import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EieiComponent } from './eiei.component';

describe('EieiComponent', () => {
  let component: EieiComponent;
  let fixture: ComponentFixture<EieiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EieiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EieiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
