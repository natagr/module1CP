import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { MyformComponent } from '../myform/myform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResultinterfaceComponent } from '../resultinterface/resultinterface.component';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [HomePage, MyformComponent, ResultinterfaceComponent]
})
export class HomePageModule {}
