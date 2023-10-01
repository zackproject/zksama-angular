import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


// Aixo son les props del projecte, es poden cridar en el 'html'
export class AppComponent {
  title = 'zksama-app';

  changeTitle() {
    this.title = "canviat";
  }
}
