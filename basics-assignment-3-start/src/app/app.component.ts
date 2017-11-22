import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
  `
  .greater {
    color: white;
  }
  `
]
})
export class AppComponent {
  showParagraph = true;
  counter = 1;
  result = [];
  displayHideParagraph() {
    this.showParagraph = this.showParagraph ? false: true;
    this.result.push(this.counter++);
    console.log(this.result);
  }
}
