import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { FormCategoryComponent } from './form-category/form-category.component';
import { FormComponent } from './form/form.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  { path: '', component: TaskComponent, pathMatch: 'full' },
  { path: "category", component: CategoryComponent },
  { path: "add-task", component: FormComponent },
  { path: "add-category", component: FormCategoryComponent },
  { path: "edit-task/:id", component: FormComponent },
  {path: "edit-category/:id", component: FormCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
