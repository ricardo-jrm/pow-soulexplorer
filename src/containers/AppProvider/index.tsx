import React from 'react';
import { EchoProvider } from '@ricardo-jrm/echo';
import { FuryProvider } from '@ricardo-jrm/fury';
import { PainProvider } from '@ricardo-jrm/pain';
import { metas } from '../../cfg/metas';
import { themes } from '../../cfg/themes';
import { locales } from '../../cfg/locales';

/**
 * AppProviderProps
 */
interface AppProviderProps {
  children: JSX.Element;
}

/**
 * AppProvider
 */
export const AppProvider = ({ children }: AppProviderProps) => (
  <EchoProvider echo={locales} echoDefault="en">
    <PainProvider pain={metas} painDefault="soul">
      <FuryProvider fury={themes} furyDefault="soul">
        {children}
      </FuryProvider>
    </PainProvider>
  </EchoProvider>
);
