import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';

import type { CategoryDetailsDto, CategoryDto } from '../models/category';
import { environment } from '../../../environments/environment.development';

@Service()
export class CategoriesService {
  private readonly http = inject(HttpClient);

  getCategories(): Observable<CategoryDto[]> {
    return this.http.get<CategoryDto[]>(`${environment.api}/categories`);
  }

  getCategoryById(categoryId: number): Observable<CategoryDetailsDto> {
    return this.http.get<CategoryDetailsDto>(`${environment.api}/categories/${categoryId}`);
  }
}
