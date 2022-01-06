import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { Box } from '@ricardo-jrm/fury/dist/mui';
import { useEcho } from '@ricardo-jrm/echo';
import { Text } from '../../components/Text';
import { NavTabs, NavTabRecord } from '../../components/NavTabs';
import { NotFound } from '../../components/404';
import { transactions, Tx } from '../../mocks/tx';
import { TxOverview } from '../../components/TxOverview';

const ScriptComponent = () => <>Script</>;

const EventsComponent = () => <>Events</>;

/**
 * ViewTransaction
 */
export const ViewTransaction = () => {
  const { query } = useRouter();
  const { echo } = useEcho();

  const transaction = useMemo<Tx>(
    () => transactions[query.hash as string],
    [query],
  );

  const tabs: NavTabRecord = useMemo(
    () => ({
      overview: {
        id: 'overview',
        label: echo('tab-overview'),
        href: '/transaction',
        component: <TxOverview transaction={transaction} />,
      },
      script: {
        id: 'script',
        label: echo('tab-script'),
        href: '/transaction',
        component: <ScriptComponent />,
      },
      events: {
        id: 'events',
        label: echo('tab-events'),
        href: '/transaction',
        component: <EventsComponent />,
      },
    }),
    [echo, transaction],
  );

  return (
    <Box>
      <Text variant="h3" sx={{ color: '#fff' }}>
        {echo('tx-title')}
      </Text>
      {transaction ? (
        <Box py={3}>
          <NavTabs tabs={tabs} tabsDefault="overview" />
        </Box>
      ) : (
        <Box py={3}>
          <NotFound kind="transaction" />
        </Box>
      )}
    </Box>
  );
};
