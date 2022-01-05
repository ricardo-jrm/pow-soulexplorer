import React, { useMemo } from 'react';
import { Box } from '@ricardo-jrm/fury/dist/mui';
import { useEcho } from '@ricardo-jrm/echo';
import { Text } from '../../components/Text';
import { NavTabs, NavTabRecord } from '../../components/NavTabs';

const OverviewComponent = () => <>Overview</>;

const BlocksComponent = () => <>Blocks</>;

const ContractsComponent = () => <>Contracts</>;

const SidechainsComponent = () => <>Sidechains</>;

/**
 * ViewChain
 */
export const ViewChain = () => {
  const { echo } = useEcho();

  const tabs: NavTabRecord = useMemo(
    () => ({
      overview: {
        id: 'overview',
        label: echo('tab-overview'),
        href: '/chain',
        component: <OverviewComponent />,
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
      sidechains: {
        id: 'sidechains',
        label: echo('tab-sidechains'),
        href: '/chain',
        component: <SidechainsComponent />,
      },
    }),
    [echo],
  );

  return (
    <Box>
      <Text variant="h3" sx={{ color: '#fff' }}>
        {echo('chain-title')}
      </Text>
      <Box py={3}>
        <NavTabs tabs={tabs} tabsDefault="overview" />
      </Box>
    </Box>
  );
};
