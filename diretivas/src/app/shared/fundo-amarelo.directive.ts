import { Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: 'p[appFundoAmarelo]' //É possível por para qual tag ou compenete deseja que isso seja aplicado. 
                                //Ex: p[appFundoAmarelo] (Aqui mesmo no selector).
})
export class FundoAmareloDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2) { 
    //console.log(this._elementRef)
    //this._elementRef.nativeElement.style.backgroundColor = 'yellow';
    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow'
      );

  }

}
