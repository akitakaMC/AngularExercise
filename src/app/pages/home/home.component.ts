import { Component, OnInit, ViewChild } from '@angular/core';
import { Banner, HotTag, SongSheet, Singer } from 'src/app/services/data-types/common.types';
import {NzCarouselComponent } from 'ng-zorro-antd';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/internal/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  CarouselActiveIndex = 0;
  banners: Banner[];
  hotTags: HotTag[];
  songSheetList: SongSheet[];
  singers: Singer[];

  @ViewChild(NzCarouselComponent, {static: true}) private nzCarousel: NzCarouselComponent;
  constructor(private route: ActivatedRoute) {
    this.route.data.pipe(map(res => res.homeDatas)).subscribe( ([banners, hotTags, songSheetList, singers]) => {
      // console.log('res:', res);
      this.banners = banners;
      this.hotTags = hotTags;
      this.songSheetList = songSheetList;
      this.singers = singers;
    });
  }
/*
  private getBanners() {
    this.homeService.getBanners().subscribe(banners => {
      this.banners = banners;
    });
  }

  private getHotTags() {
    this.homeService.getHotTags().subscribe(tags => {
      this.hotTags = tags;
      // console.log('tags:', tags);
    });
  }
  private getPersonalizedSheetList() {
    this.homeService.getPersonalSheetList().subscribe(sheet => {
      this.songSheetList = sheet;
      // console.log('sheet', sheet);
    });
  }
  private getEnterSingers() {
    this.singerService.getEnterSinger().subscribe(singers => {
      this.singers = singers;
      // console.log('singers:', singers);
    });
  } */
  ngOnInit(): void {
  }
  OnBeforeChange({ to }){
    this.CarouselActiveIndex = to;
  }
  onChangeSlide(type: 'pre'| 'next')
  {
    this.nzCarousel[type]();
  }
}
