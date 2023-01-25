'use client';

import React from 'react';
import Image from 'next/image';

import sdom from '@/public/images/sdom.jpg';
import clockIcon from '@/public/icons/clock.svg';
import locationIcon from '@/public/icons/geo-alt.svg';

import { ProductDetailsLayoutProps } from '@/types/ProductDetailsLayoutProps';
import { SvgIconWrapper } from './SvgIconWrapper';

function ProductDetailsLayout({
  title,
  details,
  isSale,
  salePrice,
  fullPrice,
  buttonText,
}: ProductDetailsLayoutProps): JSX.Element {
  return (
    <div>
      <div className='d-grid gap-1 d-md-block overflow-auto'>
        <div className='px-2 py-4 my-3'>
          <div className='col-lg-6 mx-auto'>
            <h1 className='display-5 fw-bold'>{title}</h1>
            <div className='d-flex flex-column justify-content-start text-break'>
              <div>
                <SvgIconWrapper iconPath={clockIcon} iconAlt={'time'} />
                <span className='font-size-base-6 ms-2 mb-4'>{fullPrice}</span>
              </div>
              <div className='mt-2'>
                <SvgIconWrapper iconPath={locationIcon} iconAlt={'location'} />
                <span className='font-size-base-6 ms-2 mb-4'>{salePrice}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className='border border-5 opacity-75'></hr>
      <div className='d-grid gap-1 d-md-block'>
        <div className='px-2 py-5 my-3'>
          <div className='col-lg-6 mx-auto'>
            <Image src={sdom} alt={'eventPic'} className='img-fluid rounded mb-3' />
            <h2 className='fw-bold'>Details:</h2>
            <p className='lead mb-4'>{details} </p>
            <button type='button' className='btn btn-primary'>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsLayout;
