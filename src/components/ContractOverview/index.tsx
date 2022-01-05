import React from 'react';
import { useEcho } from '@ricardo-jrm/echo';
import { useFury } from '@ricardo-jrm/fury';
import { Box } from '@ricardo-jrm/fury/dist/mui';
import { Text } from '../Text';
import { Contract } from '../../mocks/contracts';

/**
 * ContractOverviewProps
 */
export interface ContractOverviewProps {
  contract: Contract;
}

/**
 * ContractOverview
 */
export const ContractOverview = ({ contract }: ContractOverviewProps) => {
  const { echo } = useEcho();
  const { furyActive } = useFury();
  const { palette } = furyActive;

  return (
    <Box>
      <Text label={echo('label-name')} spacing={1} paragraph clipboard>
        {contract.name}
      </Text>
      <Text
        label={echo('label-address')}
        spacing={1}
        paragraph
        clipboard
        link={{
          href: `/account?address=${contract.address}`,
        }}
        linkStyles={{
          color: palette.secondary.main,
        }}
      >
        {contract.address}
      </Text>
    </Box>
  );
};
