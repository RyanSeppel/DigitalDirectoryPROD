import { Component, OnInit } from '@angular/core';
import { Tenant } from 'src/app/tenant';
import { TENANTS } from 'src/app/mock-tenants';

@Component({
  selector: 'app-tenants2',
  templateUrl: './tenants2b.component.html',
  styleUrls: ['./tenants2b.component.css']
})
export class Tenants2Component implements OnInit {

  tenants = TENANTS.slice(12, 24);;

  constructor() { }

  ngOnInit() {
  }

}
