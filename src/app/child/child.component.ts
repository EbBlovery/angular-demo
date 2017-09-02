import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  stockCode:string = 'IMB';
  price:number;

  @Output()
  priceLast:EventEmitter<viewsDetail> = new EventEmitter();

  constructor() {
    setInterval(()=>{
      let priceQuote:viewsDetail = new viewsDetail(this.stockCode,Math.random()*100);
      this.price = priceQuote.priceLast;
      this.priceLast.emit(priceQuote);
    },1000)

  }

  ngOnInit() {
  }
}

export class viewsDetail {
  constructor(
    public stockCode:string,
    public priceLast:number
  ){}
}
