import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'user/list'},
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }, 
  {path: 'todo-list', component: TodoListComponent},  
  {path: 'error-page', component: ErrorPageComponent},
  {path: '**', redirectTo: 'error-page'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
