import { Component, HostBinding, effect, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactDialogComponent } from './components/contact-dialog/contact-dialog.component';
import { DarkModeService } from './core/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'work-shop';

  constructor(public dialog: MatDialog, public darkModeService: DarkModeService) {
    effect(() => {
      window.localStorage.setItem('darkMode', JSON.stringify(this.darkModeService.darkMode()));
    });

  }
  @HostBinding('class.dark') get mode() {
    return this.darkModeService.darkMode();
  };
  openContactDialog() {
    this.dialog.open(ContactDialogComponent, {
      data: {
        name: 'Davy d HUISSIER',
        city: 'Saône et Loire',
        country: 'France',
      },
    });
  }
}
