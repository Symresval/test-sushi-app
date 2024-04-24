import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerCardSushiBoxesComponent } from './container-card-sushi-boxes.component';

describe('ContainerCardSushiBoxesComponent', () => {
  let component: ContainerCardSushiBoxesComponent;
  let fixture: ComponentFixture<ContainerCardSushiBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContainerCardSushiBoxesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContainerCardSushiBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
