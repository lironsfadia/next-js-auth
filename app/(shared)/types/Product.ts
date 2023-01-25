import { ProductMode } from '@/constants/enums';

export type Product = {
  id: number;
  manufacturer: string;
  title: string;
  description: string;
  on_sale: boolean;
  final_price: number;
  full_price: number;
  mode: ProductMode;
};
