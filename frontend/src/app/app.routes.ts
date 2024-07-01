import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { CategoryTableComponent } from './components/category-table/category-table.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'home', pathMatch: 'full', component:HomeComponent},
    {path: 'admin', component:AdminDashboardComponent},
    {path: 'product', component: ProductTableComponent},
    {path: 'create', component: ProductFormComponent},
    {path: 'category-table', component: CategoryTableComponent},
    {path: 'category', component: CategoryFormComponent},
    {path: 'login', component:LoginComponent},
    {path: 'register', component:RegisterComponent},
    {path: 'reset', component:ResetpasswordComponent}
];
