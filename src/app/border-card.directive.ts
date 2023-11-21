import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[nbBorderCard]',
  standalone: true
})
export class BorderCardDirective {

  constructor(private el: ElementRef) {
    this.setHeight(180);
    this.setBorder('#f5f5f5');
  }


  setHeight(height: number){

    this.el.nativeElement.style.height = `${height}px`;
  }

  setBorder(color: string){
    this.el.nativeElement.style.border = `solid 4x ${color}`;
  }
}
