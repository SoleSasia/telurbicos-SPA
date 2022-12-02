import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomenajesComponent } from './homenajes.component';

describe('HomenajesComponent', () => {
  let component: HomenajesComponent;
  let fixture: ComponentFixture<HomenajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomenajesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomenajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
