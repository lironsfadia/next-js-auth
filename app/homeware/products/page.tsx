import React from 'react';

import EventCard from '@/components/EventCard';
import SideBar from '@/components/SideBar';
import { ProductMode, Urls } from '@/constants/enums';
import { getDateAndTimeByFormat, sortObjectsByDate } from '@/helpers/dates';
import { PageProps } from '@/types/PageProps';
import { SIDE_BAR_ITEMS } from '@/constants/globalConstants';
import { Product } from '@/types/Product';
import { getProducts } from '@/services/apiHelper';

async function getData(): Promise<Product[]> {
  const res = await getProducts();
  console.log(res);

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
      mode: product.on_sale ? ProductMode.NEW : ProductMode.SALES,
    });
    return agg;
  }, []);

  return (
    <div className='d-flex flex-nowrap'>
      <div className='p-2 w-75 flex-shrink-1'>
        {products.length > 0 &&
          products.map((product) => (
            <div key={product.title} className='mb-3'>
              <EventCard
                cardLink={`${Urls.HOMEWARE}/${product.id}`}
                cardHeader={product.full_price.toString()}
                cardTitle={product.title}
                cardSubtitle={product.title}
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
