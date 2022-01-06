import React from 'react';
import { useEcho } from '@ricardo-jrm/echo';
import { useFury } from '@ricardo-jrm/fury';
import { Box, Grid, Chip } from '@ricardo-jrm/fury/dist/mui';
import { Image } from '../Image';
import { Text } from '../Text';
import { Token } from '../../mocks/tokens';

/**
 * TokenOverviewProps
 */
export interface TokenOverviewProps {
  token: Token;
}

/**
 * TokenOverview
 */
export const TokenOverview = ({ token }: TokenOverviewProps) => {
  const { echo } = useEcho();
  const { furyActive } = useFury();
  const { palette } = furyActive;

  return (
    <Box>
      <Box pb={1.8}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Box pt={0.6}>
              <Image src={token.logo} responsive height="30px" />
            </Box>
          </Grid>
          <Grid item>
            <Text variant="h4">{token.ticker}</Text>
          </Grid>
          {token.transferable && (
            <Grid item>
              <Chip label={echo('chip-transferable')} color="secondary" />
            </Grid>
          )}
          <Grid item>
            <Chip label={echo(token.fungibility)} color="secondary" />
          </Grid>
        </Grid>
      </Box>
      <Text label={echo('label-name')} spacing={1} paragraph>
        {token.name}
      </Text>
      <Text label={echo('label-price')} spacing={1} paragraph>
        {token.price}
      </Text>
      <Text label={echo('label-decimals')} spacing={1} paragraph>
        {token.decimals}
      </Text>
      {token.maxSupply && (
        <Text label={echo('label-maxsupply')} spacing={1} paragraph>
          {token.maxSupply}
        </Text>
      )}
      <Text label={echo('label-currsupply')} spacing={1} paragraph>
        {token.currentSupply}
      </Text>
      <Text
        label={echo('label-contract')}
        spacing={1}
        paragraph
        link={{
          href: `/contract?name=${token.contract}`,
        }}
        linkStyles={{
          color: palette.secondary.main,
        }}
      >
        {token.ticker}
      </Text>
    </Box>
  );
};
