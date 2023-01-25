'use client';

import React from 'react';
import { SessionProvider } from 'next-auth/react';

import Navbar from './(shared)/components/Navbar';
import 'bootstrap/dist/css/bootstrap.rtl.css';
import '../styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='he' className='h-100'>
      <head />
      <body className='h-100 d-flex flex-column'>
        <SessionProvider>
          <Navbar />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
