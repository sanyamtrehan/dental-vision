import { Component } from '@angular/core';

import { LogoComponent } from '../logo';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  host: { class: 'bg-primary' },
  imports: [LogoComponent],
})
export class FooterComponent {
  /**
   * constructor
   */
  constructor() {}
}
