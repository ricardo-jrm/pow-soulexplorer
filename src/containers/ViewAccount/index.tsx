import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { Box } from '@ricardo-jrm/fury/dist/mui';
import { useEcho } from '@ricardo-jrm/echo';
import { Text } from '../../components/Text';
import { NavTabs, NavTabRecord } from '../../components/NavTabs';
import { NotFound } from '../../components/404';
import { accounts, Account } from '../../mocks/accounts';
import { AccountOverview } from '../../components/AccountOverview';

const BalancesComponent = () => <>BALANCES</>;

const TxListComponent = () => <>TX LIST</>;

/**
 * ViewAccount
 */
export const ViewAccount = () => {
  const { query } = useRouter();
  const { echo } = useEcho();

  const account = useMemo<Account>(
    () => accounts[(query.address as string) || 'main'],
    [query],
  );

  const tabs: NavTabRecord = useMemo(
    () => ({
      overview: {
        id: 'overview',
        label: echo('tab-overview'),
        href: '/account',
        component: <AccountOverview account={account} />,
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
    [echo, account],
  );

  return (
    <Box>
      <Text variant="h3" sx={{ color: '#fff' }}>
        {echo('account-title')}
      </Text>
      {account ? (
        <Box py={3}>
          <NavTabs tabs={tabs} tabsDefault="overview" />
        </Box>
      ) : (
        <Box py={3}>
          <NotFound kind="account" />
        </Box>
      )}
    </Box>
  );
};
