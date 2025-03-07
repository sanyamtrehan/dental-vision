import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  imports: [CommonModule],
  host: { class: 'section-padding max-w-primary flex flex-col gap-16' },
})
export class ServicesComponent {
  /**
   * constructor
   */
  constructor() {}

  services = [
    {
      img: 'general-dentistry',
      name: 'General Dentistry',
      desc: 'Enthusiastically mesh long term high impact infrastructures efficient customer service.',
    },
    {
      img: 'radiography',
      name: 'Radiography',
      desc: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    },
    {
      img: 'dental-pediatric',
      name: 'Dental Pediatric',
      desc: 'Iterative approaches to corporate strategy foster collaborative thinking further value.',
    },
    {
      img: 'whitening',
      name: 'Whitening',
      desc: 'Organically grow the holistic world view of disruptive innovation via better workplace.',
    },
  ];
}
