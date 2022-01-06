import React from 'react';
import { useEcho } from '@ricardo-jrm/echo';
import { useFury } from '@ricardo-jrm/fury';
import { Box } from '@ricardo-jrm/fury/dist/mui';
import { Text } from '../Text';
import { Dao } from '../../mocks/daos';

/**
 * DaoOverviewProps
 */
export interface DaoOverviewProps {
  dao: Dao;
}

/**
 * DaoOverview
 */
export const DaoOverview = ({ dao }: DaoOverviewProps) => {
  const { echo } = useEcho();
  const { furyActive } = useFury();
  const { palette } = furyActive;

  return (
    <Box>
      <Text label={echo('label-id')} spacing={1} paragraph clipboard>
        {dao.id}
      </Text>
      <Text label={echo('label-name')} spacing={1} paragraph clipboard>
        {dao.name}
      </Text>
      <Text
        label={echo('label-address')}
        spacing={1}
        paragraph
        clipboard
        link={{
          href: `/account?address=${dao.address}`,
        }}
        linkStyles={{
          color: palette.secondary.main,
        }}
      >
        {dao.address}
      </Text>
      <Text label={echo('label-size')} spacing={1} paragraph formatNumber>
        {dao.size}
      </Text>
    </Box>
  );
};
