import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { CategoriesService } from '../services/categories.service';
import { RouterLink } from "@angular/router";
import { SharedCategory } from "../components/shared-category/shared-category";

@Component({
  selector: 'app-categories-list',
  imports: [RouterLink, SharedCategory],
  templateUrl: './categories-list.html',
  styleUrl: './categories-list.scss',
})
export class CategoriesList {
  private readonly categoriesService = inject(CategoriesService);

  protected readonly categories = toSignal(this.categoriesService.getCategories())
}
