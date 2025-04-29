import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { AppService } from '../../app.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
  imports: [CommonModule],
})
export class TestimonialsComponent {
  testimonials = [
    {
      img: 'client-01',
      title: 'I can finally smile with confidence!',
      desc: 'After years of hiding my smile, I now feel amazing. The dental work was top-notch, and the results exceeded my expectations.',
    },
    {
      img: 'client-02',
      title: 'A truly comforting experience.',
      desc: 'From the moment I walked in, the care and professionalism were outstanding. The procedure was painless, and the team made me feel completely at ease.',
    },
    {
      img: 'client-03',
      title: 'Exceptional care, every step of the way.',
      desc: 'The attention to detail and compassion shown throughout my treatment made all the difference. I highly recommend them to anyone seeking quality dental care.',
    },
  ];

  openCalendly = inject(AppService).openCalendly;

  /**
   * constructor
   */
  constructor() {}
}
