import { Component } from '@angular/core';
import {Hero} from "../hero";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent  {
  v4=0;
  v1='';
  add1(v2: string,v3: number)
  {
    this.v1=v2;
  }
  addnum(v3: number)
  {
    this.v4=v3;
  }
  sethero(v5:string,v6:number){
     new Hero(v6,v5);

  }
}
