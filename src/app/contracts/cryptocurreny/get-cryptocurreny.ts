export class GetCryptocurreny{
    id:string;
    name:string;
    unitPrice:number;
    stock:number;
    categoryName:string;
    createdDate:Date;
    updatedDate:Date;
    cryptocurrencyPrices:CryptocurrencyPrice[];
    
}

export class ResponseDto<T>{
    data:T;
    
}


export class CryptocurrencyPrice{
    date:Date;
    price:number;
}
