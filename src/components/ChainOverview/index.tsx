import React from 'react';
import { useEcho } from '@ricardo-jrm/echo';
import { useFury } from '@ricardo-jrm/fury';
import { Box } from '@ricardo-jrm/fury/dist/mui';
import { Text } from '../Text';
import { Chain } from '../../mocks/chains';

/**
 * ChainOverviewProps
 */
export interface ChainOverviewProps {
  chain: Chain;
}

/**
 * ChainOverview
 */
export const ChainOverview = ({ chain }: ChainOverviewProps) => {
  const { echo } = useEcho();
  const { furyActive } = useFury();
  const { palette } = furyActive;

  return (
    <Box>
      <Text label={echo('label-name')} spacing={1} paragraph clipboard>
        {chain.name}
      </Text>
      <Text
        label={echo('label-address')}
        spacing={1}
        paragraph
        clipboard
        link={{
          href: `/account?address=${chain.address}`,
        }}
        linkStyles={{
          color: palette.secondary.main,
        }}
      >
        {chain.address}
      </Text>
      <Text label={echo('label-blockheight')} spacing={1} paragraph clipboard>
        {`#${chain.blockHeight}`}
      </Text>
      <Text
        label={echo('label-lastblock')}
        spacing={1}
        paragraph
        clipboard
        link={{
          href: `/block?id=${chain.lastblock}`,
        }}
        linkStyles={{
          color: palette.secondary.main,
        }}
      >
        {chain.lastblock}
      </Text>
    </Box>
  );
};
