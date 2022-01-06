import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { useFury } from '@ricardo-jrm/fury';
import { Box, Grid } from '@ricardo-jrm/fury/dist/mui';
import { useEcho } from '@ricardo-jrm/echo';
import { Image } from '../../components/Image';
import { Text } from '../../components/Text';
import { NavTabs, NavTabRecord } from '../../components/NavTabs';
import { NotFound } from '../../components/404';
import { ItemsList, ListRow, ListCol } from '../../components/ItemsList';
import { accounts, Account, balances } from '../../mocks/accounts';
import { transactions } from '../../mocks/tx';
import { AccountOverview } from '../../components/AccountOverview';

// eslint-disable-next-line operator-linebreak
const transaction =
  transactions[
    '6DC8D95C32D1517DE55EB4D8A46BF23235CE3DCFA38079398AC01F5C182CFF55'
  ];

interface BalanceCellProps {
  logo: string;
  balance: string;
  token: string;
}

const BalanceCell = ({ logo, balance, token }: BalanceCellProps) => {
  const { furyActive } = useFury();

  return (
    <Grid container alignItems="center" spacing={1}>
      <Grid item>
        <Image src={logo} responsive height="21px" />
      </Grid>
      <Grid item>
        <Text
          link={{
            href: `/token?id=${token}`,
          }}
          sx={{
            color: furyActive.palette.secondary.main,
          }}
        >
          {balance}
        </Text>
      </Grid>
    </Grid>
  );
};

interface ValueCellProps {
  value: number;
}

const ValueCell = ({ value }: ValueCellProps) => {
  return (
    <Grid container>
      <Grid item>
        <Text>$</Text>
      </Grid>
      <Grid item>
        <Text formatNumber>{`$${value}`}</Text>
      </Grid>
    </Grid>
  );
};

interface ChainCellProps {
  chain: string;
}

const ChainCell = ({ chain }: ChainCellProps) => {
  const { furyActive } = useFury();

  return (
    <Text
      link={{
        href: `/chain?id=${chain}`,
      }}
      sx={{
        color: furyActive.palette.secondary.main,
      }}
    >
      {chain}
    </Text>
  );
};

const balanceCols: ListCol[] = [
  {
    label: 'label-balance',
    cols: 6,
  },
  {
    label: 'label-value',
    cols: 3,
  },
  {
    label: 'label-chain',
    cols: 3,
  },
];

const soulRow: ListRow = [
  {
    label: 'label-balance',
    cols: 6,
    component: (
      <BalanceCell
        logo={balances[0].logo}
        balance={balances[0].balance}
        token={balances[0].token}
      />
    ),
  },
  {
    label: 'label-value',
    cols: 3,
    component: <ValueCell value={balances[0].value} />,
  },
  {
    label: 'label-chain',
    cols: 3,
    component: <ChainCell chain={balances[0].chain} />,
  },
];

const kcalRow: ListRow = [
  {
    label: 'label-balance',
    cols: 6,
    component: (
      <BalanceCell
        logo={balances[1].logo}
        balance={balances[1].balance}
        token={balances[1].token}
      />
    ),
  },
  {
    label: 'label-value',
    cols: 3,
    component: <ValueCell value={balances[1].value} />,
  },
  {
    label: 'label-chain',
    cols: 3,
    component: <ChainCell chain={balances[1].chain} />,
  },
];

const balanceRows: ListRow[] = [soulRow, kcalRow];

const BalancesComponent = () => (
  <ItemsList cols={balanceCols} rows={balanceRows} />
);

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

/**
 * ViewAccount
 */
export const ViewAccount = () => {
  const { query } = useRouter();
  const { echo } = useEcho();

  const account = useMemo<Account>(
    () => accounts[query.address as string],
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
