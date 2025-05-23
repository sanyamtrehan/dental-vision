import { provideRouter } from "@angular/router";
import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";

import { provideTranslateService } from "@ngx-translate/core";

import { routes } from "./app.routes";
import { SupportedLangs } from "./models/language";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideTranslateService({ defaultLanguage: SupportedLangs.ENGLISH }),
  ],
};
