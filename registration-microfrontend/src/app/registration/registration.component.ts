import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  registrationSuccess: boolean = false;

  onSubmit() {
    // In a real application, you would send registration data to a backend here.
    // For this example, we'll just simulate success.
    this.registrationSuccess = true;
  }
}