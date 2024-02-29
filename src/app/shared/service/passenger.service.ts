import { Injectable } from '@angular/core';
import { Ipassenger } from '../model/passenger.interface';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  passArr: Ipassenger[] = [
    {
      id: 1,
      fullname: 'Nikhil Singe',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: null,
    },
    {
      id: 2,
      fullname: 'Pooja Kalse',
      checkedIn: false,
      checkInDate: null,
      children: [
        { name: 'Ted', age: 12 },
        { name: 'Chloe', age: 7 },
      ],
    },
    {
      id: 3,
      fullname: 'Rohan Panchal',
      checkedIn: true,
      checkInDate: 1491606000000,
      children: null,
    },
    {
      id: 4,
      fullname: 'Aditya waghmare',
      checkedIn: true,
      checkInDate: 1488412800000,
      children: [{ name: 'Jessica', age: 1 }],
    },
    {
      id: 5,
      fullname: 'Pradeep Kamble',
      checkedIn: false,
      checkInDate: null,
      children: null,
    },
  ];
  constructor(private _snackbar: SnackbarService) { }

  fetchdata() {
    return this.passArr
  }
  updatePassname(id: number, updatefullname: string) {

    for (let i = 0; i < this.passArr.length; i++) {
      if (this.passArr[i].id === id) {
        let getname= this.passArr[i].fullname
        this.passArr[i].fullname = updatefullname;
         this._snackbar.oensnackbar(`the passenger ${getname} is changed to ${updatefullname}`)
        break;

      }

    }
  }
  removeFun(id: number) {
    let getindex = this.passArr.findIndex(pass => pass.id === id);
    console.log(this.passArr[getindex].fullname);
    let getname = this.passArr[getindex].fullname
    this.passArr.splice(getindex, 1)
    this._snackbar.oensnackbar(`the pasenger ${getname} is removed`)
  }

}
