'use client';
import { ReactNode } from 'react';
import { MantineProvider, createTheme } from '@mantine/core';

export default function Providers({ children }: { children: ReactNode }) {
 return (
   <MantineProvider defaultColorScheme="auto">
     {children}
   </MantineProvider>
 );
}
