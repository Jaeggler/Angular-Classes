import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: "[mi-directiva]"})

export class MiDirectiva{

  constructor (private el: ElementRef){

  }

  ngOnInit(){

    this.el.nativeElement.style.backgroundColor = this.colorPorDefecto
  }


  @Input("mi-directiva") colorPorDefecto: string = "brown" //la directiva puede tener alias. En este caso "mi directiva"
  @Input() colorHover: string = "blue"

//Similar al addEventListener
  @HostListener("mouseenter") mouseEntro() {
    // this.el.nativeElement.style.backgroundColor = "pink"
    this.el.nativeElement.style.backgroundColor = this.colorHover
  }

  @HostListener("mouseleave") mouseSalio() {
    // this.el.nativeElement.style.backgroundColor = "yellow"
    this.el.nativeElement.style.backgroundColor = this.colorPorDefecto
  }


}
