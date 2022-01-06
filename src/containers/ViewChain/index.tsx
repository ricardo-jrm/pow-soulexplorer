import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { useFury } from '@ricardo-jrm/fury';
import { Box } from '@ricardo-jrm/fury/dist/mui';
import { useEcho } from '@ricardo-jrm/echo';
import { Text } from '../../components/Text';
import { NavTabs, NavTabRecord } from '../../components/NavTabs';
import { NotFound } from '../../components/404';
import { chains, Chain } from '../../mocks/chains';
import { blocksArr } from '../../mocks/blocks';
import { contractsArr } from '../../mocks/contracts';
import { ChainOverview } from '../../components/ChainOverview';
import { ItemsList, ListRow, ListCol } from '../../components/ItemsList';

interface HeightCellProps {
  height: string;
}
const HeightCell = ({ height }: HeightCellProps) => <Text>{height}</Text>;

interface TxCellProps {
  tx: number;
}
const TxCell = ({ tx }: TxCellProps) => <Text formatNumber>{tx}</Text>;

interface ValidatorCellProps {
  validator: string;
}
const ValidatorCell = ({ validator }: ValidatorCellProps) => {
  const { furyActive } = useFury();

  return (
    <Text
      link={{
        href: `/account?address=${validator}`,
      }}
      sx={{
        color: furyActive.palette.secondary.main,
      }}
    >
      {validator}
    </Text>
  );
};
interface HashCellProps {
  hash: string;
}
const HashCell = ({ hash }: HashCellProps) => {
  const { furyActive } = useFury();

  return (
    <Text
      link={{
        href: `/block?hash=${hash}`,
      }}
      sx={{
        color: furyActive.palette.secondary.main,
      }}
      truncate={{
        len: 42,
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

const blockCols: ListCol[] = [
  {
    label: 'label-height',
    cols: 1,
  },
  {
    label: 'label-blockhash',
    cols: 5,
  },
  {
    label: 'label-tx',
    cols: 2,
  },
  {
    label: 'label-validator',
    cols: 1,
  },
  {
    label: 'label-date',
    cols: 3,
  },
];
const blockRows: ListRow[] = [
  [
    {
      label: 'label-height',
      cols: 1,
      component: <HeightCell height={`#${blocksArr[0].blockHeight}`} />,
    },
    {
      label: 'label-blockhash',
      cols: 5,
      component: <HashCell hash={blocksArr[0].hash} />,
    },
    {
      label: 'label-tx',
      cols: 2,
      component: <TxCell tx={blocksArr[0].transactions} />,
    },
    {
      label: 'label-validator',
      cols: 1,
      component: <ValidatorCell validator={blocksArr[0].validator} />,
    },
    {
      label: 'label-date',
      cols: 3,
      component: <DateCell date={blocksArr[0].date} />,
    },
  ],
  [
    {
      label: 'label-height',
      cols: 1,
      component: <HeightCell height={`#${blocksArr[1].blockHeight}`} />,
    },
    {
      label: 'label-blockhash',
      cols: 5,
      component: <HashCell hash={blocksArr[1].hash} />,
    },
    {
      label: 'label-tx',
      cols: 2,
      component: <TxCell tx={blocksArr[1].transactions} />,
    },
    {
      label: 'label-validator',
      cols: 1,
      component: <ValidatorCell validator={blocksArr[1].validator} />,
    },
    {
      label: 'label-date',
      cols: 3,
      component: <DateCell date={blocksArr[1].date} />,
    },
  ],
  [
    {
      label: 'label-height',
      cols: 1,
      component: <HeightCell height={`#${blocksArr[2].blockHeight}`} />,
    },
    {
      label: 'label-blockhash',
      cols: 5,
      component: <HashCell hash={blocksArr[2].hash} />,
    },
    {
      label: 'label-tx',
      cols: 2,
      component: <TxCell tx={blocksArr[2].transactions} />,
    },
    {
      label: 'label-validator',
      cols: 1,
      component: <ValidatorCell validator={blocksArr[2].validator} />,
    },
    {
      label: 'label-date',
      cols: 3,
      component: <DateCell date={blocksArr[2].date} />,
    },
  ],
];

const BlocksComponent = () => <ItemsList cols={blockCols} rows={blockRows} />;

interface ContractCellProps {
  contract: string;
}
const ContractCell = ({ contract }: ContractCellProps) => {
  const { furyActive } = useFury();

  return (
    <Text
      link={{
        href: `/contract?name=${contract}`,
      }}
      sx={{
        color: furyActive.palette.secondary.main,
      }}
    >
      {contract}
    </Text>
  );
};
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
      clipboard
      spacing={1}
    >
      {address}
    </Text>
  );
};

const contractCols: ListCol[] = [
  {
    label: 'label-contract',
    cols: 4,
  },
  {
    label: 'label-address',
    cols: 8,
  },
];

const contractRows: ListRow[] = [
  [
    {
      label: 'label-contract',
      cols: 4,
      component: <ContractCell contract={contractsArr[0].name} />,
    },
    {
      label: 'label-address',
      cols: 8,
      component: <AddressCell address={contractsArr[0].address} />,
    },
  ],
  [
    {
      label: 'label-contract',
      cols: 4,
      component: <ContractCell contract={contractsArr[1].name} />,
    },
    {
      label: 'label-address',
      cols: 8,
      component: <AddressCell address={contractsArr[1].address} />,
    },
  ],
  [
    {
      label: 'label-contract',
      cols: 4,
      component: <ContractCell contract={contractsArr[2].name} />,
    },
    {
      label: 'label-address',
      cols: 8,
      component: <AddressCell address={contractsArr[2].address} />,
    },
  ],
];

const ContractsComponent = () => (
  <ItemsList cols={contractCols} rows={contractRows} />
);

/**
 * ViewChain
 */
export const ViewChain = () => {
  const { query } = useRouter();
  const { echo } = useEcho();

  const chain = useMemo<Chain>(
    () => chains[(query.id as string) || 'main'],
    [query],
  );

  const tabs: NavTabRecord = useMemo(
    () => ({
      overview: {
        id: 'overview',
        label: echo('tab-overview'),
        href: '/chain',
        component: <ChainOverview chain={chain} />,
      },
      blocks: {
        id: 'blocks',
        label: echo('tab-blocks'),
        href: '/chain',
        component: <BlocksComponent />,
      },
      contracts: {
        id: 'contracts',
        label: echo('tab-contracts'),
        href: '/chain',
        component: <ContractsComponent />,
      },
      // sidechains: {
      //   id: 'sidechains',
      //   label: echo('tab-sidechains'),
      //   href: '/chain',
      //   component: <SidechainsComponent />,
      // },
    }),
    [echo, chain],
  );

  return (
    <Box>
      <Text variant="h3" sx={{ color: '#fff' }}>
        {echo('chain-title')}
      </Text>
      {chain ? (
        <Box py={3}>
          <NavTabs tabs={tabs} tabsDefault="overview" />
        </Box>
      ) : (
        <Box py={3}>
          <NotFound kind="chain" />
        </Box>
      )}
    </Box>
  );
};
