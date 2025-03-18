import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  host: { class: 'flex items-center gap-2' },
})
export class LogoComponent {
  @Input() set fullLogo(val: '' | boolean) {
    this._fullLogo = val === '' || val;
  }
  get fullLogo() {
    return this._fullLogo;
  }
  private _fullLogo = false;

  /**
   * constructor
   */
  constructor() {}
}
