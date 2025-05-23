import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormControl, ReactiveFormsModule } from "@angular/forms";

import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { TranslatePipe, TranslateService } from "@ngx-translate/core";
import { faPhone, faLocation } from "@fortawesome/free-solid-svg-icons";

import { LogoComponent } from "../logo";
import { AppService } from "../app.service";
import { SupportedLangs } from "../models/language";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  imports: [
    FontAwesomeModule,
    CommonModule,
    LogoComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    TranslatePipe,
  ],
  host: {
    class: "max-w-primary w-full z-50",
  },
})
export class NavComponent implements OnInit {
  faPhone = faPhone;

  phoneNumber;
  bannerData;

  supportedLangs = Object.values(SupportedLangs);

  langCtrl = new FormControl(SupportedLangs.ENGLISH);

  constructor(
    private readonly appService: AppService,
    private readonly translate: TranslateService
  ) {
    const no = appService.phoneNumber.toString();
    this.phoneNumber = {
      display: `+91 ${no.substring(0, 5)}-${no.substring(5, no.length)}`,
      call: `+91${no}`,
    };
    this.bannerData = this.getBannerData();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Life Cycle Hooks
  // -----------------------------------------------------------------------------------------------------

  ngOnInit() {
    this.langCtrl.valueChanges.subscribe((lang) => {
      console.log(lang);
      lang && this.translate.use(lang);
    });
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------

  private getBannerData() {
    return [
      {
        icon: faClock,
        label: "monToSun",
        data: "9AmTo8Pm",
      },
      {
        icon: faLocation,
        label: "address",
        data: this.appService.address,
      },
    ];
  }
}
