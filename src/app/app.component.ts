import { Component } from '@angular/core';
import { viewsDetail } from './child/child.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  statusCode:viewsDetail = new viewsDetail('',0)

  handleFather(event:viewsDetail){
    this.statusCode = event
  }
}
