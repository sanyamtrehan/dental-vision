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

  awards = [
    'BCLS certified',
    'CCLS certified',
    'Hospital management certificate',
  ];

  private getTiming = (from: number, to: number) => `${from}AM - ${to}PM`;

  workingTimings = [
    { day: 'Monday', timing: this.getTiming(9, 8) },
    { day: 'Tuesday', timing: this.getTiming(9, 8) },
    { day: 'Wednesday', timing: this.getTiming(9, 8) },
    { day: 'Thursday', timing: this.getTiming(9, 8) },
    { day: 'Friday', timing: this.getTiming(9, 8) },
    { day: 'Saturday', timing: this.getTiming(9, 8) },
    { day: 'Sunday', timing: 'On Appointment' },
  ];
}
