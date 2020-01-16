import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  readonly URL_API = 'http://localhost:3000/api/news';

  constructor(private http: HttpClient) {}

  getNew(id){
    return this.http.get(this.URL_API + '/' + id);
  }

  createNew(item){
    return this.http.post(this.URL_API, item);
  }

  deleteNew(id){
    return this.http.delete(this.URL_API + '/' + id);
  }

  getNormalNews() {
    return this.http.get(this.URL_API);
  }

  getArchivedNews() {
    return this.http.get(this.URL_API + '?type=true');
  }

  updateNews(item){
    return this.http.put(this.URL_API + '/' + item._id, item);
  }

}
