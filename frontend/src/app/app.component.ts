import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductFormComponent } from "./components/product-form/product-form.component";
import { LoginComponent } from "./components/login/login.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, ProductFormComponent, LoginComponent]
})
export class AppComponent {
  title = 'create';
}
