import { CategoryType } from './categoryType';

export interface ProductType {
  id: number;
  name: string;
  image: string;
  price: number;
  category?: CategoryType;
}
