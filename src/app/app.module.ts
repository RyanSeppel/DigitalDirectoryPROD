import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TenantsComponent } from './tenants/tenants.component';
import { Tenants2Component } from './tenants2/tenants2.component';
import { TenantDetailComponent } from './tenant-detail/tenant-detail.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    AppComponent,
    TenantsComponent,
    Tenants2Component,
    TenantDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
