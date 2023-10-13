import { Component, HostBinding, HostListener, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../menu/menu.component';
import { DarkModeService } from 'src/app/core/dark-mode.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  fillColor = "#000000"
  /**
   *
   */
  constructor(public darkModeService: DarkModeService) {
    effect(() => {
      this.fillColor = this.darkModeService.darkMode() ? "#FFFFFF" : "#000000";
    });

  }

}
