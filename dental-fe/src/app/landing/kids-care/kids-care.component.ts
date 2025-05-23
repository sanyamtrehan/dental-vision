import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TranslatePipe } from "@ngx-translate/core";

@Component({
  selector: "app-kids-care",
  templateUrl: "./kids-care.component.html",
  imports: [CommonModule, TranslatePipe],
  host: {
    class:
      "section-padding max-w-primary flex flex-col md:flex-row items-center gap-10",
  },
})
export class KidsCareComponent {
  oralCares = [
    {
      icon: "\uE90A",
      label: "brushing",
      desc: "brushingInfo",
    },
    {
      icon: "\uE92C",
      label: "nutrition",
      desc: "nutritionInfo",
    },
    {
      icon: "\uE91B",
      label: "checkups",
      desc: "checkupsInfo",
    },
  ];

  /**
   * constructor
   */
  constructor() {}
}
