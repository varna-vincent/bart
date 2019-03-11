import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	
  visitCount: string;

  constructor() {}

  ngOnInit() {
  	this.visitCount = window.localStorage.getItem( 'visit_count');
    console.log(this.visitCount);
	  window.localStorage.setItem( 'visit_count', this.visitCount === null ? '1' : parseInt(this.visitCount) + 1 + '');
  }

}
