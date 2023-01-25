import React from 'react';

import HomeLayout from '@/components/HomeLayout';
import { Urls, EventsMode } from '@/constants/enums';

export default function Page() {
  return (
    <>
      <div className='d-flex flex-column justify-content-center align-items-center h-100'>
        <HomeLayout
          headline='Homeware store'
          body='Click to see our homeware products...'
          buttonLink={`${Urls.HOMEWARE}?${EventsMode.NEW}`}
          buttonText={'Homeware products'}
        />
      </div>
    </>
  );
}
