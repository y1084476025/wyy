import { ChangeDetectionStrategy, Component, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wy-carousel',
  templateUrl: './wy-carousel.component.html',
  styleUrls: ['./wy-carousel.component.less'],
  // 变更检测策略 默认是全部检测 onpush策略 指挥在@input发生改变才会触发变更检测
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class WyCarouselComponent implements OnInit {
  @Input() activeIndex = 0;

  @Output() changeSlide = new EventEmitter();

  @ViewChild('dot',{static:true})
  dotRef:TemplateRef<any>
  constructor() { }

  ngOnInit() {
  }
  onChangeSlide(type:string){
    this.changeSlide.emit(type)
  }
}
