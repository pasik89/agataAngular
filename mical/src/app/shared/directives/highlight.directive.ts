import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  // @HostBinding('style.color') color: string;

  @HostListener('mouseenter') onMouseEnter() {
    // console.log(this.elementRef);
    this.renderer2.addClass(this.elementRef.nativeElement, 'color')
    // this.color = 'green'
    // console.log(this.color)
    // this.elementRef.nativeElement.style.color = "red";
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer2.removeClass(this.elementRef.nativeElement, 'color')
  }
}
