import React, { ReactNode, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import Konami from 'react-konami-code';
import { Box, Dialog } from '@ricardo-jrm/fury/dist/mui';
import { LayoutHome } from '../LayoutHome';
import { LayoutPage } from '../LayoutPage';
import { MetaTags } from '../../components/MetaTags';
import {
  kaioken,
  superSaiyan,
  goEvenFurtherBeyond,
} from '../../scripts/🔼🔼🔽🔽◀▶◀▶🅱🅰';

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  const { pathname } = useRouter();

  const [open, openSet] = useState(false);
  const handleOpen = useCallback(() => openSet(true), [openSet]);
  const handleClose = useCallback(() => openSet(false), [openSet]);

  const runZ = useCallback(() => {
    handleOpen();
    setTimeout(() => kaioken(['#f7e21e']), 7000);
    setTimeout(() => superSaiyan(['#f7e21e', '#ff7c00'], 9900), 14500);
    setTimeout(() => goEvenFurtherBeyond(11000), 51700);
    setTimeout(() => superSaiyan(['#f7e21e', '#ff7c00'], 15000), 64300);
    setTimeout(() => goEvenFurtherBeyond(15000), 64200);
    setTimeout(() => superSaiyan(['#f7e21e', '#ff7c00'], 26000), 124000);
    setTimeout(() => goEvenFurtherBeyond(26000), 124000);
    setTimeout(() => handleClose(), 167500);
  }, [handleOpen, handleClose]);

  return (
    <Box>
      <MetaTags />
      <Konami action={runZ} />
      {pathname === '/' || pathname === '/blankhome' ? (
        <LayoutHome>{children}</LayoutHome>
      ) : (
        <LayoutPage>{children}</LayoutPage>
      )}
      <Dialog
        onClose={handleClose}
        open={open}
        fullWidth
        maxWidth="lg"
        sx={{ backgroundColor: 'transparent' }}
        hideBackdrop
      >
        <Box textAlign="center">
          <iframe
            width="854"
            height="480"
            src="https://www.youtube.com/embed/eicnJ_hwkTg?controls=0&autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </Box>
      </Dialog>
    </Box>
  );
};
