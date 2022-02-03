import { Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appRandomColor]'
})
export class RandomColorDirective implements OnInit {
  colorList = [
    '#065535',
    '#ffc0cb',
    '#ff7373',
    '#ffb6c1',
    '#003366',
    '#f08080',
    '#ffc3a0',
    '#468499',
    '#f6546a',
    '#101010',
    '#81d8d0',
    '#000080',
    '#990000',
    '#088da5',
    '#6897bb'
  ]
  constructor(private element: ElementRef) { }

  ngOnInit(){
    this.element.nativeElement.style.backgroundColor = this.colorList[this.getRandomColor()];
  }

  getRandomColor(){
    return Math.floor(Math.random() * this.colorList.length);
  }
}
