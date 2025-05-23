import { Component, inject } from "@angular/core";

import { TranslatePipe } from "@ngx-translate/core";

import { AppService } from "../../app.service";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  styleUrl: "./hero.component.scss",
  imports: [TranslatePipe],
})
export class HeroComponent {
  openCalendly = inject(AppService).openCalendly;
}
