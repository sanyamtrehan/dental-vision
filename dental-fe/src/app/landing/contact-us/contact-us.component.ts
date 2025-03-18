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
      icon: '',
      label: 'Call us at',
      data: '<a href="tel:+919418794157">+91 94187-94157</a>',
    },
    {
      icon: '',
      label: 'Address',
      data: this.appService.address,
    },
    // {
    //   icon: '',
    //   label: 'Write Us',
    //   data: 'office@dentalvision.com\n24hr@dentalvision.com',
    // },
  ];

  /**
   * constructor
   */
  constructor() {}
}
