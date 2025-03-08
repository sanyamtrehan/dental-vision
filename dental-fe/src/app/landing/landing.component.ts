import { Component } from '@angular/core';

import { HeroComponent } from './hero';
import { ServicesComponent } from './services';
import { KidsCareComponent } from './kids-care';
import { ContactUsComponent } from './contact-us';
import { TestimonialsComponent } from './testimonials';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  imports: [
    HeroComponent,
    ServicesComponent,
    KidsCareComponent,
    ContactUsComponent,
    TestimonialsComponent,
  ],
  host: { class: 'h-full flex flex-col' },
})
export class LandingComponent {}
