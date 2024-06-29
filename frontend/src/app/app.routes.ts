import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'home', pathMatch: 'full', component:HomeComponent},
    {path: 'admin', component:AdminDashboardComponent},
    {path: 'login', component:LoginComponent},
    {path: 'register', component:RegisterComponent},
    {path: 'reset', component:ResetpasswordComponent}
];
