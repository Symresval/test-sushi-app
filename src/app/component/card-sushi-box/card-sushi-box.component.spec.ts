import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSushiBoxComponent } from './card-sushi-box.component';

describe('CardSushiBoxComponent', () => {
  let component: CardSushiBoxComponent;
  let fixture: ComponentFixture<CardSushiBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardSushiBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardSushiBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
