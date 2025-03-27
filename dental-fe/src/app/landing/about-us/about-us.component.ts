import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { AppService } from '../../app.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  imports: [CommonModule],
  styleUrl: './about-us.component.scss',
  host: {
    class:
      'max-w-primary section-padding flex w-full gap-6 flex-col md:flex-row',
  },
})
export class AboutUsComponent {
  private appService = inject(AppService);
  contactInfo = [
    {
      icon: '\uE902',
      label: 'Education',
      data: 'Bachelor of Dental Surgery (BDS)',
    },
    {
      icon: '\uE91E',
      label: 'Work Experiences',
      data: 'Philadelphia Hospital, Ambala City\n\nDental Surgeon/Lecturer\nS.G.R.D. Dental College, Amritsar\n\nObservership at Dr. Rajender Prasad Government Medical College, Tanda Kangra',
    },
    {
      icon: '\uE907',
      label: 'Call Us',
      data: '<a href="tel:+919418794157">+91 94187-94157</a>',
    },
  ];
}
