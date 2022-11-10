import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  cakeData:any;
  cakeDataFromChild:any;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  cakes=[
    {
      img:'../../assets/cake1.jpg',
      title: 'Cake 1'
    },
    {
      img:'../../assets/cake2.jpg',
      title: 'Cake 2'
    },
    {
      img:'../../assets/cake3.jpg',
      title: 'Cake 3'
    },
    {
      img:'../../assets/cake4.jpg',
      title: 'Cake 4'
    },
    {
      img:'../../assets/cake5.jpg',
      title: 'Cake 5'
    },
    {
      img:'../../assets/cake6.jpg',
      title: 'Cake 6'
    },
  ]
  onCakeClick(cake:any){
    console.log('cake clicked', cake)
    this.cakeData= cake
  }
  cDataToPReceived(event:any){
    console.log('data recived from child',event)
    this.cakeDataFromChild= event

  }

  onCheckOut(){
    this.router.navigate(['/checkout']);
  }

}
