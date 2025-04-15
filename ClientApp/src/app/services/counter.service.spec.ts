import { TestBed } from '@angular/core/testing';
import { CounterService } from './counter.service';

describe('CounterService', () => {
  let service: CounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CounterService]
    });
    service = TestBed.inject(CounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return initial counter value as 0', () => {
    expect(service.getCounter()).toBe(0);
  });

  it('should increment counter value', () => {
    service.incrementCounter();
    expect(service.getCounter()).toBe(1);
  });
});
