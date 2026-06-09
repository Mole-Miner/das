import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'about',
    loadComponent: () => import('./about/about').then(m => m.About)
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.routes').then(m => m.categoriesRoutes)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'about'
  }
];
