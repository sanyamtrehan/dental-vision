import { interval, Subject, takeUntil } from "rxjs";
import { Component, inject, OnDestroy, OnInit } from "@angular/core";

import { AppService } from "../../app.service";
import { HeroData, SupportedLangs } from "./hero";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  styleUrl: "./hero.component.scss",
})
export class HeroComponent implements OnInit, OnDestroy {
  openCalendly = inject(AppService).openCalendly;

  langMap: Record<SupportedLangs, HeroData> = {
    [SupportedLangs.ENGLISH]: {
      heading: "Dental Vision",
      subheading: "A Reason To Smile",
      description:
        "Where world-class dentistry meets Himalayan serenity. Experience expert, personalized care in a calming environment, ensuring a radiant, healthy smile. Book your appointment today!",
      primaryBtn: "View Our Services",
      secondaryBtn: "Book a meeting",
    },
    [SupportedLangs.TIBETAN]: {
      heading: "དུག་སློག་མཐོང་ལས།",
      subheading: "ཁྱོད་ཀྱི་ངག་དབང་ཡོན་ཏན་ལ་རྒྱབ་སྐྱོར།",
      description:
        "འཛམ་གླིང་གི་དུག་སློག་རིག་པ་དང་ཧི་མ་ལ་ཡའི་ཞི་བ་མཉམ་འབྲེལ། མཁས་པའི་སྒྲིག་སྟངས་དང་སྒེར་གྱི་དྲག་ཤུགས་བཅས་ཀྱི་ཞབས་ཞུ་ནང་ཞི་ཞིང་གི་འཁོར་ཡུག་ལུགས་ལས་ངོ་མཚར་དང་བདེ་སྐྱིད་ཅན་གྱི་ཞལ་ལྗགས་ཞིག་འཐོན་སྐྱེལ་གནང་། ད་ལྟོ་ཁྱེད་རང་གི་མཇལ་འཕྲད་དུ་ཐུག་རོགས།",
      primaryBtn: "ང་ཚོའི་ཞབས་ཞུ་ལྟ་སྐོར།",
      secondaryBtn: "མཇལ་འཕྲད་དུ་ཐུག་པ།",
    },
    [SupportedLangs.PUNJABI]: {
      heading: "ਡੈਂਟਲ ਵਿਜ਼ਨ",
      subheading: "ਮੁਸਕੁਰਾਹਟ ਦਾ ਕਾਰਣ",
      description:
        "ਇੱਥੇ ਵਿਸ਼ਵ-ਪੱਧਰੀ ਦੰਦ ਚਿਕਿਤਸਾ ਹਿਮਾਲੀਅਨ ਸ਼ਾਂਤੀ ਨਾਲ ਮਿਲਦੀ ਹੈ। ਇੱਕ ਸ਼ਾਂਤ ਮਾਹੌਲ ਵਿੱਚ ਮਾਹਰ, ਨਿੱਜੀ ਸੇਵਾ ਦਾ ਅਨੁਭਵ ਕਰੋ, ਜੋ ਤੁਹਾਡੀ ਚਮਕਦਾਰ ਤੇ ਸਿਹਤਮੰਦ ਮੁਸਕਾਨ ਨੂੰ ਯਕੀਨੀ ਬਣਾਉਂਦੀ ਹੈ। ਅੱਜ ਹੀ ਆਪਣੀ ਅਪਾਇਂਟਮੈਂਟ ਬੁੱਕ ਕਰੋ!",
      primaryBtn: "ਸਾਡੀਆਂ ਸੇਵਾਵਾਂ ਵੇਖੋ",
      secondaryBtn: "ਮੀਟਿੰਗ ਬੁੱਕ ਕਰੋ",
    },
  };

  dataToUse: HeroData = this.langMap[SupportedLangs.ENGLISH];

  readonly INTERVAL = 5e3;

  compAlive$ = new Subject<void>();

  // -----------------------------------------------------------------------------------------------------
  // @ Life Cycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On component initialization, start the language change interval.
   */
  ngOnInit() {
    this.langChangeInterval();
  }

  /**
   * Lifecycle hook that is called when the component is about to be destroyed.
   * Signals to the language change interval to stop.
   */
  ngOnDestroy() {
    this.compAlive$.next();
    this.compAlive$.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Initializes an interval that changes the language of the hero component.
   * The interval ticks every {@link INTERVAL} milliseconds and changes the
   * language to the next one in the {@link languages} array.
   * The language switch is done by updating the {@link dataToUse} property.
   * The interval is stopped when the component is about to be destroyed.
   */
  private langChangeInterval() {
    const languages: SupportedLangs[] = [
      SupportedLangs.ENGLISH,
      SupportedLangs.TIBETAN,
      SupportedLangs.PUNJABI,
    ];

    interval(this.INTERVAL)
      .pipe(takeUntil(this.compAlive$))
      .subscribe((index) => {
        const langToUse = languages[index % languages.length];
        this.dataToUse = this.langMap[langToUse];
      });
  }
}
