import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  imports: [CommonModule],
  host: { class: 'max-w-primary section-padding flex w-full gap-6' },
})
export class AboutUsComponent {
  contactInfo = [
    { icon: '', label: 'Call Us', data: '94187-94157\n08192-292929' },
    {
      icon: '',
      label: 'Reach Us',
      data: 'G-4, Shri Krishna Complex,\nNew Tanda Medical College Gate, Tanda',
    },
    {
      icon: '',
      label: 'Email Us',
      data: 'office@dentalvision.com\n24hr@dentalvision.com',
    },
  ];

  /**
   * constructor
   */
  constructor() {}
}
