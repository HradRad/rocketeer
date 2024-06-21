import { Component } from '@angular/core';
import { MatMenu } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../../api/language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, RouterLink, MatMenu],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private languageService: LanguageService) {
  }

  switchLanguage(language: string): void {
    this.languageService.changeLanguage(language);
  }
}
