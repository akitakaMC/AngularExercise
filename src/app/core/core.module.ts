import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareModule } from '../share/share.module';
import { PagesModule } from '../pages/pages.module';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import {  NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { ServicesModule } from '../services/services.module';

registerLocaleData(zh);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ServicesModule,
    PagesModule,
    ShareModule,
    AppRoutingModule
  ],
  exports: [
    ShareModule,
    AppRoutingModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
})
export class CoreModule {
  // 跳过自身 避免无限自我调用
  // optional 当没找到该模块时 返回null
  constructor(@SkipSelf() @Optional() parentModule: CoreModule)
  {
    if (parentModule)
    {
      throw new Error('CoreModule 只能被AppModule引入');
    }
  }
 }
