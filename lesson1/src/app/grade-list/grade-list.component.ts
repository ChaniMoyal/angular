import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';

export interface Grade {
  subject: string;
  score: number;
}

@Component({
  selector: 'app-grade-list',
  imports: [DecimalPipe],
  templateUrl: './grade-list.component.html',
  styleUrl: './grade-list.component.css'
})
export class GradeListComponent {
  grades: Grade[] = [
    { subject: 'מקצוע 1', score: 92 },
    { subject: 'מקצוע 2', score: 78 },
    { subject: 'מקצוע 3', score: 60 },
    { subject: 'מקצוע 4', score: 45 },
    { subject: 'מקצוע 5', score: 55 },
  ];

  get average(): number {
    if (this.grades.length === 0) {
      return 0;
    }
    const sum = this.grades.reduce((total, grade) => total + grade.score, 0);
    return sum / this.grades.length;
  }
}
