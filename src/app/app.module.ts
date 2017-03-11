import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

//Views
import { LoginViewComponent } from './views/login-view/login-view.component';
import { SettingsViewComponent } from './views/settings-view/settings-view.component';
import { ManageListingsViewComponent } from './views/manage-listings-view/manage-listings-view.component';
import { IndividualListingViewComponent } from './views/individual-listing-view/individual-listing-view.component';
import { DirectoryViewComponent } from './views/directory-view/directory-view.component';

import { MaterialModule } from '@angular/material';

//Routes
 const appRoutes : Routes = [
    { path:'', component: LoginViewComponent },
    { path:'login', component: LoginViewComponent },
    { path:'settings/:userId', component: SettingsViewComponent },
    { path:'view-listing/:listingId', component: IndividualListingViewComponent },
    { path:'directory', component: DirectoryViewComponent },
    { path:'manage-listings', component: ManageListingsViewComponent }
 ]

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    SettingsViewComponent,
    ManageListingsViewComponent,
    IndividualListingViewComponent,
    DirectoryViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap:[ AppComponent ]
})
export class AppModule { }
