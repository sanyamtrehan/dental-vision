import { interval } from 'rxjs';
import { Component, inject, OnInit } from '@angular/core';

import { AppService } from '../../app.service';
import { HeroData, SupportedLangs } from './hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit {
  openCalendly = inject(AppService).openCalendly;

  langMap: Record<SupportedLangs, HeroData> = {
    [SupportedLangs.ENGLISH]: {
      heading: 'Dental Vision',
      subheading: 'A Reason To Smile',
      description:
        'Where world-class dentistry meets Himalayan serenity. Experience expert, personalized care in a calming environment, ensuring a radiant, healthy smile. Book your appointment today!',
      primaryBtn: 'View Our Services',
      secondaryBtn: 'Book a meeting',
    },
    [SupportedLangs.TIBETAN]: {
      heading: 'དུག་སློག་མཐོང་ལས།',
      subheading: 'ཁྱོད་ཀྱི་ངག་དབང་ཡོན་ཏན་ལ་རྒྱབ་སྐྱོར།',
      description:
        'འཛམ་གླིང་གི་དུག་སློག་རིག་པ་དང་ཧི་མ་ལ་ཡའི་ཞི་བ་མཉམ་འབྲེལ། མཁས་པའི་སྒྲིག་སྟངས་དང་སྒེར་གྱི་དྲག་ཤུགས་བཅས་ཀྱི་ཞབས་ཞུ་ནང་ཞི་ཞིང་གི་འཁོར་ཡུག་ལུགས་ལས་ངོ་མཚར་དང་བདེ་སྐྱིད་ཅན་གྱི་ཞལ་ལྗགས་ཞིག་འཐོན་སྐྱེལ་གནང་། ད་ལྟོ་ཁྱེད་རང་གི་མཇལ་འཕྲད་དུ་ཐུག་རོགས།',
      primaryBtn: 'ང་ཚོའི་ཞབས་ཞུ་ལྟ་སྐོར།',
      secondaryBtn: 'མཇལ་འཕྲད་དུ་ཐུག་པ།',
    },
  };

  dataToUse: HeroData = this.langMap[SupportedLangs.ENGLISH];

  readonly INTERVAL = 5e3;

  // -----------------------------------------------------------------------------------------------------
  // @ Life Cycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On component initialization, start the language change interval.
   */
  ngOnInit() {
    this.langChangeInterval();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------

  private langChangeInterval() {
    let langToUse: SupportedLangs;
    interval(this.INTERVAL).subscribe((index) => {
      langToUse =
        index % 2 == 0 ? SupportedLangs.TIBETAN : SupportedLangs.ENGLISH;
      this.dataToUse = this.langMap[langToUse];
    });
  }
}
