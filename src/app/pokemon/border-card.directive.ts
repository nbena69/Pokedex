import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]',
  standalone: true
})


export class BorderCardDirective {

  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';
  private defaultHeight: number = 180;


  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
  }

  //déclaration borderColor pour
  @Input('pkmnBorderCard') borderColor: string;
  //changement couleur bordure quand curseur sur la carte
  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  //renitialisation lorsque curseur sort de la carte.
  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.initialColor);
  }

  //définir hauteur des cartes
  setHeight(height: number){
    this.el.nativeElement.style.height = `${height}px`;
  }

  //définir taille bordure et couleur bordure des cartes
  setBorder(color: string){
    this.el.nativeElement.style.border = `4px solid ${color}`;
  }
}
