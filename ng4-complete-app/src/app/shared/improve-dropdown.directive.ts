import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appImproveDropdown]'
})
export class ImproveDropdownDirective {

  @HostBinding('class.open') isOpen = false;

  @HostListener('click')
  toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
