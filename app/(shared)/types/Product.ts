import { ProductMode } from '@/constants/enums';

export type Product = {
  id: number;
  title: string;
  description: string;
  on_sale: boolean;
  sale_price: number;
  full_price: number;
  mode: ProductMode;
};
