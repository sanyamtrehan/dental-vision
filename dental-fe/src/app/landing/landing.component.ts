import { Component } from '@angular/core';

import { HeroComponent } from './hero';
import { AboutUsComponent } from './about-us';
import { ServicesComponent } from './services';
import { KidsCareComponent } from './kids-care';
import { ContactUsComponent } from './contact-us';
import { OurClinicComponent } from './our-clinic';
import { TestimonialsComponent } from './testimonials';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  imports: [
    HeroComponent,
    AboutUsComponent,
    ServicesComponent,
    KidsCareComponent,
    ContactUsComponent,
    OurClinicComponent,
    TestimonialsComponent,
  ],
  host: { class: 'h-full flex flex-col' },
})
export class LandingComponent {}
