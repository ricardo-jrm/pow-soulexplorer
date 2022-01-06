import React, { useMemo } from 'react';
import { useFury } from '@ricardo-jrm/fury';
import { Box } from '@ricardo-jrm/fury/dist/mui';
import { useEcho } from '@ricardo-jrm/echo';
import { Text } from '../../components/Text';
import { NavTabs, NavTabRecord } from '../../components/NavTabs';
import { ItemsList, ListRow, ListCol } from '../../components/ItemsList';
import { chains } from '../../mocks/chains';

const chain = chains.main;

interface NameCellProps {
  name: string;
}
const NameCell = ({ name }: NameCellProps) => {
  const { furyActive } = useFury();

  return (
    <Text
      link={{
        href: `/chain?id=${name}`,
      }}
      sx={{
        color: furyActive.palette.secondary.main,
      }}
    >
      {name}
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

interface HeightCellProps {
  height: string;
}
const HeightCell = ({ height }: HeightCellProps) => {
  return <Text>{`#${height}`}</Text>;
};

const chainsCols: ListCol[] = [
  {
    label: 'label-name',
    cols: 3,
  },
  {
    label: 'label-address',
    cols: 6,
  },
  {
    label: 'label-height',
    cols: 3,
  },
];
const chainsRows: ListRow[] = [
  [
    {
      label: 'label-name',
      cols: 3,
      component: <NameCell name={chain.name} />,
    },
    {
      label: 'label-address',
      cols: 6,
      component: <AddressCell address={chain.address} />,
    },
    {
      label: 'label-blockheight',
      cols: 3,
      component: <HeightCell height={`${chain.blockHeight}`} />,
    },
  ],
];

const ChainsComponent = () => <ItemsList cols={chainsCols} rows={chainsRows} />;

const TokensComponent = () => <>TOKENS</>;

const DaosComponent = () => <>DAOS</>;

/**
 * ViewNexus
 */
export const ViewNexus = () => {
  const { echo } = useEcho();

  const tabs: NavTabRecord = useMemo(
    () => ({
      chains: {
        id: 'chains',
        label: echo('tab-chains'),
        href: '/nexus',
        component: <ChainsComponent />,
      },
      tokens: {
        id: 'tokens',
        label: echo('tab-tokens'),
        href: '/nexus',
        component: <TokensComponent />,
      },
      daos: {
        id: 'daos',
        label: echo('tab-daos'),
        href: '/nexus',
        component: <DaosComponent />,
      },
    }),
    [echo],
  );

  return (
    <Box>
      <Text variant="h3" sx={{ color: '#fff' }}>
        {echo('network-title')}
      </Text>
      <Box py={3}>
        <NavTabs tabs={tabs} tabsDefault="chains" />
      </Box>
    </Box>
  );
};
