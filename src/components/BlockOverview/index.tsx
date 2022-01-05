import React from 'react';
import { useEcho } from '@ricardo-jrm/echo';
import { useFury } from '@ricardo-jrm/fury';
import { Box } from '@ricardo-jrm/fury/dist/mui';
import { Text } from '../Text';
import { Block } from '../../mocks/blocks';

/**
 * BlockOverviewProps
 */
export interface BlockOverviewProps {
  block: Block;
}

/**
 * BlockOverview
 */
export const BlockOverview = ({ block }: BlockOverviewProps) => {
  const { echo } = useEcho();
  const { furyActive } = useFury();
  const { palette } = furyActive;

  return (
    <Box>
      <Text
        label={echo('label-date')}
        spacing={1}
        paragraph
        formatDate={block.date}
      />
      <Text
        label={echo('label-chain')}
        spacing={1}
        paragraph
        clipboard
        link={{
          href: `/chain?id=${block.chain}&tab=blocks`,
        }}
        linkStyles={{
          color: palette.secondary.main,
        }}
      >
        {block.chain}
      </Text>
      {block.prevHash && (
        <Text
          label={echo('label-prevhash')}
          spacing={1}
          paragraph
          clipboard
          link={{
            href: `/block?hash=${block.prevHash}`,
          }}
          linkStyles={{
            color: palette.secondary.main,
          }}
        >
          {block.prevHash}
        </Text>
      )}
      <Text label={echo('label-blockheight')} spacing={1} paragraph clipboard>
        {`#${block.blockHeight}`}
      </Text>
      <Text label={echo('label-tx')} spacing={1} paragraph formatNumber>
        {block.transactions}
      </Text>
      <Text
        label={echo('label-validator')}
        spacing={1}
        paragraph
        clipboard
        link={{
          href: `/account?address=${block.validator}`,
        }}
        linkStyles={{
          color: palette.secondary.main,
        }}
      >
        {block.validator}
      </Text>
      <Text
        label={echo('label-fees')}
        spacing={1}
        paragraph
        clipboard
        link={{
          href: `/account?address=${block.fees}`,
        }}
        linkStyles={{
          color: palette.secondary.main,
        }}
      >
        {block.fees}
      </Text>
    </Box>
  );
};
