import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipassenger } from 'src/app/shared/model/passenger.interface';
import { PassengerService } from 'src/app/shared/service/passenger.service';

@Component({
  selector: 'app-pass-card',
  templateUrl: './pass-card.component.html',
  styleUrls: ['./pass-card.component.scss']
})
export class PassCardComponent implements OnInit {

  @Input() Passobj!: Ipassenger;
  isPassCard: boolean = false;
  @Output() emitpassinfo:EventEmitter<Ipassenger> =new EventEmitter<Ipassenger>();

  constructor(private _passengerService: PassengerService) { }

  ngOnInit(): void {
  }

  onedit() {
    this.isPassCard = true;
  }
  ondone(updataname: string) {
    this.isPassCard = false;
    /// it will get id from padssobj and update name by servis-e
    this._passengerService.updatePassname(this.Passobj.id, updataname)
  }
  ondelete(){
    this._passengerService.removeFun(this.Passobj.id);
    this.emitpassinfo.emit(this.Passobj)
  }
}
