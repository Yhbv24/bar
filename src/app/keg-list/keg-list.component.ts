import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../keg.model';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent implements OnInit {
  @Input() childKegList: Keg[];
  @Input() childUser: boolean;
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
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
      }
      else {
        var pos = this.childKegList.indexOf(keg);
        this.childKegList.splice(pos, 1);
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

  ngOnInit() {
  }
}
