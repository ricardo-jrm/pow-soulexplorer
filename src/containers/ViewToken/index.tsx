import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { Box } from '@ricardo-jrm/fury/dist/mui';
import { useEcho } from '@ricardo-jrm/echo';
import { Text } from '../../components/Text';
import { NavTabs, NavTabRecord } from '../../components/NavTabs';
import { NotFound } from '../../components/404';
import { tokens, Token } from '../../mocks/tokens';
import { TokenOverview } from '../../components/TokenOverview';

/**
 * ViewToken
 */
export const ViewToken = () => {
  const { query } = useRouter();
  const { echo } = useEcho();

  const token = useMemo<Token>(() => tokens[query.id as string], [query]);

  const tabs: NavTabRecord = useMemo(
    () => ({
      overview: {
        id: 'overview',
        label: echo('tab-overview'),
        href: '/token',
        component: <TokenOverview token={token} />,
      },
    }),
    [echo, token],
  );

  return (
    <Box>
      <Text variant="h3" sx={{ color: '#fff' }}>
        {echo('token-title')}
      </Text>
      {token ? (
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
