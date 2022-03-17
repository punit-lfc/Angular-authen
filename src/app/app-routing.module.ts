import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddStationComponent } from './add-station/add-station.component';
import { StationDetailsComponent } from './station-details/station-details.component';
import { StationListComponent } from './station-list/station-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'users', component: UsersListComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'add', component: AddUserComponent },
  { path: 'stations', component: StationListComponent },
  { path: 'stations/:id', component: StationDetailsComponent },
  { path: 'addStation', component: AddStationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
