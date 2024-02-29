import { Component, OnInit } from '@angular/core';
import { PassengerService } from '../../service/passenger.service';
import { Ipassenger } from '../../model/passenger.interface';

@Component({
  selector: 'app-pass-dashboard',
  templateUrl: './pass-dashboard.component.html',
  styleUrls: ['./pass-dashboard.component.scss']
})
export class PassDashboardComponent implements OnInit {

  checkin!: number;
  constructor(private _passService: PassengerService) { }
  Passarray!: Ipassenger[]
  ngOnInit(): void {
    this.Passarray = this._passService.fetchdata()/// service inject
    this.check()

  }

  check() {
    this.checkin =this.Passarray.filter(eve=>eve.checkedIn).length;

  }
  ondeletefun(obj:Ipassenger){
    this.check()

  }


}
