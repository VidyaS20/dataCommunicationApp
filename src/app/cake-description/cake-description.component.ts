import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cake-description',
  templateUrl: './cake-description.component.html',
  styleUrls: ['./cake-description.component.css']
})
export class CakeDescriptionComponent implements OnInit {

  @Input() cakeData:any
  @Output() cDataToP = new EventEmitter<any>();



  constructor() { }

  ngOnInit(): void {

  }
  addToCart(cData: any){
    console.log("data received",cData);
    this.cDataToP.emit(cData)
  }

}
