import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }

  changeLanguage(language: string): void {
    window.location.href = window.location.origin + '/' + language;
  }
}
