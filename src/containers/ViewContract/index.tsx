import React, { useMemo } from 'react';
import { Box } from '@ricardo-jrm/fury/dist/mui';
import { useEcho } from '@ricardo-jrm/echo';
import { Text } from '../../components/Text';
import { NavTabs, NavTabRecord } from '../../components/NavTabs';

const OverviewComponent = () => <>Overview</>;

const ScriptComponent = () => <>Script</>;

const ABIComponent = () => <>ABI</>;

/**
 * ViewContract
 */
export const ViewContract = () => {
  const { echo } = useEcho();

  const tabs: NavTabRecord = useMemo(
    () => ({
      overview: {
        id: 'overview',
        label: echo('tab-overview'),
        href: '/contract',
        component: <OverviewComponent />,
      },
      script: {
        id: 'script',
        label: echo('tab-script'),
        href: '/contract',
        component: <ScriptComponent />,
      },
      abi: {
        id: 'abi',
        label: echo('tab-abi'),
        href: '/contract',
        component: <ABIComponent />,
      },
    }),
    [echo],
  );

  return (
    <Box>
      <Text variant="h3" sx={{ color: '#fff' }}>
        {echo('contract-title')}
      </Text>
      <Box py={3}>
        <NavTabs tabs={tabs} tabsDefault="overview" />
      </Box>
    </Box>
  );
};
