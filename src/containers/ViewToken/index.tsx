import React, { useMemo } from 'react';
import { Box } from '@ricardo-jrm/fury/dist/mui';
import { useEcho } from '@ricardo-jrm/echo';
import { Text } from '../../components/Text';
import { NavTabs, NavTabRecord } from '../../components/NavTabs';

const OverviewComponent = () => <>Overview</>;

/**
 * ViewToken
 */
export const ViewToken = () => {
  const { echo } = useEcho();

  const tabs: NavTabRecord = useMemo(
    () => ({
      overview: {
        id: 'overview',
        label: echo('tab-overview'),
        href: '/token',
        component: <OverviewComponent />,
      },
    }),
    [echo],
  );

  return (
    <Box>
      <Text variant="h3" sx={{ color: '#fff' }}>
        {echo('token-title')}
      </Text>
      <Box py={3}>
        <NavTabs tabs={tabs} tabsDefault="overview" />
      </Box>
    </Box>
  );
};
