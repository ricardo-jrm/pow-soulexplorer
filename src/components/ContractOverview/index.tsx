import React from 'react';
import { useEcho } from '@ricardo-jrm/echo';
import { useFury } from '@ricardo-jrm/fury';
import { Box, Grid } from '@ricardo-jrm/fury/dist/mui';
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
      {contract.script && (
        <Text
          label={echo('label-script')}
          spacing={1}
          paragraph
          link={{
            href: contract.script,
            external: true,
          }}
          linkStyles={{
            color: palette.secondary.main,
          }}
        >
          {echo('label-viewongithub')}
        </Text>
      )}
      {contract.abi && (
        <Grid container spacing={1}>
          <Grid item>
            <Text sx={{ fontWeight: 600 }}>{`${echo('label-abi')}:`}</Text>
          </Grid>
          <Grid item>
            <pre
              style={{
                wordBreak: 'break-all',
                margin: '0px',
                fontSize: '12px',
                backgroundColor: '#cacaca',
                color: '#000',
                paddingLeft: '21px',
                paddingRight: '21px',
                borderRadius: '3px',
                overflow: 'auto',
              }}
            >
              {contract.abi}
            </pre>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};
