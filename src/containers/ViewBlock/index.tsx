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

const { events } = transaction;

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
      clipboard
      spacing={1}
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

interface KindCellProps {
  kind: string;
}
const KindCell = ({ kind }: KindCellProps) => <Text>{kind}</Text>;

interface AddressCellProps {
  address: string;
}
const AddressCell = ({ address }: AddressCellProps) => {
  const { furyActive } = useFury();

  return (
    <Text
      link={{
        href: `/account?address=${address}`,
      }}
      sx={{
        color: furyActive.palette.secondary.main,
      }}
    >
      {address}
    </Text>
  );
};

interface ContractCellProps {
  contract: string;
}
const ContractCell = ({ contract }: ContractCellProps) => (
  <Text>{contract}</Text>
);

interface ContentCellProps {
  content: string;
}
const ContentCell = ({ content }: ContentCellProps) => (
  <Text clipboard spacing={1}>
    {content}
  </Text>
);

const eventCols: ListCol[] = [
  {
    label: 'label-kind',
    cols: 2,
  },
  {
    label: 'label-address',
    cols: 2,
  },
  {
    label: 'label-contract',
    cols: 2,
  },
  {
    label: 'label-content',
    cols: 6,
  },
];
const eventRows: ListRow[] = [
  [
    {
      label: 'label-kind',
      cols: 2,
      component: <KindCell kind={events[0].kind} />,
    },
    {
      label: 'label-address',
      cols: 2,
      component: <AddressCell address={events[0].address} />,
    },
    {
      label: 'label-contract',
      cols: 2,
      component: <ContractCell contract={events[0].contract} />,
    },
    {
      label: 'label-content',
      cols: 6,
      component: <ContentCell content={events[0].content} />,
    },
  ],
  [
    {
      label: 'label-kind',
      cols: 2,
      component: <KindCell kind={events[1].kind} />,
    },
    {
      label: 'label-address',
      cols: 2,
      component: <AddressCell address={events[1].address} />,
    },
    {
      label: 'label-contract',
      cols: 2,
      component: <ContractCell contract={events[1].contract} />,
    },
    {
      label: 'label-content',
      cols: 6,
      component: <ContentCell content={events[1].content} />,
    },
  ],
  [
    {
      label: 'label-kind',
      cols: 2,
      component: <KindCell kind={events[2].kind} />,
    },
    {
      label: 'label-address',
      cols: 2,
      component: <AddressCell address={events[2].address} />,
    },
    {
      label: 'label-contract',
      cols: 2,
      component: <ContractCell contract={events[2].contract} />,
    },
    {
      label: 'label-content',
      cols: 6,
      component: <ContentCell content={events[2].content} />,
    },
  ],
];

const EventsComponent = () => <ItemsList cols={eventCols} rows={eventRows} />;

const oracleCols: ListCol[] = [
  {
    label: 'label-url',
    cols: 12,
  },
];

interface UrlCellProps {
  url: string;
}
const UrlCell = ({ url }: UrlCellProps) => <Text>{url}</Text>;
const oracleRows: ListRow[] = [
  [
    {
      label: 'label-url',
      cols: 12,
      component: <UrlCell url="interop://neo/neo/block/8564371" />,
    },
  ],
  [
    {
      label: 'label-url',
      cols: 12,
      component: (
        <UrlCell url="interop://neo/neo/tx/C9C661E0460E8B924B4D49ED8A965F8FABDBDD2A981251E25C621BA6A0CE1555" />
      ),
    },
  ],
  [
    {
      label: 'label-url',
      cols: 12,
      component: (
        <UrlCell url="interop://neo/neo/tx/E2CC11338967BD47A35B6FBE0418E642C4B9A7D2D14DFFC09320D82AE99EA809" />
      ),
    },
  ],
  [
    {
      label: 'label-url',
      cols: 12,
      component: (
        <UrlCell url="interop://bsc/bsc/tx/C22CE52A4F55192E16191A1A79139569D8B68BA3D13BD5845DC89E899405096A" />
      ),
    },
  ],
  [
    {
      label: 'label-url',
      cols: 12,
      component: (
        <UrlCell url="interop://neo/neo/tx/C217256BD6C5F55EBFBCA5C63554E021E853CE59FB27E3E9AA0C2EE6B99BD1BB" />
      ),
    },
  ],
  [
    {
      label: 'label-url',
      cols: 12,
      component: (
        <UrlCell url="interop://bsc/bsc/tx/8A8F302B27DF101F18D6C85AD68BE61DA0F46A977ED2602DC8883CB10F53644E" />
      ),
    },
  ],
];

const OraclesComponent = () => (
  <ItemsList cols={oracleCols} rows={oracleRows} />
);

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
