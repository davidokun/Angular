import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor(private elRef: ElementRef , private renderer: Renderer2) { }

  @HostListener('click')
  toggleOpen(eventData: Event) {
    this.renderer.addClass(this.elRef.nativeElement, 'open');
  }

  @HostListener('mouseleave')
  toggleClose(evenData: Event) {
    this.renderer.removeClass(this.elRef.nativeElement, 'open');
  }
}
