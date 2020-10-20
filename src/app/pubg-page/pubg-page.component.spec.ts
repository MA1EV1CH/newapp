import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubgPageComponent } from './pubg-page.component';

describe('PubgPageComponent', () => {
  let component: PubgPageComponent;
  let fixture: ComponentFixture<PubgPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubgPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PubgPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
