import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TodosComponent } from './components/todos/todos.component';
import { NewFeedComponent } from './new-feed/new-feed.component';

const routes: Routes = [{
  path: "home",
  component: HomeComponent,
  children: [
    {
      path: "new-feed",
      component: NewFeedComponent
    },
    {
      path: "todos",
      component: TodosComponent
    }
  ]
}, {
  path: "todos",
  component: TodosComponent
}, {
  path: "new-feed",
  component: NewFeedComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
