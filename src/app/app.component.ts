import { Component } from '@angular/core';
import {Hero} from "./hero";
import {ClickComponent} from "./click/click.component";
import {InpComponent } from "./inp/inp.component";
import {EnterComponent} from "./enter/enter.component";
import {AddComponent} from "./add/add.component"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  entryComponents: [ClickComponent,InpComponent,EnterComponent,AddComponent]

})
export class AppComponent {
  text=' ';
  title ='Tour of Heros';
  heroes=[new Hero(1,'Arash'),new Hero(12,'lightening'),new Hero(5,'magneta'),new Hero(17,'tornado'),new Hero(14,'windstorm')];
}
