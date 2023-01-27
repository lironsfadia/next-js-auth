import React from 'react';

import { appState } from '@/src/store';
import ProductDetailsLayout from '@/components/ProductDetailsLayout';
import { getProduct } from '@/services/apiHelper';
import { Product } from '@/types/Product';
import { PageProps } from '@/types/PageProps';

async function getData(id: number): Promise<Product> {
  const res = await getProduct(id);

  if (!res) {
    throw new Error('Failed to fetch data.');
  }
  return res;
}

export default async function Page({ params }: PageProps) {
  const { id } = params!;
  const { title, description, on_sale, final_price, full_price, manufacturer } = await getData(id);

  appState.setState({ price: on_sale ? final_price : full_price });

  return (
    <ProductDetailsLayout
      title={title}
      details={description}
      isSale={on_sale}
      salePrice={final_price}
      fullPrice={full_price}
      manufacturer={manufacturer}
      buttonText='ADD TO BAG'
    />
  );
}
