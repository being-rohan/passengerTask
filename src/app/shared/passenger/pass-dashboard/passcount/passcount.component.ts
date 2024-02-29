import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-passcount',
  templateUrl: './passcount.component.html',
  styleUrls: ['./passcount.component.scss']
})
export class PasscountComponent implements OnInit {

  @Input() totalpasscount!:number;
  @Input() totalcheckedin!:number;
  constructor() { }

  ngOnInit(): void {
  }

}
