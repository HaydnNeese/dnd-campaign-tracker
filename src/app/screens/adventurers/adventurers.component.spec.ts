import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventurersComponent } from './adventurers.component';

describe('AdventurersComponent', () => {
  let component: AdventurersComponent;
  let fixture: ComponentFixture<AdventurersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdventurersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdventurersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
