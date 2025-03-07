import { Component } from '@angular/core';

import { HeroComponent } from './hero';
import { ServicesComponent } from './services';
import { KidsCareComponent } from './kids-care';
import { TestimonialsComponent } from './testimonials';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  imports: [
    HeroComponent,
    ServicesComponent,
    TestimonialsComponent,
    KidsCareComponent,
  ],
  host: { class: 'h-full flex flex-col' },
})
export class LandingComponent {}
