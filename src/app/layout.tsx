// app/layout.tsx
'use client';

import { ChakraProvider } from '@chakra-ui/react';
import './global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body style={{ background: '#1b1a17' }}>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
