import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>My Registration Application</h1>
      <app-registration></app-registration>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'registration-app';
}