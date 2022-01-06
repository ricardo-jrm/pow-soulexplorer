import React, { useMemo } from 'react';
import { useFury } from '@ricardo-jrm/fury';
import { Box } from '@ricardo-jrm/fury/dist/mui';
import { useEcho } from '@ricardo-jrm/echo';
import { Text } from '../../components/Text';
import { NavTabs, NavTabRecord } from '../../components/NavTabs';
import { ItemsList, ListRow, ListCol } from '../../components/ItemsList';
import { chains } from '../../mocks/chains';
import { daosArr } from '../../mocks/daos';

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
      label: 'label-height',
      cols: 3,
      component: <HeightCell height={`${chain.blockHeight}`} />,
    },
  ],
];

const ChainsComponent = () => <ItemsList cols={chainsCols} rows={chainsRows} />;

const TokensComponent = () => <>TOKENS</>;

interface MembersNameCellProps {
  name: string;
  id: string;
}
const MembersNameCell = ({ name, id }: MembersNameCellProps) => {
  const { furyActive } = useFury();

  return (
    <Text
      link={{
        href: `/dao?id=${id}`,
      }}
      sx={{
        color: furyActive.palette.secondary.main,
      }}
    >
      {name}
    </Text>
  );
};

interface MembersAddressCellProps {
  address: string;
}
const MembersAddressCell = ({ address }: MembersAddressCellProps) => {
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

interface MembersSizeCellProps {
  size: number;
}
const MembersSizeCell = ({ size }: MembersSizeCellProps) => (
  <Text formatNumber>{size}</Text>
);

const membersCols: ListCol[] = [
  {
    label: 'label-name',
    cols: 3,
  },
  {
    label: 'label-address',
    cols: 7,
  },
  {
    label: 'label-size',
    cols: 2,
  },
];
const membersRows: ListRow[] = [
  [
    {
      label: 'label-name',
      cols: 3,
      component: <MembersNameCell name={daosArr[0].name} id={daosArr[0].id} />,
    },
    {
      label: 'label-address',
      cols: 7,
      component: <MembersAddressCell address={daosArr[0].address} />,
    },
    {
      label: 'label-size',
      cols: 2,
      component: <MembersSizeCell size={daosArr[0].size} />,
    },
  ],
  [
    {
      label: 'label-name',
      cols: 3,
      component: <MembersNameCell name={daosArr[1].name} id={daosArr[1].id} />,
    },
    {
      label: 'label-address',
      cols: 7,
      component: <MembersAddressCell address={daosArr[1].address} />,
    },
    {
      label: 'label-size',
      cols: 2,
      component: <MembersSizeCell size={daosArr[1].size} />,
    },
  ],
];

const DaosComponent = () => <ItemsList cols={membersCols} rows={membersRows} />;

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
