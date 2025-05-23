import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";

import { TranslatePipe, TranslateService } from "@ngx-translate/core";

import { AppService } from "../../app.service";

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  host: {
    class: "max-w-primary section-padding flex flex-col md:flex-row gap-10",
  },
  imports: [CommonModule, TranslatePipe],
})
export class ContactUsComponent implements OnInit {
  private appService = inject(AppService);
  mapUrl = "https://maps.app.goo.gl/rikrT14dePHRaHxC9";

  contactInfo = [
    {
      icon: "\uE909",
      label: "emergencyNumber",
      data: '<a href="tel:+919418794157">+91 94187-94157</a>',
    },
    {
      icon: "\uE902",
      label: "address",
      data: `<a href="${this.mapUrl}" target="_blank">${this.appService.address}</a>`,
    },
    {
      icon: "\uE907",
      label: "writeUs",
      data: '<a href="mailto:dentalvisiontanda@gmail.com">dentalvisiontanda@gmail.com</a>',
    },
  ];

  openCalendly = this.appService.openCalendly;

  constructor(private readonly translate: TranslateService) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Life Cycle Hooks
  // -----------------------------------------------------------------------------------------------------

  ngOnInit() {
    this.translate.onLangChange.subscribe(this.updateAddressTranslation);
    this.updateAddressTranslation();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  navigateToMap() {
    window.open(String(this.mapUrl), "_blank");
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------

  updateAddressTranslation = () => {
    const translatedAddress = this.translate.instant(
      `nav.${this.appService.address}`
    );
    this.contactInfo[1].data = `<a href="${this.mapUrl}" target="_blank">${translatedAddress}</a>`;
  };
}
