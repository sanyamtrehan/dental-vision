import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LogoComponent } from '../logo';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  host: { class: 'bg-primary' },
  imports: [LogoComponent, FontAwesomeModule, CommonModule],
})
export class FooterComponent {
  faPhone = faPhone;

  navLinks = [
    { link: 'Our Services', sectionId: 'landing-services' },
    { link: 'About Us', sectionId: 'landing-about-us' },
    { link: 'Testimonials', sectionId: 'landing-testimonials' },
    { link: 'Kids Care', sectionId: 'landing-kids-care' },
    { link: 'Contact Us', sectionId: 'landing-contact-us' },
  ];

  workingTimings = [
    { day: 'Monday', timing: '8AM - 9PM' },
    { day: 'Tuesday', timing: '8AM - 9PM' },
    { day: 'Wednesday', timing: '8AM - 9PM' },
    { day: 'Thursday', timing: '8AM - 9PM' },
    { day: 'Friday', timing: '8AM - 9PM' },
    { day: 'Saturday', timing: '8AM - 9PM' },
    { day: 'Sunday', timing: 'Closed' },
  ];

  /**
   * constructor
   */
  constructor() {}
}
