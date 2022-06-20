import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { Article1Component } from './article1/article1.component';
import { Article2Component } from './article2/article2.component';
import { Article3Component } from './article3/article3.component';
import { Article4Component } from './article4/article4.component';
import { BlankComponent } from './blank/blank.component';

const routes: Routes = [{ path: 'home', component: HomeComponent },
{ path: 'about', component: AboutComponent },
{ path: 'blog', component: BlogComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'article1', component: Article1Component },
{ path: 'article2', component: Article2Component },
{ path: 'article3', component: Article3Component },
{ path: 'article4', component: Article4Component },
{ path: 'blank', component: BlankComponent },
{ path: '', component: BlankComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
