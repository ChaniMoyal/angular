import { Component } from '@angular/core';
import { InstallationFormComponent } from './installation-form/installation-form.component';
import { GradeListComponent } from './grade-list/grade-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InstallationFormComponent, GradeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lesson1';
}
