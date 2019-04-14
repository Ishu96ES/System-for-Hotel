import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule} from '@angular/flex-layout';
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { ResortActivitiesComponent } from './lifestyle/resort-activities/resort-activities.component';
import { ExperiencesComponent } from './lifestyle/experiences/experiences.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { OffersComponent } from './offers/offers.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { LocationComponent } from './location/location.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './signin/signin.component';
import { MessageComponent } from './message/message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DiningComponent } from './dining/dining.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetpasswordComponent } from './user/forgetpassword/forgetpassword.component';
import { VerifyemailComponent } from './user/verifyemail/verifyemail.component';
import { AuthService } from './service/auth.service';
import { Router, NavigationStart } from '@angular/router';
import { NavtabsService } from './navigation/navtabs/navtabs.service';
import { HeaderService } from './navigation/header/header.service';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { AdminSidenavComponent } from './admin/admin-sidenav/admin-sidenav.component';
import { AdminComponent } from './admin/admin.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FoodItemComponent } from './food-items/food-item/food-item.component';
import { AddFoodItemComponent } from './food-items/add-food-item/add-food-item.component';
import { FoodItemService } from './food-items/food-item.service';
import { ListFoodItemComponent } from './food-items/list-food-item/list-food-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AccomodationComponent,
    LifestyleComponent,
    ResortActivitiesComponent,
    ExperiencesComponent,
    WeddingsComponent,
    OffersComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    NavtabsComponent,
    ContactComponent,
    LocationComponent,
    GalleryComponent,
    FooterComponent,
    SigninComponent,
    SignupComponent,
    MessageComponent,
    DiningComponent,
    SignupComponent,
    ForgetpasswordComponent,
    VerifyemailComponent,
    //admin
    DashboardComponent,
    AdminComponent,
    AdminSidenavComponent,
    FoodItemComponent,
    AddFoodItemComponent,
    ListFoodItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey : 'AIzaSyBEG1L3R7cG3vhTnvNRMxHLRve9W4Sb8i8'
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    ToastrModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [AuthService,NavtabsService,HeaderService,FoodItemService],
  bootstrap: [AppComponent],
  entryComponents : [SigninComponent,AddFoodItemComponent]
})
export class AppModule { 
  showHead: boolean = false;

  ngOnInit() {
  }

  constructor(private router: Router) {
  // on route change to '/login', set the variable showHead to false
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/signin') {
          this.showHead = false;
        } else {
          this.showHead = true;
        }
      }
    });
  }
}
