import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';
import { SingerService } from 'src/app/services/singer.service';
import { HotTag, SongSheet, Singer, Banner } from 'src/app/services/data-types/common.types';
import { Observable, forkJoin } from 'rxjs';
import { first } from 'rxjs/internal/operators';

type HomeDataType= [Banner[], HotTag[], SongSheet[], Singer[]];

@Injectable()
export class HomeResolverService implements Resolve<HomeDataType> {
  constructor(private homeService: HomeService,
              private singerService: SingerService) {}
  resolve(): Observable<HomeDataType> {
      return forkJoin([
          this.homeService.getBanners(),
          this.homeService.getHotTags(),
          this.homeService.getPersonalSheetList(),
          this.singerService.getEnterSinger()
      ]).pipe(first());
  }
}