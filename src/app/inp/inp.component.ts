import { Component } from '@angular/core';

@Component({
  selector: 'app-inp',
  templateUrl: './inp.component.html',
  styleUrls: ['./inp.component.css']
})
export class InpComponent  {

  values='';
  key(event: any)
  {
     this.values += (<HTMLInputElement>event.target) .value + ' | ';
  }
}
