import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]',
  standalone: true
})
export class BorderCardDirective {

  constructor(private el: ElementRef) {
    this.setHeight(180);
    this.setBorder('#f5f5f5');
  }

  //changement couleur bordure quand curseur sur la carte
  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder('#009688');
  }

  //renitialisation lorsque curseur sort de la carte.
  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder('#f5f5f5');
  }

  //définir hauteur des cartes
  setHeight(height: number){
    this.el.nativeElement.style.height = `${height}px`;
  }

  //définir taille bordure et couleur bordure des cartes
  setBorder(color: string){
    this.el.nativeElement.style.border = `solid 4x ${color}`;
  }
}
