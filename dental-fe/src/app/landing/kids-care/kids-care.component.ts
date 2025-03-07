import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kids-care',
  templateUrl: './kids-care.component.html',
  imports: [CommonModule],
  host: { class: 'section-padding max-w-primary flex items-center gap-10' },
})
export class KidsCareComponent {
  oralCares = [
    {
      icon: '',
      label: 'Brushing',
      desc: 'Dynamically target high payoff capital for technologies.',
    },
    {
      icon: '',
      label: 'Nutrition',
      desc: 'Objectively integrate core competencies centric communities.',
    },
    {
      icon: '',
      label: 'Checkups',
      desc: 'Empower dynamic leadership skills after business portals.',
    },
  ];

  /**
   * constructor
   */
  constructor() {}
}
