import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralNewsComponent } from '../app/components/general-news/general-news.component';
import { ArchivedNewsComponent } from '../app/components/archived-news/archived-news.component';
import { AddNewsComponent } from './components/add-news/add-news.component';
import { ReadNewsComponent } from './components/read-news/read-news.component';
import { HeaderComponent } from './components/header/header.component';


const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'general', component: GeneralNewsComponent },
  { path: 'archived', component: ArchivedNewsComponent },
  { path: 'addNew', component: AddNewsComponent },
  { path: 'general/read/:id', component: ReadNewsComponent }
];

@NgModule({
  declarations: [
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
