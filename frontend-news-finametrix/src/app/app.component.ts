import { Component, OnInit } from '@angular/core';
import { NewsService } from '../app/services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [  NewsService ]
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
