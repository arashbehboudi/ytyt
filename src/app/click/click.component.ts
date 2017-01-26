import { Component } from '@angular/core';

@Component({
  selector: 'app-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.css']

})
export class ClickComponent  {
clicktext='';
  myclick()
  {
    this.clicktext='uhahahahahaha';
  }

}
