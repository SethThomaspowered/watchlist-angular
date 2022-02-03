import { Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appRandomColor]'
})
export class RandomColorDirective implements OnInit {
  constructor(private element: ElementRef) { }

  ngOnInit(){
    this.element.nativeElement.style.backgroundColor = this.getRandomColor();
  }

  getRandomColor(){
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }
}
