import React from 'react';
import Link from 'next/link';

import { HomeLayoutProps } from '@/types/HomeLayoutProps';

function HomeLayout({ headline, body, buttonLink, buttonText }: HomeLayoutProps): JSX.Element {
  return (
    <div className='cover-container d-flex h-100 flex-column justify-content-center align-items-center'>
      <main className='px-3'>
        <h1>{headline}</h1>
        <p className='lead'>{body}</p>
        <Link href={buttonLink}>
          <button className='btn btn-secondary mt-3'>{buttonText}</button>
        </Link>
      </main>
    </div>
  );
}

export default HomeLayout;
