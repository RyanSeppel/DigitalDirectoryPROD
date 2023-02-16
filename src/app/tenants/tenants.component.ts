import { Component, OnInit } from '@angular/core';
import { Tenant } from 'src/app/tenant';
import { TenantService} from 'src/app/tenant.service';

@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styleUrls: ['./tenants.component.css']
})
export class TenantsComponent implements OnInit {
  
  tenants: Tenant[];
  
  selectedTenant: Tenant;
    onSelect(tenant: Tenant): void {
    this.selectedTenant = tenant;
    }

  constructor(private tenantService: TenantService) { }
  
  getTenants(): void{
    this.tenantService.getTenants()
      .subscribe(tenants => this.tenants = tenants);
  }
  
  ngOnInit() {
    this.getTenants();
  
  }
  
  
}
