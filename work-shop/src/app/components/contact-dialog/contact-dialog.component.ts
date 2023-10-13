import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


export interface DialogData {
  name: 'Davy d HUISSIER',
  whatapp: 'Saône et Loire',
  country: 'France'
}

@Component({
  selector: 'app-contact-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, FontAwesomeModule],
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.css']
})
export class ContactDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  faWhatsapp = faWhatsapp
}
