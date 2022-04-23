import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ar-news',
  templateUrl: './ar-news.component.html',
  styleUrls: ['./ar-news.component.css']
})
export class ArNewsComponent implements OnInit {
  public isCollapsed = true;
  constructor() { }

  ngOnInit(): void {
  }

}
