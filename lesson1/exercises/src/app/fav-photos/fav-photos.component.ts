import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Family Photos';
  image1 = 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/84499471_10216022007927060_4935688975324020736_n.jpg?_nc_cat=110&_nc_sid=0debeb&_nc_ohc=HF1S6LA2N98AX9Z3HTD&_nc_ht=scontent-ort2-1.xx&oh=46288120812c15a79d18a4c24c5e3a29&oe=5F454925';
  image2 = 'https://scontent-ort2-1.xx.fbcdn.net/v/t31.0-8/29744290_10211458913732557_3358356274347761592_o.jpg?_nc_cat=111&_nc_sid=0debeb&_nc_ohc=l25VK8GILosAX-uru7w&_nc_ht=scontent-ort2-1.xx&oh=819b2467bb05ce7e8ae38858e9ede904&oe=5F446CEF';
  image3 = 'https://scontent-ort2-1.xx.fbcdn.net/v/t31.0-8/24132087_10210576117103193_5039026627670108769_o.jpg?_nc_cat=108&_nc_sid=0debeb&_nc_ohc=K--Fb7hwUfAAX8j4-oq&_nc_ht=scontent-ort2-1.xx&oh=f255398e9803878d342e4a0598b43a43&oe=5F44D529';

  constructor() { }

  ngOnInit() {
  }

}