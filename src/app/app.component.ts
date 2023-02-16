import { Component } from '@angular/core';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'City Center Plaza';
  subTitle = '10 W College Ave';
  myDate: Date;
  count: number;
  
  getDate(): void{
    this.myDate = new Date();
  }
  
  utcTime(): void{
        setInterval(() => {  
  this.myDate = new Date();
}, 1000);
    }
  
  images = [
    { img: "/assets/images/simplepromo1.png"},
    { img: "/assets/images/festivepromo1.png"},
    { img: "/assets/images/foodpromo1.png"},
    { img: "/assets/images/jobpromo1.png"},
    { img: "/assets/images/simplepromo2.png"}

  ];
  
  slideConfig = {  
    "slidesToShow": 1,  
    "slidesToScroll": 1,  
    "dots": true,  
    "infinite": true  
  };
  
  getImage(image: any, time: string) {
    const t1 = '1';
    const t2 = '2';
    switch(this.count) { 
   case 1: {
      return ('/assets/images/simplepromo1.png');
      break; 
   } 
   case 2: { 
      return ('/assets/images/festivepromo1.png');
      break; 
   } 
      case 3: { 
      return ('/assets/images/foodpromo1.png');
      break; 
   } 
      case 4: { 
      return ('/assets/images/jobpromo1.png');
      break; 
   } 
      case 5: { 
      return ('/assets/images/simplepromo2.png');
      break; 
   } 
   default: { 
      return ('/assets/images/simplepromo2.png');
      break; 
   } 
   }
} 
    
  timer(): void{
        setInterval(() => {  
        if(this.count<5){
          this.count++;
        } else {this.count = 0;}
}, 7000);
    }
  
    
   ngOnInit() {
    this.utcTime();
    this.timer();
  }

}


  
