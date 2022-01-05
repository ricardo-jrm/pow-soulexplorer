import React, { useMemo } from 'react';
import { Box } from '@ricardo-jrm/fury/dist/mui';
import { useEcho } from '@ricardo-jrm/echo';
import { Text } from '../../components/Text';
import { NavTabs, NavTabRecord } from '../../components/NavTabs';

const OverviewComponent = () => <>Overview</>;

const ScriptComponent = () => <>Script</>;

const EventsComponent = () => <>Events</>;

/**
 * ViewTransaction
 */
export const ViewTransaction = () => {
  const { echo } = useEcho();

  const tabs: NavTabRecord = useMemo(
    () => ({
      overview: {
        id: 'overview',
        label: echo('tab-overview'),
        href: '/transaction',
        component: <OverviewComponent />,
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
    [echo],
  );

  return (
    <Box>
      <Text variant="h3" sx={{ color: '#fff' }}>
        {echo('tx-title')}
      </Text>
      <Box py={3}>
        <NavTabs tabs={tabs} tabsDefault="overview" />
      </Box>
    </Box>
  );
};
