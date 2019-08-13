import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesService } from '../services/categories.service';
import { CategoriesSidebarComponent } from './categories-sidebar/categories-sidebar.component';
import { CategoriesComponent } from './categories.component';

@NgModule({
  declarations: [
    CategoriesSidebarComponent,
    CategoriesComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    CategoriesService,
  ],
  exports: [
    CategoriesSidebarComponent,
    CategoriesComponent
  ]
})
export class CategoriesModule { }
