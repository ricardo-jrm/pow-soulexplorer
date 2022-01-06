import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { Box } from '@ricardo-jrm/fury/dist/mui';
import { useEcho } from '@ricardo-jrm/echo';
import { Text } from '../../components/Text';
import { NavTabs, NavTabRecord } from '../../components/NavTabs';
import { NotFound } from '../../components/404';
import { blocks, Block } from '../../mocks/blocks';
import { BlockOverview } from '../../components/BlockOverview';

const TxListComponent = () => <>TX LIST</>;

const EventsComponent = () => <>EVENTS</>;

const OraclesComponent = () => <>Oracles</>;

/**
 * ViewBlock
 */
export const ViewBlock = () => {
  const { query } = useRouter();
  const { echo } = useEcho();

  const block = useMemo<Block>(() => blocks[query.hash as string], [query]);

  const tabs: NavTabRecord = useMemo(
    () => ({
      overview: {
        id: 'overview',
        label: echo('tab-overview'),
        href: '/block',
        component: <BlockOverview block={block} />,
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
    [echo, block],
  );

  return (
    <Box>
      <Text variant="h3" sx={{ color: '#fff' }}>
        {echo('block-title')}
      </Text>
      {block ? (
        <Box py={3}>
          <NavTabs tabs={tabs} tabsDefault="overview" />
        </Box>
      ) : (
        <Box py={3}>
          <NotFound kind="block" />
        </Box>
      )}
    </Box>
  );
};
