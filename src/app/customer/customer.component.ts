import { Component, OnInit } from '@angular/core';
import { Keg } from '../keg.model';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

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
      alert("You wake up in a foreign land. You don't remember what happened, but it smells of trash. You realize that you're in a dumpster.");
    } else if (customer.drunkenness === 10) {
      alert("You're fucked.");
    }
  }

  ngOnInit() {
  }

}
