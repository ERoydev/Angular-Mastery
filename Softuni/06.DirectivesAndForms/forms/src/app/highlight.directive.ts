import { Directive, ElementRef, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';

type MyVoid = () => void;

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit, OnDestroy{
  // @HostListener('mouseover', ['$event']) mouseOverHandler(e: MouseEvent) {
  //   console.log('mouseover', e)
  // }
  unsubFromEventsArray: MyVoid[] = [];

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // console.log(this.elRef.nativeElement)

    // ! Bad Practice
    // this.elRef.nativeElement.style.background = 'orange'

    // Good Practice 
    // this.renderer.setStyle(this.elRef.nativeElement, 'background', 'purple'); 

    const mouseEnterEvent = this.renderer.listen(this.elRef.nativeElement, 'mouseenter', this.mouseEnterHandler.bind(this))
    const mouseLeaveEvent = this.renderer.listen(this.elRef.nativeElement, 'mouseleave', this.mouseLeaveHandler.bind(this))
  }

  
  mouseLeaveHandler(e: MouseEvent): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background', 'white'); 
    this.renderer.removeClass(this.elRef.nativeElement, 'highlight')
  }
  
  mouseEnterHandler(e: MouseEvent): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background', 'orange'); 
    this.renderer.addClass(this.elRef.nativeElement, 'highlight')
  }
  
  ngOnDestroy(): void {
    console.log('On Destroy invoked!')
  }
}
