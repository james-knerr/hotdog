import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainPageComponent } from './main-page.component/main-page.component';
import { MenuComponent } from './menu.component/menu.component';
import { CateringComponent } from './catering.component/catering.component';
import { AboutUsComponent } from './about-us.component/about-us.component';
import { ContactComponent } from './contact.component/contact.component';

import { MainRoutingModule } from './main-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MainRoutingModule
  ],
  declarations: [
    MainPageComponent,
    MenuComponent,
    CateringComponent,
    AboutUsComponent,
    ContactComponent
  ]
})
export class MainModule { }
