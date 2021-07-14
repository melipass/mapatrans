import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MarkerService } from './services/marker.service';
import { PopupService } from './services/popup.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapMainComponent } from './components/map-main/map-main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormEditPlaceComponent } from './components/form-edit-place/form-edit-place.component';
import { FormAddPlaceComponent } from './components/form-add-place/form-add-place.component';
import { LandingComponent } from './views/landing/landing.component';
import { LoginComponent } from './views/login/login.component';
import { MapRegionComponent } from './components/map-region/map-region.component';
import { AdminHomeComponent } from './views/admin-home/admin-home.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MapMainComponent,
    NavbarComponent,
    FormEditPlaceComponent,
    FormAddPlaceComponent,
    LandingComponent,
    LoginComponent,
    MapRegionComponent,
    AdminHomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule    
  ],
  providers: [
    MarkerService,
    PopupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
