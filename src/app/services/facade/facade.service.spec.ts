import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { GetData } from 'src/app/models/get-data.interface';
import { ApiService } from '../../data/api.service';
import { FacadeService } from './facade.service';

describe('Service: FacadeService', () => {
  let service: FacadeService;

  const mockData: Observable<GetData> = of({
    customer: new Map(),
    order: [
      {
        id: 1,
        date: '1',
        customerId: 1,
        productId: 1,
      }
    ],
    product: new Map(),
  })

  const apiServiceStub = { 
    getData: jest.fn().mockReturnValue(of(mockData)),
  }
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FacadeService,
        { provide: ApiService, useValue: apiServiceStub }
      ],
    });

    service = TestBed.inject(FacadeService);
  });

  it('should be created', async() => {
    expect(apiServiceStub.getData).toHaveBeenCalled()
  });
});
