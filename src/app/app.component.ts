import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Data Binding';
  component = "Angular Architecture";
  count:number=0;
 name:string='';

  gettitle() : string{

    return this.component;
  }

  buttonClicked(): void{

    this.count=this.count+1;
    console.log("Button Clicked")

  }
}
