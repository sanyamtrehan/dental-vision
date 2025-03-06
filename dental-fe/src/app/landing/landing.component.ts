import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  imports: [HeroComponent],
})
export class LandingComponent {}
