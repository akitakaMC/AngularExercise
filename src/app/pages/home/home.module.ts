import { NgModule } from '@angular/core';
import { ShareModule } from '../../share/share.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { WyCarouselComponent } from './components/wy-carousel/wy-carousel.component';
import { MemberCardComponent } from './components/member-card/member-card.component';


@NgModule({
  declarations: [HomeComponent, WyCarouselComponent, MemberCardComponent],
  imports: [
    CommonModule,
    ShareModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
