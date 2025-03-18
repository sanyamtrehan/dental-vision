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
    'G-4, Shri Krishna Complex, Near Tanda Medical College Gate, Tanda, Distt Kangra, Himachal Pradesh, India';

  openCalendly() {
    const calendly = window.Calendly;
    if (!calendly) {
      alert('There is an issue with setting up of meeting');
    }

    calendly.initPopupWidget({
      url: 'https://calendly.com/sanyam-trehan/60min',
    });
  }
}
