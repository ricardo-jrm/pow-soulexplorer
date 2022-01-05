import React, { useMemo } from 'react';
import { Box } from '@ricardo-jrm/fury/dist/mui';
import { useEcho } from '@ricardo-jrm/echo';
import { Text } from '../../components/Text';
import { NavTabs, NavTabRecord } from '../../components/NavTabs';

const OverviewComponent = () => <>BLOCK OVERVIEW</>;

const TxListComponent = () => <>TX LIST</>;

const EventsComponent = () => <>EVENTS</>;

const OraclesComponent = () => <>Oracles</>;

/**
 * ViewBlock
 */
export const ViewBlock = () => {
  const { echo } = useEcho();

  const tabs: NavTabRecord = useMemo(
    () => ({
      overview: {
        id: 'overview',
        label: echo('tab-overview'),
        href: '/block',
        component: <OverviewComponent />,
      },
      txlist: {
        id: 'txlist',
        label: echo('tab-txlist'),
        href: '/block',
        component: <TxListComponent />,
      },
      events: {
        id: 'events',
        label: echo('tab-events'),
        href: '/block',
        component: <EventsComponent />,
      },
      oracles: {
        id: 'oracles',
        label: echo('tab-oracles'),
        href: '/block',
        component: <OraclesComponent />,
      },
    }),
    [echo],
  );

  return (
    <Box>
      <Text variant="h3" sx={{ color: '#fff' }}>
        {echo('block-title')}
      </Text>
      <Box py={3}>
        <NavTabs tabs={tabs} tabsDefault="overview" />
      </Box>
    </Box>
  );
};
