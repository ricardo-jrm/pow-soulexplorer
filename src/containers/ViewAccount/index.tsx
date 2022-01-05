import React, { useMemo } from 'react';
import { Box } from '@ricardo-jrm/fury/dist/mui';
import { useEcho } from '@ricardo-jrm/echo';
import { Text } from '../../components/Text';
import { NavTabs, NavTabRecord } from '../../components/NavTabs';

const OverviewComponent = () => <>ACCOUNT OVERVIEW</>;

const BalancesComponent = () => <>BALANCES</>;

const TxListComponent = () => <>TX LIST</>;

/**
 * ViewAccount
 */
export const ViewAccount = () => {
  const { echo } = useEcho();

  const tabs: NavTabRecord = useMemo(
    () => ({
      overview: {
        id: 'overview',
        label: echo('tab-overview'),
        href: '/account',
        component: <OverviewComponent />,
      },
      balances: {
        id: 'balances',
        label: echo('tab-balances'),
        href: '/account',
        component: <BalancesComponent />,
      },
      txlist: {
        id: 'txlist',
        label: echo('tab-txlist'),
        href: '/account',
        component: <TxListComponent />,
      },
    }),
    [echo],
  );

  return (
    <Box>
      <Text variant="h3" sx={{ color: '#fff' }}>
        {echo('account-title')}
      </Text>
      <Box py={3}>
        <NavTabs tabs={tabs} tabsDefault="overview" />
      </Box>
    </Box>
  );
};
