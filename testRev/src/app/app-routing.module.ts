import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotHomeComponent } from './not-home/not-home.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "not-home", component: NotHomeComponent },
  { path: "**", component: PathNotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


