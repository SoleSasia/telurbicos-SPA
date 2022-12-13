import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotresComponent } from './nosotres.component';

describe('NosotresComponent', () => {
  let component: NosotresComponent;
  let fixture: ComponentFixture<NosotresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosotresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NosotresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
