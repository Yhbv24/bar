import { Component, OnInit, Input } from '@angular/core';
import { Keg } from '../keg.model';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  @Input() keg: Keg;
  @Input() customer: Customer;

  buyBeer(customer, keg) {
    customer.wallet -= keg.price;
    customer.drunkenness += .5;
    keg.volume -= 1;
    keg.revenue += keg.price;
    if (customer.drunkenness === 3) {
      alert("You're feeling tipsy. Are you thirsty for more?");
    } else if (customer.drunkenness === 6.5) {
      alert("thIs iS fUn! i wAnT anOthEr!");
    } else if (customer.drunkenness === 8) {
      alert("You buy the bar drinks.");
      customer.wallet = 20;
    } else if (customer.drunkenness === 10) {
      alert("You're fucked.");
    }
  }

  ngOnInit() {
  }

}
