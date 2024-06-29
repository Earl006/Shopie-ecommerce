import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'home', pathMatch: 'full', component:HomeComponent},
    {path: 'admin', component:AdminDashboardComponent},
];
