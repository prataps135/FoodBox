import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortelComponent } from './portel.component';

describe('PortelComponent', () => {
  let component: PortelComponent;
  let fixture: ComponentFixture<PortelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
