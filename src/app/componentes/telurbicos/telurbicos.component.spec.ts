import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelurbicosComponent } from './telurbicos.component';

describe('TelurbicosComponent', () => {
  let component: TelurbicosComponent;
  let fixture: ComponentFixture<TelurbicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelurbicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelurbicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
