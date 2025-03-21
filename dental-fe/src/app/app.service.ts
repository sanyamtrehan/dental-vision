import { Injectable } from '@angular/core';

declare global {
  interface Window {
    Calendly: any;
  }
}

@Injectable({ providedIn: 'root' })
export class AppService {
  phoneNumber = 9418794157;
  address =
    'G-4, Shri Krishna Complex, Near Tanda Medical College Gate, Tanda, Distt Kangra, pin: 176002, Himachal Pradesh, India';

  openCalendly() {
    const calendly = window.Calendly;
    if (!calendly) {
      alert('There is an issue with setting up of meeting');
    }

    const url =
      'https://calendly.com/dentalvisiontanda/dental-vision?background_color=ffffff&text_color=2f2f2f&primary_color=f70f8a';
    calendly.initPopupWidget({ url });
  }
}
