import React, { useMemo } from 'react';
import { Box } from '@ricardo-jrm/fury/dist/mui';
import { useEcho } from '@ricardo-jrm/echo';
import { Text } from '../../components/Text';
import { NavTabs, NavTabRecord } from '../../components/NavTabs';

const ChainsComponent = () => <>CHAINS</>;

const TokensComponent = () => <>TOKENS</>;

const DaosComponent = () => <>DAOS</>;

/**
 * ViewNexus
 */
export const ViewNexus = () => {
  const { echo } = useEcho();

  const tabs: NavTabRecord = useMemo(
    () => ({
      chains: {
        id: 'chains',
        label: echo('tab-chains'),
        href: '/nexus',
        component: <ChainsComponent />,
      },
      tokens: {
        id: 'tokens',
        label: echo('tab-tokens'),
        href: '/nexus',
        component: <TokensComponent />,
      },
      daos: {
        id: 'daos',
        label: echo('tab-daos'),
        href: '/nexus',
        component: <DaosComponent />,
      },
    }),
    [echo],
  );

  return (
    <Box>
      <Text variant="h3" sx={{ color: '#fff' }}>
        {echo('network-title')}
      </Text>
      <Box py={3}>
        <NavTabs tabs={tabs} tabsDefault="chains" />
      </Box>
    </Box>
  );
};
