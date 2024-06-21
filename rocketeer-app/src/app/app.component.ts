import { Component, LOCALE_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './modules/common/navbar/navbar.component';
import { LanguageService } from './api/language.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    LanguageService
  ]
})
export class AppComponent {
  constructor() {
  }
  
  title = 'rocketeer-app';
}
