import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'home', pathMatch: 'full', component:HomeComponent},
    {path: 'admin', component:AdminDashboardComponent},
    {path: 'create', component: ProductFormComponent},
    {path: 'category', component: CategoryFormComponent},
];
