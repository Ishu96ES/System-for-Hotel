import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'foodmenu',
  pathMatch: 'full'
}, {
  path: '',
  component: AdminComponent,
  children: [{
      path: 'admin',
      component: DashboardComponent
  }, {
      path: 'foodmenu',
      loadChildren: '../admin/foodmenu/foodmenu.module#FoodmenuModule'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
