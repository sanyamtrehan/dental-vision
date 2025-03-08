import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  host: { class: 'max-w-primary section-padding flex gap-10' },
  imports: [CommonModule],
})
export class ContactUsComponent {
  contactInfo = [
    { icon: '', label: '24/7 Emergency', data: '94187-94157\n08192-292929' },
    {
      icon: '',
      label: 'Address',
      data: 'G-4, Shri Krishna Complex,\nNew Tanda Medical College Gate, Tanda',
    },
    {
      icon: '',
      label: 'Write Us',
      data: 'office@dentalvision.com\n24hr@dentalvision.com',
    },
  ];

  /**
   * constructor
   */
  constructor() {}
}
