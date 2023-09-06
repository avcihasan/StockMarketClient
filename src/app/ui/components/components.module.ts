import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptocurrenciesModule } from './cryptocurrencies/cryptocurrencies.module';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CryptocurrenciesModule,
    HomeModule,
    AuthModule
  ]
})
export class ComponentsModule { }
