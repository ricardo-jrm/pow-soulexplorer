import React from 'react';
import Head from 'next/head';
import { usePain } from '@ricardo-jrm/pain';
import { useEcho } from '@ricardo-jrm/echo';

export const MetaTags = () => {
  const { painActive } = usePain();
  const { echo } = useEcho();

  return (
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />

      <title>Phantasma Chain Explorer</title>
      <meta property="og:title" content="Phantasma Chain Explorer" />
      <meta
        name="description"
        content={echo(painActive.description as string)}
      />
      <meta
        property="og:description"
        content={echo(painActive.description as string)}
      />
      <meta property="og:image" content={painActive.image} />

      <meta name="author" content="Ricardo <l1b3r_-> Mota" />

      <link rel="icon" type="image/png" href={painActive.favicon as string} />
    </Head>
  );
};
