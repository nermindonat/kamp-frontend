import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "northwind";    //TypeScript te veri türü böyle verilir.
  user: string = "Nermin Donat"
  

}
