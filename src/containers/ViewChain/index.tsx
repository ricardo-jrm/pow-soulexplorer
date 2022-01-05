import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { Box } from '@ricardo-jrm/fury/dist/mui';
import { useEcho } from '@ricardo-jrm/echo';
import { Text } from '../../components/Text';
import { NavTabs, NavTabRecord } from '../../components/NavTabs';
import { ChainOverview } from '../../components/ChainOverview';
import { NotFound } from '../../components/404';
import { chains, Chain } from '../../mocks/chains';

const BlocksComponent = () => <>Blocks</>;

const ContractsComponent = () => <>Contracts</>;

/**
 * ViewChain
 */
export const ViewChain = () => {
  const { query } = useRouter();
  const { echo } = useEcho();

  const chain = useMemo<Chain>(
    () => chains[(query.id as string) || 'main'],
    [query],
  );

  const tabs: NavTabRecord = useMemo(
    () => ({
      overview: {
        id: 'overview',
        label: echo('tab-overview'),
        href: '/chain',
        component: <ChainOverview chain={chain} />,
      },
      blocks: {
        id: 'blocks',
        label: echo('tab-blocks'),
        href: '/chain',
        component: <BlocksComponent />,
      },
      contracts: {
        id: 'contracts',
        label: echo('tab-contracts'),
        href: '/chain',
        component: <ContractsComponent />,
      },
      // sidechains: {
      //   id: 'sidechains',
      //   label: echo('tab-sidechains'),
      //   href: '/chain',
      //   component: <SidechainsComponent />,
      // },
    }),
    [echo, chain],
  );

  return (
    <Box>
      <Text variant="h3" sx={{ color: '#fff' }}>
        {echo('chain-title')}
      </Text>
      {chain ? (
        <Box py={3}>
          <NavTabs tabs={tabs} tabsDefault="overview" />
        </Box>
      ) : (
        <Box py={3}>
          <NotFound kind="chain" />
        </Box>
      )}
    </Box>
  );
};
