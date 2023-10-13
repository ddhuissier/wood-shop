import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  darkMode = signal<boolean>(JSON.parse(window.localStorage.getItem('darkMode') ?? 'false'));
  constructor() { }
}
