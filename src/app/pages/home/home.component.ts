import { Component, OnInit, ViewChild } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd';
import { Banner } from 'src/app/services/data-type/common.types';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  carouselActiveIndex = 0
  banners:Banner[]
  @ViewChild(NzCarouselComponent,{static:true} ) private nzCarousel:NzCarouselComponent
  constructor(private homeServe:HomeService) { 
    this.homeServe.getBanners().subscribe(banners=>{
      this.banners=banners
      console.log(banners)
    })
  }

  ngOnInit() {
  }
  onBeforeChange({to}){
    this.carouselActiveIndex=to
    
  }
  onChangeslide(type:string){
    console.log(type)
    this.nzCarousel[type]()
  }
}
