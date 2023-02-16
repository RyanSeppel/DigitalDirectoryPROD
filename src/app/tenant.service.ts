import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tenant } from 'src/app/tenant';
import { TENANTS } from 'src/app/mock-tenants';

@Injectable({
  providedIn: 'root'
})
export class TenantService {

  constructor() { }
  
  getTenants(): Observable<Tenant[]>{
    return of(TENANTS);
  }
}
