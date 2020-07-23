import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagesnotfount',
  templateUrl: './pagesnotfount.component.html',
  styleUrls: ['./pagesnotfount.component.css']
})
export class PagesnotfountComponent implements OnInit {
  public year:number;
  constructor() { 
    this.year = new Date().getFullYear();

  }

  ngOnInit(): void {
  }

}
