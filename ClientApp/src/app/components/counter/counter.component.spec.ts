import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';
import { CounterService } from 'src/app/services/counter.service';
import { of } from 'rxjs';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let mockCounterService: jasmine.SpyObj<CounterService>;

  beforeEach(async () => {
    mockCounterService = jasmine.createSpyObj('CounterService', ['counter$', 'incrementCounter']);

    await TestBed.configureTestingModule({
      declarations: [CounterComponent],
      providers: [{ provide: CounterService, useValue: mockCounterService }]
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe to counter$ on init', () => {
    // Arrange
    mockCounterService.counter$ = of(5);
    fixture.detectChanges();

    // Act & Assert
    expect(component.currentCount).toBe(5);
  });

  it('should call incrementCounter on service when incrementCounter method is triggered', () => {
    // Act
    component.incrementCounter();

    // Assert
    expect(mockCounterService.incrementCounter).toHaveBeenCalled();
  });  
});
