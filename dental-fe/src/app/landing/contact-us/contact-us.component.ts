import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { AppService } from '../../app.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  host: {
    class: 'max-w-primary section-padding flex flex-col md:flex-row gap-10',
  },
  imports: [CommonModule],
})
export class ContactUsComponent {
  private appService = inject(AppService);
  mapUrl = 'https://maps.app.goo.gl/rikrT14dePHRaHxC9';

  contactInfo = [
    {
      icon: '\uE909',
      label: '24/7 Emergency',
      data: '<a href="tel:+919418794157">+91 94187-94157</a>',
    },
    {
      icon: '\uE902',
      label: 'Address',
      data: `<a href="${this.mapUrl}" target="_blank">${this.appService.address}</a>`,
    },
    // {
    //   icon: '\uE907',
    //   label: 'Write Us',
    //   data: '<a href="mailto:dentalvisiontanda@gmail.com">dentalvisiontanda@gmail.com</a>',
    // },
  ];

  openCalendly = this.appService.openCalendly;

  /**
   * constructor
   */
  constructor() {}

  navigateToMap() {
    window.open(String(this.mapUrl), '_blank');
  }
}
