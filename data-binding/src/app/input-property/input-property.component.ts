import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.scss']//,
  //inputs: ['nomeCurso: nome']

})

export class InputPropertyComponent {

  @Input('nome') nomeCurso: string = '';
}
