import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './routes/main/app.component';
import { AppRoutingModule } from './routes/main/app-routing.module';
import { HomeComponent } from './routes/home/home.component';
import { ScooterInfoComponent } from './routes/home/scooter-info/scooter-info.component';
import { ScooterMarkerComponent } from './routes/home/scooter-marker/scooter-marker.component';
import { LayoutComponent } from './layout/layout.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginFormComponent } from './routes/login/login-form/login-form.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScooterInfoComponent,
    ScooterMarkerComponent,
    LayoutComponent,
    NavBarComponent,
    LoginFormComponent,
  ],
  imports: [
    AppRoutingModule,
    MatIconModule,
    ScrollingModule,
    MatListModule,
    BrowserModule,
    MatSidenavModule,
    GoogleMapsModule,
    HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
