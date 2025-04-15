import { TestBed } from '@angular/core/testing';
import { SanctionedEntitiesService } from './sanctioned-entities.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SanctionedEntity } from '../models/sanctioned-entity';

describe('SanctionedEntitiesService', () => {
  let service: SanctionedEntitiesService;
  let httpMock: HttpTestingController;
  const baseUrl = 'http://localhost:4200/'; // Mocked base URL

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: 'BASE_URL', useValue: baseUrl }]
    });

    service = TestBed.inject(SanctionedEntitiesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Ensures no pending API requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch sanctioned entities', () => {
    // Arrange
    const mockEntities: SanctionedEntity[] = [
      { id: '1', name: 'Entity A', domicile: 'Country X', accepted: true },
      { id: '2', name: 'Entity B', domicile: 'Country Y', accepted: false }
    ];

    service.getSanctionedEntities().subscribe(entities => {
      // Assert
      expect(entities).toEqual(mockEntities);
      expect(entities.length).toBe(2);
    });

    // Act - Mock the HTTP request
    const req = httpMock.expectOne(`${baseUrl}api/sanctioned-entities`);
    expect(req.request.method).toBe('GET');
    req.flush(mockEntities);
  });

  it('should add a sanctioned entity', () => {
    // Arrange
    const newEntity: SanctionedEntity = { id: '3', name: 'Entity C', domicile: 'Country Z', accepted: true };

    service.addSanctionedEntity(newEntity).subscribe(entity => {
      // Assert
      expect(entity).toEqual(newEntity);
    });

    // Act - Mock the HTTP request
    const req = httpMock.expectOne(`${baseUrl}api/sanctioned-entities`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newEntity);
    req.flush(newEntity);
  });
});
