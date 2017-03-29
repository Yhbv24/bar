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
}



export class Keg {
  volume: number = 124;
  edit: boolean = false;

  constructor(public name: string, public brand: string, public price: number, public strength: number, public type: string) {}
}
