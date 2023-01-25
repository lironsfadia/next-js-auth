import React from 'react';

import SideBar from '@/components/SideBar';
import { ProductMode, Urls } from '@/constants/enums';
import { PageProps } from '@/types/PageProps';
import { SIDE_BAR_ITEMS } from '@/constants/globalConstants';
import { Product } from '@/types/Product';
import { getProducts } from '@/services/apiHelper';
import Card from '@/components/Card';

async function getData(): Promise<Product[]> {
  const res = await getProducts();

  if (!res) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data.');
  }

  return res;
}

export default async function Page({ searchParams }: PageProps) {
  const currentProductMode = searchParams![ProductMode.NEW] === undefined ? ProductMode.SALES : ProductMode.NEW;
  let products: Product[] = await getData();

  products = products.reduce((agg: Product[], product: Product) => {
    agg.push({
      ...product,
      mode: product.on_sale ? ProductMode.SALES : ProductMode.NEW,
    });
    return agg;
  }, []);

  const currentProducts = products.filter((product: Product) => product.mode === currentProductMode);

  return (
    <div className='d-flex flex-nowrap'>
      <div className='p-2 w-75 flex-shrink-1'>
        {currentProducts.length > 0 &&
          currentProducts.map((product) => (
            <div key={product.title} className='mb-3'>
              <Card
                cardLink={`${Urls.HOMEWARE}/${product.id}`}
                cardHeader={'Homeware/' + product.manufacturer}
                cardTitle={product.title}
                cardFirstSubtitle={product.on_sale ? product.full_price.toString() : ''}
                cardSecondSubtitle={product.final_price.toString()}
                cardBody={product.description}
                imageProps={{ width: 267, height: 280 }}
                buttonStyle={{ varient: 'primary' }}
                buttonText='details'
              />
            </div>
          ))}
      </div>
      <div className='p-2 w-25'>
        <SideBar active={currentProductMode} sideBarItems={SIDE_BAR_ITEMS} />
      </div>
    </div>
  );
}
