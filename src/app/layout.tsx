// app/layout.tsx
'use client';

import { ChakraProvider } from '@chakra-ui/react';
import './global.css';
import { TodoProvider } from '@/context/TodoContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body style={{ background: '#1b1a17' }}>
        <TodoProvider>
          <ChakraProvider>{children}</ChakraProvider>
        </TodoProvider>
      </body>
    </html>
  );
}
