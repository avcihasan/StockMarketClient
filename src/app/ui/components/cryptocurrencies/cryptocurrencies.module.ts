import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptocurrenciesComponent } from './cryptocurrencies.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CryptocurrenciesComponent
  ],
  imports: [  
    CommonModule,
    RouterModule.forChild([
      {path:"",component:CryptocurrenciesComponent}
    ])
  ]
})
export class CryptocurrenciesModule { }
