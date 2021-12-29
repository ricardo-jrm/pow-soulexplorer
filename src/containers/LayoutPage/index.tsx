import React, { ReactNode } from 'react';
import { Box, Container } from '@ricardo-jrm/fury/dist/mui';

interface LayoutPageProps {
  children: ReactNode;
}

export const LayoutPage = ({ children }: LayoutPageProps) => (
  <Box
    sx={{
      minHeight: '100vh',
    }}
  >
    <Container>{children}</Container>
  </Box>
);
