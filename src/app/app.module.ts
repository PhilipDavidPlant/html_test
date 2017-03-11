import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { SettingsViewComponent } from './views/settings-view/settings-view.component';
import { ManageListingsViewComponent } from './views/manage-listings-view/manage-listings-view.component';
import { IndividualListingViewComponent } from './views/individual-listing-view/individual-listing-view.component';
import { DirectoryViewComponent } from './views/directory-view/directory-view.component';
import { NavBarPartComponent } from './parts/nav-bar-part/nav-bar-part.component';
import { SignUpPartComponent } from './parts/sign-up-part/sign-up-part.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    SettingsViewComponent,
    ManageListingsViewComponent,
    IndividualListingViewComponent,
    DirectoryViewComponent,
    NavBarPartComponent,
    SignUpPartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
