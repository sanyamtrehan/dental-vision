import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kids-care',
  templateUrl: './kids-care.component.html',
  imports: [CommonModule],
  host: {
    class:
      'section-padding max-w-primary flex flex-col md:flex-row items-center gap-10',
  },
})
export class KidsCareComponent {
  oralCares = [
    {
      icon: '\uE90A',
      label: 'Brushing',
      desc: 'Develop strong oral hygiene habits with proper brushing techniques that keep cavities and plaque at bay.',
    },
    {
      icon: '\uE92C',
      label: 'Nutrition',
      desc: 'A balanced diet plays a crucial role in oral health. We guide parents on the best foods for strong teeth and gums.',
    },
    {
      icon: '\uE91B',
      label: 'Checkups',
      desc: "Regular dental visits ensure early detection of issues and keep your child's smile healthy and bright.",
    },
  ];

  /**
   * constructor
   */
  constructor() {}
}
