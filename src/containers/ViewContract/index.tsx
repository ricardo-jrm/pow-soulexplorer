import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { Box } from '@ricardo-jrm/fury/dist/mui';
import { useEcho } from '@ricardo-jrm/echo';
import { Text } from '../../components/Text';
import { NavTabs, NavTabRecord } from '../../components/NavTabs';
import { NotFound } from '../../components/404';
import { contracts, Contract } from '../../mocks/contracts';
import { ContractOverview } from '../../components/ContractOverview';

/**
 * ViewContract
 */
export const ViewContract = () => {
  const { query } = useRouter();
  const { echo } = useEcho();

  const contract = useMemo<Contract>(
    () => contracts[(query.name as string) || 'main'],
    [query],
  );

  const tabs: NavTabRecord = useMemo(
    () => ({
      overview: {
        id: 'overview',
        label: echo('tab-overview'),
        href: '/contract',
        component: <ContractOverview contract={contract} />,
      },
      // script: {
      //   id: 'script',
      //   label: echo('tab-script'),
      //   href: '/contract',
      //   component: <ScriptComponent />,
      // },
      // abi: {
      //   id: 'abi',
      //   label: echo('tab-abi'),
      //   href: '/contract',
      //   component: <ABIComponent />,
      // },
    }),
    [echo, contract],
  );

  return (
    <Box>
      <Text variant="h3" sx={{ color: '#fff' }}>
        {echo('contract-title')}
      </Text>
      {contract ? (
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
