import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
  imports: [CommonModule],
})
export class TestimonialsComponent {
  testimonials = [
    {
      img: 'client-01',
      title: 'One great experience.',
      desc: 'Holistically generate open-source applications through bleeding-edge sources supply just in time.',
    },
    {
      img: 'client-02',
      title: 'I look & feel great!',
      desc: 'Objectively integrate enterprise-wide strategic theme areas with functionalized infrastructures.',
    },
    {
      img: 'client-03',
      title: 'Nothing but the tooth!',
      desc: 'Efficiently enable enabled sources and cost effective produc synthesize principle-centered information.',
    },
  ];

  /**
   * constructor
   */
  constructor() {}
}
