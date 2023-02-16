import { Component, OnInit, Input } from '@angular/core';
import { Tenant } from 'src/app/tenant';

@Component({
  selector: 'app-tenant-detail',
  templateUrl: './tenant-detail.component.html',
  styleUrls: ['./tenant-detail.component.css']
})
export class TenantDetailComponent implements OnInit {
  @Input() tenant: Tenant;
  
  constructor() { }

  ngOnInit() {
  }

}
