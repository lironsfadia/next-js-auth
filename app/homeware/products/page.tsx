import React from 'react';

import EventCard from '@/components/EventCard';
import SideBar from '@/components/SideBar';
import { EventsMode, Urls } from '@/constants/enums';
import { getDateAndTimeByFormat, isDateBeforeNow, sortObjectsByDate } from '@/helpers/dates';
import { PageProps } from '@/types/PageProps';
import { SIDE_BAR_ITEMS } from '@/constants/globalConstants';
import { Product } from '@/types/Product';
import { getProducts } from '@/services/apiHelper';

async function getData(): Promise<Product[]> {
  const res = await getProducts();

  if (!res) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data.');
  }

  return res;
}

export default async function Page({ searchParams }: PageProps) {
  const currentEventsMode = searchParams![EventsMode.NEW] === undefined ? EventsMode.SALES : EventsMode.NEW;
  let products: Product[] = await getData();

  products = products.reduce((agg: Product[], product: Product) => {
    agg.push({
      ...product,
      product.isSale ? EventsMode.NEW : EventsMode.SALES,
    });
    return agg;
  }, []);

  const eventsForCurrentMode = sortObjectsByDate(
    hikeTechEvents.filter((hte) => hte.eventMode === currentEventsMode),
    'start_date',
  );

  return (
    <div className='d-flex flex-nowrap'>
      <div className='p-2 w-75 flex-shrink-1'>
        {eventsForCurrentMode.length > 0 &&
          eventsForCurrentMode.map((hte) => (
            <div key={hte.title} className='mb-3'>
              <EventCard
                cardLink={`${Urls.TECH_A_HIKE_EVENTS}/${hte.id}`}
                cardHeader={getDateAndTimeByFormat(hte.start_date, hte.start_time)}
                cardTitle={hte.title}
                cardSubtitle={hte.location}
                cardBody={hte.description}
                imageProps={{ width: 267, height: 280 }}
                buttonStyle={{ varient: 'primary' }}
                buttonText={'לפרטים'}
              />
            </div>
          ))}
      </div>
      <div className='p-2 w-25'>
        <SideBar active={currentEventsMode} sideBarItems={SIDE_BAR_ITEMS} />
      </div>
    </div>
  );
}
