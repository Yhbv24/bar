import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
  kegs: Keg[] = [
    new Keg("Bud Light", "Budweiser", 3, 4, "Lager"),
    new Keg("pub drought", "Guinness", 5, 4, "Stout"),
    new Keg("Boch", "Shiner", 6, 4, "Lager"),
    new Keg("Rpm", "Boneyard", 7, 6, "ipa"),
  ];
  user: boolean = false;
  password: string = "bartender1";
  customer = new Customer();

  editKeg(keg) {
    if (keg.edit === false) {
      keg.edit = true;
    } else {
      keg.edit = false;
    }
  }

  changeKeg(keg, name, brand, price, strength, type) {
    keg.name = name;
    keg.price = price;
    keg.strength = strength;
    keg.type = type;
  }

  sold(keg) {
    keg.volume -= 1;
    keg.revenue += (keg.price - 1);
  }

  volumeChecker(keg) {
    if (keg.volume === 0) {
      if(confirm("Would you like to buy a new keg for $50")) {
        keg.volume += 124;
        keg.revenue -= 50;
      } else {
        var pos = this.kegs.indexOf(keg);
        this.kegs.splice(pos, 1);
      }
    } else if (keg.volume <= 20) {
      return "red";
    } else if (keg.volume <= 50) {
      return "yellow";
    }
  }

  priceColor(keg) {
    if (keg.price <= 3) {
      return "bg-success";
    } else if (keg.price <= 5) {
      return "bg-warning";
    } else {
      return "bg-danger";
    }
  }

  strengthColor(keg) {
    if (keg.strength >= 6) {
      return "bold";
    } else {
      return "not-bold";
    }
  }

  userChange() {
    var login = "bartender1";
    if (login === "bartender1") {
      if (this.user === false) {
        this.user = true;
      } else {
        this.user = false;
      }
    }
  }

  newKeg(name, brand, price, strength, type) {
    var keg = new Keg(name, brand, price, strength, type);
    this.kegs.push(keg);
  }

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
}

export class Keg {
  volume: number = 124;
  edit: boolean = false;
  revenue: number = 0;

  constructor(public name: string, public brand: string, public price: number, public strength: number, public type: string) {}
}

export class Customer {
  wallet: number = 200;
  drunkenness: number = 0;
}
