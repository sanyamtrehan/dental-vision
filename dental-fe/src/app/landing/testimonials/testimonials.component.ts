import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";

import { TranslatePipe } from "@ngx-translate/core";

import { AppService } from "../../app.service";

@Component({
  selector: "app-testimonials",
  templateUrl: "./testimonials.component.html",
  styleUrl: "./testimonials.component.scss",
  imports: [CommonModule, TranslatePipe],
})
export class TestimonialsComponent {
  testimonials = [
    {
      img: "client-01",
      title: "reviewA",
      desc: "reviewAInfo",
    },
    {
      img: "client-02",
      title: "reviewB",
      desc: "reviewBInfo",
    },
    {
      img: "client-03",
      title: "reviewC",
      desc: "reviewCInfo",
    },
  ];

  openCalendly = inject(AppService).openCalendly;

  /**
   * constructor
   */
  constructor() {}
}
