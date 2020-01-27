import { Component, OnInit } from '@angular/core';

import { Hero }    from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  powers = ['Pan Card', 'Adhar Card','Driving License', 'Passport'];
  
  payments = ['Payment Number - 3rd Party e.g. Paytm', 'Bank Account Number', 'Credit Card Number'];

  model = new Hero(1, 'Sam', 'test@gmail.com','','','','','','','');

  submitted = false;

  onSubmit() { this.submitted = true; }

}
