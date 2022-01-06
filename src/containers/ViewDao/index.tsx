import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { useFury } from '@ricardo-jrm/fury';
import { Box } from '@ricardo-jrm/fury/dist/mui';
import { useEcho } from '@ricardo-jrm/echo';
import { Text } from '../../components/Text';
import { NavTabs, NavTabRecord } from '../../components/NavTabs';
import { NotFound } from '../../components/404';
import { daos, Dao, members } from '../../mocks/daos';
import { DaoOverview } from '../../components/DaoOverview';
import { ItemsList, ListRow, ListCol } from '../../components/ItemsList';

interface NameCellProps {
  name: string;
}
const NameCell = ({ name }: NameCellProps) => {
  const { furyActive } = useFury();

  return (
    <Text
      link={{
        href: `/contract?name=${name}`,
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
    >
      {address}
    </Text>
  );
};
const membersCols: ListCol[] = [
  {
    label: 'label-name',
    cols: 6,
  },
  {
    label: 'label-address',
    cols: 6,
  },
];
const membersRows: ListRow[] = [
  [
    {
      label: 'label-name',
      cols: 6,
      component: <NameCell name={members[0].name} />,
    },
    {
      label: 'label-address',
      cols: 6,
      component: <AddressCell address={members[0].address} />,
    },
  ],
  [
    {
      label: 'label-name',
      cols: 6,
      component: <NameCell name={members[1].name} />,
    },
    {
      label: 'label-address',
      cols: 6,
      component: <AddressCell address={members[1].address} />,
    },
  ],
];

const MembersComponent = () => (
  <ItemsList cols={membersCols} rows={membersRows} />
);

/**
 * ViewDao
 */
export const ViewDao = () => {
  const { query } = useRouter();
  const { echo } = useEcho();

  const dao = useMemo<Dao>(() => daos[query.id as string], [query]);

  const tabs: NavTabRecord = useMemo(
    () => ({
      overview: {
        id: 'overview',
        label: echo('tab-overview'),
        href: '/dao',
        component: <DaoOverview dao={dao} />,
      },
      members: {
        id: 'members',
        label: echo('tab-members'),
        href: '/dao',
        component: <MembersComponent />,
      },
    }),
    [echo, dao],
  );

  return (
    <Box>
      <Text variant="h3" sx={{ color: '#fff' }}>
        {echo('dao-title')}
      </Text>
      {dao ? (
        <Box py={3}>
          <NavTabs tabs={tabs} tabsDefault="overview" />
        </Box>
      ) : (
        <Box py={3}>
          <NotFound kind="dao" />
        </Box>
      )}
    </Box>
  );
};
