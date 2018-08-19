import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelHistoryGraphComponent } from './travel-history-graph.component';

describe('TravelHistoryGraphComponent', () => {
  let component: TravelHistoryGraphComponent;
  let fixture: ComponentFixture<TravelHistoryGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelHistoryGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelHistoryGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
