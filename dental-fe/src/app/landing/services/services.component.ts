import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  imports: [CommonModule],
  host: { class: 'section-padding max-w-primary flex flex-col gap-16' },
})
export class ServicesComponent {
  /**
   * constructor
   */
  constructor() {}

  services = [
    {
      img: '1-implants-and-aligners',
      name: 'Implants and aligners',
      desc: 'Restore missing teeth and straighten smiles with advanced solutions.',
    },
    {
      img: '2-braces',
      name: 'Braces',
      desc: 'Align teeth perfectly for a healthier and confident smile.',
    },
    {
      img: '3-veneers',
      name: 'Veneers',
      desc: 'Enhance your smile with natural-looking, durable dental veneers.',
    },
    {
      img: '4-cosmetic-dentistry',
      name: 'Cosmetic dentistry',
      desc: 'Transform your smile with advanced aesthetic dental treatments.',
    },
    {
      img: '5-bleaching',
      name: 'Bleaching',
      desc: 'Brighten your teeth with safe and effective whitening treatments.',
    },
    {
      img: '6-maxillary-fracture',
      name: 'Maxillary fracture',
      desc: 'Expert treatment for upper jaw fractures ensuring proper healing.',
    },
    {
      img: '7-mandibular-fracture',
      name: 'Mandibular fracture',
      desc: 'Precise care for lower jaw fractures with specialized treatment.',
    },
    {
      img: '8-crown-and-bridge',
      name: 'Crown and bridge',
      desc: 'Restore damaged teeth with durable crowns and bridges.',
    },
  ];

  otherServices = [
    'Digital Dental X-ray',
    'Painless Tooth Extraction',
    'Braces, Aligners',
    'Implants',
    'R.C.T., Crown and Bridges',
    'Dentures - R.P.D., C.D.',
    'Scaling, Dental Jewelry',
    'Dental Surgeries',
  ];
}
