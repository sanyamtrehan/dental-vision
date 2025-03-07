import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  host: { class: 'flex items-center h-[100px] gap-2' },
})
export class LogoComponent {
  /**
   * constructor
   */
  constructor() {}
}
