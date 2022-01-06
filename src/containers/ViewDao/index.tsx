import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { Box } from '@ricardo-jrm/fury/dist/mui';
import { useEcho } from '@ricardo-jrm/echo';
import { Text } from '../../components/Text';
import { NavTabs, NavTabRecord } from '../../components/NavTabs';
import { NotFound } from '../../components/404';
import { daos, Dao } from '../../mocks/daos';
import { DaoOverview } from '../../components/DaoOverview';

const MembersComponent = () => <>Members</>;

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
