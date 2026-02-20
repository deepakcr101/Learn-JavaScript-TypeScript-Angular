import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
  standalone: true,
})
export class HoverHighlight {

  
constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = 'red';
  }


}
