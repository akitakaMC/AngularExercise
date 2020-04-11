import { Component, OnInit, TemplateRef, ViewChild, Input, Output, EventEmitter, ChangeDetectionStrategy  } from '@angular/core';

@Component({
  selector: 'app-wy-carousel',
  templateUrl: './wy-carousel.component.html',
  styleUrls: ['./wy-carousel.component.less'],
  // onPush只会在input发生变化时才会发生变更检测 用于比较简单的组件
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WyCarouselComponent implements OnInit {
  @Input() activeIndex = 0;
  @Output() changeSlide = new EventEmitter<'pre'| 'next'>();
  @ViewChild('dot', {static: true}) dotRef: TemplateRef<any>;
  constructor() { }

  ngOnInit(): void {
  }
  onChangeSlide(type: 'pre'| 'next')
  {
    this.changeSlide.emit(type);
  }
}
