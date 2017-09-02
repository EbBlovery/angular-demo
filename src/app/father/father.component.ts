import { Component, OnInit } from '@angular/core';
import { viewsDetail } from '../child/child.component';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {
  priceStatus:viewsDetail = new viewsDetail('',0);
  constructor() { }

  ngOnInit() {
  }
  handleChange(event:viewsDetail){
     this.priceStatus = event;
  }
}
