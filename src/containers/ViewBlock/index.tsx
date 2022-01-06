import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { useFury } from '@ricardo-jrm/fury';
import { Box } from '@ricardo-jrm/fury/dist/mui';
import { useEcho } from '@ricardo-jrm/echo';
import { Text } from '../../components/Text';
import { NavTabs, NavTabRecord } from '../../components/NavTabs';
import { ItemsList, ListRow, ListCol } from '../../components/ItemsList';
import { NotFound } from '../../components/404';
import { transactions } from '../../mocks/tx';
import { blocks, Block } from '../../mocks/blocks';
import { BlockOverview } from '../../components/BlockOverview';

// eslint-disable-next-line operator-linebreak
const transaction =
  transactions[
    '6DC8D95C32D1517DE55EB4D8A46BF23235CE3DCFA38079398AC01F5C182CFF55'
  ];

const txCols: ListCol[] = [
  {
    label: 'label-hash',
    cols: 8,
  },
  {
    label: 'label-date',
    cols: 4,
  },
];

interface HashCellProps {
  hash: string;
}

const HashCell = ({ hash }: HashCellProps) => {
  const { furyActive } = useFury();

  return (
    <Text
      link={{
        href: `/transaction?hash=${hash}`,
      }}
      sx={{
        color: furyActive.palette.secondary.main,
      }}
    >
      {hash}
    </Text>
  );
};

interface DateCellProps {
  date: Date;
}

const DateCell = ({ date }: DateCellProps) => <Text formatDate={date} />;

const TxRow: ListRow = [
  {
    label: 'label-hash',
    cols: 8,
    component: <HashCell hash={transaction.hash} />,
  },
  {
    label: 'label-date',
    cols: 4,
    component: <DateCell date={transaction.date} />,
  },
];

const TxListComponent = () => <ItemsList cols={txCols} rows={[TxRow]} />;

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
