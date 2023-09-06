import { Injectable } from '@angular/core';
import { HttpclientService } from '../httpclient.service';
import {
  GetCryptocurreny,
  ResponseDto,
} from 'src/app/contracts/cryptocurreny/get-cryptocurreny';
import { Observable, lastValueFrom } from 'rxjs';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CryptocurrencyService {
  constructor(private http: HttpclientService) {}

  async get(
    succesCallBack?: () => void,
    errorCallBack?: (errorMessage: string) => void
  ): Promise<ResponseDto<GetCryptocurreny[]>> {
    const data: Observable<ResponseDto<GetCryptocurreny[]>> = this.http.get<ResponseDto<GetCryptocurreny[]>>({
      controller: 'cryptocurrencies',
    });
    const data2: ResponseDto<GetCryptocurreny[]> = await lastValueFrom(data);
    // await lastValueFrom(data)
    //   .then((d) => succesCallBack())
    //   .catch((err: HttpErrorResponse) => errorCallBack(err.message));

    return data2;
  }

  async getById(
    id: number,
    succesCallBack?: () => void,
    errorCallBack?: (errorMessage: string) => void
  ): Promise<ResponseDto<GetCryptocurreny>> {
    const data: Observable<ResponseDto<GetCryptocurreny>> = this.http.get<ResponseDto<GetCryptocurreny>>(
      {
        controller: 'cryptocurrencies',
      },
      id
    );
    const data2: ResponseDto<GetCryptocurreny> = await lastValueFrom(data);
    // await lastValueFrom(data)
    //   .then((d) => succesCallBack())
    //   .catch((err: HttpErrorResponse) => errorCallBack(err.message));

    return data2;
  }
}
