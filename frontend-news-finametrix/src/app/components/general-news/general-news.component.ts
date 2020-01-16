import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { NewModel } from '../../models/news.model';

@Component({
  selector: 'app-general-news',
  templateUrl: './general-news.component.html',
  styleUrls: ['./general-news.component.css'],
  providers: [ NewsService ]
})
export class GeneralNewsComponent implements OnInit {

  constructor(
    private _newsService: NewsService
  ) { }

  allGeneralNews: NewModel[];

  ngOnInit() {
    this._newsService.getNormalNews().subscribe(data => {
      this.allGeneralNews = data["body"];
      console.log(this.allGeneralNews);
    });
  }

  archive(item){

    console.log(item.archiveDate);

    let i = this.allGeneralNews.indexOf(item);

    item.archived = true;
    item.archiveDate = new Date();

    console.log(item.archiveDate);

    this._newsService.updateNews(item).subscribe(data => {
      console.log(data["body"]);
      this.allGeneralNews.splice( i, 1 );
      console.log('Hay ' + this.allGeneralNews.length + ' noticias');
    });

  }

}
