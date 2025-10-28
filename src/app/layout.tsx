import './../styles/globals.css';

import React from 'react';

type TRootLayoutProps = React.PropsWithChildren;

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
};

const RootLayout = ( { children }: TRootLayoutProps ) => (
  <html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="mobile-web-app-capable" content="yes"/>
    <meta name="theme-color" content="#ffffff"/>
  </head>
  <body>{ children }</body>
  </html>
);

export default RootLayout;
