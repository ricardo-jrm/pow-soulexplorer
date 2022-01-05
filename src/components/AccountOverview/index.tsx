import React from 'react';
import { useEcho } from '@ricardo-jrm/echo';
import { useFury } from '@ricardo-jrm/fury';
import { Box } from '@ricardo-jrm/fury/dist/mui';
import { Text } from '../Text';
import { Account } from '../../mocks/accounts';

/**
 * AccountOverviewProps
 */
export interface AccountOverviewProps {
  account: Account;
}

/**
 * AccountOverview
 */
export const AccountOverview = ({ account }: AccountOverviewProps) => {
  const { echo } = useEcho();
  const { furyActive } = useFury();
  const { palette } = furyActive;

  return (
    <Box>
      <Text label={echo('label-address')} spacing={1} paragraph clipboard>
        {account.address}
      </Text>
      <Text label={echo('label-type')} spacing={1} paragraph clipboard>
        {account.type}
      </Text>
      <Text
        label={echo('label-name')}
        spacing={1}
        paragraph
        clipboard
        link={{
          href: `/contract?name=${account.name}`,
        }}
        linkStyles={{
          color: palette.secondary.main,
        }}
      >
        {account.name}
      </Text>
    </Box>
  );
};
