import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { TranslateService } from "@ngx-translate/core";

import {
  translationsEN,
  translationsBO,
  translationsPA,
} from "../../public/118n";
import { FooterComponent } from "./footer";
import { NavComponent } from "./nav/nav.component";
import { SupportedLangs } from "./models/language";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, NavComponent, FooterComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(Object.values(SupportedLangs));
    this.translate.setDefaultLang(SupportedLangs.ENGLISH);
    translate.setTranslation(SupportedLangs.ENGLISH, translationsEN);
    translate.setTranslation(SupportedLangs.TIBETAN, translationsBO);
    translate.setTranslation(SupportedLangs.PUNJABI, translationsPA);
    this.translate.use(SupportedLangs.ENGLISH);
  }
}
