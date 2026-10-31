import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-installation-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './installation-form.component.html',
  styleUrl: './installation-form.component.css'
})
export class InstallationFormComponent {
  idNumber = '';
  hasAcceptedTerms = false;

  submit(): void {
    if (!this.hasAcceptedTerms) {
      return;
    }

    alert(`מספר זהות: ${this.idNumber}`);
  }
}
