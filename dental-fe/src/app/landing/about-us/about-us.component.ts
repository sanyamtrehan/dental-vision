import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { TranslatePipe } from "@ngx-translate/core";

import { AppService } from "../../app.service";

@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  imports: [CommonModule, TranslatePipe],
  styleUrl: "./about-us.component.scss",
  host: {
    class:
      "max-w-primary section-padding flex w-full gap-6 flex-col md:flex-row",
  },
})
export class AboutUsComponent {
  private appService = inject(AppService);
  contactInfo = [
    {
      icon: "\uE902",
      label: "education",
      data: "educationInfo",
    },
    {
      icon: "\uE91E",
      label: "workExperiences",
      data: "workExperiencesInfo",
    },
    {
      icon: "\uE907",
      label: "callUs",
      data: "callUsInfo",
    },
  ];
}
