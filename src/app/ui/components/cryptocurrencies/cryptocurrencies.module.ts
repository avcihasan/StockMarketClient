import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListCryptocurrenciesComponent } from './list-cryptocurrencies/list-cryptocurrencies.component';
import { CryptocurrencyDetailsComponent } from './cryptocurrency-details/cryptocurrency-details.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    ListCryptocurrenciesComponent,
    CryptocurrencyDetailsComponent
  ],
  imports: [  
    CommonModule,
    NgApexchartsModule,
    MatIconModule,
    RouterModule.forChild([
      {path:"",component:ListCryptocurrenciesComponent},
      {path:"details/:id",component:CryptocurrencyDetailsComponent}
    ]),

  ]
})
export class CryptocurrenciesModule { }
