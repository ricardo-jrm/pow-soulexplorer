import React from 'react';
import { useEcho } from '@ricardo-jrm/echo';
import { useFury } from '@ricardo-jrm/fury';
import { Box } from '@ricardo-jrm/fury/dist/mui';
import { Text } from '../Text';
import { Tx } from '../../mocks/tx';

/**
 * TxOverviewProps
 */
export interface TxOverviewProps {
  transaction: Tx;
}

/**
 * TxOverview
 */
export const TxOverview = ({ transaction }: TxOverviewProps) => {
  const { echo } = useEcho();
  const { furyActive } = useFury();
  const { palette } = furyActive;

  return (
    <Box>
      <Text label={echo('label-hash')} spacing={1} paragraph clipboard>
        {transaction.hash}
      </Text>
      <Text
        label={echo('label-date')}
        spacing={1}
        paragraph
        formatDate={transaction.date}
      />
      {transaction.payload && (
        <Text label={echo('label-payload')} spacing={1} paragraph clipboard>
          {transaction.payload}
        </Text>
      )}
      {transaction.result && (
        <Text label={echo('label-result')} spacing={1} paragraph clipboard>
          {transaction.result}
        </Text>
      )}
      <Text
        label={echo('label-expiration')}
        spacing={1}
        paragraph
        formatDate={transaction.expiration}
      />
      <Text label="Nexus" spacing={1} paragraph clipboard>
        {transaction.nexus}
      </Text>
      <Text
        label={echo('label-chain')}
        spacing={1}
        paragraph
        clipboard
        link={{
          href: `/chain?id=${transaction.chain}`,
        }}
        linkStyles={{
          color: palette.secondary.main,
        }}
      >
        {transaction.chain}
      </Text>
      <Text
        label={echo('label-blockhash')}
        spacing={1}
        paragraph
        clipboard
        link={{
          href: `/block?hash=${transaction.block}`,
        }}
        linkStyles={{
          color: palette.secondary.main,
        }}
      >
        {transaction.block}
      </Text>
      {/* <Text label={echo('label-type')} spacing={1} paragraph clipboard>
        {transaction.type}
      </Text>
      <Text
        label={echo('label-contract')}
        spacing={1}
        paragraph
        clipboard
        link={{
          href: `/contract?name=${transaction.name}`,
        }}
        linkStyles={{
          color: palette.secondary.main,
        }}
      >
        {transaction.name}
      </Text> */}
    </Box>
  );
};
