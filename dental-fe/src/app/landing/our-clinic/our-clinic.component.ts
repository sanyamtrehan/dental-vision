import { Component } from "@angular/core";

import { TranslatePipe } from "@ngx-translate/core";

@Component({
  selector: "app-our-clinic",
  templateUrl: "./our-clinic.component.html",
  host: { class: "relative primary-bg-img" },
  imports: [TranslatePipe],
})
export class OurClinicComponent {}
