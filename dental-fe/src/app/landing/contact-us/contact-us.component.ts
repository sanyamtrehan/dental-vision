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

  contactInfo = [
    {
      icon: '\uE909',
      label: '24/7 Emergency',
      data: '<a href="tel:+919418794157">+91 94187-94157</a>',
    },
    {
      icon: '\uE902',
      label: 'Address',
      data: this.appService.address,
    },
    // {
    //   icon: '\uE907',
    //   label: 'Write Us',
    //   data: '<a href="mailto:dentalvisiontanda@gmail.com">dentalvisiontanda@gmail.com</a>',
    // },
  ];

  /**
   * constructor
   */
  constructor() {}
}
