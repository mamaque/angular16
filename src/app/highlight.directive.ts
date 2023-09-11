import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {

  @Input() appHighlight = '';
  @Input() secondaryColor = '';

  constructor(private el : ElementRef) {
   // this.el.nativeElement.style.backgroundColor = 'yellow';
  
  }

  ngOnInit(): void {
   // this.el.nativeElement.style.backgroundColor = this.appHighlight;
  }

  @HostListener('mouseenter') onMouseEnter() {
     //this.highlight('yellow');
     //this.highlight(this.appHighlight);
     //this.highlight(this.appHighlight || this.defaultColor;
     this.highlight(this.appHighlight || this.secondaryColor  || 'violet');
  }

  @HostListener('mouseleave') onMouseLeave() {
    //this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
