import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NewsService } from '../../services/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  newsForm: FormGroup;

  constructor(
    private _builder: FormBuilder,
    private _newsService: NewsService,
    private _router: Router
  ) { 

    this.newsForm = this._builder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      descr: ['', Validators.required],
      content: ['', Validators.required] 
    });

  }

  ngOnInit() {
  }
  
  createNew(toInsert){
    this._newsService.createNew(toInsert).subscribe(data => {
      this._router.navigate(['/general']);
    })
  }

}
