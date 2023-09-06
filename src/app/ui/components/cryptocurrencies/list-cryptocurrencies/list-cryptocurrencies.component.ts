import { Component, OnInit } from '@angular/core';
import { GetCryptocurreny } from 'src/app/contracts/cryptocurreny/get-cryptocurreny';
import { CryptocurrencyService } from 'src/app/services/common/models/cryptocurrency.service';

@Component({
  selector: 'app-list-cryptocurrencies',
  templateUrl: './list-cryptocurrencies.component.html',
  styleUrls: ['./list-cryptocurrencies.component.css']
})
export class ListCryptocurrenciesComponent implements OnInit {

  datas:GetCryptocurreny[];
  constructor(private service:CryptocurrencyService) {}
 async ngOnInit(): Promise<any> {
    await this.get();
  }
  async get(){
    this.datas=(await this.service.get()).data;
  }
}
