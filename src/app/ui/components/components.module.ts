import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptocurrenciesModule } from './cryptocurrencies/cryptocurrencies.module';
import { HomeModule } from './home/home.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CryptocurrenciesModule,
    HomeModule
  ]
})
export class ComponentsModule { }
