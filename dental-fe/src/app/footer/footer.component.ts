import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TranslatePipe } from "@ngx-translate/core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { LogoComponent } from "../logo";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  host: { class: "bg-primary" },
  imports: [LogoComponent, FontAwesomeModule, CommonModule, TranslatePipe],
})
export class FooterComponent {
  faPhone = faPhone;

  navLinks = [
    { link: "ourServices", sectionId: "landing-services" },
    { link: "aboutUs", sectionId: "landing-about-us" },
    { link: "testimonials", sectionId: "landing-testimonials" },
    { link: "kidsCare", sectionId: "landing-kids-care" },
    { link: "contactUs", sectionId: "landing-contact-us" },
  ];

  awards = ["bclsCertified", "cclsCertified", "hospitalManagementCertificate"];

  private getTiming = (from: number, to: number) => `${from}AmTo${to}Pm`;

  workingTimings = [
    { day: "monday", timing: this.getTiming(9, 8) },
    { day: "tuesday", timing: this.getTiming(9, 8) },
    { day: "wednesday", timing: this.getTiming(9, 8) },
    { day: "thursday", timing: this.getTiming(9, 8) },
    { day: "friday", timing: this.getTiming(9, 8) },
    { day: "saturday", timing: this.getTiming(9, 8) },
    { day: "sunday", timing: "onAppointment" },
  ];
}
