import React from 'react';
import { EchoProvider, EchoRecord } from '@ricardo-jrm/echo';
import { FuryProvider, FuryRecord } from '@ricardo-jrm/fury';
import { PainProvider, PainRecord } from '@ricardo-jrm/pain';

const metas: PainRecord = {
  soul: {
    name: 'SOUL',
  },
  kcal: {
    name: 'KCAL',
  },
};

const locales: EchoRecord = {
  en: {
    example: 'example en',
  },
  pt: {
    example: 'exemplo pt',
  },
};

const themes: FuryRecord = {
  soul: {
    palette: {
      primary: {
        main: '#037abd',
      },
    },
  },
  'soul-dark': {
    palette: {
      mode: 'dark',
      primary: {
        main: '#037abd',
      },
    },
  },
  kcal: {
    palette: {
      primary: {
        main: '#d02525',
      },
    },
  },
  'kcal-dark': {
    palette: {
      mode: 'dark',
      primary: {
        main: '#d02525',
      },
    },
  },
};

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
