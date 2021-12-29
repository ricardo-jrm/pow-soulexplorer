import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { Box } from '@ricardo-jrm/fury/dist/mui';
import { LayoutHome } from '../LayoutHome';
import { LayoutPage } from '../LayoutPage';

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  const { pathname } = useRouter();

  return (
    <Box>
      {pathname === '/' ? (
        <LayoutHome>{children}</LayoutHome>
      ) : (
        <LayoutPage>{children}</LayoutPage>
      )}
    </Box>
  );
};
