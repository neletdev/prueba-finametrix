import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { NewModel } from '../../models/news.model';

@Component({
  selector: 'app-archived-news',
  templateUrl: './archived-news.component.html',
  styleUrls: ['./archived-news.component.css'],
  providers: [ NewsService ]
})
export class ArchivedNewsComponent implements OnInit {

  constructor(
    private _newsService: NewsService 
  ) { }

  archivedNews: NewModel[];

  ngOnInit() {
    this._newsService.getArchivedNews().subscribe(data => {
      this.archivedNews = data["body"];
      console.log(this.archivedNews);
    });
  }

  unarchive(item){
    let i = this.archivedNews.indexOf(item);

    item.archived = false;
    item.archiveDate = '';

    this._newsService.updateNews(item).subscribe(data => {
      console.log(data["body"]);
      this.archivedNews.splice(i, 1);
    });
  }

  delete(item){

    let i = this.archivedNews.indexOf(item);

    this._newsService.deleteNew(item._id).subscribe(data => {
      if(data["error"] == ''){
        console.log("Noticia borrada");
        this.archivedNews.splice( i, 1 );
      }
    });
  }

}
