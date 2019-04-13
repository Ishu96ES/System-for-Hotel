import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { OffersComponent } from './offers/offers.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LocationComponent } from './location/location.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DiningComponent } from './dining/dining.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetpasswordComponent } from './user/forgetpassword/forgetpassword.component';
import { VerifyemailComponent } from './user/verifyemail/verifyemail.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { FoodItemComponent } from './food-items/food-item/food-item.component';

 
const routes: Routes = [
  {path: 'accomodation', component: AccomodationComponent},
  {path: 'lifestyle', component: LifestyleComponent},
  {path: 'offers', component: OffersComponent},
  {path: 'weddings', component: WeddingsComponent},
  {path: 'signin', component: SigninComponent },
  {path: 'signup' , component : SignupComponent},
  {path: '' , component: HomeComponent},
  {path: 'contact' , component: ContactComponent},
  {path: 'location' , component: LocationComponent},
  {path: 'gallery' , component: GalleryComponent},
  {path: 'dining' , component :DiningComponent},
  {path: 'forgetpassword', component :ForgetpasswordComponent},
  {path: 'verifyemail', component :VerifyemailComponent},

  {path: 'foods' , component: FoodItemComponent},

  //admin
    { path: '', component: AdminComponent},
    { path: 'admin', component: DashboardComponent },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
