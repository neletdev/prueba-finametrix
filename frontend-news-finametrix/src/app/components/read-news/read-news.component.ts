import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { NewModel } from '../../models/news.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-read-news',
  templateUrl: './read-news.component.html',
  styleUrls: ['./read-news.component.css']
})
export class ReadNewsComponent implements OnInit {

  newToShow: NewModel;

  constructor(
    private _newsService: NewsService,
    private _activeRoute: ActivatedRoute,
    private _datepipe: DatePipe
  ) {
    let id = this._activeRoute.snapshot.params.id;
    this._newsService.getNew(id).subscribe(data => {
      this.newToShow = data["body"];
      this.newToShow.date = this._datepipe.transform(this.newToShow.date, 'MMM d, y, h:mm:ss a');
    });
  }

  ngOnInit() {
  }

}
