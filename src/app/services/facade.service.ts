import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { ApiService } from "../data/api.service";
import { GetData } from "../models/get-data.interface";

/** 
 Facade discusses encapsulating a complex subsystem within a single 
 interface object. It also promotes decoupling 
 the subsystem from its potentially many clients.
*/
@Injectable({ providedIn: 'root' })
export class FacadeService {

    getData$: Observable<GetData>;

    constructor(private apiService: ApiService ){
      this.getData$ = this.apiService.getData();
    }

}
