import { AfterContentChecked, AfterContentInit, AfterViewChecked, 
  AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from "@angular/core";

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.scss']
})
export class CicloComponent implements OnChanges, OnInit, 
  DoCheck, AfterContentInit, AfterContentChecked, 
  AfterViewInit, AfterViewChecked, OnDestroy  {

    @Input() valorInicial: number = 10;  

  constructor(){ 
    console.log('constructor');
  }

  ngOnChanges() {
    console.log('onChanges');
  }

  ngOnInit() {
    console.log('onInit');  
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }



  private log (hook: string) {
    console.log(hook);
  }

}
