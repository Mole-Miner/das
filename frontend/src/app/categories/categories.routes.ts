import { Routes } from '@angular/router';
import { SharedService } from '../services/shared-service';
import { CategoriesService } from './services/categories.service';

export const categoriesRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./categories').then(m => m.Categories),
    providers: [SharedService, CategoriesService],
    children: [
      {
        path: '',
        loadComponent: () => import('./categories-list/categories-list').then(m => m.CategoriesList)
      },
      {
        path: ':categoryId',
        loadComponent: () => import('./categories-details/categories-details').then(m => m.CategoriesDetails)
      },
    ]
  }
];