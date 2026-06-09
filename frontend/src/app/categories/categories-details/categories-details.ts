import { Component, inject, input } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

import { CategoriesService } from '../services/categories.service';
import { SharedCategory } from "../components/shared-category/shared-category";

@Component({
  selector: 'app-categories-details',
  templateUrl: './categories-details.html',
  styleUrl: './categories-details.scss',
  imports: [SharedCategory],
})
export class CategoriesDetails {
  private readonly categoriesService = inject(CategoriesService);

  protected readonly categoryId = input.required<number>();
  protected readonly categoryData = rxResource({
    params: () => this.categoryId(),
    stream: ({ params: id }) => this.categoriesService.getCategoryById(id)
  }).value;
}
