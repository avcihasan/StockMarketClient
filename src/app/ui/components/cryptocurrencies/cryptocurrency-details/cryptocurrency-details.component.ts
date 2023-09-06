import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexGrid, ApexStroke, ApexXAxis, ChartComponent } from 'ng-apexcharts';
import { GetCryptocurreny } from 'src/app/contracts/cryptocurreny/get-cryptocurreny';
import { CryptocurrencyService } from 'src/app/services/common/models/cryptocurrency.service';


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
};


@Component({
  selector: 'app-cryptocurrency-details',
  templateUrl: './cryptocurrency-details.component.html',
  styleUrls: ['./cryptocurrency-details.component.css']
})
export class CryptocurrencyDetailsComponent {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

 constructor(private service:CryptocurrencyService,private activatedRoute: ActivatedRoute) {}
 contentParam: number;
   
   async ngOnInit() {
     this.activatedRoute.params.subscribe(p => {
       this.contentParam = p["id"];
     });
     await this.get(this.contentParam);
    };
  
 

  data:GetCryptocurreny;

  prices : number[]=[];
  dates:string[]=[];


  async get(id:number){
    this.data=(await this.service.getById(id)).data;
    this.data.cryptocurrencyPrices.forEach(x=>{
      this.prices.push(x.price)
      const dt = new Date(x.date)
      this.dates.push(dt.toLocaleTimeString())
    })
    this.setChart();
  }



  setChart(){
    this.chartOptions = {
      series: [
        {
          color: "blue",
          name: this.data.name,
          data: this.prices.slice(-20),
        }
      ],
      chart: {
        foreColor: "yellow",
        background: "transparent",
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: "straight" ,
        width: 2,
        dashArray:2,
      },
      grid: {
        borderColor: "white",
        position: "back",
        row: {
          colors: ["transparent"], 
          opacity: 0.5
        }
      },
      xaxis: {
        categories: this.dates.slice(-20)
      }
    };
  }

}
