import React, { ReactNode, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import Konami from 'react-konami-code';
import { Box, Dialog } from '@ricardo-jrm/fury/dist/mui';
import { LayoutHome } from '../LayoutHome';
import { LayoutPage } from '../LayoutPage';
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
    setTimeout(() => kaioken(['#f7e21e']), 6850);
    setTimeout(() => superSaiyan(['#44ff00', '#ff7c00'], 9900), 14400);
    setTimeout(() => goEvenFurtherBeyond(11000), 51700);
    setTimeout(() => superSaiyan(['#44ff00', '#ff7c00'], 15000), 64200);
    setTimeout(() => goEvenFurtherBeyond(15000), 64200);
    setTimeout(() => superSaiyan(['#44ff00', '#ff7c00'], 26000), 123900);
    setTimeout(() => goEvenFurtherBeyond(26000), 123900);
    setTimeout(() => handleClose(), 168000);
  }, [handleOpen, handleClose]);

  return (
    <Box>
      <Konami action={runZ} />
      {pathname === '/' && <LayoutHome>{children}</LayoutHome>}
      {pathname.includes('/report/') ? (
        children
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
