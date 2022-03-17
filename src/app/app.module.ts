import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { authInterceptorProviders } from './intercep/authen.intercep';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddStationComponent } from './add-station/add-station.component';
import { StationDetailsComponent } from './station-details/station-details.component';
import { StationListComponent } from './station-list/station-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    UserDetailsComponent,
    UsersListComponent,
    AddUserComponent,
    AddStationComponent,
    StationDetailsComponent,
    StationListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
