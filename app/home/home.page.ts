import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }
  
  isDataSubmitted = false; 

  addData(event: any): void {

      this.isDataSubmitted = true; 
      
  }
  
  ngOnInit() {
    
  }
 
}
