import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanyaComponent } from './campanya.component';

describe('CampanyaComponent', () => {
  let component: CampanyaComponent;
  let fixture: ComponentFixture<CampanyaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampanyaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampanyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
