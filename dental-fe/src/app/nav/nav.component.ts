import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPhone, faLocation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  imports: [FontAwesomeModule, CommonModule],
  host: {
    class: 'max-w-primary w-full z-50',
  },
})
export class NavComponent {
  faPhone = faPhone;

  bannerData = [
    {
      icon: faClock,
      label: 'Monday to Saturday',
      data: '8AM - 9PM',
    },
    {
      icon: faLocation,
      label: 'Address',
      data: '500 Linden Ave, South San Francisco, CA',
    },
  ];
}
