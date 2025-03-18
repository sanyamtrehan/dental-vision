import { Component, inject } from '@angular/core';

import { AppService } from '../../app.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  openCalendly = inject(AppService).openCalendly;
}
