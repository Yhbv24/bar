import { Component } from '@angular/core';
import { Keg } from './keg.model';
import { Customer } from './customer.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  customer = new Customer();
  masterUser: boolean = false;
  password: string = "bartender1";
  masterKegList: Keg[] = [
    new Keg("Bud Light", "Budweiser", 3, 4, "Lager"),
    new Keg("pub drought", "Guinness", 5, 4, "Stout"),
    new Keg("Boch", "Shiner", 6, 4, "Lager"),
    new Keg("Rpm", "Boneyard", 7, 6, "ipa"),
  ];


  editKeg(keg) {
    if (keg.edit === false) {
      keg.edit = true;
    } else {
      keg.edit = false;
    }
  }

  userChange() {
    var login = "bartender1";
    if (login === "bartender1") {
      if (this.masterUser === false) {
        this.masterUser = true;
      } else {
        this.masterUser = false;
      }
    }
  }

  // newKeg(name, brand, price, strength, type) {
  //   var keg = new Keg(name, brand, price, strength, type);
  //   this.kegs.push(keg);
  // }


}
