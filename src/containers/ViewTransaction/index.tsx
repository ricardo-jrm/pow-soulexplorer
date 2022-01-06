import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { useFury } from '@ricardo-jrm/fury';
import { Box } from '@ricardo-jrm/fury/dist/mui';
import { useEcho } from '@ricardo-jrm/echo';
import { Text } from '../../components/Text';
import { NavTabs, NavTabRecord } from '../../components/NavTabs';
import { NotFound } from '../../components/404';
import { transactions, Tx } from '../../mocks/tx';
import { TxOverview } from '../../components/TxOverview';
import { ItemsList, ListRow, ListCol } from '../../components/ItemsList';

// eslint-disable-next-line operator-linebreak
const { events } =
  transactions[
    '6DC8D95C32D1517DE55EB4D8A46BF23235CE3DCFA38079398AC01F5C182CFF55'
  ];

interface ScriptProps {
  script?: string;
}
const ScriptComponent = ({ script }: ScriptProps) => {
  if (!script) {
    return null;
  }

  return (
    <pre
      style={{
        wordBreak: 'break-all',
        margin: '0px',
        fontSize: '12px',
        backgroundColor: '#cacaca',
        color: '#000',
        paddingLeft: '21px',
        paddingRight: '21px',
        borderRadius: '3px',
        overflow: 'auto',
      }}
    >
      {script}
    </pre>
  );
};

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
        component: <ScriptComponent script={transaction?.script} />,
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
