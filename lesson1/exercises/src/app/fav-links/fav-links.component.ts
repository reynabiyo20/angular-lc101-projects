import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  linksTitle = "Most Visited Websites"
  favlinks = ['https://reynabiyo20.github.io/html-me-something/','http://wearephoenix.com/'];

  constructor() { }

  ngOnInit() {
  }

}
