import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: 'about', component: AboutComponent },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
