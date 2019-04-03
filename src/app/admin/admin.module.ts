import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FoodMenuModule } from './food-menu/food-menu.module';
import { FoodmenuModule } from './foodmenu/foodmenu.module';

@NgModule({
  declarations: [AdminComponent, DashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FoodMenuModule,
    FoodmenuModule
  ]
})
export class AdminModule { }
