export type CategoryDto = {
  id: number;
  name: string;
}

export type CategoryDetailsDto = CategoryDto & { description: string };
