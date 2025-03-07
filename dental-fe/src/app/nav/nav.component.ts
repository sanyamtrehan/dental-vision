import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPhone, faLocation } from '@fortawesome/free-solid-svg-icons';

import { LogoComponent } from '../logo';
import { AppService } from '../app.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  imports: [FontAwesomeModule, CommonModule, LogoComponent],
  host: {
    class: 'max-w-primary w-full z-50',
  },
})
export class NavComponent {
  faPhone = faPhone;

  phoneNumber;
  bannerData;

  constructor(private readonly appService: AppService) {
    const no = appService.phoneNumber.toString();
    this.phoneNumber = {
      display: no.substring(0, 5) + '-' + no.substring(5, no.length),
      call: `+91${no}`,
    };
    this.bannerData = this.getBannerData();
  }

  private getBannerData() {
    return [
      {
        icon: faClock,
        label: 'Monday to Saturday',
        data: '8AM - 9PM',
      },
      {
        icon: faLocation,
        label: 'Address',
        data: this.appService.address,
      },
    ];
  }
}
