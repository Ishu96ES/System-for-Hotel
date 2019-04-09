import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FoodmenuModule } from './foodmenu/foodmenu.module';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';

@NgModule({
  declarations: [AdminComponent, DashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FoodmenuModule,
    AdminSidenavComponent
  ]
})
export class AdminModule { }
