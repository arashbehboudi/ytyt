import { Component} from '@angular/core';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.css']
})
export class EnterComponent  {

  val='';
  inter(valu: string) {
      this.val=valu;
   }

}
